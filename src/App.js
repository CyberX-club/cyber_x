import React, {useEffect, useState, useRef} from 'react';
import {
    AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent,
    CardActions, Box, useScrollTrigger, Slide, IconButton, Menu, MenuItem,
    CssBaseline, ThemeProvider, createTheme, Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {styled} from '@mui/system';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@mui/lab';
import Navbar from "./Navbar";
import Question from "./Question";
import {CrypticText} from "./Members";
import FocusArea from "./FocusArea";
import { motion, AnimatePresence } from 'framer-motion';

function useInView(options) {
    const [isInView, setIsInView] = useState(false);
    const [hasBeenViewed, setHasBeenViewed] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!hasBeenViewed && entry.intersectionRatio >= 0.2) {
                setIsInView(true);
                setHasBeenViewed(true);
            }
        }, {...options});

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isInView || hasBeenViewed];
}


// Custom styled components
const HeroSection = styled(Box)(({theme}) => ({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
}));

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.background.default,
    padding: '10px 10px',
    border: '2px solid transparent',
    borderRadius: '5px',
    fontSize: '16px',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
    },
}));

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


// Hero section component with animation
const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <HeroSection>
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50}}
                transition={{duration: 0.8}}
            >
                <Typography variant="h2" component="h1" gutterBottom  fontFamily={"Space Mono"}>
                    <CrypticText text={"Welcome to CyberX"} isHovered={isVisible}/>
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Empowering the future of cybersecurity.
                </Typography>
                <StyledButton variant="outlined">Learn More</StyledButton>
            </motion.div>
        </HeroSection>
    );
};

// Reusable Section component
const Section = ({ image, title, content, order }) => {
    const [ref, isInView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const imageGridItem = (
        <Grid item xs={12} md={6}>
            <Box
                component="img"
                src={image}
                sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: { xs: 300, sm: 400 },
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                }}
            />
        </Grid>
    );

    const contentGridItem = (
        <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
                {title}
            </Typography>
            <Typography>{content}</Typography>
        </Grid>
    );

    return (
        <Box ref={ref} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Slide appear={false} direction={order === 'image-first' ? 'left' : 'right'} in={isInView} timeout={1500}>
                <Box sx={{ py: 8, width: '100%' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4} justifyContent="center" alignItems="center">
                            {order === 'image-first' ? (
                                <>
                                    {imageGridItem}
                                    {contentGridItem}
                                </>
                            ) : (
                                <>
                                    {contentGridItem}
                                    {imageGridItem}
                                </>
                            )}
                        </Grid>
                    </Container>
                </Box>
            </Slide>
        </Box>
    );
};

// About section component
const About = () => {
    return (
        null
    );
};

// Timeline component
const CyberTimeline = () => (
    <Box sx={{
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    }}>
        <Container  >
            <FocusArea />
        </Container>
    </Box>
);



// Events section component
const Events = () => (
    <Box sx={{py: 8}}>
        <Container>
            <Typography variant="h4" component="h2" gutterBottom align="center">
                Upcoming Events
            </Typography>
            <Grid container spacing={4}>
                {[
                    {
                        event: "Workshop on Cybersecurity Basics",
                        date: "July 17, 2024",
                        href: "#"
                    },
                    {
                        event: "Cybersecurity Challenge 2024",
                        date: "August 5, 2024",
                        href: "/quiz"
                    }
                ].map((event, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <EventCard event={event} hoverEffect={true} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    </Box>
);

// Main App component
const App = () => {
    return (


        <>

            <Hero/>
            <Section
                image="laptop-1.png"
                title="About Us"
                content="CyberX, the Cyber Security Club of Delhi Public School R.K. Puram, was established in 2023 to equip students with essential skills in cybersecurity and ethical hacking. Our mission is to create a tech-savvy community prepared to tackle the challenges of the digital world."
                order="image-first"
            />
            <Section
                image="sarikakaushal.png"
                title="Founder and Teacher In-Charge"
                content="Mrs. Sarika Kaushal founded CyberX in 2023, and has been the club's teaides the club leadership in planning and organizing events, and mentors the club's junior members."
                order="text-first"
            />
            <CyberTimeline/>
            <Events/>
            
        </>

    );
};

export default App;