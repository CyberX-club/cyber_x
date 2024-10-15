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
            {label: "Events", href: "/events"},
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
            description: 'Guarding the Future: Your First Line of Defense Against Cyber Attacks',
            img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fcyber-security-3d&psig=AOvVaw0rZiFbC1lYCCjFrsEyPf1p&ust=1729097727415000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLi2iJftkIkDFQAAAAAdAAAAABAE',
            author: 'Goutam Behera',
            postedAt: '2024-10-01',
            urls: [
                'https://drive.google.com/file/d/1zVQ4w58pCVHm200fSv9PkDMwW8ET3deU/view?usp=drive_link',

            ],
        },


        {
            label: 'Cyber Security Awareness Guide',
            description: 'A comprehensive guide on the best practices for staying safe online, covering topics such as password management, phishing, and social engineering.',
            img: 'https://example.com/guide-image.jpg',
            author: 'Jane Doe',
            postedAt: '2024-10-01',
            urls: [
                'https://example.com/cyber-security-awareness-guide.pdf',
                'https://example.com/guide-appendix.pdf',
            ],
        },
        {
            label: 'OWASP Top Ten',
            description: 'An educational resource that provides an overview of the top ten web application security risks, including how to mitigate them.',
            author: 'John Smith',
            postedAt: '2024-10-05',
            urls: [
                'https://example.com/owasp-top-ten.pdf',
            ],
        },
        {
            label: 'Introduction to Network Security',
            description: 'This PDF resource covers the fundamentals of network security, including firewalls, intrusion detection systems, and secure protocols.',
            img: 'https://example.com/network-security-image.jpg',
            urls: [
                'https://example.com/introduction-to-network-security.pdf',
                'https://example.com/network-security-advanced.pdf',
            ],
        },
        {
            label: 'Cyber Security News',
            description: 'Stay up-to-date with the latest news and trends in the world of cyber security, including recent cyber attacks, vulnerabilities, and patches.',
            urls: [],
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
