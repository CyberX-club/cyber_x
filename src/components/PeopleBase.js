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

// CrypticText component (unchanged from original)
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

// Card3D component (unchanged but moved to be part of PeopleBase)
const Card3D = ({ person }) => {
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
              : `${window.location.origin}/MEMBERS/${person.image}`
          }
          alt={person.name}
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
          <CrypticText text={person.name} isHovered={isHovered} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {person.role}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Base PeopleBase class component
class PeopleBase extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSectionTitle(key) {
    // To be implemented by child classes
    throw new Error(
      "Method renderSectionTitle must be implemented by child classes"
    );
  }

  renderSections() {
    const { peopleData, orderedSections } = this.props;

    return orderedSections.map((section) => (
      <Box key={section} mb={4}>
        {this.renderSectionTitle(section)}
        <Grid container spacing={3}>
          {peopleData?.[section]?.length > 0 &&
            peopleData[section].map((person, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card3D person={person} />
              </Grid>
            ))}
        </Grid>
      </Box>
    ));
  }

  render() {
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
            {this.renderSections()}
          </Container>
        </Box>
      </>
    );
  }
}

// Members class that extends PeopleBase - shows class numbers
class Members extends PeopleBase {
  renderSectionTitle(grade) {
    if (grade === "AdHocs") {
      return (
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Member
        </Typography>
      );
    } else {
      return (
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Class {grade}
        </Typography>
      );
    }
  }
}

// Alumni class that extends PeopleBase - shows graduation years
class Alumni extends PeopleBase {
  renderSectionTitle(year) {
    return (
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        Batch of {year}
      </Typography>
    );
  }
}

// Example of how to use these components:

// For Alumni
const AlumniApp = () => {
  const orderedSections = ["2024", "2023", "2022", "2021"];

  const alumniData = {
    2024: [
      { name: "John Doe", role: "Former President", image: "john_doe.jpg" },
      {
        name: "Jane Smith",
        role: "Former Core Member",
        image: "jane_smith.jpg",
      },
    ],
    2023: [
      {
        name: "Alex Johnson",
        role: "Former Member",
        image: "alex_johnson.png",
      },
    ],
    // ... other graduation years
  };

  return <Alumni peopleData={alumniData} orderedSections={orderedSections} />;
};

export { PeopleBase, Members, Alumni, CrypticText, Card3D };
// export default CyberXApp;
