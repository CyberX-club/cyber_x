import Carousel from "react-material-ui-carousel";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import Question from "./Question";
import { Box, Paper, Typography, Button, LinearProgress, Chip, Backdrop, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
    const [loading, setLoading] = useState(true); // State to track loading status

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

    const feedbacks = [
        {
            minPercentage: 90,
            color: 'green',
            icon: <CheckCircleIcon style={{marginRight: 8}} />,
            message: 'Excellent - You are very cybersecure!'
        },
        {
            minPercentage: 75,
            color: 'blue',
            icon: <SentimentVerySatisfiedIcon style={{marginRight: 8}} />,
            message: 'Very Good - You have a strong understanding of cybersecurity.'
        },
        {
            minPercentage: 50,
            color: 'orange',
            icon: <SentimentSatisfiedIcon style={{marginRight: 8}} />,
            message: 'Good - You have a fair understanding of cybersecurity.'
        },
        {
            minPercentage: 25,
            color: 'orange',
            icon: <WarningIcon style={{marginRight: 8}} />,
            message: 'Average - Your cybersecurity awareness could be improved.'
        },
        {
            minPercentage: 0,
            color: 'red',
            icon: <ErrorIcon style={{marginRight: 8}} />,
            message: 'Poor - You need to work on your cybersecurity knowledge.'
        }
    ];

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after content is ready
        }, 1500);

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

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

    const handleAnswerSelected = (answer, correctAnswer) => {
        if (answeredQuestions.has(activeStep)) {
            return; // Prevent answering the same question again
        }

        if (answer === correctAnswer) {
            setScore(prevScore => prevScore + 1);
        }

        setAnsweredQuestions(prev => new Set(prev).add(activeStep));

        if (activeStep < quizQuestions.length - 1) {
            setActiveStep(prevStep => prevStep + 1);
        } else {
            setIsQuizCompleted(true);
        }
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
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            {!loading && (
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

                    {!isQuizCompleted && (
                        <Box sx={{ mb: 3 }}>
                            <Carousel autoPlay={false} index={activeStep} animation="slide">
                                {quizQuestions.map((question, index) => (
                                    <Question
                                        key={index}
                                        question={question}
                                        onAnswerSelected={handleAnswerSelected}
                                        isAnswered={answeredQuestions.has(index)}
                                    />
                                ))}
                            </Carousel>
                        </Box>
                    )}

                    {isQuizCompleted && getFeedback()}

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        {isQuizCompleted ? (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={restartQuiz}
                                startIcon={<LockIcon />}
                            >
                                Restart Quiz
                            </Button>
                        ) : (
                            <Chip
                                label={`Question ${activeStep + 1} of ${quizQuestions.length}`}
                                color="primary"
                                size="small"
                            />
                        )}
                    </Box>
                </Paper>
            )}
        </Box>
    );
};

export default Quiz;
