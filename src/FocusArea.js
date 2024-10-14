// FocusArea.js
import React, {useRef} from 'react';
import {motion, useInView} from 'framer-motion';
import {
    Typography,
    Box,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from "@mui/lab";

const FocusArea = () => {
    const focusAreas = [
        'Penetration Testing',
        'SQL Injection',
        'Vulnerability Assessment',
        'Cloud Security',
        'Application Security'
    ];

    // Use ref to monitor when the component is in view
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, {once: true});

    // Theme and breakpoint checks
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Box
                sx={{

                    width: '100%',
                    display: 'flex',
                    justifyContent:'center',
                    alignItems: 'center'
                }}
            >
                <Typography variant="h4" gutterBottom component="div">
                    Our Focus Areas
                </Typography>
            </Box>
            <Box
                ref={containerRef}
                sx={{textAlign: 'center', color: '#fff', py: 8, position: 'relative'}}
            >
                {/* Render line and arrow only on larger screens */}
                {!isSmallScreen && (
                    <>
                        <motion.div
                            initial={{height: 0}}
                            animate={isInView ? {height: 'calc(70%)'} : {height: 0}}
                            transition={{duration: 2, ease: 'easeInOut'}}
                            style={{
                                position: 'absolute',
                                left: 'calc(50% - 2px)', // Center the line
                                top: '120px', // Adjusted to provide more space from the top
                                width: '4px',
                                backgroundColor: 'limegreen',
                                zIndex: 0,
                            }}
                        />
                        {/* Flowing arrow */}
                        <motion.div
                            initial={{top: '120px'}} // Start aligned with the top of the line
                            animate={isInView ? {top: 'calc(100%)'} : {top: '120px'}} // Adjust final position based on new line height
                            transition={{duration: 2, ease: 'easeInOut'}}
                            style={{
                                position: 'absolute',
                                left: 'calc(50% - 6px)', // Center the arrow based on its width (12px)
                                width: 0,
                                height: 0,
                                borderLeft: '6px solid transparent',
                                borderRight: '6px solid transparent',
                                borderTop: '10px solid limegreen',
                                zIndex: 1
                            }}
                        />
                    </>
                )}
                <Timeline position="alternate">
                    {focusAreas.map((area, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot color="primary"/>
                                {index < focusAreas.length - 1 && <TimelineConnector/>}
                            </TimelineSeparator>
                            <TimelineContent>
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                                    transition={{duration: 0.5, delay: index * 0.3}}
                                >
                                    <Typography variant="h6" color="limegreen" fontWeight="bold">
                                        {area}
                                    </Typography>
                                </motion.div>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
        </>
    );
};

export default FocusArea;
