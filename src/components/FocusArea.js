// FocusArea.js
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Typography,
    Box,
    useTheme,
    useMediaQuery,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
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
        { name: 'Penetration Testing', description: 'Penetration Testing, also known as pen testing, is a simulated cyber attack against your computer system to check for exploitable vulnerabilities. It involves attempting to breach application systems, APIs, frontend/backend servers, etc., to uncover potential security weaknesses.' },
        { name: 'SQL Injection', description: 'SQL Injection is a code injection technique used to attack data-driven applications. It involves inserting malicious SQL statements into application queries to manipulate or retrieve data from the database.' },
        { name: 'Vulnerability Assessment', description: 'Vulnerability Assessment is the process of identifying, quantifying, and prioritizing the vulnerabilities in a system. It provides organizations with the necessary knowledge, awareness, and risk background to understand threats to their environment and react appropriately.' },
        { name: 'Cloud Security', description: 'Cloud Security refers to a broad set of policies, controls, procedures, and technologies that work together to protect cloud-based systems, data, and infrastructure. It is a shared responsibility between the cloud provider and the client.' },
        { name: 'Application Security', description: 'Application Security encompasses measures taken to improve the security of an application often by finding, fixing, and preventing security vulnerabilities. It includes tools and methods to protect applications from threats throughout the application lifecycle.' }
    ];

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedArea, setSelectedArea] = useState(null);

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = (area) => {
        setSelectedArea(area);
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h4" gutterBottom component="div">
                    Our Focus Areas
                </Typography>
            </Box>
            <Box ref={containerRef} sx={{ textAlign: 'center', color: '#fff', py: 8, position: 'relative' }}>
                {!isSmallScreen && (
                    <>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={isInView ? { height: 'calc(70%)' } : { height: 0 }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                left: 'calc(50% - 2px)',
                                top: '120px',
                                width: '4px',
                                backgroundColor: 'limegreen',
                                zIndex: 0,
                            }}
                        />
                        <motion.div
                            initial={{ top: '120px' }}
                            animate={isInView ? { top: 'calc(100%)' } : { top: '120px' }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                left: 'calc(50% - 6px)',
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
                                <TimelineDot color="primary" />
                                {index < focusAreas.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: index * 0.3 }}
                                >
                                    <Typography
                                        variant="h6"
                                        color="limegreen"
                                        fontWeight="bold"
                                        sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                                        onClick={() => handleClickOpen(area)}
                                    >
                                        {area.name}
                                    </Typography>
                                </motion.div>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    style: {
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: 16,
                        padding: theme.spacing(2),
                    },
                }}
            >
                <DialogTitle id="alert-dialog-title" sx={{ color: 'limegreen' }} fontFamily={"Space Mono"} fontWeight={700}>
                    {selectedArea?.name}
                </DialogTitle>
                <DialogContent fontWeight={500}>
                    <Typography id="alert-dialog-description" sx={{ color: theme.palette.text.primary }}>
                        {selectedArea?.description}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default FocusArea;