import React from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import CyberTimeline from "./components/CyberTimeline";
import Events from "./components/Events";
import { SponsorSection } from "./components/Section";
import { Box } from "@mui/material";
import StickyAlert from "./components/StickyAlert";
import { useScroll, useTransform, motion } from "framer-motion";

const Sections = ({ children }) => <div id="sections">{children}</div>;

const sponsors = [
  {
    name: "Manav Rachna",
    image: "/ManavRachna.png",
    link: "https://manavrachna.edu.in/",
  },
  {
    name: "Pebble India",
    image: "/pebble.png",
    link: "https://pebbleindia.in/",
  },
  {
    name: "Malhotra Color Labs",
    image: "/Malhotra.png",
    link: "https://www.facebook.com/people/Malhotra-Color-Lab/100063600862644/",
  },
  {
    name: "Express Builders",
    image: "/ExpressBuilders.png",
    link: "https://expressbuildersltd.com/",
  },
  {
    name: "Smiling Tree",
    image: "/SmilingTree.png",
    link: "https://smilingtree.in/",
  },
];

const App = () => {
  const { scrollY } = useScroll();
  // Hide alerts when scrolled past 80% of the viewport height
  const opacity = useTransform(scrollY, [0, window.innerHeight * 0.8], [1, 0]);
  const pointerEvents = useTransform(scrollY, (value) => 
    value > window.innerHeight * 0.8 ? "none" : "auto"
  );

  return (
    <>
      <motion.div style={{ opacity, pointerEvents, position: "fixed", inset: 0, zIndex: 1000 }}>
        <StickyAlert
          title="System Update"
          content="DXC'26 Registrations are now OPEN! Head over to the events page to sign up for your favorite challenges."
          position="centreleft"
        />
        <StickyAlert
          title="Security Alert"
          content="Remember to update your passwords regularly and enable 2FA on all important accounts. Stay safe, stay secure!"
          position="centre-right"
        />
      </motion.div>

      <Hero />
      <Box>
        <Sections>
          <Section
            image="/laptopvitabhay.png"
            title="About Us"
            content="CyberX, the Cyber Security Club of Delhi Public School R.K. Puram, was established in 2023 to equip students with essential skills in cybersecurity and ethical hacking. Our mission is to create a tech-savvy community prepared to tackle the challenges of the digital world."
            order="image-first"
          />
          <Section
            image="/sarikakaushal.png"
            title="Founder and Teacher In-Charge"
            content="Mrs. Sarika Kaushal founded CyberX in 2023, and has been the club's teacher-in-charge since its inception. She guides the club leadership in planning and organizing events, and mentors the club's junior members."
            order="text-first"
            buttonLabel="Learn More"
            buttonLink="/about"
          />
          <CyberTimeline />
          <SponsorSection sponsors={sponsors} />
        </Sections>
        <Events />
      </Box>
    </>
  );
};

export default App;
