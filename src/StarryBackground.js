import React, { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colors = [
          { rgb: "255, 255, 255", intensity: 0.7 },
          { rgb: "173, 216, 230", intensity: 0.5 },
          { rgb: "255, 192, 203", intensity: 0.4 },
          { rgb: "255, 255, 224", intensity: 0.6 },
          { rgb: "255, 255, 255", intensity: 1 },
          { rgb: "135, 206, 235", intensity: 0.8 },
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        ctx.fillStyle = `rgba(${this.color.rgb}, ${this.color.intensity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        this.color.intensity =
          Math.sin(Date.now() * 0.001 + this.x + this.y) * 0.2 + 0.8;
      }
    }

    class Meteor {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.length = Math.random() * 80 + 20;
        this.speed = Math.random() * 2 + 1;
        this.opacity = 0;
        this.fadeInTime = 50;
        this.fadeOutTime = 50;
        this.life = 0;
        this.maxLife = Math.floor(Math.random() * 100) + 100;
        this.trail = [];
        this.trailLength = 20;
      }

      draw() {
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.length, this.y + this.length);
        ctx.stroke();

        // Draw fading trail
        this.trail.forEach((pos, index) => {
          const trailOpacity =
            ((this.trail.length - index) / this.trail.length) *
            this.opacity *
            0.5;
          ctx.strokeStyle = `rgba(255, 255, 255, ${trailOpacity})`;
          ctx.beginPath();
          ctx.moveTo(pos.x, pos.y);
          ctx.lineTo(pos.x + this.length, pos.y + this.length);
          ctx.stroke();
        });
      }

      update() {
        this.x += this.speed;
        this.y += this.speed;
        this.life++;

        // Update trail
        this.trail.unshift({ x: this.x, y: this.y });
        if (this.trail.length > this.trailLength) {
          this.trail.pop();
        }

        if (this.life < this.fadeInTime) {
          this.opacity = this.life / this.fadeInTime;
        } else if (this.life > this.maxLife - this.fadeOutTime) {
          this.opacity = (this.maxLife - this.life) / this.fadeOutTime;
        } else {
          this.opacity = 1;
        }

        if (this.life >= this.maxLife || this.y > canvas.height) {
          this.reset();
        }
      }
    }

    const stars = Array(100)
      .fill()
      .map(() => new Star());
    const meteors = Array(2)
      .fill()
      .map(() => new Meteor());

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 8, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.draw();
        star.update();
      });

      meteors.forEach((meteor) => {
        meteor.draw();
        meteor.update();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
};

export default StarryBackground;
