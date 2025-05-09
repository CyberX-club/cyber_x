import React, { useState, useEffect } from 'react';
import {
    AppBar, Toolbar, Typography, Button, IconButton, Box,
    useScrollTrigger, Slide, Grow
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { CrypticText } from "./components/Members";

const NavBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    width: '100%',
    opacity: 0.95,
    backgroundColor: theme.palette.background.paper,
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: theme.zIndex.appBar - 1,
}));

const NavButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: '1.2rem',
    width: '100%',
    margin: theme.spacing(1),
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default,
    },
}));

function HideOnScroll({ children, isOpen }) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger || isOpen}>
            {children}
        </Slide>
    );
}

const Navbar = ({ config }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const theme = useTheme();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            if (scrolled !== isScrolled) {
                setIsScrolled(scrolled);
                if (scrolled) setIsOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    useEffect(() => {
        const handleResize = () => setIsOpen(false);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <HideOnScroll isOpen={isOpen}>
                <AppBar position="fixed" sx={{
                    opacity: 0.95,
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: 'none',
                }}>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography
                                variant="h4"
                                sx={{ cursor: "pointer", py: 1 }}
                                fontFamily="Space Mono"
                                fontWeight={700}
                                onClick={() => navigate("/")}
                            >
                                <CrypticText text={config.title} isHovered={true} />
                            </Typography>
                        </Box>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            onClick={toggleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    <Grow in={isOpen} timeout={300}>
                        <NavBox>
                            {config.menuItems.map((item, index) => (
                                <NavButton
                                    key={index}
                                    onClick={() => {
                                        toggleMenu();
                                        if (item.href) navigate(item.href);
                                        else if (item.onClick) item.onClick();
                                    }}
                                >
                                    {item.label}
                                </NavButton>
                            ))}
                        </NavBox>
                    </Grow>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </>
    );
};

export default Navbar;
