import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import MyRoutes from "./MyRoutes";

const root = ReactDOM.createRoot(document.getElementById('root'));
// Create a hacker-like black and white theme
const hackerTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00ff00', // Neon green
        },
        secondary: {
            main: '#ffffff', // White
        },
        background: {
            default: '#000000', // Black
            paper: '#111111', // Dark gray
        },
        text: {
            primary: '#ffffff', // White
            secondary: '#00ff00', // Neon green
        },
    },
    typography: {
        fontFamily: 'Courier, monospace',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                },
            },
        },
    },
});
root.render(
    <React.StrictMode>
        <ThemeProvider theme={hackerTheme}>
            <CssBaseline/>
            <MyRoutes/>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
