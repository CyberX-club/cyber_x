import React, { useState } from 'react';
import { Box, Typography, Button, Grid } from "@mui/material";

const Question = ({ question, options, correctAnswer, onAnswerSelected, answered }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleOptionClick = (option) => {
        if (!answered && !selectedAnswer) {
            setSelectedAnswer(option);
            onAnswerSelected(option);
        }
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
                {question}
            </Typography>
            <Grid container spacing={2}>
                {options.map((option, index) => (
                    <Grid item xs={6} md={6} key={index}>
                        <Button
                            variant="outlined"
                            onClick={() => handleOptionClick(option)}
                            disabled={answered}
                            fullWidth
                            sx={{
                                height: '100%', // Ensures all buttons have the same height
                                whiteSpace: 'normal', // Allows text to wrap within the button
                                overflow: 'visible', // Ensures no overflow
                                textAlign: 'center', // Center-aligns the text
                            }}
                            color={selectedAnswer === option ? (option === correctAnswer ? "success" : "error") : "default"}
                        >
                            {option}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Question;
