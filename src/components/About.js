import React from 'react';
import { Paper, Typography, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { aboutContent } from './content';
import aboutImage from '../sarikakaushal.png'; // Update with the correct path to your image

const AboutPage = () => {
    const theme = useTheme();

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{ backgroundColor: theme.palette.background.default }} // Set background color
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                style={{ width: '80vw' }} // Maintain width for the container
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        color: 'white',
                        border: '1px solid #62ff34',
                        borderRadius: 2,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column', // Stack vertically
                        alignItems: 'center',
                    }}
                    component={motion.div}
                    initial={{ rotateX: -90 }}
                    animate={{ rotateX: 0 }}
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
                                maxWidth: '100%', // Set to full width of the container
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
                            }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            fontWeight={700}
                            sx={{
                                fontFamily: {
                                    xs: 'Arial, sans-serif', // Mobile font
                                    sm: 'Roboto, sans-serif', // Default font
                                },
                                fontSize: {
                                    xs: '1.2rem', // Smaller font size for mobile
                                    sm: '1.5rem', // Larger font size for bigger screens
                                }
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
                                        xs: 'Arial, sans-serif', // Mobile font
                                        sm: 'Ubuntu Sans Mono, sans-serif', // Default font
                                    },
                                    fontSize: {
                                        xs: '0.9rem', // Smaller font size for mobile
                                        sm: '1rem', // Default font size for larger screens
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
                                    xs: 'Arial, sans-serif', // Mobile font
                                    sm: 'Roboto, sans-serif', // Default font
                                },
                                fontSize: {
                                    xs: '1rem', // Smaller font size for mobile
                                    sm: '1.2rem', // Larger font size for bigger screens
                                }
                            }}
                        >
                            Ms. {aboutContent.author}<br />
                            {aboutContent.position}
                        </Typography>
                    </Box>
                </Paper>
            </motion.div>
        </Box>
    );
};

export default AboutPage;
