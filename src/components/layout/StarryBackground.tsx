import { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speed: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 3000);
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.3 + 0.1,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const getStarColor = (index: number): string => {
      const colors = [
        "255, 165, 0",    // Saffron/Orange
        "255, 215, 0",    // Gold
        "255, 255, 255",  // White
        "255, 200, 100",  // Light gold
        "255, 140, 0",    // Dark orange
      ];
      return colors[index % colors.length];
    };

    const animate = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "hsl(220, 70%, 8%)");      // Deep royal blue
      gradient.addColorStop(0.3, "hsl(240, 60%, 12%)");   // Dark blue
      gradient.addColorStop(0.6, "hsl(280, 40%, 10%)");   // Deep purple hint
      gradient.addColorStop(1, "hsl(220, 70%, 6%)");      // Darker blue
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and animate stars
      stars.forEach((star, index) => {
        // Twinkle effect
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        const currentOpacity = star.opacity * twinkle;

        // Slow upward drift
        star.y -= star.speed * 0.1;
        if (star.y < -star.radius) {
          star.y = canvas.height + star.radius;
          star.x = Math.random() * canvas.width;
        }

        // Draw star with glow
        const color = getStarColor(index);
        
        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 4
        );
        glowGradient.addColorStop(0, `rgba(${color}, ${currentOpacity * 0.6})`);
        glowGradient.addColorStop(1, `rgba(${color}, 0)`);
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Core star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${currentOpacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default StarryBackground;
