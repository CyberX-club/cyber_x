import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
import { GoogleDriveUtils } from "../Utils";
import Endpoints from "../Endpoints";

const Resources = ({ resources }) => {
    const [open, setOpen] = useState(false);
    const [selectedResource, setSelectedResource] = useState(null);
    const [fetchedResources, setFetchedResources] = useState(resources);
    const [imageCache, setImageCache] = useState({}); // Cache for images

    const handleClickOpen = (resource) => {
        setSelectedResource(resource);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedResource(null);
    };

    const fetchImage = async (resource) => {
        if (resource.urls && !imageCache[resource.urls[0]]) {
            try {
                const fileId = GoogleDriveUtils.extractFileId(resource.urls[0]);
                const response = await fetch(Endpoints.get_thumbnail(fileId));

                if (response.status === 429) {
                    throw new Error("Too many requests");
                }

                const data = await response.json();
                const thumbnailLink = data.thumbnailLink;

                // Cache the image URL
                setImageCache((prev) => ({ ...prev, [resource.urls[0]]: thumbnailLink }));

                return thumbnailLink;
            } catch (error) {
                console.error("Error fetching thumbnail:", error);
                return resource.img; // Fallback to the original image
            }
        }
        return imageCache[resource.urls[0]] || resource.img; // Return cached image or original
    };

    useEffect(() => {
        const fetchImages = async () => {
            const updatedResources = await Promise.all(resources.map(async (resource) => {
                const imageUrl = await fetchImage(resource);
                return { ...resource, fetchedImage: imageUrl };
            }));
            setFetchedResources(updatedResources);
        };

        fetchImages();
    }, [resources]);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={3}
            minHeight="100vh"
        >
            <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: 2 }}>
                Resources
            </Typography>
            <Box width="100%" maxWidth="800px">
                {fetchedResources.map((resource, index) => (
                    <Card
                        key={index}
                        sx={{
                            marginBottom: 2,
                            border: '1px solid #444',
                            cursor: "pointer",
                            borderRadius: 2,
                        }}
                        onClick={() => handleClickOpen(resource)} // Open dialog on card click
                    >
                        {resource.fetchedImage && (
                            <CardMedia
                                component="img"
                                image={resource.fetchedImage}
                                alt={resource.label}
                                sx={{ height: 140, objectFit: 'cover' }}
                                onError={(e) => {
                                    e.target.onerror = null; // Prevent looping
                                    e.target.src = ''; // Clear src to prevent showing the placeholder
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
                                Author: {resource.author}
                            </Typography>
                            {resource.postedAt && (
                                <Typography variant="body2" color="text.secondary">
                                    Posted at: {new Date(resource.postedAt).toLocaleDateString()}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Dialog for displaying resource details as a card */}
            <Dialog open={open} onClose={handleClose}>
                <Card sx={{ maxWidth: 700 }}>
                    <DialogTitle>{selectedResource?.label}</DialogTitle>
                    <DialogContent>
                        {selectedResource?.fetchedImage && (
                            <CardMedia
                                component="img"
                                image={selectedResource.fetchedImage}
                                alt={selectedResource.label}
                                sx={{ height: 140, objectFit: 'cover', marginBottom: 2 }}
                                onError={(e) => {
                                    e.target.onerror = null; // Prevent looping
                                    e.target.src = ''; // Clear src to prevent showing the placeholder
                                }}
                            />
                        )}
                        <Typography variant="body2" paragraph>
                            {selectedResource?.description}
                        </Typography>
                        {selectedResource?.author && (
                            <Typography variant="body2" color="text.secondary">
                                Author: {selectedResource.author}
                            </Typography>
                        )}
                        {selectedResource?.postedAt && (
                            <Typography variant="body2" color="text.secondary">
                                Posted at: {new Date(selectedResource.postedAt).toLocaleDateString()}
                            </Typography>
                        )}
                        {selectedResource?.urls && selectedResource.urls.length > 0 && (
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
                                                >
                                                    Download PDF {idx + 1}
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
            </Dialog>
        </Box>
    );
};

export default Resources;
