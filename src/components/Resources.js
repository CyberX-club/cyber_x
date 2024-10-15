import React, { useState } from 'react';
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

const Resources = ({ resources }) => {
    const [open, setOpen] = useState(false);
    const [selectedResource, setSelectedResource] = useState(null);

    const handleClickOpen = (resource) => {
        setSelectedResource(resource);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedResource(null);
    };

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
                {resources.map((resource, index) => (
                    <Card
                        key={index}
                        sx={{
                            marginBottom: 2,
                            border: '1px solid #444',
                            cursor:"pointer",
                            borderRadius: 2,
                        }}
                        onClick={() => handleClickOpen(resource)} // Open dialog on card click
                    >
                        {resource.img ? (
                            <CardMedia
                                component="img"
                                image={resource.img}
                                alt={resource.label}
                                sx={{ height: 140, objectFit: 'cover' }}
                                onError={(e) => {
                                    e.target.onerror = null; // Prevent looping
                                    e.target.src = ''; // Clear src to prevent showing the placeholder
                                }}
                            />
                        ) : null}
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
                        {selectedResource?.img && (
                            <CardMedia
                                component="img"
                                image={selectedResource.img}
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
