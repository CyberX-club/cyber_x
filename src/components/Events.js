import React from "react";
import { Box, Container, Typography, Grid, Button, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import EventCard from "./EventCard";

const Events = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const allEvents = [
    {
      event: "Cybersecurity Challenge 2025",
      date: "",
      href: "/quiz",
      buttonLabel: "Take Challenge",
    },
    {
      event: "Capture the Flag Challenge",
      date: "",
      href: "https://hackstreet-ctf-bank-challenge.vercel.app/",
      buttonLabel: "Attempt CTF",
    },
    {
      event: "DXC'26",
      date: "",
      href: "/event2025",
      buttonLabel: "Learn More",
    },
  ];

  // Reorder for mobile: DXC'26 (index 2) at the top
  const displayedEvents = isMobile 
    ? [allEvents[2], allEvents[0], allEvents[1]]
    : allEvents;

  return (
    <Box sx={{ py: 12, bgcolor: "background.paper" }}>
      <Container>
        <motion.div
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            align="center"
            sx={{
              fontWeight: 800,
              mb: { xs: 4, md: 8 },
              fontSize: { xs: "2rem", md: "3rem" },
              textTransform: "uppercase",
              letterSpacing: 3
            }}
          >
            Upcoming Events
          </Typography>
          <Grid container spacing={6}>
            {displayedEvents.map((event, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  display: "flex",
                  "& > *": {
                    flex: 1,
                    height: "100%",
                  },
                }}
              >
                <motion.div variants={itemVariants} style={{ width: "100%", height: "100%" }}>
                  <EventCard event={event} hoverEffect={true} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
            <motion.div variants={itemVariants}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/event2025")}
                sx={{
                  bgcolor: "primary.main",
                  color: "background.default",
                  px: 6,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              >
                View Events
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Events;

