import React, {useState, useEffect} from 'react';
import {
    Container,
    Typography,
    Grid,
    Box,
    Card,
    CardContent,
    CardMedia,
} from '@mui/material';
import StarryBackground from '../StarryBackground';

const CrypticText = ({text, isHovered}) => {
    const [displayText, setDisplayText] = useState(text);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

    useEffect(() => {
        if (isHovered) {
            let iteration = 0;
            const interval = setInterval(() => {
                setDisplayText(prev =>
                    prev.split('').map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    }).join('')
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);

            return () => clearInterval(interval);
        } else {
            setDisplayText(text);
        }
    }, [text, isHovered]);

    return <span>{displayText}</span>;
};
export {CrypticText};

const Card3D = ({ member }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [imgError, setImgError] = useState(false);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const tiltX = (y - centerY) / 10;
        const tiltY = (centerX - x) / 10;
        setTilt({ x: tiltX, y: tiltY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setIsHovered(false);
    };

    const fallbackImage = 'https://img.icons8.com/wired/512/hacker.png';

    return (
        <Card
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.1s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box sx={{ position: 'relative', paddingTop: '100%' /* 1:1 aspect ratio */ }}>
                <CardMedia
                    component="img"
                    image={imgError ? fallbackImage : member.image}
                    alt={member.name}
                    onError={() => setImgError(true)}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h5" component="div" gutterBottom fontFamily="Space Mono" fontWeight={700}>
                    <CrypticText text={member.name} isHovered={isHovered} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {member.role}
                </Typography>
            </CardContent>
        </Card>
    );
};

const membersData = {
    12: [
        {name: 'Atharva Singh', role: 'Director', image: 'atharv.jpg'},
        {name: 'Gyanshu Raj', role: 'Director', image: 'Gyanshu Raj 12 E.png'},
        {name: 'Atharvajeet Singh', role: 'Chief Advisor', image: 'path/to/member3.jpg'},
        {name: 'Akshit Shubham', role: 'Sr. Member', image: 'path/to/member1.jpg'},
        {name: 'Twamadi Sar', role: 'Member', image: 'Twamadi Sar.jpg'},
        {name: 'Swastika Dubey', role: 'Event Head', image: 'Swastika Dubey12 F.jpg'},
        {name: 'Tanush Jayara', role: 'Member', image: 'Tanush Jayara 12 E.png'},
        {name: 'Aaahana Mehrotra', role: 'Member' ,image: 'path/to/member7.jpg'},
        {name: 'Vishisht',role: 'Member',image:'Vishisht  12L .JPG'},
    ],
    11: [
        {name: 'Anisha Mahajan', role: 'Member', image: 'Anisha Mahajan 11F.png'},
        {name: 'Naija Sukhija', role: 'Member', image: 'Naija Sukhija 11F.jpg'},
        {name: 'Suhani Mishra', role: 'Member', image: 'Suhani Mishra 11F.png'},
        {name: 'Agrani Sah', role: 'Creative Member', image: 'Agrani Sah 11G.jpeg'},
        {name: 'Goutam Behera', role: 'Core Member', image: 'Gouttam 11G.jpeg'},
        {name: 'Aryaman Singh Samyal', role: 'Member', image: 'Aryaman Singh Samyal 11M .png'},
        {name: 'Shaurya Pratap Srivastava', role: 'Member', image: 'path.jpg'},
        {name: 'Aryaman Aggarwal', role: 'Member', image: 'aryaman aggarwal 11 I.jpeg'},
        {name: 'Sabeer Ranjan', role: 'Member', image: 'SABEER RANJAN.jpg'},
        {name: 'Atharwa Navyam', role: 'Member', image: 'Atharwa Navyam 11I.png'},
    ],
    10: [
        {name: 'Vidhan Garg', role: 'Member', image: 'Vidhan Garg 10C.png'},
        {name: 'Chayanika Negi', role: 'Member', image: 'Chayanika Negi 10J.jpg'},
    ],
    9: [
        {name: 'Devansh Kumar', role: 'Member', image: 'Devansh Kumar 9H.jpg'},
    ],
    7: [
        {name: 'Samanyu Aggarwal', role: 'Member', image: 'Samanyu Aggarwal 7D.png'},
    ],
    6: [
        {name: 'Anureet Kaur Sandhu', role: 'Member', image: 'Anureet Kaur Sandhu 6-K.jpg'},
        {name: 'Jiya Sahni', role: 'Member', image: 'Jiya Sahani 6k.png'},
        {name: 'Ranveer Kalra', role: 'Member', image: 'Ranveer Kalra 6d.png'},
    ]
};

const CyberXApp = () => {
    const orderedSections = ['12', '11', '10', '9', '7', '6'];

    return (
        <>
            <StarryBackground showConstellations />
            <Box
                sx={{
                    minHeight: '100vh',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Container maxWidth="lg" sx={{ py: 5 }}>
                    {orderedSections.map((grade) => (
                        <Box key={grade} mb={4}>
                            {grade !== 'AdHocs' && (
                                <Typography variant="h2" component="h2" align="center" gutterBottom>
                                    Class {grade}
                                </Typography>
                            )}
                            {grade === 'AdHocs' && (
                                <Typography variant="h2" component="h2" align="center" gutterBottom>
                                    Member
                                </Typography>
                            )}
                            <Grid container spacing={3}>
                                {membersData[grade].map((member, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Card3D member={member} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    ))}
                </Container>
            </Box>
        </>
    );
};

export default CyberXApp;
