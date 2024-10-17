import React, { useState, useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        let animationFrameId;
        let interval;

        try {
            const canvas = canvasRef.current;
            if (!canvas) {
                throw new Error('Canvas not available');
            }

            const ctx = canvas.getContext('2d');
            if (!ctx) {
                throw new Error('Unable to get 2D context');
            }

            const updateDimensions = () => {
                canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

                if (canvas.width <= 0 || canvas.height <= 0) {
                    throw new Error('Invalid canvas dimensions');
                }
            };

            updateDimensions();
            window.addEventListener('resize', updateDimensions);

            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
            const fontSize = 10;
            const colors = ['#00FF0090'];

            const initializeArrays = () => {
                const maxColumns = 10000; // Maximum number of columns
                const columnWidth = fontSize * 2; // Width of each column
                const columns = Math.floor(canvas.width / columnWidth);
                const drops = [];
                const dropColors = [];
                for (let i = 0; i < columns; i++) {
                    drops.push(Math.random() * canvas.height / fontSize);
                    dropColors[i] = colors[Math.floor(Math.random() * colors.length)];
                }
                return { columns, drops, dropColors };
            };

            let { columns, drops, dropColors } = initializeArrays();

            const draw = () => {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.font = `${fontSize}px monospace`;

                for (let i = 0; i < drops.length; i++) {
                    const text = characters[Math.floor(Math.random() * characters.length)];
                    ctx.fillStyle = dropColors[i];
                    ctx.fillText(text, i * fontSize * 2, drops[i] * fontSize); // Increase the spacing between columns
                }

                for (let i = 0; i < drops.length; i++) {
                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.995) { // Decrease the reset probability
                        drops[i] = 0;
                        dropColors[i] = colors[Math.floor(Math.random() * colors.length)];
                    } else {
                        drops[i] += 0.25; // Keep the drop speed the same
                    }
                }

                animationFrameId = requestAnimationFrame(draw);
            };

            interval = setInterval(() => {
                ({ columns, drops, dropColors } = initializeArrays());
            }, 30000); // Reinitialize arrays every 30 seconds

            draw();

            return () => {
                window.removeEventListener('resize', updateDimensions);
                cancelAnimationFrame(animationFrameId);
                clearInterval(interval);
            };

        } catch (err) {
            console.error("Error in Matrix effect:", err);
            setError(true);
            return () => {
                if (animationFrameId) cancelAnimationFrame(animationFrameId);
                if (interval) clearInterval(interval);
            };
        }
    }, []);

    if (error) {
        return null; // Return nothing if there's an error, effectively removing the effect
    }

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default MatrixBackground;