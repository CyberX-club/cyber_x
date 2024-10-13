// Navbar.js
import React, {useState} from 'react';
import {
    AppBar, Toolbar, Typography, Button, IconButton, Box, useScrollTrigger, Slide,
    Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {styled} from '@mui/system';

const NavBox = styled(Box)(({theme}) => ({
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const NavButton = styled(Button)(({theme}) => ({
    color: theme.palette.text.primary,
    // increase size
    fontSize: '1.3rem',
    width: '100%', // Make the button full width
    margin: theme.spacing(1),
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default,
    },
}));

function HideOnScroll(props) {
    const {children} = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = ({config}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HideOnScroll>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{flexGrow: 1,cursor:"pointer"}} onClick={() => window.location.href = '/'}>
                        {config.title}
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleMenu}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
                <Collapse in={isOpen}>
                    <NavBox>
                        {config.menuItems.map((item, index) => (
                            <NavButton key={index} onClick={() => {
                                toggleMenu();
                                if (item.onClick) item.onClick();
                            }}
                                       href={item.href ? item.href : "#"}
                            >

                                {item.label}
                            </NavButton>
                        ))}
                    </NavBox>
                </Collapse>
            </AppBar>
        </HideOnScroll>
    );
};

export default Navbar;