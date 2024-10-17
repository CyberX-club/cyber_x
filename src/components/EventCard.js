import React, { useState } from 'react';
import { Box, Card, CardContent, CardActions, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledButton } from './StyledComponents';

const EventCard = ({ event, hoverEffect = true }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        if (hoverEffect) setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (hoverEffect) setIsHovered(false);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                zIndex: isHovered ? 1 : 'auto',
                height: '100%', // Ensure the Box takes full height
                display: 'flex' // Enable flex container
            }}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 0,
                        }}
                    />
                )}
            </AnimatePresence>
            <motion.div
                style={{
                    width: '100%', // Ensure motion.div takes full width
                    height: '100%', // Ensure motion.div takes full height
                    display: 'flex' // Enable flex container
                }}
                whileHover={
                    hoverEffect
                        ? {
                            scale: 1.05,
                            zIndex: 2,
                            transition: { duration: 0.3 },
                        }
                        : {}
                }
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Card
                    sx={{
                        width: '100%', // Ensure card takes full width
                        height: '100%', // Ensure card takes full height
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.3s ease',
                        boxShadow: isHovered
                            ? '0 10px 20px rgba(0, 0, 0, 0.2)'
                            : 'none',
                    }}
                >
                    <CardContent
                        sx={{
                            flexGrow: 1, // Allow content to fill available space
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2
                        }}
                    >
                        <Typography variant="h5" component="div">
                            {event.event}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 'auto' }}>
                            Date: {event.date || 'Ongoing'}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                        {
                            event.href && (
                                <StyledButton
                                    size="small"
                                    variant={"outlined"}
                                    href={event.href}
                                    fullWidth // Make button take full width
                                >
                                    {event.buttonLabel || 'Learn More'}
                                </StyledButton>
                            )
                        }
                    </CardActions>
                </Card>
            </motion.div>
        </Box>
    );
};

export default EventCard;