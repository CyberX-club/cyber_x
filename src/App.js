import React from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import CyberTimeline from './components/CyberTimeline';
import Events from './components/Events';
import {SponsorSection} from "./components/Section";


const Sections = ({children}) => {
    return (
        <div id={"sections"}>
            {children}
        </div>
    );
};

const App = () => {
    return (
        <>
            <Hero />
           <Sections>
               <Section
                   image="laptop-1.png"
                   title="About Us"
                   content="CyberX, the Cyber Security Club of Delhi Public School R.K. Puram, was established in 2023 to equip students with essential skills in cybersecurity and ethical hacking. Our mission is to create a tech-savvy community prepared to tackle the challenges of the digital world."
                   order="image-first"
               />
               <Section
                   image="sarikakaushal.png"
                   title="Founder and Teacher In-Charge"
                   content="Mrs. Sarika Kaushal founded CyberX in 2023, and has been the club's teacher-in-charge since its inception. She guides the club leadership in planning and organizing events, and mentors the club's junior members."
                   order="text-first"
                   buttonLabel="Learn More"
                   buttonLink="/about"
               />
               <CyberTimeline />
               <SponsorSection sponsors={[
                   {
                       name: 'Pebble India',
                       image: 'pebble.png',
                       link: 'https://pebbleindia.in/',
                   }
               ]} />
           </Sections>
            <Events />
        </>
    );
};
export default App;
