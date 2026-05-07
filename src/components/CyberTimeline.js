import React from "react";
import { Box, Container } from "@mui/material";
import FocusArea from "./FocusArea";
const CyberTimeline = () => (
  <Box
    sx={{
      py: 8,
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    }}
  >
    <Container>
      <FocusArea />
    </Container>
  </Box>
);
export default CyberTimeline;
