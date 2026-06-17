import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Button, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import App from "./App";
import Quiz from "./Quiz";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CyberXApp from "./components/Members";
import AlumniPage from "./components/Alumni";
import About from "./components/About";
import Resources from "./components/Resources";
import Magazine from "./components/Magazine";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Results from "./components/Results";
import ScrollToTop from "./components/ScrollToTop";
import { Navigate } from "react-router-dom";

import { InterviewEntry } from "./InterviewEntry.js";
import {
  PrincipalInterviewPage,
  MukeshKumarInterviewPage,
  AnilKathuriaInterviewPage,
  NareshMiglaniInterviewPage,
  SarikaKaushalInterviewPage,
  RashmiMalhotraInterviewPage,
  ShaliniHarisukhInterviewPage,
} from "./interviewData";

const navConfig = {
  title: "CyberX",
  menuItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Members", href: "/members" },
    { label: "Resources", href: "/resources" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ],
};

const announcementBarHeight = 44;

const email = "cybersecurity@dpsrkp.net";

const socialMedia = [
  { platform: "Twitter", url: "https://x.com/ClubCyberx" },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/cyberx-club-221535326",
  },
  { platform: "GitHub", url: "https://github.com/CyberX-club/" },
  { platform: "Instagram", url: "https://www.instagram.com/CyberX.CLUB" },
];

const resources = [
  {
    label: "Investigating AI-Powered Social Engineering Attacks",
    img: "/resources/ai.jpg",
    description:
      "The rapid developments in artificial intelligence are potentially making some facets of technology better, however, it has also given rise to unprecedented opportunities for cybercriminals. This paper will discuss the recent emerging threat of artificial intelligence accelerated social engineering attack patterns as fraudsters leverage deepfake technology, voice cloning, and AI chatbots to impersonate trusted individuals and associates.",
    author: "Numair Khan",
    urls: [
      "https://drive.google.com/file/d/11zmKM5fsuL93ut19Hz7NLtQ7ZnVwgcSM/view?usp=sharing",
    ],
  },
  {
    label: "Unlocking the Mathematical Code Behind Cybersecurity",
    img: "/resources/math.jpg",
    description:
      "This paper aims to demystify the mathematical foundations of cybersecurity, making them understandable for high schoolers and educators, and highlights the urgent need for basic cybersecurity awareness in Indian classrooms.",
    author: "Shesh Shiromani",
    urls: [
      "https://drive.google.com/file/d/1AJ4EOu0BVmBFAR3AgyDOqnUvyfnLhS8E/view?usp=sharing",
    ],
  },
  {
    label: "Introduction to Cybersecurity",
    img: "/resources/intro2cyber.png",
    description: "A basic guide on Cybersecurity and Ethical Hacking.",
    author: "Numair Khan",
    urls: [
      "https://drive.google.com/file/d/1CRrhDCgtBJuAFayQLEk2yNJ2pHz7uU03/view?usp=sharing",
    ],
  },
  {
    label: "Shielding Cyber Attacks",
    img: "/resources/protection_against.png",
    description:
      "Guarding the Future: Your First Line of Defense Against Cyber Attacks",
    author: "Goutam Behera",
    urls: [
      "https://drive.google.com/file/d/1zVQ4w58pCVHm200fSv9PkDMwW8ET3deU/view?usp=drive_link",
    ],
  },
  {
    label: "Cyber Security Awareness Guide",
    description:
      "A comprehensive guide on the best practices for staying safe online, covering topics such as password management, phishing, and social engineering.",
    img: "/resources/ser-bg2.jpg",
    author: "Atharva Singh",
    urls: [
      "https://drive.google.com/file/d/1CBtkmEu_aHNBnOQJqCHB02_py61Ed1PD/view?usp=sharing",
    ],
  },
  {
    label: "Intro To Trending Cyber Crime Attacks Over Network",
    description:
      "Your Guide to the Top Web Application Security Risks and How to Defend Against Them: A Comprehensive Resource on the Latest Network Security Threats",
    img: "/resources/ser-bg.jpg",
    author: "Goutam Behera",
    urls: [
      "https://drive.google.com/file/d/19lYngEhdcWWgF4PEE_4W4-nzzBxnpg4Z/view?usp=sharing",
    ],
  },
  {
    label: "Introduction to Network Security",
    description:
      "This PDF resource covers the fundamentals of network security, including firewalls, intrusion detection systems, and secure protocols.",
    author: "Atharva Singh",
    img: "/resources/ser-bg.jpeg",
    urls: [
      "https://drive.google.com/file/d/1hGLfmLrqDPV1cxBc6HdeLU4cLPxGPMZ2/view?usp=sharing",
    ],
  },
  {
    label: "DPSRKP Cyber Security Brochure",
    description:
      "Stay up-to-date with the latest news and trends in the world of cyber security, including recent cyber attacks, vulnerabilities, and patches.",
    img: "/resources/dpsrkpcyberx.png",
    author: "CyberX Team",
    urls: [
      "https://drive.google.com/file/d/1fUkmDSicRRzUAl6R1rBlZXWZ1-MmsPhS/view?usp=sharing",
    ],
  },
];

