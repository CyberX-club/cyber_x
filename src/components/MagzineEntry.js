import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  useTheme,
} from "@mui/material";
import {
  Computer,
  Lock,
  Code,
  BugReport,
  Storage,
  Memory,
} from "@mui/icons-material";

const MagazineEntry = ({
  title,
  author,
  images = [],
  text = "",
  imagePositions = [],
}) => {
  const theme = useTheme();

  // If the text is a string, split it into paragraphs based on line breaks.
  const paragraphs = Array.isArray(text)
    ? text
    : text.split("\n").filter((paragraph) => paragraph.trim() !== "");

  const icons = [Computer, Lock, Code, BugReport, Storage, Memory];

  // Function to render a single image
  const renderImage = (src, index) => (
    <Box
      key={index}
      sx={{
        width: "100%",
        maxWidth: "700px",
        height: "auto",
        overflow: "hidden",
        borderRadius: 2,
        boxShadow: 3,
        my: 4,
      }}
    >
      <CardMedia
        component="img"
        image={src}
        alt={`Magazine entry image ${index + 1}`}
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
    </Box>
  );

  // Combine paragraphs and images based on imagePositions
  const content = [];
  let imageIndex = 0;
  paragraphs.forEach((paragraph, index) => {
    content.push(
      <Typography
        key={`p-${index}`}
        variant="body1"
        fontFamily={"Space mono"}
        sx={{
          marginBottom: 2,
          color: theme.palette.text.primary,
          lineHeight: 1.8,
        }}
      >
        {paragraph}
      </Typography>
    );
    if (imagePositions.includes(index + 1) && imageIndex < images.length) {
      content.push(renderImage(images[imageIndex], imageIndex));
      imageIndex++;
    }
  });

  // Add any remaining images at the end
  while (imageIndex < images.length) {
    content.push(renderImage(images[imageIndex], imageIndex));
    imageIndex++;
  }

  return (
    <Card
      sx={{
        margin: 2,
        boxShadow: 3,
        borderRadius: 2,
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {/* Floating background icons */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.03,
        }}
      >
        {[...Array(15)].map((_, index) => {
          const Icon = icons[Math.floor(Math.random() * icons.length)];
          return (
            <Icon
              key={index}
              sx={{
                position: "absolute",
                fontSize: `${Math.random() * 60 + 40}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `float ${
                  Math.random() * 10 + 5
                }s ease-in-out infinite`,
                "@keyframes float": {
                  "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
                  "50%": { transform: "translateY(-20px) rotate(10deg)" },
                },
              }}
            />
          );
        })}
      </Box>

      <CardContent
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        {/* Title */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ color: theme.palette.text.primary, fontWeight: "bold", mb: 2 }}
        >
          {title}
        </Typography>

        {/* Author */}
        {author && (
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.text.secondary, mb: 4 }}
          >
            By {author}
          </Typography>
        )}

        {/* Content */}
        {content}
      </CardContent>
    </Card>
  );
};

export default MagazineEntry;
