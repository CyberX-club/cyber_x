import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from "@mui/material";
import MatrixBackground from "./MatrixBackground";
import { motion } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Results = () => {
  const results = [
    {
      eventName: "Camistic",
      color: "#ff7f50",
      winners: [
        {
          position: "FIRST",
          school: "DELHI PUBLIC SCHOOL SUSHANT LOK",
          participants: "SAANVI GUPTA, AARAV MAHENDRU",
        },
        {
          position: "SECOND",
          school: "DELHI PUBLIC SCHOOL GREATER FARIDABAD",
          participants: "NOBONITA BAKSHI, NIMISHA KASHYAP BORUAH",
        },
        {
          position: "THIRD",
          school: "BIRLA VIDYA NIKETAN",
          participants: "KHYATI JASWANI, AADRITA BISWAS",
        },
      ],
    },
    {
      eventName: "ReconX",
      color: "#ff5a5a",
      winners: [
        {
          position: "FIRST",
          school: "AMITY INTERNATIONAL SCHOOL SECTOR FORTY SIX",
          participants: "SHYAMAK SETH, ISHIT RASTOGI",
        },
        {
          position: "SECOND",
          school: "TAGORE INTERNATIONAL SCHOOL VASANT VIHAR",
          participants: "AKSHAT HATWAL, MEDHANSH MATHUR",
        },
        {
          position: "THIRD",
          school: "BAL BHARATI PUBLIC SCHOOL PITAMPURA",
          participants: "ARNAV NAGPAL, SAISHA KOHLI",
        },
      ],
    },
    {
      eventName: "Phishing Phantom",
      color: "#9966ff",
      winners: [
        {
          position: "FIRST",
          school: "THE INDIAN SCHOOL",
          participants: "UNNABH DASMAHAPATRA, TANMAY VIRMANI",
        },
        {
          position: "SECOND",
          school: "VISHWA BHARTI PUBLIC SCHOOL (Team 1)",
          participants: "HARSHITA NEGI, KAVYA DHAR",
        },
        {
          position: "THIRD",
          school: "DPS SUSHANT LOK (Team 2)",
          participants: "WRITOSHREE BISWAS, HARDIK DHEER",
        },
      ],
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const positionColors = {
    FIRST: "#ffdf00",
    SECOND: "#c0c0c0",
    THIRD: "#cd7f32",
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      <MatrixBackground />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, py: 8 }}>
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Typography
            variant="h2"
            align="center"
            fontFamily="Space Mono"
            sx={{
              color: "white",
              mb: 8,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            DXC'26 Results
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
                color: "white",
                mb: 4,
                letterSpacing: 1,
              }}
            >
              {event.eventName}
            </Typography>

            <TableContainer
              sx={{
                backgroundColor: "rgba(20, 20, 20, 0.85)",
                borderRadius: 2,
                overflow: "hidden",
                border: `1px solid ${event.color}`,
                boxShadow: `0 0 20px rgba(0, 0, 0, 0.7)`,
              }}
            >
              <Table>
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: `${event.color}15`,
                    }}
                  >
                    <TableCell
                      sx={{
                        color: "white",
                        fontFamily: "Space Mono",
                        fontWeight: "bold",
                        borderBottom: `2px solid ${event.color}`,
                        py: 2,
                        width: "20%",
                      }}
                    >
                      Position
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        fontFamily: "Space Mono",
                        fontWeight: "bold",
                        borderBottom: `2px solid ${event.color}`,
                        py: 2,
                        width: "35%",
                      }}
                    >
                      School
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        fontFamily: "Space Mono",
                        fontWeight: "bold",
                        borderBottom: `2px solid ${event.color}`,
                        py: 2,
                        width: "35%",
                      }}
                    >
                      Participants
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        fontFamily: "Space Mono",
                        fontWeight: "bold",
                        borderBottom: `2px solid ${event.color}`,
                        py: 2,
                        width: "10%",
                        display: "none",
                      }}
                    >
                      Files
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {event.winners.map((winner, i) => (
                    <TableRow
                      key={i}
                      sx={{
                        "&:hover": {
                          backgroundColor: `${event.color}30`,
                        },
                        transition: "background-color 0.2s",
                        borderBottom:
                          i < event.winners.length - 1
                            ? `1px solid ${event.color}30`
                            : "none",
                      }}
                    >
                      <TableCell
                        sx={{
                          color: positionColors[winner.position],
                          fontWeight: "bold",
                          fontFamily: "Space Mono",
                          py: 3,
                          borderBottom: "none",
                          textShadow:
                            winner.position === "FIRST"
                              ? `0 0 5px ${positionColors[winner.position]}80`
                              : "none",
                        }}
                      >
                        {winner.position}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "white",
                          fontFamily: "Space Mono",
                          py: 3,
                          borderBottom: "none",
                        }}
                      >
                        {winner.school}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "white",
                          fontFamily: "Space Mono",
                          py: 3,
                          borderBottom: "none",
                        }}
                      >
                        {winner.participants}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "white",
                          fontFamily: "Space Mono",
                          py: 3,
                          borderBottom: "none",
                          textAlign: "center",
                          display: "none",
                        }}
                      >
                        <OpenInNewIcon
                          sx={{
                            color: event.color,
                            transition: "transform 0.2s",
                            "&:hover": {
                              transform: "scale(1.2)",
                            },
                          }}
                        />
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
