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
import StarryBackground from './StarryBackground';

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
        {name: 'Gyanshu Raj', role: 'Director', image: 'https://media.discordapp.net/attachments/1294023311453585408/1294981316835545108/IMG-20241011-WA0026.jpg?ex=670da595&is=670c5415&hm=a9fc7e1e161c0bc7711774ae015290efd553bb08f5e89d2a2790fa81db2fb7cb&=&format=webp&width=463&height=619'},
        {name: 'Atharvajeet Singh', role: 'Chief Advisor', image: 'path/to/member3.jpg'},
        {name: 'Akshit Shubham', role: 'Sr. Member', image: 'path/to/member1.jpg'},
        {name: 'Twamadi Sar', role: 'Member', image: 'path/to/member2.jpg'},
        {name: 'Swastika Dubey', role: 'Event Head', image: 'https://media.discordapp.net/attachments/1294023311453585408/1294680644881748069/40774.jpg?ex=670ddf0f&is=670c8d8f&hm=53e2cf1f57b0c8b8863131df544cddd0f07269ebaf29a941b64cdbd4be74d753&=&format=webp&width=464&height=619'},
    ],
    11: [
        {name: 'Anisha Mahajan', role: 'Member', image: 'path/to/member1.jpg'},
        {name: 'Naija Sukhija', role: 'Member', image: 'path/to/member2.jpg'},
        {name: 'Suhani Mishra', role: 'Member', image: 'path/to/member3.jpg'},
        {name: 'Goutam Behera', role: 'Core Member', image: 'path/to/member1.jpg'},
        {name: 'Aryaman Argarwal', role: 'Member', image: 'path/to/member2.jpg'},
        {name: 'Aryaman Singh Samyal', role: 'Member', image: 'path/to/member3.jpg'},
    ],
    10: [
        {name: 'Vidhan Garg', role: 'Member', image: 'https://media.discordapp.net/attachments/1294023311453585408/1294987568093593662/image.png?ex=670dab67&is=670c59e7&hm=8312251e7a4d42403c9f5b8423f56e75697fd26dc4a6e9502fb67c70d3679d15&=&format=webp&quality=lossless&width=223&height=350'},
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
                    {Object.keys(membersData).reverse().map((grade) => (
                        <Box key={grade} mb={4}>
                            <Typography variant="h2" component="h2" align="center" gutterBottom>
                                Class {grade}
                            </Typography>
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