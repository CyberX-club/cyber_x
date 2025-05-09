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
import InterviewEntry, {
  interviewData,
  vpcInterviewData,
  vpCyberSecurityInterviewData,
} from "./InterviewEntry.js";
import Magazine from "./components/Magzine";
import Contact from "./components/Contact";
import Event2025 from "./components/Event2025"; // NEW

const MyRoutes = () => {
  const navConfig = {
    title: "CyberX",
    menuItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Members", href: "/members" },
      { label: "Alumni", href: "/alumini" },
      { label: "Resources", href: "/resources" },
      { label: "Events 2025", href: "/event2025" }, // NEW
      { label: "Contact", href: "/contact" },
    ],
  };

  const email = "cybersecurity@dpsrkp.net";
  const socialMedia = [
    { platform: "Facebook", url: "https://www.facebook.com/CyberX" },
    { platform: "Twitter", url: "https://twitter.com/CyberX" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/cyberx" },
    { platform: "GitHub", url: "https://github.com/CyberX-club/" },
    { platform: "Instagram", url: "https://www.instagram.com/CyberX.CLUB" },
  ];

  const resources = {
    answers: [
      "Absolutely! In Indian culture, we've always valued being cautious and prepared...",
      "Cyber awareness is more important than ever...",
      "We can start by educating students about how cybersecurity is relevant to them...",
      "Students can make a big difference by promoting a safe and secure environment...",
      "Students should adopt simple but effective habits..."
    ],
  };

  return (
      <BrowserRouter>
        <Navbar config={navConfig} />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/members" element={<CyberXApp />} />
          <Route path="/alumini" element={<AlumniApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources resources={resources} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event2025" element={<Event2025 />} /> {/* NEW */}
          <Route path="/magazine-2024/:slug" element={<Magazine />} />
          <Route path="/principals-message" element={<InterviewEntry {...interviewData} />} />
          <Route path="/vprincipal-m-s-message" element={<InterviewEntry {...vpcInterviewData} />} />
          <Route path="/vprincipal-a-s-message" element={<InterviewEntry {...vpCyberSecurityInterviewData} />} />
        </Routes>
        <Footer email={email} socialMedia={socialMedia} />
      </BrowserRouter>
  );
};

export default MyRoutes;
