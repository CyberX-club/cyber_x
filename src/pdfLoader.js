import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

// Set worker path directly to the local worker in the public folder for offline support and speed
pdfjsLib.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL || ""}/pdf.worker.min.mjs`;

const PDF_URL = "https://hhrzwt3r63m9v3hg.public.blob.vercel-storage.com/Cipher%2726.pdf";

let pdfPromise = null;

export const startPrefetch = () => {
  if (pdfPromise) return;

  pdfPromise = (async () => {
    try {
      const loadingTask = pdfjsLib.getDocument({
        url: PDF_URL,
        disableStream: true,
        disableAutoFetch: true,
      });
      const pdf = await loadingTask.promise;

      // Start pre-fetching page 1 immediately so it's in the cache
      pdf.getPage(1).catch((err) => {
        console.error("Error pre-fetching page 1:", err);
      });

      return pdf;
    } catch (error) {
      console.error("Error pre-fetching PDF from Vercel Blob:", error);
      pdfPromise = null; // Allow retry on subsequent calls if failed
      throw error;
    }
  })();
};

export const getPdfDocument = () => {
  if (!pdfPromise) {
    startPrefetch();
  }
  return pdfPromise;
};
