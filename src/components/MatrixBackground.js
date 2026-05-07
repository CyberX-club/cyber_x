import React, { useEffect, useRef } from "react";

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    let ctx;

    try {
      ctx = canvas.getContext("2d");
    } catch {
      return undefined;
    }

    if (!ctx) {
      return undefined;
    }

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?";
    const fontSize = 25;
    const colors = ["#00FF0090"];
    let animationFrameId;
    let intervalId;
    let drops = [];
    let dropColors = [];

    const updateDimensions = () => {
      canvas.width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      canvas.height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    };

    const initializeDrops = () => {
      const columnCount = Math.max(
        1,
        Math.floor(canvas.width / (fontSize * 2))
      );

      drops = Array.from(
        { length: columnCount },
        () => (Math.random() * canvas.height) / fontSize
      );
      dropColors = Array.from(
        { length: columnCount },
        () => colors[Math.floor(Math.random() * colors.length)]
      );
    };

    const handleResize = () => {
      updateDimensions();
      initializeDrops();
    };

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i += 1) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillStyle = dropColors[i];
        ctx.fillText(text, i * fontSize * 2, drops[i] * fontSize);
      }

      for (let i = 0; i < drops.length; i += 1) {
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.995) {
          drops[i] = 0;
          dropColors[i] = colors[Math.floor(Math.random() * colors.length)];
        } else {
          drops[i] += 0.25;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    intervalId = setInterval(initializeDrops, 30000);
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default MatrixBackground;
