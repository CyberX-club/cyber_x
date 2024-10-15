// AboutPage.js
import React from 'react';
import { Paper, Typography, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { aboutContent } from './content';

const AboutPage = () => {
    const theme = useTheme();

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        width: '80vw',
                        color: 'black',
                        bgcolor: '#fafafa',
                        border: '1px solid #ddd',
                        borderRadius: 2,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                        transformOrigin: 'top center',
                    }}
                    component={motion.div}
                    initial={{ rotateX: -90 }}
                    animate={{ rotateX: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h6"
                        gutterBottom
                        align="center"
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
                                    sm: 'Roboto Mono, sans-serif', // Default font
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
                        {aboutContent.author}<br />
                        {aboutContent.position}
                    </Typography>
                </Paper>
            </motion.div>
        </Box>
    );
};

export default AboutPage;
