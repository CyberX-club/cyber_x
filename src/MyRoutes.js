import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import Quiz from "./Quiz";
import Navbar from "./Navbar";
import React from "react";
import CyberXApp from "./Members";
import {Box, Container, Typography} from "@mui/material";

const MyRoutes = () => {
    const navConfig = {
        title: "CyberX",
        menuItems: [
            {label: "Home", onClick: () => console.log("Home clicked")},
            {label: "About", onClick: () => console.log("About clicked")},
            {label: "Events", onClick: () => console.log("Events clicked")},
            {label: "Members", onClick: () => console.log("Members clicked")},
            {label: "Contact", onClick: () => console.log("Contact clicked")},
        ]
    };
    return (
        <BrowserRouter>
            <Navbar config={navConfig}/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path={"/quiz"} element={<Quiz/>}/>
                <Route path={"/members"} element={<CyberXApp/>}/>
            </Routes>
            <Box component="footer" sx={{bgcolor: 'background.paper', py: 3, mt: 5}} id="contact">
                <Container maxWidth="lg">
                    <Typography variant="body2" align="center" gutterBottom>
                        &copy; 2024 CyberX
                    </Typography>
                    <Box display="flex" justifyContent="center" mb={1}>
                        <a href="#" style={{color: 'goldenrod', marginRight: '0.5rem'}}>
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" style={{color: 'goldenrod', marginRight: '0.5rem'}}>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" style={{color: 'goldenrod', marginRight: '0.5rem'}}>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </Box>
                    <Typography variant="body2" align="center" gutterBottom>
                        Email: cybersecurity@dpsrkp.net
                    </Typography>
                </Container>
            </Box>
        </BrowserRouter>
    );
};

export default MyRoutes;
