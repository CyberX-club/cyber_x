// Navbar.js
import React, { useState, useEffect } from 'react';
import {
    AppBar, Toolbar, Typography, Button, IconButton, Box, useScrollTrigger, Slide,
    Grow
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import {CrypticText} from "./Members";

const NavBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    width: '100%',
    opacity:"0.4",
    backgroundColor: theme.palette.background.paper,
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: theme.zIndex.appBar - 1,
    transformOrigin: 'top',
}));

const NavButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: '1.3rem',
    width: '100%',
    margin: theme.spacing(1),
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default,
    },
}));

function HideOnScroll(props) {
    const { children, isOpen } = props;
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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            if (scrolled !== isScrolled) {
                setIsScrolled(scrolled);
                if (scrolled) {
                    setIsOpen(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    useEffect(() => {
        const handleResize = () => {
            setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <HideOnScroll isOpen={isOpen}>
                <AppBar position="fixed" sx={{
                    backgroundColor:"#000000"
                }}>
                    <Toolbar sx={{
                        backgroundColor:"rgba(255,255,255,0.11)"
                    }}>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 1, cursor: "pointer" }}
                            onClick={() => window.location.href = '/'}
                        >
                            <CrypticText text={config.title} isHovered={true}/>
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
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
                                        if (item.onClick) item.onClick();
                                    }}
                                    href={item.href ? item.href : "#"}
                                >
                                    {item.label}
                                </NavButton>
                            ))}
                        </NavBox>
                    </Grow>
                </AppBar>
            </HideOnScroll>
            <Toolbar /> {/* This empty Toolbar acts as a spacer */}
        </>
    );
};

export default Navbar;