import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { StyledButton, TransparentPaper } from "./StyledComponents";

const Section = ({ image, title, content, order, buttonLabel, buttonLink }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: order === "image-first" ? -2 : 2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const imageGridItem = (
    <Grid item xs={12} md={6}>
      <motion.div variants={imageVariants}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: { xs: 300, sm: 400 },
            objectFit: "contain",
            display: "block",
            margin: "0 auto",
            filter: "drop-shadow(0 0 20px rgba(0, 255, 0, 0.2))",
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "scale(1.05) rotate(1deg)",
            },
          }}
        />
      </motion.div>
    </Grid>
  );

  const contentGridItem = (
    <Grid item xs={12} md={6}>
      <motion.div variants={itemVariants}>
        <TransparentPaper sx={{ opacity: 0.9, p: { xs: 3, md: 4 }, backdropFilter: "blur(10px)" }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3rem" },
              background: "linear-gradient(90deg, #fff, #39FF14)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}>
            {content}
          </Typography>
          {buttonLabel && buttonLink && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <StyledButton href={buttonLink} variant="contained" sx={{ mt: 4, px: 4, py: 1.5 }}>
                {buttonLabel}
              </StyledButton>
            </motion.div>
          )}
        </TransparentPaper>
      </motion.div>
    </Grid>
  );

  return (
    <Box
      component={motion.div}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      sx={{ py: { xs: 6, md: 12 }, overflow: "hidden" }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems="center"
          direction={{ xs: order === "text-first" ? "column-reverse" : "column", md: "row" }}
        >
          {order === "image-first" ? (
            <>
              {imageGridItem}
              {contentGridItem}
            </>
          ) : (
            <>
              {contentGridItem}
              {imageGridItem}
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

const SponsorSection = ({ sponsors }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <Box 
      component={motion.div}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      sx={{ py: 8, bgcolor: "rgba(0,0,0,0.3)" }}
    >
      <Container maxWidth={false} sx={{ width: { xs: "90%", md: "80%" } }}>
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 800, letterSpacing: 2, fontSize: { xs: "1.75rem", md: "2.125rem" } }}>
            OUR SPONSORS
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: "#39FF14", mx: "auto", mt: 2 }} />
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          justifyContent="center"
          alignItems="center"
        >
          {sponsors.map((sponsor) => (
            <Grid item xs={6} sm={6} md={2.4} key={sponsor.name}>
              <motion.div variants={itemVariants}>
                <Box
                  component="a"
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: { xs: 120, md: 100 },
                    p: { xs: 1, md: 2 },
                    borderRadius: 2,
                    bgcolor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.07)",
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                      "& img": {
                        filter: {
                          md: "grayscale(0) brightness(1)",
                        }
                      }
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={sponsor.image}
                    alt={sponsor.name}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      transition: "filter 0.4s ease",
                      filter: {
                        xs: "none",
                        md: "grayscale(1) brightness(0.8)",
                      },
                      "@media (hover: none)": {
                        filter: "none",
                      },
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};


export { SponsorSection };
export default Section;

