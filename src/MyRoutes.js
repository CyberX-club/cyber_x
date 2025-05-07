import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Quiz from "./Quiz";
import Navbar from "./Navbar";
import CyberXApp, { AlumniApp } from "./components/Members";
import { Box, Container, Switch, Typography } from "@mui/material";
import Footer from "./Footer";
import About from "./components/About";
import Resources from "./components/Resources";
import MagzineEntry from "./components/MagzineEntry";
import InterviewEntry from "./InterviewEntry";
import Magazine from "./components/Magzine";

const email = "cybersecurity@dpsrkp.net";

const socialMedia = [
  { platform: "Facebook", url: "https://www.facebook.com/CyberX" },
  { platform: "Twitter", url: "https://twitter.com/CyberX" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/company/cyberx" },
  { platform: "GitHub", url: "https://github.com/CyberX-club/" },
  { platform: "Instagram", url: "https://www.instagram.com/CyberX.CLUB" },
];

const resources = [
  {
    label: "Shielding Cyber Attacks",
    img: "protection_against.png",
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
    img: "ser-bg2.jpg",
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
    img: "ser-bg.jpg",
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
    img: "ser-bg.jpeg",
    urls: [
      "https://drive.google.com/file/d/1hGLfmLrqDPV1cxBc6HdeLU4cLPxGPMZ2/view?usp=sharing",
    ],
  },
  {
    label: "DPSRKP Cyber Security Brochure",
    description:
      "Stay up-to-date with the latest news and trends in the world of cyber security, including recent cyber attacks, vulnerabilities, and patches.",
    img: "dpsrkpcyberx.png",
    urls: [
      "https://drive.google.com/file/d/1fUkmDSicRRzUAl6R1rBlZXWZ1-MmsPhS/view?usp=sharing",
    ],
  },
];

const interviewData = {
  title: "Principal's Interview",
  subtitle: "Insights on Digital Ethics & Cyber Safety",
  imageSrc: "https://i.imgur.com/xZ2fhmf.jpeg",
  questions: [
    "The concept of 'Dharma' in Hindu philosophy encourages fulfilling one’s duty with integrity and ethical conduct. In a world where online privacy and security are frequently compromised, what ethical values would you like to instil in our school community to navigate the digital space responsibly?",
    "With social media having become such a big part of students’ lives, what advice would you give about staying secure and protecting privacy online?",
    "In your opinion, what are the biggest challenges schools face when it comes to integrating technology effectively?",
    "Have you ever had a personal experience with the digital world—whether it was dealing with a security issue, protecting your own digital information, or learning something new about online safety? We'd love to hear about any moments that highlighted the importance of cyber safety for you."
  ],
  answers: [
    "Was Arjun a good or bad person? Was he right? Dharma is defined differently depending on one's viewpoint, the situation, and the moment. However, the core principles of Dharma educate us to act with integrity and truthfulness,They also inspire us to practise honesty and empathy. ",
    "I would say to make the most of it. By this, I intend to use it as 'judiciously' as possible. Like beverages, it has the inherited ability to release dopamine. One must avoid becoming dependent on it. Never disclose passwords, keep your privacy settings strict, and refrain from disclosing personal details. Keep in mind that everything you do online creates a digital footprint, so choose wisely! Keep in mind that you made it. Instead of becoming its slave, be its ruler.",
    "Inexperience. The overuse of technology is what is dangerous, not the technology itself.The most difficult task is striking a balance between the access to technology access and its thoughtful use. Although technology can improve learning, it's crucial to ensure that children are aware of the risks and utilise it sensibly. One of the most crucial issues to overcome is immaturity with regard to its use. The next step on the list is to accept your shortcomings.",
    "Yes, I have experienced a similar situation, which made me see how easily private data may be compromised. I informed the police about the situation. "
  ]
};

export default function Main() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<CyberXApp />} />
        <Route path="/alumni" element={<AlumniApp />} />
        <Route path="/resources" element={<Resources resources={resources} />} />
        <Route path="/magazine-entry" element={<MagzineEntry />} />
        <Route path="/interview" element={<InterviewEntry data={interviewData} />} />
        <Route path="/magazine" element={<Magazine />} />
      </Routes>
      <Footer email={email} socialMedia={socialMedia} />
    </BrowserRouter>
  );
}
