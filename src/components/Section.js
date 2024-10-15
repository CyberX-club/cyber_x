import React from 'react';
import { Typography, Box, Container, Grid, Slide } from '@mui/material';
import { useInView } from '../hooks/useInView';
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
export default Section;
