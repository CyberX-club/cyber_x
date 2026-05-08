import React, { useState } from "react";
import { Box, Typography, IconButton, Paper, Dialog, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { motion, AnimatePresence } from "framer-motion";

const StickyAlert = ({ title, content, position = "top-left" }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  return null; // Temporarily disabled by user request

  if (!isVisible) return null;

  const getPositionStyles = () => {
    switch (position) {
      case "top-left":
        return { top: 40, left: 40 };
      case "bottom-left":
        return { bottom: 100, left: 40 };
      case "bottom-right":
        return { bottom: 100, right: 40 };
      case "centreleft":
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
              zIndex: 1000,
              cursor: "grab",
              touchAction: "none",
            }}
          >
            <Paper
              elevation={24}
              sx={{
                width: 280,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "10px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.05)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {/* Header Bar */}
              <Box
                sx={{
                  backgroundColor: "rgba(255, 50, 50, 0.25)",
                  px: 1.5,
                  py: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#ff3333",
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    fontSize: "0.8rem",
                    userSelect: "none",
                    textShadow: "0 0 10px rgba(255, 0, 0, 0.3)",
                  }}
                >
                  {title}
                </Typography>
                <Box sx={{ display: "flex", gap: 0.8 }}>
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMaximized(true);
                    }}
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      p: 0.3,
                      "&:hover": { color: "white", backgroundColor: "rgba(255, 255, 255, 0.15)" }
                    }}
                  >
                    <FullscreenIcon sx={{ fontSize: "1.1rem" }} />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsVisible(false);
                    }}
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      p: 0.3,
                      "&:hover": { color: "#ff3333", backgroundColor: "rgba(255, 0, 0, 0.1)" }
                    }}
                  >
                    <CloseIcon sx={{ fontSize: "1.1rem" }} />
                  </IconButton>
                </Box>
              </Box>

              {/* Content Area */}
              <Box sx={{ p: 2.5 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#ffffff",
                    fontFamily: "'Space Mono', monospace",
                    lineHeight: 1.6,
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {content.length > 130 ? `${content.substring(0, 130)}...` : content}
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
            backgroundColor: "rgba(20, 20, 20, 0.95)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "white",
            fontFamily: "'Space Mono', monospace",
            borderRadius: "16px",
            boxShadow: "0 32px 80px rgba(0, 0, 0, 0.9)",
          },
        }}
      >
        <DialogContent sx={{ p: 5, pt: 6 }}>
          <IconButton
            onClick={() => setIsMaximized(false)}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "rgba(255, 255, 255, 0.7)",
              "&:hover": { color: "#ff3333" }
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
              lineHeight: 1.7,
              fontSize: "1.1rem",
              fontWeight: 500,
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
