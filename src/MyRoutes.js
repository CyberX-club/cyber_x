import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import Quiz from "./Quiz";
import Navbar from "./Navbar";
import React from "react";
import CyberXApp from "./components/Members";
import {Box, Container, Typography} from "@mui/material";
import Footer from "./Footer";
import About from "./components/About";
import Resources from "./components/Resources";

const MyRoutes = () => {
    const navConfig = {
        title: "CyberX",
        menuItems: [
            {label: "Home", href: "/"},
            {label: "About", href: "/about"},
            {label: "Members", href: "/members"},
            {label: "Resources", href:"/resources"},
            {label: "Contact", onClick: () => console.log("Contact clicked")},
        ]
    };

    const email = 'cybersecurity@dpsrkp.net';
    const socialMedia = [
        { platform: 'Facebook', url: 'https://www.facebook.com/CyberX' },
        { platform: 'Twitter', url: 'https://twitter.com/CyberX' },
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/cyberx' },
        { platform: 'GitHub', url: 'https://github.com/CyberX' },
        { platform: 'Instagram', url: 'https://www.instagram.com/CyberX.CLUB' },
    ];

    const resources = [
        {
            label: 'Shielding Cyber Attacks',
            img: 'protection_against.png',
            description: 'Guarding the Future: Your First Line of Defense Against Cyber Attacks',
            author: 'Goutam Behera',
            postedAt: '2024-07-24',
            urls: [
                'https://drive.google.com/file/d/1zVQ4w58pCVHm200fSv9PkDMwW8ET3deU/view?usp=drive_link',

            ],
        },


        {
            label: 'Cyber Security Awareness Guide',
            description: 'A comprehensive guide on the best practices for staying safe online, covering topics such as password management, phishing, and social engineering.',
            img: 'ser-bg2.jpg',
            author: 'Atharva Singh',
            postedAt: '2024-10-15',
            urls: [
                'https://drive.google.com/file/d/1CBtkmEu_aHNBnOQJqCHB02_py61Ed1PD/view?usp=sharing',


            ],
        },
        {
            label: 'Intro To Trending Cyber Crime Attacks Over Network',
            description: 'Your Guide to the Top Web Application Security Risks and How to Defend Against Them: A Comprehensive Resource on the Latest Network Security Threats',
            img: 'ser-bg.jpg',
            author: 'Goutam Behera',
            postedAt: '2024-07-24',
            urls: [
                'https://drive.google.com/file/d/19lYngEhdcWWgF4PEE_4W4-nzzBxnpg4Z/view?usp=sharing',
            ],
        },
        {
            label: 'Introduction to Network Security',
            description: 'This PDF resource covers the fundamentals of network security, including firewalls, intrusion detection systems, and secure protocols.',
            author: 'Atharva Singh',
            img: 'ser-bg.jpeg',
            urls: [
                'https://drive.google.com/file/d/1hGLfmLrqDPV1cxBc6HdeLU4cLPxGPMZ2/view?usp=sharing',


            ],
        },
        {
            label: 'DPSRKP Cyber Security Brochure',
            description: 'Stay up-to-date with the latest news and trends in the world of cyber security, including recent cyber attacks, vulnerabilities, and patches.',
            img: 'dpsrkpcyberx.png',
            urls: ['https://drive.google.com/file/d/1fUkmDSicRRzUAl6R1rBlZXWZ1-MmsPhS/view?usp=sharing'],
        },
    ];




    return (
        <BrowserRouter>
            <Navbar config={navConfig}/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path={"/quiz"} element={<Quiz/>}/>
                <Route path={"/members"} element={<CyberXApp/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/resources"} element={<Resources resources={resources}/>}/>
            </Routes>

            <Footer email={email} socialMedia={socialMedia} />
        </BrowserRouter>
    );
};

export default MyRoutes;
