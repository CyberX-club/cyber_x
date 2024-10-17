import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import EventCard from './EventCard';
const Events = () => (
    <Box sx={{ py: 8 }}>
        <Container>
            <Typography variant="h4" component="h2" gutterBottom align="center">
                Upcoming Events
            </Typography>
            <Grid container spacing={4}>
                {[
                    {
                        event: "Workshop on Cybersecurity Basics Dated Below",
                        date: "July 17, 2024",
                        href: "#"
                    },
                    {
                        event: "Cybersecurity Challenge 2024",
                        date: "",
                        href: "/quiz"
                    }
                ].map((event, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <EventCard event={event} hoverEffect={true} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    </Box>
);
export default Events;
