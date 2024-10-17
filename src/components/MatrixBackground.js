import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
        const fontSize = 10;
        const columns = canvas.width / fontSize;

        // Hacker-like colors
        const colors = ['#00FF0099', ];

        // Initialize drops with random values
        const drops = Array(columns).fill().map(() => Math.random() * canvas.height / fontSize);
        const dropColors = Array(columns).fill().map(() => colors[Math.floor(Math.random() * colors.length)]);

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Increased opacity for dimmer effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillStyle = dropColors[i];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
                    drops[i] = 0;
                    // Change color when resetting
                    dropColors[i] = colors[Math.floor(Math.random() * colors.length)];
                } else {
                    drops[i] += 0.5; // Slowed down speed
                }
            }
        }

        const interval = setInterval(draw, 50); // Increased interval for slower animation

        return () => clearInterval(interval);
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default MatrixBackground;