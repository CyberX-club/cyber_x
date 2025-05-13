import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    List,
    ListItem,
    ListItemText,
    Grow,
    Fade,
    Backdrop,
    CircularProgress,
} from '@mui/material';
import { LaunchSharp } from "@mui/icons-material";
import Endpoints from "../Endpoints";

const Resources = ({ resources: propResources }) => {
    const [resources, setResources] = useState(propResources || []);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(!propResources);
    const [selectedResource, setSelectedResource] = useState(null);

    const handleClickOpen = (resource) => {
        setSelectedResource(resource);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedResource(null);
    };

    const getImagePath = (imgPath) => {
        if (!imgPath) return null;
        
        if (imgPath.startsWith('http') || imgPath.startsWith('/')) {
            return imgPath;
        }
        
        return `/${imgPath}`;
    };

    useEffect(() => {
        if (propResources && propResources.length > 0) {
            const updatedResources = propResources.map(resource => {
                return { 
                    ...resource, 
                    img: getImagePath(resource.img)
                };
            });
            setResources(updatedResources);
            setLoading(false);
            return;
        }

        fetch(Endpoints.GET_RESOURCES())
            .then(response => response.json())
            .then(data => {
                const updatedResources = data['resources'].map(resource => {
                    return { 
                        ...resource, 
                        img: getImagePath(resource.img)
                    };
                });
                setResources(updatedResources);
            })
            .catch(err => {
                console.error("Error fetching resources:", err);
            })
            .finally(() => setLoading(false));
    }, [propResources]);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={3}
            minHeight="100vh"
            sx={{ backgroundColor: '#000', color: '#fff' }}
        >
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: 2, color: '#fff' }}>
                Resources
            </Typography>
            <Box width="100%" maxWidth="800px">
                {resources && resources.map((resource, index) => (
                    <Grow
                        in={true}
                        key={index}
                        timeout={300 + index * 100}
                    >
                        <Card
                            sx={{
                                marginBottom: 2,
                                border: '1px solid #444',
                                cursor: "pointer",
                                borderRadius: 2,
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                backgroundColor: '#1a1a1a',
                                color: '#fff',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 4px 20px rgba(0, 255, 0, 0.2)',
                                }
                            }}
                            onClick={() => handleClickOpen(resource)}
                        >
                            {resource.img && (
                                <CardMedia
                                    component="img"
                                    image={resource.img}
                                    alt={resource.label}
                                    sx={{ height: 140, objectFit: 'cover' }}
                                    onError={(e) => {
                                        console.error(`Failed to load image: ${resource.img}`);
                                        e.target.onerror = null;
                                        e.target.src = '/ser-bg.jpeg';
                                    }}
                                />
                            )}
                            <CardContent>
                                <Typography variant="h6" fontWeight={700} gutterBottom sx={{ color: '#0f0' }}>
                                    {resource.label}
                                </Typography>
                                <Typography variant="body2" noWrap sx={{ color: '#ddd' }}>
                                    {resource.description}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#0f0', marginTop: 1 }}>
                                    Author: {resource.author || "Unknown"}
                                </Typography>
                                {resource.postedAt && (
                                    <Typography variant="body2" sx={{ color: '#0f0' }}>
                                        Posted at: {new Date(resource.postedAt).toLocaleDateString()}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grow>
                ))}
                {!loading && (!resources || resources.length === 0) && (
                    <Typography variant="body1" align="center" sx={{ color: '#fff' }}>
                        No resources available.
                    </Typography>
                )}
            </Box>

            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Grow}
                TransitionProps={{
                    timeout: 300
                }}
                PaperProps={{
                    sx: {
                        opacity: 0,
                        transform: 'scale(0.9)',
                        animation: open ? 'dialogFadeIn 0.3s forwards' : 'none',
                        backgroundColor: '#1a1a1a',
                        '@keyframes dialogFadeIn': {
                            '0%': {
                                opacity: 0,
                                transform: 'scale(0.9)',
                            },
                            '100%': {
                                opacity: 1,
                                transform: 'scale(1)',
                            },
                        },
                    }
                }}
            >
                {selectedResource && (
                    <Fade in={open} timeout={600}>
                        <Card sx={{ maxWidth: 700, backgroundColor: '#1a1a1a', color: '#fff' }}>
                            <DialogTitle>
                                <Typography variant={"h5"} fontWeight={800} sx={{ color: '#0f0' }}>
                                    {selectedResource.label}
                                </Typography>
                            </DialogTitle>
                            <DialogContent>
                                {selectedResource.img && (
                                    <CardMedia
                                        component="img"
                                        image={selectedResource.img}
                                        alt={selectedResource.label}
                                        sx={{ height: 200, objectFit: 'cover', marginBottom: 2, borderRadius: 1 }}
                                        onError={(e) => {
                                            console.error(`Failed to load image in dialog: ${selectedResource.img}`);
                                            e.target.onerror = null;
                                            e.target.src = '/ser-bg.jpeg'; // TODO: Make an actual placeholder banner, will use ser-bg until then :P
                                        }}
                                    />
                                )}
                                <Typography variant="body1" paragraph sx={{ color: '#ddd' }}>
                                    {selectedResource.description}
                                </Typography>
                                {selectedResource.author && (
                                    <Typography variant="body2" sx={{ color: '#0f0' }}>
                                        Author: {selectedResource.author}
                                    </Typography>
                                )}
                                {selectedResource.postedAt && (
                                    <Typography variant="body2" sx={{ color: '#0f0' }}>
                                        Posted at: {new Date(selectedResource.postedAt).toLocaleDateString()}
                                    </Typography>
                                )}
                                {selectedResource.urls && selectedResource.urls.length > 0 && (
                                    <List>
                                        {selectedResource.urls.map((url, idx) => (
                                            <ListItem key={idx}>
                                                <ListItemText
                                                    primary={
                                                        <Button
                                                            variant="outlined"
                                                            color="warning"
                                                            href={url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            endIcon={<LaunchSharp />}
                                                            sx={{ 
                                                                borderColor: '#0f0', 
                                                                color: '#0f0',
                                                                '&:hover': {
                                                                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                                                                    borderColor: '#0f0'
                                                                }
                                                            }}
                                                        >
                                                            View PDF {idx + 1}
                                                        </Button>
                                                    }
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </DialogContent>
                            <DialogActions>
                                <Button 
                                    onClick={handleClose} 
                                    sx={{ 
                                        color: '#0f0',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 255, 0, 0.1)'
                                        }
                                    }}
                                >
                                    CLOSE
                                </Button>
                            </DialogActions>
                        </Card>
                    </Fade>
                )}
            </Dialog>
        </Box>
    );
};

export default Resources;