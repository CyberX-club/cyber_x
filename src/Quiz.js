import Carousel from "react-material-ui-carousel";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import Question from "./Question";
import { Box, Paper, Typography, Button, LinearProgress, Chip } from "@mui/material";
import { useState } from "react";

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState(new Set());

    const quizQuestions = [
        {
            question: "What is the primary goal of a firewall in cybersecurity?",
            options: ["To speed up the internet", "To block unauthorized access", "To cool down the computer", "To manage software updates"],
            correctAnswer: "To block unauthorized access"
        },
        {
            question: "Which of the following is a strong password?",
            options: ["password123", "qwerty", "Abc!123$%xY", "123456"],
            correctAnswer: "Abc!123$%xY"
        },
        {
            question: "What does 'phishing' refer to in cybersecurity?",
            options: [
                "Fishing with a phishing rod",
                "A type of email scam",
                "A computer virus",
                "A method of encrypting data"
            ],
            correctAnswer: "A type of email scam"
        },
        {
            question: "What is Two-Factor Authentication (2FA)?",
            options: [
                "Using two passwords for login",
                "A backup system for lost passwords",
                "A method requiring two forms of verification",
                "An advanced encryption technique"
            ],
            correctAnswer: "A method requiring two forms of verification"
        },
        {
            question: "Which of the following is a common sign of a phishing email?",
            options: [
                "Well-written content and personal greetings",
                "Emails from known contacts only",
                "Urgency to click a link or open an attachment",
                "Emails with company logos and signatures"
            ],
            correctAnswer: "Urgency to click a link or open an attachment"
        },
        {
            question: "What does 'malware' stand for?",
            options: [
                "Multiple Access Location",
                "Malicious Software",
                "Manual Alert Response",
                "Mainframe Lock Alert"
            ],
            correctAnswer: "Malicious Software"
        },
        {
            question: "What is the purpose of encryption in cybersecurity?",
            options: [
                "To speed up data transfer",
                "To scramble data to protect it from unauthorized access",
                "To make data readable to everyone",
                "To compress files for storage"
            ],
            correctAnswer: "To scramble data to protect it from unauthorized access"
        },
        {
            question: "Which protocol is used for secure web browsing?",
            options: [
                "HTTP",
                "FTP",
                "HTTPS",
                "SMTP"
            ],
            correctAnswer: "HTTPS"
        },
        {
            question: "What is a VPN used for?",
            options: [
                "Increasing internet speed",
                "Creating a secure connection over a public network",
                "Downloading files quickly",
                "Watching videos online"
            ],
            correctAnswer: "Creating a secure connection over a public network"
        },
        {
            question: "What should you do if you suspect a device is infected with malware?",
            options: [
                "Ignore the issue and continue using the device",
                "Run a trusted antivirus or antimalware program",
                "Uninstall all software on the device",
                "Turn off the device and leave it alone"
            ],
            correctAnswer: "Run a trusted antivirus or antimalware program"
        }
    ];

    const handleAnswerSelected = (answer, correctAnswer) => {
        if (answeredQuestions.has(activeStep)) {
            return; // Prevent answering the same question again
        }

        if (answer === correctAnswer) {
            setScore(prevScore => prevScore + 1);
        }

        // Mark the question as answered
        setAnsweredQuestions(prev => new Set(prev).add(activeStep));

        if (activeStep < quizQuestions.length - 1) {
            setActiveStep(prevStep => prevStep + 1);
        } else {
            setIsQuizCompleted(true);
        }
    };

    const feedbacks = [
        {
            minPercentage: 90,
            color: 'green',
            icon: <CheckCircleIcon style={{ marginRight: 8 }} />,
            message: 'Excellent - You are very cybersecure!'
        },
        {
            minPercentage: 75,
            color: 'blue',
            icon: <SentimentVerySatisfiedIcon style={{ marginRight: 8 }} />,
            message: 'Very Good - You have a strong understanding of cybersecurity.'
        },
        {
            minPercentage: 50,
            color: 'orange',
            icon: <SentimentSatisfiedIcon style={{ marginRight: 8 }} />,
            message: 'Good - You have a fair understanding of cybersecurity.'
        },
        {
            minPercentage: 25,
            color: 'orange',
            icon: <WarningIcon style={{ marginRight: 8 }} />,
            message: 'Average - Your cybersecurity awareness could be improved.'
        },
        {
            minPercentage: 0,
            color: 'red',
            icon: <ErrorIcon style={{ marginRight: 8 }} />,
            message: 'Poor - You need to work on your cybersecurity knowledge.'
        }
    ];

    const restartQuiz = () => {
        setScore(0);
        setActiveStep(0);
        setIsQuizCompleted(false);
        setAnsweredQuestions(new Set()); // Reset answered questions
    };

    const getFeedback = () => {
        const percentage = (score / quizQuestions.length) * 100;
        const feedback = feedbacks.find(({ minPercentage }) => percentage >= minPercentage);

        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                my: 3
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: feedback.color,
                    bgcolor: `${feedback.color}15`,
                    padding: 2,
                    borderRadius: 2,
                    width: 'fit-content'
                }}>
                    {feedback.icon}
                    <Typography variant="h6">{feedback.message}</Typography>
                </Box>
                <Box sx={{ width: '100%', mt: 2 }}>
                    <LinearProgress
                        variant="determinate"
                        value={percentage}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: '#e0e0e0',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: feedback.color,
                            }
                        }}
                    />
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                        sx={{ mt: 1 }}
                    >
                        {`${Math.round(percentage)}% Complete`}
                    </Typography>
                </Box>
            </Box>
        );
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                py: 4
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    margin: 2,
                    maxWidth: 800,
                    width: '100%',
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Quiz Header */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 4,
                        borderBottom: '1px solid #eaeaea',
                        pb: 2
                    }}
                >
                    <SecurityIcon color="primary" sx={{ fontSize: 40 }} />
                    <Box>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                            Cybersecurity Challenge
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Test your knowledge of cybersecurity basics
                        </Typography>
                    </Box>
                </Box>

                {/* Progress Indicator */}
                {!isQuizCompleted && (
                    <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                                Question {activeStep + 1} of {quizQuestions.length}
                            </Typography>
                            <Chip
                                icon={<LockIcon />}
                                label={`Score: ${score}/${quizQuestions.length}`}
                                color="primary"
                                variant="outlined"
                            />
                        </Box>
                        <LinearProgress
                            variant="determinate"
                            value={(activeStep / quizQuestions.length) * 100}
                            sx={{
                                height: 10,
                                borderRadius: 5,
                                backgroundColor: '#e0e0e0',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#1976d2',
                                }
                            }}
                        />
                    </Box>
                )}

                {/* Carousel for Questions */}
                {!isQuizCompleted ? (
                    <Carousel
                        index={activeStep}
                        autoPlay={false}
                        sx={{ overflow: 'hidden' }}
                        navButtonsAlwaysInvisible={true}
                        indicators={false}
                    >
                        {quizQuestions.map((questionData, index) => (
                            <Question
                                key={index}
                                question={questionData.question}
                                options={questionData.options}
                                correctAnswer={questionData.correctAnswer}
                                onAnswerSelected={(answer) => handleAnswerSelected(answer, questionData.correctAnswer)}
                                answered={answeredQuestions.has(index)}
                            />
                        ))}
                    </Carousel>
                ) : (
                    getFeedback()
                )}

                {/* Quiz Completion Button */}
                {isQuizCompleted && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <Button variant="contained" color="primary" onClick={restartQuiz}>
                            Restart Quiz
                        </Button>
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default Quiz;
