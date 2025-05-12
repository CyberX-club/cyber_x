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

    useEffect(() => {
        if (propResources && propResources.length > 0) {
            setResources(propResources);
            setLoading(false);
            return;
        }

        fetch(Endpoints.GET_RESOURCES())
            .then(response => response.json())
            .then(data => {
                setResources(data['resources']);
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
        >
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: 2 }}>
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
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 3,
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
                                        e.target.onerror = null;
                                        e.target.src = '';
                                    }}
                                />
                            )}
                            <CardContent>
                                <Typography variant="h6" fontWeight={700} gutterBottom>
                                    {resource.label}
                                </Typography>
                                <Typography variant="body2" noWrap>
                                    {resource.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Author: {resource.author || "Unknown"}
                                </Typography>
                                {resource.postedAt && (
                                    <Typography variant="body2" color="text.secondary">
                                        Posted at: {new Date(resource.postedAt).toLocaleDateString()}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grow>
                ))}
                {!loading && (!resources || resources.length === 0) && (
                    <Typography variant="body1" align="center">
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
                        <Card sx={{ maxWidth: 700 }}>
                            <DialogTitle>
                                <Typography variant={"h5"} fontWeight={800}>
                                    {selectedResource.label}
                                </Typography>
                            </DialogTitle>
                            <DialogContent>
                                {selectedResource.img && (
                                    <CardMedia
                                        component="img"
                                        image={selectedResource.img}
                                        alt={selectedResource.label}
                                        sx={{ height: 140, objectFit: 'cover', marginBottom: 2 }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = '';
                                        }}
                                    />
                                )}
                                <Typography variant="body2" paragraph>
                                    {selectedResource.description}
                                </Typography>
                                {selectedResource.author && (
                                    <Typography variant="body2" color="text.secondary">
                                        Author: {selectedResource.author}
                                    </Typography>
                                )}
                                {selectedResource.postedAt && (
                                    <Typography variant="body2" color="text.secondary">
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
                                                        >
                                                            View Pdf {idx + 1}
                                                        </Button>
                                                    }
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="secondary">Close</Button>
                            </DialogActions>
                        </Card>
                    </Fade>
                )}
            </Dialog>
        </Box>
    );
};

export default Resources;