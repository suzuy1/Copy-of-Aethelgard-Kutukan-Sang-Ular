import React, { useRef, useEffect } from 'react';

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Star[];

    const setCanvasSize = () => {
      if(canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    
    setCanvasSize();

    class Star {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      twinkleSpeed: number;
      phase: number;
      directionX: number;
      directionY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.5 + 0.5;
        this.alpha = 0.3 + Math.random() * 0.7; // Start with a random alpha
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.phase = Math.random() * Math.PI * 2;
        this.directionX = (Math.random() - 0.5) * 0.15; // Slow horizontal drift
        this.directionY = (Math.random() - 0.5) * 0.15; // Slow vertical drift
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
      }

      update() {
        // Add movement
        this.x += this.directionX;
        this.y += this.directionY;

        // Wrap around screen edges
        if (this.x > canvas.width + this.radius) this.x = -this.radius;
        if (this.x < -this.radius) this.x = canvas.width + this.radius;
        if (this.y > canvas.height + this.radius) this.y = -this.radius;
        if (this.y < -this.radius) this.y = canvas.height + this.radius;

        // Fluctuate alpha for a twinkling effect
        this.phase += this.twinkleSpeed;
        this.alpha = 0.2 + 0.8 * Math.abs(Math.sin(this.phase));
        
        this.draw();
      }
    }

    function init() {
      stars = [];
      const numberOfStars = (canvas.width * canvas.height) / 8000;
      for (let i = 0; i < numberOfStars; i++) {
        stars.push(new Star());
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < stars.length; i++) {
        stars[i].update();
      }
      animationFrameId.current = requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId.current);
      setCanvasSize();
      init();
      animate();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default StarryBackground;