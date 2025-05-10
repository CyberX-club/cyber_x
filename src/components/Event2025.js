import React, { useState } from 'react';
import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Slide
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MatrixBackground from './MatrixBackground';
import { motion } from 'framer-motion';

// Slide transition for dialog (fixes scrollTop bug)
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const events = [
    {
        title: 'ReconX',
        image: '/resources/reconx.jpeg',
        content: `Event 5\nClasses: IX-XII\nTeam Size: 2 Members\nTeams per School: 1\nVenue: CS Lab-5\n
Participants will investigate publicly available information and create a report.

Include:
• Findings
• Footprint Analysis
• 5 Privacy Tips

Disqualified if AI or cheating have used.

Judging:
• Accuracy
• Depth
• Presentation
• Recommendations`
    },
    {
        title: 'Phishing Phantom',
        image: '/resources/phishingphantom.jpeg',
        content: `Event 4\nClasses: IX-XII\nTeam Size: 2 Members\nTeams per School: 1\nVenue: CS Lab-4\n
Participants identify phishing communications and present analysis.

Include:
• Fake ID & Reasoning
• Tactics Used
• 5 Prevention Tips

Disqualified if AI or cheating used.

Judging:
• ID Accuracy
• Analysis
• Presentation
• Precautions`
    },
];

const Events = () => {
    const [open, setOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleOpen = (event) => {
        setSelectedEvent(event);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedEvent(null);
    };

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <MatrixBackground />
            <Box sx={{ position: 'relative', zIndex: 2, p: { xs: 2, sm: 4 }, minHeight: '100vh' }}>
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    fontFamily="Space Mono"
                    color="white"
                >
                    Event 2025
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {events.map((event, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    rotate: [0, 1.5, -1.5, 0],
                                    boxShadow: '0 0 25px rgba(255,255,255,0.3)',
                                }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                onClick={() => handleOpen(event)}
                            >
                                <Card
                                    sx={{
                                        cursor: 'pointer',
                                        borderRadius: 5,
                                        overflow: 'hidden',
                                        background: '#111',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                                        transition: 'all 0.4s ease-in-out',
                                        '&:hover': {
                                            boxShadow: '0 0 35px rgba(255,255,255,0.2)'
                                        }
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={event.image}
                                        alt={event.title}
                                        sx={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'contain',
                                        }}
                                    />
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            variant="h5"
                                            fontWeight="bold"
                                            fontFamily="Space Mono"
                                            color="white"
                                            align="center"
                                        >
                                            {event.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Dialog with slide transition */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth="md"
                    fullWidth
                    TransitionComponent={Transition}
                    sx={{
                        '& .MuiDialog-paper': {
                            backgroundColor: 'rgba(15, 15, 15, 0.95)',
                            color: 'white',
                            backdropFilter: 'blur(10px)',
                            borderRadius: 4,
                            p: 2,
                            transition: 'all 0.5s ease'
                        }
                    }}
                >
                    <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" fontFamily="Space Mono">
                            {selectedEvent?.title}
                        </Typography>
                        <IconButton onClick={handleClose} color="inherit">
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', fontSize: '1.1rem' }}>
                            {selectedEvent?.content}
                        </Typography>
                    </DialogContent>
                </Dialog>
            </Box>
        </Box>
    );
};

export default Events;
