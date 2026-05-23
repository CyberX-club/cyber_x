import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useScrollTrigger,
  Slide,
  Grow,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { CrypticText } from "./components/Members";

const NavBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  width: "100%",
  opacity: 0.95,
  backgroundColor: theme.palette.background.paper,
  borderBottom: `2px solid ${theme.palette.primary.main}`,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: theme.zIndex.appBar - 1,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1.2rem",
  width: "100%",
  margin: theme.spacing(1),
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
  },
}));

const InlineNavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1rem",
  marginLeft: theme.spacing(2),
  textTransform: "none",
  fontFamily: "Space Mono",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
    textDecoration: "underline",
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

const Navbar = ({ config, topOffset = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const toggleMenu = () => setIsOpen((open) => !open);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
        if (scrolled) setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <HideOnScroll isOpen={isOpen}>
        <AppBar
          position="fixed"
          sx={{
            top: topOffset,
            opacity: 0.95,
            backgroundColor: theme.palette.background.paper,
            boxShadow: "none",
          }}
        >
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
            {isDesktop ? (
              // show inline menu on larger screens
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {config.menuItems.map((item) => (
                  <InlineNavButton
                    key={item.label}
                    onClick={() => {
                      if (item.href) navigate(item.href);
                      else if (item.onClick) item.onClick();
                    }}
                  >
                    {item.label}
                  </InlineNavButton>
                ))}
              </Box>
            ) : (
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={toggleMenu}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
          <Grow in={isOpen} timeout={300}>
            <NavBox>
              {config.menuItems.map((item) => (
                <NavButton
                  key={item.label}
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
      {topOffset > 0 ? <Box sx={{ height: topOffset }} /> : null}
    </>
  );
};

export default Navbar;
