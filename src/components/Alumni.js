import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import StarryBackground from "../StarryBackground";

const CrypticText = ({ text, isHovered }) => {
  const [displayText, setDisplayText] = useState(text);
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  useEffect(() => {
    if (isHovered) {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
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
export { CrypticText };

const Card3D = ({ member }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleEnter = () => setIsHovered(true);
  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const fallbackImage = "https://img.icons8.com/wired/512/hacker.png";

  return (
    <Card
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onTouchStart={handleEnter}
      onTouchMove={handleMove}
      onTouchEnd={handleLeave}
      sx={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.1s ease",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ position: "relative", paddingTop: "100%" /* 1:1 aspect ratio */ }}
      >
        <CardMedia
          component="img"
          image={
            imgError
              ? fallbackImage
              : `${window.location.origin}/MEMBERS/${member.image}`
          }
          alt={member.name}
          onError={() => setImgError(true)}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          fontFamily="Space Mono"
          fontWeight={700}
        >
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

  2024-25: [
    { name: "Atharva Singh", role: "Director", image: "ATHARVA SINGH.jpeg" },
    { name: "Gyanshu Raj", role: "Director", image: "Gyanshu Raj 12 E.png" },
    {
      name: "Atharvajeet Singh",
      role: "Chief Advisor",
      image: "ATHARVAJEET.jpeg",
    },
    { name: "Twamadi Sar", role: "Creative Head", image: "Twamadi Sar.jpg" },
    {
      name: "Akshit Shubham",
      role: "Technical Head",
      image: "Akshit Shubham.jpeg",
    },
    {
      name: "Swastika Dubey",
      role: "Event Head",
      image: "Swastika Dubey12 F.jpg",
    },
    { name: "Vrinda Aggarwal", role: "Treasurer", image: "Vrinda.jpg" },
    { name: "Tanush Jayara", role: "Member", image: "Tanush Jayara 12 E.png" },
    { name: "Aaahana Mehrotra", role: "Member", image: "Aaahana Mehrotra.jpg" },
    { name: "Vishisht", role: "Member", image: "Vishisht  12L .JPG" },
  ],
const CyberXApp = () => {
  const orderedSections = ["2024-25"];

  return (
    <>
      <StarryBackground showConstellations />
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg" sx={{ py: 5 }}>
          {orderedSections.map((grade) => (
            <Box key={grade} mb={4}>
              {grade !== "AdHocs" && (
                <Typography
                  variant="h2"
                  component="h2"
                  align="center"
                  gutterBottom
                >
                  Class {grade}
                </Typography>
              )}
              {grade === "AdHocs" && (
                <Typography
                  variant="h2"
                  component="h2"
                  align="center"
                  gutterBottom
                >
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
