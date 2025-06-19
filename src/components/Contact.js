import React from 'react';
import { Box, Typography, Card, Avatar, Grid, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import MatrixBackground from './MatrixBackground';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const MotionCard = motion(Card);

const socialLinks = [
    {
        icon: <InstagramIcon sx={{ color: '#e1306c' }} />,
        url: 'https://www.instagram.com/CyberX.CLUB',
        label: 'Instagram'
    },
    {
        icon: <GitHubIcon sx={{ color: '#fff' }} />,
        url: 'https://github.com/CyberX-club/',
        label: 'GitHub'
    },
    {
        icon: <LinkedInIcon sx={{ color: '#0077b5' }} />,
        url: 'https://www.linkedin.com/in/cyberx-club-221535326',
        label: 'LinkedIn'
    },
    {
        icon: <TwitterIcon sx={{ color: '#1DA1F2' }} />,
        url: 'https://x.com/ClubCyberx',
        label: 'Twitter'
    },
];

const Contact = () => {
    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            <MatrixBackground />

            <Box sx={{ position: 'relative', zIndex: 2, p: 4 }}>
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{ fontFamily: 'Space Mono', color: 'white' }}
                >
                    Contact Us
                </Typography>

                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <MotionCard
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: 'spring' }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 0 35px rgba(0,255,255,0.5)',
                            }}
                            sx={{
                                background: 'rgba(20, 20, 20, 0.95)',
                                color: 'white',
                                borderRadius: 5,
                                backdropFilter: 'blur(12px)',
                                border: '2px solid rgba(0,255,255,0.3)',
                                p: 4,
                                textAlign: 'center',
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 120 }}
                            >
                                <Avatar
                                    src="/sarikakaushal.png"
                                    alt="Teacher"
                                    sx={{ width: 130, height: 130, border: '3px solid cyan', mb: 2 }}
                                />
                                <Typography variant="h5" fontFamily="Space Mono" gutterBottom>
                                    Ms. Sarika Kaushal
                                </Typography>
                                <Typography variant="body1" fontFamily="Space Mono">
                                    Teacher InCharge – CyberX & Digex Club , DPS R.K.Puram
                                </Typography>
                                <Typography variant="body2" fontFamily="Space Mono" sx={{ mt: 1 }}>
                                    📧 Email: cybersecurity@dpsrkp.net
                                </Typography>
                            </motion.div>

                            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
                                {socialLinks.map((link, idx) => (
                                    <Tooltip title={link.label} key={idx}>
                                        <IconButton
                                            component="a"
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                backgroundColor: 'rgba(255,255,255,0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255,255,255,0.15)',
                                                    transform: 'scale(1.2)',
                                                },
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            {link.icon}
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </Box>
                        </MotionCard>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Contact;
