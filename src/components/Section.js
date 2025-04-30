import React from 'react';
import {Typography, Box, Container, Grid, Slide, Fade, Paper} from '@mui/material';
import {useInView} from '../hooks/useInView';
import {StyledButton, TransparentPaper} from "./StyledComponents";



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
            <TransparentPaper sx={{opacity:0.8, p:2}}>
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
            </TransparentPaper>
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
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <Box ref={ref} sx={{ py: 4, bgcolor: 'background.default' }}>
            <Container maxWidth={false} sx={{ width: '80%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Our Sponsors
                    </Typography>
                </Box>
                
                <Fade appear={false} in={isInView} timeout={1000}>
                    <Grid container spacing={3} justifyContent="center" alignItems="center" wrap="wrap">
                        {sponsors.map((sponsor, index) => (
                            <Grid item key={index} xs={12} sm={6}>
                                <Box
                                    component="a"
                                    href={sponsor.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                        height: 140,
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.1)',
                                        },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        sx={{
                                            maxWidth: '90%',
                                            maxHeight: '90%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Fade>
            </Container>
        </Box>
    );
};




export {SponsorSection};
export default Section;
