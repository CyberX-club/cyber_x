// FocusArea.js
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { TransparentPaper } from "./StyledComponents";

const FocusArea = () => {
  const focusAreas = [
    {
      name: "Penetration Testing",
      description:
        "Penetration Testing, also known as pen testing, is a simulated cyber attack against your computer system to check for exploitable vulnerabilities. It involves attempting to breach application systems, APIs, frontend/backend servers, etc., to uncover potential security weaknesses.",
    },
    {
      name: "SQL Injection",
      description:
        "SQL Injection is a code injection technique used to attack data-driven applications. It involves inserting malicious SQL statements into application queries to manipulate or retrieve data from the database.",
    },
    {
      name: "Vulnerability Assessment",
      description:
        "Vulnerability Assessment is the process of identifying, quantifying, and prioritizing the vulnerabilities in a system. It provides organizations with the necessary knowledge, awareness, and risk background to understand threats to their environment and react appropriately.",
    },
    {
      name: "Cloud Security",
      description:
        "Cloud Security refers to a broad set of policies, controls, procedures, and technologies that work together to protect cloud-based systems, data, and infrastructure. It is a shared responsibility between the cloud provider and the client.",
    },
    {
      name: "Application Security",
      description:
        "Application Security encompasses measures taken to improve the security of an application often by finding, fixing, and preventing security vulnerabilities. It includes tools and methods to protect applications from threats throughout the application lifecycle.",
    },
  ];

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = (area) => {
    setSelectedArea(area);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const LabelText = ({ area, index, side }) => (
    <motion.div
      initial={{
        opacity: 0,
        x: isMobile ? 20 : side === "left" ? -50 : 50,
        filter: "blur(5px)",
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, filter: "blur(0px)" }
          : {
              opacity: 0,
              x: isMobile ? 20 : side === "left" ? -50 : 50,
              filter: "blur(5px)",
            }
      }
      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
    >
      <Typography
        variant={isMobile ? "h6" : "h5"}
        sx={{
          color: "#39FF14",
          fontWeight: 800,
          cursor: "pointer",
          textTransform: "uppercase",
          letterSpacing: 1,
          lineHeight: 1.2,
          transition: "all 0.3s ease",
          "&:hover": {
            textShadow: "0 0 15px #39FF14",
            transform: "scale(1.05)",
          },
        }}
        onClick={() => handleClickOpen(area)}
      >
        {area.name}
      </Typography>
    </motion.div>
  );

  return (
    <TransparentPaper sx={{ width: "100%", p: isMobile ? 2 : 4 }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom component="div">
          Our Focus Areas
        </Typography>
      </Box>

      <Box
        ref={containerRef}
        sx={{ textAlign: "center", color: "#fff", py: 8, position: "relative" }}
      >
        {!isMobile && (
          <>
            <motion.div
              initial={{ height: 0 }}
              animate={
                isInView ? { height: "calc(100% - 100px)" } : { height: 0 }
              }
              transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
              style={{
                position: "absolute",
                left: "calc(50% - 2px)",
                top: "60px",
                width: "4px",
                background: "linear-gradient(to bottom, #39FF14, #008000)",
                boxShadow: "0 0 15px rgba(57, 255, 20, 0.5)",
                zIndex: 0,
              }}
            />
            <motion.div
              initial={{ top: "60px", opacity: 0 }}
              animate={
                isInView
                  ? { top: "calc(100% - 40px)", opacity: 1 }
                  : { top: "60px", opacity: 0 }
              }
              transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
              style={{
                position: "absolute",
                left: "calc(50% - 6px)",
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "10px solid #39FF14",
                filter: "drop-shadow(0 0 5px #39FF14)",
                zIndex: 1,
              }}
            />
          </>
        )}

        {/* ── MOBILE TIMELINE ── */}
        {isMobile ? (
          <Timeline
            position="right"
            sx={{
              p: 0,
              m: 0,
              // Remove the MUI default left padding that causes staggered dots
              "& .MuiTimelineItem-root": {
                "&::before": { display: "none" }, // kill the ghost opposite-content spacer
                alignItems: "center",
              },
            }}
          >
            {focusAreas.map((area, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: index * 0.2 + 0.5,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <TimelineDot
                      sx={{
                        bgcolor: "#39FF14",
                        boxShadow: "0 0 10px #39FF14",
                        m: 0,
                      }}
                    />
                  </motion.div>
                  {index < focusAreas.length - 1 && (
                    <TimelineConnector
                      sx={{ bgcolor: "rgba(57, 255, 20, 0.2)" }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: 1,
                    px: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                  }}
                >
                  <LabelText area={area} index={index} side="right" />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        ) : (
          /* ── DESKTOP / TABLET TIMELINE ── */
          <Timeline position="right">
            {focusAreas.map((area, index) => {
              const isLeftLabel = index % 2 !== 0;

              return (
                <TimelineItem key={index} sx={{ alignItems: "center" }}>
                  {/* LEFT SIDE */}
                  <TimelineOppositeContent
                    sx={{
                      flex: 1,
                      py: 1,
                      px: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      visibility: isLeftLabel ? "visible" : "hidden",
                    }}
                  >
                    {isLeftLabel && (
                      <LabelText area={area} index={index} side="left" />
                    )}
                  </TimelineOppositeContent>

                  {/* CENTER DOT */}
                  <TimelineSeparator>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        delay: index * 0.2 + 0.5,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <TimelineDot
                        sx={{
                          bgcolor: "#39FF14",
                          boxShadow: "0 0 10px #39FF14",
                          m: 0,
                        }}
                      />
                    </motion.div>
                    {index < focusAreas.length - 1 && (
                      <TimelineConnector
                        sx={{ bgcolor: "rgba(57, 255, 20, 0.2)" }}
                      />
                    )}
                  </TimelineSeparator>

                  {/* RIGHT SIDE */}
                  <TimelineContent
                    sx={{
                      flex: 1,
                      py: 1,
                      px: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      visibility: isLeftLabel ? "hidden" : "visible",
                    }}
                  >
                    {!isLeftLabel && (
                      <LabelText area={area} index={index} side="right" />
                    )}
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        )}
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: theme.palette.background.paper,
            borderRadius: 16,
            padding: theme.spacing(2),
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ color: "limegreen" }}
          fontFamily="Space Mono"
          fontWeight={700}
        >
          {selectedArea?.name}
        </DialogTitle>
        <DialogContent fontWeight={500}>
          <Typography
            id="alert-dialog-description"
            sx={{ color: theme.palette.text.primary }}
          >
            {selectedArea?.description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </TransparentPaper>
  );
};

export default FocusArea;