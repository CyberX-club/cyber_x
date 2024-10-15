import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import Quiz from "./Quiz";
import Navbar from "./Navbar";
import React from "react";
import CyberXApp from "./components/Members";
import {Box, Container, Typography} from "@mui/material";
import Footer from "./Footer";
import Resources from "./components/Resources";

const MyRoutes = () => {
    const navConfig = {
        title: "CyberX",
        menuItems: [
            {label: "Home", href: "/"},
            {label: "About", href: "/about"},
            {label: "Events", href: "/events"},
            {label: "Members", href: "/members"},
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



    return (
        <BrowserRouter>
            <Navbar config={navConfig}/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path={"/quiz"} element={<Quiz/>}/>
                <Route path={"/members"} element={<CyberXApp/>}/>
                <Route path={"/resources"} element={<Resources/>}/>
            </Routes>

            <Footer email={email} socialMedia={socialMedia} />
        </BrowserRouter>
    );
};

export default MyRoutes;
