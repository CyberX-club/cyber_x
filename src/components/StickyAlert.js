import React, { useState } from "react";
import { Box, Typography, IconButton, Paper, Dialog, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { motion, AnimatePresence } from "framer-motion";

const StickyAlert = ({ title, content, position = "top-left" }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

  if (!isVisible) return null;

  const getPositionStyles = () => {
    switch (position) {
      case "top-left":
        return { top: 40, left: 40 };
      case "bottom-left":
        return { bottom: 100, left: 40 };
      case "bottom-right":
        return { bottom: 100, right: 40 };
      case "centre-left":
      case "center-left":
        return { top: "50%", left: 40, translateY: "-50%" };
      case "centre-right":
      case "center-right":
        return { top: "50%", right: 40, translateY: "-50%" };
      default:
        return { top: 40, left: 40 };
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            drag
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              position: "absolute",
              ...getPositionStyles(),
              zIndex: 1000, // Higher z-index to ensure clickability
              cursor: "grab",
              touchAction: "none",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                width: 260,
                backgroundColor: "rgba(30, 30, 30, 0.4)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "8px",
                overflow: "hidden",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(40, 40, 40, 0.6)",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
              }}
            >
              {/* Header Bar */}
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  px: 1.5,
                  py: 0.8,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  pointerEvents: "auto", // Ensure clicks pass through
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    fontSize: "0.7rem",
                    userSelect: "none",
                  }}
                >
                  {title}
                </Typography>
                <Box sx={{ display: "flex", gap: 0.5 }}>
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMaximized(true);
                    }}
                    sx={{
                      color: "rgba(255, 255, 255, 0.6)",
                      p: 0.2,
                      "&:hover": { color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)" }
                    }}
                  >
                    <FullscreenIcon sx={{ fontSize: "1rem" }} />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsVisible(false);
                    }}
                    sx={{
                      color: "rgba(255, 255, 255, 0.6)",
                      p: 0.2,
                      "&:hover": { color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)" }
                    }}
                  >
                    <CloseIcon sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </Box>
              </Box>

              {/* Content Area */}
              <Box sx={{ p: 2, pointerEvents: "none" }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontFamily: "'Space Mono', monospace",
                    lineHeight: 1.5,
                    fontSize: "0.8rem",
                  }}
                >
                  {content.length > 120 ? `${content.substring(0, 120)}...` : content}
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Maximize Dialog */}
      <Dialog
        open={isMaximized}
        onClose={() => setIsMaximized(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(15, 15, 15, 0.9)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "white",
            fontFamily: "'Space Mono', monospace",
            borderRadius: "12px",
            boxShadow: "0 24px 64px rgba(0, 0, 0, 0.9)",
          },
        }}
      >
        <DialogContent sx={{ p: 4, pt: 5 }}>
          <IconButton
            onClick={() => setIsMaximized(false)}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "rgba(255, 255, 255, 0.6)",
              "&:hover": { color: "white" }
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontFamily: "'Space Mono', monospace",
              whiteSpace: "pre-line",
              lineHeight: 1.6,
              fontSize: "1.05rem"
            }}
          >
            {content}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StickyAlert;
