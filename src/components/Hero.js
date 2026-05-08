import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { CrypticText } from "./Members";
import { ExpandCircleDownRounded } from "@mui/icons-material";
import MatrixBackground from "./MatrixBackground";
import StickyAlert from "./StickyAlert";

const HeroSection = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  position: "relative",
  zIndex: -1,
  overflow: "hidden",
}));

const StyledIcon = styled(ExpandCircleDownRounded)(({ theme }) => ({
  fontSize: "3rem",
  transition: "all 0.3s ease",
  cursor: "pointer",
  color: "rgba(57, 255, 20, 0.6)",
  "&:hover": {
    color: "#39FF14",
    transform: "scale(1.2)",
  },
}));

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const scrollToNext = () => {
    const sections = document.getElementById("sections");
    if (sections) {
      sections.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSection>
      <StickyAlert
        title="System Update"
        content="DXC'26 Registrations are now OPEN! Head over to the events page to sign up for your favorite challenges."
        position="centre-left"
      />
      <StickyAlert
        title="Security Alert"
        content="Remember to update your passwords regularly and enable 2FA on all important accounts. Stay safe, stay secure!"
        position="centre-right"
      />
      <MatrixBackground />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
          zIndex: -1
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ zIndex: 2 }}
      >
        <motion.div variants={itemVariants}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "5rem" },
              letterSpacing: "-0.02em",
              textShadow: "0 0 20px rgba(57, 255, 20, 0.3)",
            }}
          >
            <CrypticText text="Welcome to CyberX" isHovered={true} />
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 300,
              color: "rgba(255,255,255,0.7)",
              maxWidth: "800px",
              mx: "auto",
              mb: 6,
              letterSpacing: 1,
            }}
          >
            Empowering the future of cybersecurity through innovation and ethical hacking.
          </Typography>
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <StyledIcon onClick={scrollToNext} />
        </motion.div>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;

