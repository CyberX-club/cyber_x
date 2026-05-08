import React from "react";
import { Paper, Typography, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { aboutContent } from "./content";
import aboutImage from "../sarikakaushal.png"; // Update with the correct path to your image
import StarryBackground from "../StarryBackground";

const AboutPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <StarryBackground showConstellations />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "relative",
          zIndex: 1,
          py: 12, // Add vertical padding for spacing
          px: 2,
        }}
      >
        <Paper
          elevation={24}
          sx={{
            maxWidth: "850px",
            width: "100%",
            padding: { xs: 4, md: 8 },
            backgroundColor: "rgba(10, 10, 10, 0.8)",
            backdropFilter: "blur(10px)",
            color: "white",
            border: "1px solid rgba(98, 255, 52, 0.3)",
            borderRadius: 4,
            boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginBottom: 2 }}
          >
            <motion.img
              src={aboutImage}
              alt="About Us"
              style={{
                maxWidth: "100%", // Set to full width of the container
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight={700}
              sx={{
                fontFamily: {
                  xs: "Arial, sans-serif", // Mobile font
                  sm: "Roboto, sans-serif", // Default font
                },
                fontSize: {
                  xs: "1.2rem", // Smaller font size for mobile
                  sm: "1.5rem", // Larger font size for bigger screens
                },
              }}
            >
              {aboutContent.title}
            </Typography>
            {aboutContent.paragraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                paragraph
                sx={{
                  fontFamily: {
                    xs: "Arial, sans-serif", // Mobile font
                    sm: "Ubuntu Sans Mono, sans-serif", // Default font
                  },
                  fontSize: {
                    xs: "0.9rem", // Smaller font size for mobile
                    sm: "1rem", // Default font size for larger screens
                  },
                }}
              >
                {paragraph}
              </Typography>
            ))}
            <Typography
              variant="subtitle2"
              align="right"
              fontWeight={700}
              sx={{
                fontFamily: {
                  xs: "Arial, sans-serif", // Mobile font
                  sm: "Roboto, sans-serif", // Default font
                },
                fontSize: {
                  xs: "1rem", // Smaller font size for mobile
                  sm: "1.2rem", // Larger font size for bigger screens
                },
              }}
            >
              Ms. {aboutContent.author}
              <br />
              {aboutContent.position}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default AboutPage;
