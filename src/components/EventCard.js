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
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'all 0.3s ease',
                        boxShadow: isHovered
                            ? '0 10px 20px rgba(0, 0, 0, 0.2)'
                            : 'none',
                    }}
                >
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            {event.event}
                        </Typography>
                        <Typography variant="body2">
                            Date: {event.date}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <StyledButton size="small" href={event.href}>
                            Learn More
                        </StyledButton>
                    </CardActions>
                </Card>
            </motion.div>
        </Box>
    );
};
export default EventCard;
