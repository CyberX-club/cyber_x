import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Quiz from "./Quiz";
import Navbar from "./Navbar";
import React from "react";
import CyberXApp, { AlumniApp } from "./components/Members";
import { Box, Container, Switch, Typography } from "@mui/material";
import Footer from "./Footer";
import About from "./components/About";
import Resources from "./components/Resources";
import MagzineEntry from "./components/MagzineEntry";
import  InterviewEntry from "./InterviewEntry";
import Magazine from "./components/Magzine";
import Contact from './components/Contact';


const MyRoutes = () => {
  const navConfig = {
    title: "CyberX",
    menuItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Members", href: "/members" },
      { label: "Alumni", href: "/alumini" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", onClick: () => console.log("Contact clicked") },
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

  const resources = [
@@ -157,41 +159,43 @@
    answers: [
      "Absolutely! In Indian culture, we've always valued being cautious and prepared. We can apply this mindset by teaching students to think ahead by inculcating cyber safe practices like using strong passwords, avoiding suspicious links, and keeping personal information safe. It's all about making students aware of digital risks, so they can avoid problems before they happen.",

      "Cyber awareness is more important than ever. Our lives are so interconnected online, and any lack of awareness can lead to serious risks—like identity theft or hacking. If students understand basic cyber hygiene, like identifying phishing emails or being cautious with their passwords, they can avoid a lot of the common threats out there. It's about building a safer digital environment for everyone.",

      "We can start by educating students about how cybersecurity is relevant to them. For example, explain how their social media privacy is at risk or how to keep their data safe. Hands-on activities like workshops, games, or competitions can make learning fun and interactive. The key is making it feel accessible and showing how anyone—whether they're tech-savvy or not—can play a role in staying secure online.",

      "Students can make a big difference by promoting a safe and secure environment online and being role models for respectful behaviour. We can educate each other about the harms of cyberbullying and encourage students to speak up if they experience or witness it. When it comes to hacking, showing how tech skills can be used ethically—like in cyberX or hackathons—helps students understand the positive impact they can have with their abilities.",

      "Students should adopt simple but effective habits—such as being extra cautious with their information, and being careful with what they share online. Schools can play a role by offering training and regular updates about digital security. The more we educate students about respecting privacy and being cautious online, the safer everyone will be."
    ]
  };



  return (
    <BrowserRouter>
      <Navbar config={navConfig} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={"/quiz"} element={<Quiz />} />
        <Route path={"/members"} element={<CyberXApp />} />
        <Route path={"/alumini"} element={<AlumniApp />} />
        <Route path={"/about"} element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path={"/resources"}
          element={<Resources resources={resources} />}
        />
        <Route path="/magazine-2024/:slug" element={<Magazine />} />
        <Route path="/principals-message" element={<InterviewEntry {...interviewData}/>} />
        <Route path="/vprincipal-m-s-message" element={<InterviewEntry {...vpcInterviewData}/>} />
        <Route path="/vprincipal-a-s-message" element={<InterviewEntry {...vpCyberSecurityInterviewData}/>} />

      </Routes>

      <Footer email={email} socialMedia={socialMedia} />
    </BrowserRouter>
  );
};

export default MyRoutes;