const MyRoutes = () => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {showAlert ? (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: (theme) => theme.zIndex.appBar + 2,
            backgroundColor: "#240854",
            color: "#ffffff",
            py: 1.2,
            px: 6,
            textAlign: "center",
            fontSize: "0.9rem",
            fontWeight: 700,
            fontFamily: "Space Mono",
            letterSpacing: 1.5,
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            minHeight: announcementBarHeight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          CIPHER'26 IS OUT!
          <Button
            variant="text"
            onClick={() => window.location.assign("/cipher-26")}
            sx={{
              color: "#ffffff",
              textDecoration: "underline",
              minWidth: "auto",
              p: 0,
              ml: 1,
              fontSize: "0.9rem",
              fontWeight: 700,
              fontFamily: "Space Mono",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#ffffff",
              },
            }}
          >
            View Magazine
          </Button>
          <IconButton
            onClick={() => setShowAlert(false)}
            sx={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#ffffff",
              opacity: 0.9,
              "&:hover": {
                opacity: 1,
                color: "#00B8FF",
                backgroundColor: "transparent",
              },
            }}
          >
            <CloseRoundedIcon sx={{ fontSize: 22 }} />
          </IconButton>
        </Box>
      ) : null}
      <Navbar config={navConfig} topOffset={showAlert ? announcementBarHeight : 0} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/members" element={<CyberXApp />} />
        <Route path="/alumini" element={<AlumniPage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/resources"
          element={<Resources resources={resources} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/results" element={<Results />} />
        <Route path="/cipher-26" element={<Magazine />} />
        <Route path="/magzine" element={<Navigate to="/cipher-26" replace />} />
        <Route path="/magazine" element={<Navigate to="/cipher-26" replace />} />
        <Route
          path="/magazine-2024/:slug"
          element={<Navigate to="/cipher-26" replace />}
        />
        <Route
          path="/interviews/principal"
          element={<InterviewEntry {...PrincipalInterviewPage} />}
        />
        <Route
          path="/interviews/mukesh-kumar"
          element={<InterviewEntry {...MukeshKumarInterviewPage} />}
        />
        <Route
          path="/interviews/anil-kathuria"
          element={<InterviewEntry {...AnilKathuriaInterviewPage} />}
        />
        <Route
          path="/interviews/naresh-miglani"
          element={<InterviewEntry {...NareshMiglaniInterviewPage} />}
        />
        <Route
          path="/interviews/sarika-kaushal"
          element={<InterviewEntry {...SarikaKaushalInterviewPage} />}
        />
        <Route
          path="/interviews/rashmi-malhotra"
          element={<InterviewEntry {...RashmiMalhotraInterviewPage} />}
        />
        <Route
          path="/interviews/shalini-harisukh"
          element={<InterviewEntry {...ShaliniHarisukhInterviewPage} />}
        />
      </Routes>
      <Footer email={email} socialMedia={socialMedia} />
    </BrowserRouter>
  );
};

export default MyRoutes;