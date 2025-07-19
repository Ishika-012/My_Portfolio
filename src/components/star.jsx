import React, { useEffect, useRef } from 'react';

const TwinklingFallingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const stars = Array(200).fill().map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.3,
      opacity: Math.random(),
      sparkleTimer: Math.random() * 100,
      sparkleFreq: Math.random() * 80 + 30,
      speedY: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      stars.forEach(star => {
        // Sparkle twinkle burst
        star.sparkleTimer++;
        if (star.sparkleTimer > star.sparkleFreq) {
          star.opacity = Math.random() > 0.5 ? 1 : 0.2;
          star.sparkleTimer = 0;
        }

        // Falling movement
        star.y += star.speedY;
        if (star.y > height) {
          star.y = -star.radius;
          star.x = Math.random() * width;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
      }}
    />
  );
};

export default TwinklingFallingStars;
