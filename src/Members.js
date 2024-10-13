import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Box,
    Collapse,
    IconButton,
} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';

const membersData = {
    12: [
        {name: 'Atharva Singh', role: 'Director', image: 'atharv.jpg'},
        {name: 'Gyanshu Raj', role: 'Director', image: 'member2.jpg'},
        {name: 'Atharvajeet Singh', role: 'Chief Advisor', image: 'path/to/member3.jpg'},
        {name: 'Akshit Shubham', role: 'Sr. Member', image: 'path/to/member1.jpg'},
        {name: 'Twamadi Sar', role: 'Member', image: 'path/to/member2.jpg'},
        {name: 'Swastika Dubey', role: 'Event Head', image: 'path/to/member3.jpg'},
    ],
    11: [
        {name: 'Anisha Mahajan', role: 'Member', image: 'path/to/member1.jpg'},
        {name: 'Naija Sukhija', role: 'Member', image: 'path/to/member2.jpg'},
        {name: 'Suhani Mishra', role: 'Member', image: 'path/to/member3.jpg'},
        {name: 'Goutam Behera', role: 'Member', image: 'path/to/member1.jpg'},
        {name: 'Aryaman Argarwal', role: 'Member', image: 'path/to/member2.jpg'},
        {name: 'Aryaman Singh Samyal', role: 'Member', image: 'path/to/member3.jpg'},
    ],
    10: [
        {name: 'Vidhan Garg', role: 'Member', image: 'path/to/member1.jpg'},
        {name: 'Chyanika Negi', role: 'Member', image: 'path/to/member2.jpg'},
    ],
    9: [
        {name: 'Devansh Kumar', role: 'Member', image: 'path/to/member1.jpg'},
    ],
    7: [
        {name: 'Samanyu Aggarwal', role: 'Member', image: 'path/to/member1.jpg'},
    ],
    6: [
        {name: 'Anureet Kaur Sandhu', role: 'Member', image: 'path/to/member1.jpg'},
        {name: 'Jiya Sahni', role: 'Member', image: 'path/to/member2.jpg'},
        {name: 'Ranveer Kalra', role: 'Member', image: 'path/to/member2.jpg'},
    ],
};

const CyberXApp = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <Box>
            <Container maxWidth="lg" sx={{py: 5}}>
                {Object.keys(membersData).reverse().map((grade) => (
                    <Box key={grade}>
                        <Typography variant="h4" component="h2" align="center" gutterBottom>
                            Class {grade}
                        </Typography>
                        <Grid container spacing={3}>
                            {membersData[grade].map((member, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={member.image}
                                            alt={member.name}
                                        />
                                        <CardContent>
                                            <Typography variant="h5" component="div" gutterBottom>
                                                {member.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {member.role}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}
            </Container>

        </Box>

    );
};

export default CyberXApp;