// src/components/Magazine.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Endpoints from "../Endpoints";
import MagzineEntry from "./MagzineEntry";
import { Box, CircularProgress } from "@mui/material";
import { Alert } from "@mui/lab";

const Magazine = () => {
  const { slug } = useParams();
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(slug);
  useEffect(() => {
    const fetchMagazineEntry = async () => {
      try {
        setLoading(true);
        const response = await axios.get(Endpoints.get_magazine_entry(slug));
        setEntry(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch magazine entry. Please try again later.");
        setLoading(false);
      }
    };

    fetchMagazineEntry();
  }, [slug]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && !entry && (
        <Alert severity="warning">No magazine entry found.</Alert>
      )}
      {!loading && !error && entry && (
        <MagzineEntry
          title={entry.title}
          author={entry.author}
          images={entry.images}
          text={entry.content}
          imagePositions={entry.imagePositions}
        />
      )}
    </Box>
  );
};

export default Magazine;
