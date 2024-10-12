import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import Quiz from "./Quiz";
import Navbar from "./Navbar";
import React from "react";

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
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;
