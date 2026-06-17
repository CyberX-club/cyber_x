import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Container,
  CircularProgress,
  Alert,
} from "@mui/material";
import { PageFlip } from "page-flip";
import StarryBackground from "../StarryBackground";
import { getPdfDocument } from "../pdfLoader";

const renderScale = 1.1;

const Magazine = () => {
  const bookRef = useRef(null);
  const pageFlipRef = useRef(null);
  const pdfDocRef = useRef(null);
  const renderedPagesRef = useRef(new Set());
  const renderingPagesRef = useRef(new Set());
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [bookSize, setBookSize] = useState({ width: 420, height: 594 });

  const renderPage = useCallback(async (pageIndex) => {
    if (
      !pdfDocRef.current ||
      renderedPagesRef.current.has(pageIndex) ||
      !bookRef.current
    ) {
      return;
    }

    const pageElement = bookRef.current.querySelector(
      `[data-page-index="${pageIndex}"]`
    );
    if (!pageElement) {
      return;
    }

    const canvas = pageElement.querySelector("canvas");
    const placeholder = pageElement.querySelector("[data-role='placeholder']");
    if (!canvas) {
      return;
    }

    if (renderingPagesRef.current.has(pageIndex)) {
      return;
    }

    renderingPagesRef.current.add(pageIndex);

    try {
      const pdfPage = await pdfDocRef.current.getPage(pageIndex + 1);
      const viewport = pdfPage.getViewport({ scale: renderScale });
      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error("Canvas rendering is not available.");
      }

      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);

      await pdfPage.render({ canvasContext: context, viewport }).promise;
      renderedPagesRef.current.add(pageIndex);

      if (placeholder) {
        placeholder.setAttribute("data-loaded", "true");
        placeholder.style.display = "none";
      }
    } finally {
      renderingPagesRef.current.delete(pageIndex);
    }
  }, []);

  const renderPageRange = useCallback(async (pageIndex) => {
    // Load current page, 1 page before, and 3 pages ahead (to preload next 2 pages in double spread)
    const indexes = [pageIndex - 1, pageIndex, pageIndex + 1, pageIndex + 2, pageIndex + 3].filter(
      (index) => index >= 0 && index < pageCount
    );

    for (const index of indexes) {
      await renderPage(index);
    }
  }, [pageCount, renderPage]);

  useEffect(() => {
    let isCancelled = false;

    const loadPdf = async () => {
      setLoading(true);
      setError("");

      try {
        // Retrieve the pre-fetched PDF document structure from global cache
        const pdf = await getPdfDocument();

        if (isCancelled) return;

        pdfDocRef.current = pdf;
        setPageCount(pdf.numPages);

        const firstPage = await pdf.getPage(1);
        const viewport = firstPage.getViewport({ scale: renderScale });
        setBookSize({
          width: Math.round(viewport.width),
          height: Math.round(viewport.height),
        });
      } catch (err) {
        console.error("PDF load failed:", err);
        if (!isCancelled) {
          setError("Failed to load the magazine PDF.");
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    loadPdf();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!bookRef.current || pageCount === 0 || loading) {
      return undefined;
    }

    const initHandle = requestAnimationFrame(() => {
      const pageElements = Array.from(
        bookRef.current.querySelectorAll(".page")
      );

      if (pageElements.length === 0) {
        return;
      }

      if (pageFlipRef.current) {
        pageFlipRef.current.destroy();
        pageFlipRef.current = null;
      }

      const pageFlip = new PageFlip(bookRef.current, {
        width: bookSize.width,
        height: bookSize.height,
        size: "stretch",
        minWidth: 250,
        maxWidth: 1400,
        minHeight: 350,
        maxHeight: 2200,
        drawShadow: true,
        flippingTime: 900,
        usePortrait: true,
        autoSize: true,
        maxShadowOpacity: 0.45,
        showCover: true,
        mobileScrollSupport: false,
        swipeDistance: 20,
        clickEventForward: true,
        useMouseEvents: true,
        disableFlipByClick: false,
      });

      const handleInit = (event) => {
        renderPageRange(event.data.page).catch((renderError) => {
          console.error(renderError);
        });
      };

      const handleFlip = (event) => {
        renderPageRange(event.data).catch((renderError) => {
          console.error(renderError);
        });
      };

      pageFlip.on("init", handleInit);
      pageFlip.on("flip", handleFlip);
      pageFlip.loadFromHTML(pageElements);
      pageFlipRef.current = pageFlip;
    });

    return () => {
      cancelAnimationFrame(initHandle);
      if (pageFlipRef.current) {
        pageFlipRef.current.destroy();
        pageFlipRef.current = null;
      }
    };
  }, [pageCount, bookSize, loading, renderPageRange]);

  useEffect(() => {
    if (pageCount > 0) {
      renderPageRange(0).catch((renderError) => {
        console.error(renderError);
      });
    }
  }, [pageCount, renderPageRange]);

  const pages = useMemo(
    () => Array.from({ length: pageCount }, (_, index) => index),
    [pageCount]
  );

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#03030f", // Solid background matching the stars
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StarryBackground />
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          py: { xs: 8, md: 4 }, // Add minimal vertical spacing below navbar
        }}
      >
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
            <CircularProgress />
          </Box>
        )}

        {error && !loading && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box
          ref={bookRef}
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: "1280px" },
            height: { xs: "65vh", md: "calc(100vh - 160px)" },
            maxHeight: { xs: "none", md: "850px" },
            mx: "auto",
            display: loading || error || pageCount === 0 ? "none" : "block",
          }}
        >
          {pages.map((pageIndex) => (
            <Box
              key={pageIndex}
              className="page"
              data-page-index={pageIndex}
              data-density={
                pageIndex === 0 || pageIndex === pages.length - 1
                  ? "hard"
                  : "soft"
              }
              sx={{
                position: "relative",
                backgroundColor: "#111827",
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                display: "flex",
                alignItems: "stretch",
                justifyContent: "stretch",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <Box
                data-role="placeholder"
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: renderedPagesRef.current.has(pageIndex)
                    ? "none"
                    : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "Space Mono",
                  fontSize: "0.85rem",
                  letterSpacing: 1,
                  background:
                    "linear-gradient(135deg, rgba(0, 184, 255, 0.14), rgba(0, 0, 0, 0))",
                  pointerEvents: "none",
                }}
              >
                Loading page {pageIndex + 1}...
              </Box>
              <Box
                component="canvas"
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Magazine;