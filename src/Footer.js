import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Tooltip,
  Link,
} from "@mui/material";
import { Email } from "@mui/icons-material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Instagram,
} from "@mui/icons-material";

const getIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case "facebook":
      return <Facebook />;
    case "twitter":
      return <Twitter />;
    case "linkedin":
      return <LinkedIn />;
    case "github":
      return <GitHub />;
    case "instagram":
      return <Instagram />;
    default:
      return null;
  }
};

const Footer = ({ email, socialMedia = [] }) => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "background.paper", py: 3, mt: 5 }}
      id="contact"
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" gutterBottom>
          &copy; 2025 CyberX DPSRKP. All rights reserved.
        </Typography>

        <Box display="flex" justifyContent="center" mb={2}>
          {socialMedia.length > 0 &&
            socialMedia.map((item, index) => (
              <Tooltip title={item.platform} key={index}>
                <IconButton
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "goldenrod", marginRight: "0.5rem" }}
                >
                  {getIcon(item.platform)}
                </IconButton>
              </Tooltip>
            ))}
        </Box>

        {email && (
          <Link
            href={`mailto:${email}`}
            underline="hover"
            color="textPrimary"
            align="center"
          >
            <Typography variant="body2" align="center" gutterBottom>
              <Email sx={{ verticalAlign: "middle", marginRight: "0.5rem" }} />
              {email}
            </Typography>
          </Link>
        )}
      </Container>
    </Box>
  );
};

export default Footer;
