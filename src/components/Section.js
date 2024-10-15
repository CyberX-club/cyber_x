import React from 'react';
import {Typography, Box, Container, Grid, Slide, Fade} from '@mui/material';
import {useInView} from '../hooks/useInView';
import {StyledButton} from "./StyledComponents";



const Section = ({ image, title, content, order, buttonLabel, buttonLink }) => {
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
            {/* Render the StyledButton if buttonLabel and buttonLink are provided */}
            {buttonLabel && buttonLink && (
                <StyledButton href={buttonLink} variant="contained" sx={{ mt: 2 }}>
                    {buttonLabel}
                </StyledButton>
            )}
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

const SponsorSection = ({ sponsors }) => {
    const [ref, isInView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <>
            <Box ref={ref} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Our Sponsors
                </Typography>
            </Box>
            <Box ref={ref} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Fade appear={false} in={isInView} timeout={1000}>
                    <Box sx={{ py: 8, width: '100%' }}>
                        <Container maxWidth="lg" sx={{ backgroundColor: "#ffffff" }}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {sponsors.map((sponsor, index) => (
                                    <Box
                                        key={index}
                                        component="a"
                                        href={sponsor.link} // Redirect to the sponsor's website
                                        target="_blank" // Open in a new tab
                                        rel="noopener noreferrer" // Security feature
                                        sx={{
                                            position: 'relative',
                                            overflow: 'hidden',
                                            mx: 2,
                                            my: 2,
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.1)', // Zoom effect on hover
                                            },
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={sponsor.image}
                                            alt={sponsor.name}
                                            sx={{
                                                width: '100%',
                                                height: 'auto',
                                                maxHeight: { xs: 300, sm: 400 },
                                                objectFit: 'contain',
                                                display: 'block',
                                                margin: '0 auto',
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Container>
                    </Box>
                </Fade>
            </Box>
        </>
    );
};



export {SponsorSection};
export default Section;
