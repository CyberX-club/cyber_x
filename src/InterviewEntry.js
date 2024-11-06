import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  Avatar,
  useTheme,
  styled
} from '@mui/material';

// Styled components
const QuestionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const AnswerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  paddingLeft: theme.spacing(6),
  marginBottom: theme.spacing(4),
}));

const QuestionAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  width: 32,
  height: 32,
}));

const AnswerAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.grey[600],
  width: 32,
  height: 32,
}));

const InterviewEntry = ({ 
  title = "Interview",
  subtitle,
  imageSrc,
  imageAlt = "Interview subject",
  questions = [], 
  answers = [] 
}) => {
  const theme = useTheme();

  return (
    <Card sx={{ 
      maxWidth: '800px', 
      margin: '32px auto',
      borderRadius: 2,
      boxShadow: theme.shadows[3],
    }}>
      <CardContent>
        {/* Image Section */}
        {imageSrc && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            mb: 4 
          }}>
            <Avatar
              src={imageSrc}
              alt={imageAlt}
              sx={{
                width: 200,
                height: 200,
                boxShadow: theme.shadows[3],
              }}
            />
          </Box>
        )}

        {/* Title Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1"
            sx={{ 
              fontFamily: 'Space Mono',
              fontWeight: 'bold',
              color: theme.palette.text.primary,
              mb: 1
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography 
              variant="subtitle1"
              sx={{ 
                fontFamily: 'Space Mono',
                color: theme.palette.text.secondary 
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        {/* Questions and Answers */}
        {questions.map((question, index) => (
          <Box key={index}>
            <QuestionBox>
              <QuestionAvatar>Q</QuestionAvatar>
              <Typography 
                sx={{ 
                  fontFamily: 'Space Mono',
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                }}
              >
                {question}
              </Typography>
            </QuestionBox>

            <AnswerBox>
              <AnswerAvatar>A</AnswerAvatar>
              <Typography 
                sx={{ 
                  fontFamily: 'Space Mono',
                  color: theme.palette.text.secondary,
                }}
              >
                {answers[index]}
              </Typography>
            </AnswerBox>

            {index < questions.length - 1 && (
              <Box 
                sx={{ 
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  my: 3,
                  mx: 6 
                }} 
              />
            )}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default InterviewEntry;

// Example usage:
/*
const ExampleUsage = () => {
  const interviewData = {
    title: "Principal's Interview",
    subtitle: "Insights on Digital Ethics & Cyber Safety",
    imageSrc: "/path/to/principal-image.jpg",
    questions: [
      "The concept of 'Dharma' in Hindu philosophy...",
      "With social media having become such a big part...",
      "In your opinion, what are the biggest challenges...",
      "Have you ever had a personal experience..."
    ],
    answers: [
      "Was Arjun a good or bad person...",
      "I would say to make the most of it...",
      "Inexperience. The overuse of technology...",
      "Yes, I have experienced a similar situation..."
    ]
  };

  return (
    <InterviewEntry {...interviewData} />
  );
};
*/