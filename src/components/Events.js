import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import EventCard from "./EventCard";

const Events = () => {
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
              mb: 8,
              textTransform: "uppercase",
              letterSpacing: 3
            }}
          >
            Upcoming Events
          </Typography>
          <Grid container spacing={6}>
            {[
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
            ].map((event, index) => (
              <Grid
                item
                xs={12}
                sm={6}
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
        </motion.div>
      </Container>
    </Box>
  );
};

export default Events;

