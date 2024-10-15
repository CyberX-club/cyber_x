import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Box,
    CircularProgress,
} from '@mui/material';
import { Close as CloseIcon, Download, Visibility } from '@mui/icons-material';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const resourceList = [
    {
        id: 1,
        title: 'Cybersecurity Basics',
        description: 'A comprehensive guide to cybersecurity fundamentals.',
        url: 'https://example.com/path/to/cybersecurity-basics.pdf',
        type: 'pdf',
    },
    {
        id: 2,
        title: 'Ethical Hacking Techniques',
        description: 'An introduction to ethical hacking methodologies.',
        url: 'https://example.com/path/to/ethical-hacking-article',
        type: 'web',
    },
];

const ResourceCard = ({ resource }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [numPages, setNumPages] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => setIsOpen(false);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <>
            <Card
                sx={{
                    width: 300,
                    height: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                        boxShadow: 6,
                    },
                }}
                onClick={handleOpen}
            >
                <CardContent
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {resource.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {resource.description}
                    </Typography>
                </CardContent>
            </Card>

            <Dialog open={isOpen} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>
                    {resource.title}
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>{resource.description}</Typography>
                    {resource.type === 'pdf' ? (
                        <Box display="flex" justifyContent="center" alignItems="center">
                            {isLoading && (
                                <CircularProgress sx={{ margin: '2rem 0' }} />
                            )}
                            <Document
                                file={resource.url}
                                onLoadSuccess={onDocumentLoadSuccess}
                                loading={() => setIsLoading(true)}
                                onLoadError={() => setIsLoading(false)}
                            >
                                {Array.from(new Array(numPages), (el, index) => (
                                    <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                        width={600}
                                    />
                                ))}
                            </Document>
                        </Box>
                    ) : (
                        <Typography variant="body2" paragraph>
                            Preview is not available.
                        </Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        startIcon={resource.type === 'pdf' ? <Download /> : <Visibility />}
                        onClick={() => window.open(resource.url, '_blank')}
                    >
                        {resource.type === 'pdf' ? 'Download PDF' : 'View Full Article'}
                    </Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

const Resources = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem 0',
            }}
        >
            <Typography variant="h4" component="h2" align="center" gutterBottom>
                Resources
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ flexGrow: 1 }}>
                {resourceList.map((resource) => (
                    <Grid item key={resource.id}>
                        <ResourceCard resource={resource} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Resources;
