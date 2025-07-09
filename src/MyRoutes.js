import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Quiz from "./Quiz";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CyberXApp, { AlumniApp } from "./components/Members";
import About from "./components/About";
import Resources from "./components/Resources";
import MagzineEntry from "./components/MagzineEntry";
import Magazine from "./components/Magzine";
import Contact from "./components/Contact";
import Event2025 from "./components/Event2025";
import Results from "./components/Results";

import InterviewEntryComponents from "./InterviewEntry.js";
import {
  PrincipalInterview_volume2,
  VPInterview_NM_volume2,
  VPInterview_AK_volume2,
  VPInterview_MK_volume2,
  InchargeMessage_volume2,
} from "./InterviewEntry.js";
const { InterviewEntry, GeneralEntry } = InterviewEntryComponents;

const MyRoutes = () => {
  const navConfig = {
    title: "CyberX",
    menuItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Members", href: "/members" },
      { label: "Alumni", href: "/alumini" },
      { label: "Resources", href: "/resources" },
      { label: "Events 2025", href: "/event2025" },
      { label: "Contact", href: "/contact" },
    ],
  };

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

  // CHECK WHAT CHANGES AI IS MAKING BEFORE IMPLEMENTING THEM!!!
  const resources = [
    {
      label: "Introduction to Cybersecurity",
      img: "/resources/intro2cyber.png",
      description: "A basic guide on Cybersecurity and Ethical Hacking.",
      author: "Numair Khan",
      postedAt: "2025-5-25",
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
      postedAt: "2024-07-24",
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
      postedAt: "2024-10-15",
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
      postedAt: "2024-07-24",
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
      urls: [
        "https://drive.google.com/file/d/1fUkmDSicRRzUAl6R1rBlZXWZ1-MmsPhS/view?usp=sharing",
      ],
    },
  ];

  return (
    <BrowserRouter>
      <Navbar config={navConfig} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/members" element={<CyberXApp />} />
        <Route path="/alumini" element={<AlumniApp />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/resources"
          element={<Resources resources={resources} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event2025" element={<Event2025 />} />
        <Route path="/results" element={<Results />} />
        <Route path="/magazine-2024/:slug" element={<Magazine />} />
        <Route
          path="/principals-message"
          element={<InterviewEntry {...PrincipalInterview_volume2} />}
        />
        <Route
          path="/vprincipal-nm-message"
          element={<InterviewEntry {...VPInterview_NM_volume2} />}
        />
        <Route
          path="/vprincipal-ak-message"
          element={<InterviewEntry {...VPInterview_AK_volume2} />}
        />
        <Route
          path="/vprincipal-mk-message"
          element={<InterviewEntry {...VPInterview_MK_volume2} />}
        />
        <Route
          path="/incharge-message"
          element={<GeneralEntry {...InchargeMessage_volume2} />}
        />
      </Routes>
      <Footer email={email} socialMedia={socialMedia} />
    </BrowserRouter>
  );
};

export default MyRoutes;
