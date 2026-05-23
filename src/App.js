import React from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import CyberTimeline from "./components/CyberTimeline";
import EventHome from "./components/EventHome";
import { SponsorSection } from "./components/Section";
import { Box } from "@mui/material";

const Sections = ({ children }) => <div id="sections">{children}</div>;

const sponsors = [
  {
    name: "Canon",
    image: "/CANON RED Ratio 1_1 (WITH DYA)_CMYK.jpg",
    link: "https://in.canon/en/consumer/",
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
    name: ".XYZ Domains",
    image: "/xyz.png",
    link: "https://gen.xyz/",
  },
  {
    name: "Smiling Tree",
    image: "/SmilingTree.png",
    link: "https://smilingtree.in/",
  },
];

const App = () => {
  return (
    <>
      <Hero />
      <Box>
        <Sections>
          <Section
            image="/CybeX2027.jpg"
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
        <EventHome />
      </Box>
    </>
  );
};

export default App;
