import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container } from '@mui/material';
import MatrixBackground from './MatrixBackground';
import { motion } from 'framer-motion';

const Results = () => {
  const results = [
    {
      eventName: 'ReconX',
      color: '#ff5a5a',
      winners: [
        { position: 'FIRST', school: 'DPS SUSHANT LOK', participants: 'DESVANSH YADAV, AARYAN PARVEEN' },
        { position: 'SECOND', school: 'AMITY INTERNATIONAL SCHOOL SECTOR 46', participants: 'ISHIT, SHAMAR' },
        { position: 'THIRD', school: 'TAGORE INTERNATIONAL EAST OF KAILASH', participants: 'MEHAR GUVALANI, MISHIKA' }
      ]
    },
    {
      eventName: 'Phishing Phantom',
      color: '#9966ff',
      winners: [
        { position: 'FIRST', school: 'DPS PANIPAT REFINERY', participants: 'PARIMOKSHA, AAKANCHA SAHU' },
        { position: 'SECOND', school: 'RYAN INTERNATIONAL SCHOOL', participants: 'MACHUN, ARSHIYA' },
        { position: 'THIRD', school: 'SPRINGDALES SCHOOL DHAULA KUAN', participants: 'SAION GUPTA, ADITYA GUPTA' }
      ]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const positionColors = {
    FIRST: '#ffdf00',
    SECOND: '#c0c0c0',
    THIRD: '#cd7f32'
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <MatrixBackground />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Typography
            variant="h2"
            align="center"
            fontFamily="Space Mono"
            sx={{
              color: 'white',
              textShadow: '0 0 10px rgba(0, 255, 0, 0.7)',
              mb: 8,
              fontWeight: 700,
              letterSpacing: 2
            }}
          >
            Event 2025 Results
          </Typography>
        </motion.div>

        {results.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{ marginBottom: 80 }}
          >
            <Typography
              variant="h3"
              fontFamily="Space Mono"
              align="center"
              sx={{ 
                color: 'white',
                textShadow: `0 0 10px ${event.color}`,
                mb: 4,
                letterSpacing: 1
              }}
            >
              {event.eventName}
            </Typography>

            <TableContainer sx={{ 
              backgroundColor: 'rgba(20, 20, 20, 0.85)',
              borderRadius: 2,
              overflow: 'hidden',
              border: `1px solid ${event.color}`,
              boxShadow: `0 0 20px rgba(0, 0, 0, 0.7)`,
            }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ 
                    backgroundColor: `${event.color}15`
                  }}>
                    <TableCell 
                      sx={{ 
                        color: 'white', 
                        fontFamily: 'Space Mono',
                        fontWeight: 'bold',
                        borderBottom: `2px solid ${event.color}`,
                        py: 2,
                        width: '20%'
                      }}
                    >
                      Position
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        color: 'white', 
                        fontFamily: 'Space Mono',
                        fontWeight: 'bold',
                        borderBottom: `2px solid ${event.color}`,
                        py: 2,
                        width: '40%'
                      }}
                    >
                      School
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        color: 'white', 
                        fontFamily: 'Space Mono',
                        fontWeight: 'bold',
                        borderBottom: `2px solid ${event.color}`,
                        py: 2,
                        width: '40%'
                      }}
                    >
                      Participants
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {event.winners.map((winner, i) => (
                    <TableRow 
                      key={i}
                      sx={{ 
                        '&:hover': { 
                          backgroundColor: `${event.color}15`,
                        },
                        transition: 'background-color 0.2s',
                        borderBottom: i < event.winners.length - 1 ? `1px solid ${event.color}30` : 'none'
                      }}
                    >
                      <TableCell 
                        sx={{ 
                          color: positionColors[winner.position],
                          fontWeight: 'bold',
                          fontFamily: 'Space Mono',
                          py: 3,
                          borderBottom: 'none',
                          textShadow: winner.position === 'FIRST' ? `0 0 5px ${positionColors[winner.position]}80` : 'none'
                        }}
                      >
                        {winner.position}
                      </TableCell>
                      <TableCell 
                        sx={{ 
                          color: 'white', 
                          fontFamily: 'Space Mono',
                          py: 3,
                          borderBottom: 'none'
                        }}
                      >
                        {winner.school}
                      </TableCell>
                      <TableCell 
                        sx={{ 
                          color: 'white', 
                          fontFamily: 'Space Mono',
                          py: 3,
                          borderBottom: 'none'
                        }}
                      >
                        {winner.participants}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default Results;