import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import { CrypticText } from "./Members";
import { StyledButton } from './StyledComponents';
const HeroSection = styled(Box)(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
}));
const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <HeroSection>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h2" component="h1" gutterBottom fontFamily={"Space Mono"}>
                    <CrypticText text={"Welcome to CyberX"} isHovered={isVisible} />
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Empowering the future of cybersecurity.
                </Typography>
                <StyledButton variant="outlined">Learn More</StyledButton>
            </motion.div>
        </HeroSection>
    );
};
export default Hero;
