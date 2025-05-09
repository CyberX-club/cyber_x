import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import MatrixBackground from './MatrixBackground';

const events = [
    {
        title: 'ReconX',
        description: 'Advanced reconnaissance challenge for ethical hackers.',
        image: '/resources/reconx.jpeg',
    },
    {
        title: 'Phishing Phantom',
        description: 'Simulated phishing attacks—analyze and defend!',
        image: '/resources/phishingphantom.jpeg',
    },
];

const Events = () => {
    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <MatrixBackground />

            <Box sx={{
                position: 'relative',
                zIndex: 2,
                p: { xs: 2, sm: 4 },
                minHeight: '100vh',
            }}>
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    fontFamily="Space Mono"
                    color="white"
                >
                    CyberX Events 2025
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {events.map((event, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                                    color: '#fff',
                                    border: '2px solid #00ff00',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 0 20px #00ff00',
                                        borderColor: '#00ffcc',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={event.image}
                                    alt={event.title}
                                    sx={{
                                        objectFit: 'cover',
                                        borderBottom: '1px solid #00ff00',
                                    }}
                                />
                                <CardContent>
                                    <Typography variant="h6" fontFamily="Space Mono" gutterBottom>
                                        {event.title}
                                    </Typography>
                                    <Typography variant="body2" fontFamily="Space Mono">
                                        {event.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Events;
