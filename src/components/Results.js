import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@mui/material';
import MatrixBackground from './MatrixBackground';
import { motion } from 'framer-motion';

const Results = () => {
  const results = [
    {
      eventName: 'ReconX',
      winners: [
        { position: 'FIRST', school: 'DPS SUSHANT LOK', participants: 'DESVANSH YADAV, AARYAN PARVEEN' },
        { position: 'SECOND', school: 'AMITY INTERNATIONAL SCHOOL SECTOR 46', participants: 'ISHIT, SHAMAR' },
        { position: 'THIRD', school: 'TAGORE INTERNATIONAL EAST OF KAILASH', participants: 'MEHAR GUVALANI, MISHIKA' }
      ]
    },
    {
      eventName: 'Phishing Phantom',
      winners: [
        { position: 'FIRST', school: 'DPS PANIPAT REFINERY', participants: 'PARIMOKSHA, AAKANCHA SAHU' },
        { position: 'SECOND', school: 'RYAN INTERNATIONAL SCHOOL', participants: 'MACHUN, ARSHIYA' },
        { position: 'THIRD', school: 'SPRINGDALES SCHOOL DHAULA KUAN', participants: 'SAION GUPTA, ADITYA GUPTA' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <MatrixBackground />
      <Box sx={{ position: 'relative', zIndex: 2, p: { xs: 2, sm: 4 }, minHeight: '100vh' }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          fontFamily="Space Mono"
          sx={{
            color: 'white',
            mb: 6,
            textShadow: '0 0 10px rgba(0, 255, 0, 0.7)'
          }}
        >
          Event 2025 Results
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {results.map((event, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h4"
                    fontFamily="Space Mono"
                    color="white"
                    align="center"
                    sx={{ mb: 3, textShadow: event.eventName === 'ReconX' 
                      ? '0 0 8px rgba(255, 100, 100, 0.6)' 
                      : '0 0 8px rgba(180, 100, 255, 0.6)'
                    }}
                  >
                    {event.eventName}
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <TableContainer 
                    component={Paper} 
                    sx={{ 
                      backgroundColor: 'rgba(15, 15, 15, 0.85)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                      border: event.eventName === 'ReconX' 
                        ? '1px solid rgba(255, 100, 100, 0.3)' 
                        : '1px solid rgba(180, 100, 255, 0.3)',
                      mb: 6
                    }}
                  >
                    <Table>
                      <TableHead>
                        <TableRow sx={{ 
                          backgroundColor: event.eventName === 'ReconX' 
                            ? 'rgba(255, 100, 100, 0.15)'
                            : 'rgba(180, 100, 255, 0.15)'
                        }}>
                          <TableCell 
                            sx={{ 
                              color: 'white', 
                              fontFamily: 'Space Mono', 
                              fontWeight: 'bold',
                              width: '15%' 
                            }}
                          >
                            Position
                          </TableCell>
                          <TableCell 
                            sx={{ 
                              color: 'white', 
                              fontFamily: 'Space Mono', 
                              fontWeight: 'bold',
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
                              width: '45%'
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
                                backgroundColor: event.eventName === 'ReconX' 
                                  ? 'rgba(255, 100, 100, 0.1)' 
                                  : 'rgba(180, 100, 255, 0.1)'
                              },
                              backgroundColor: winner.position === 'FIRST' 
                                ? 'rgba(255, 215, 0, 0.1)'
                                : 'transparent'
                            }}
                          >
                            <TableCell 
                              sx={{ 
                                color: winner.position === 'FIRST' 
                                  ? 'gold' 
                                  : winner.position === 'SECOND' 
                                    ? 'silver' 
                                    : '#cd7f32',
                                fontWeight: 'bold',
                                fontFamily: 'Space Mono',
                                textShadow: winner.position === 'FIRST' 
                                  ? '0 0 5px rgba(255, 215, 0, 0.5)' 
                                  : 'none'
                              }}
                            >
                              {winner.position}
                            </TableCell>
                            <TableCell sx={{ color: 'white', fontFamily: 'Space Mono' }}>
                              {winner.school}
                            </TableCell>
                            <TableCell sx={{ color: 'white', fontFamily: 'Space Mono' }}>
                              {winner.participants}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Results;