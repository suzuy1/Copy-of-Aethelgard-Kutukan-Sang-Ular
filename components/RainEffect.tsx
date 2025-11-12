import React, { useRef, useEffect } from 'react';

const RainEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let droplets: Droplet[];
    let animationFrameId: number;

    const setCanvasSize = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    
    setCanvasSize();

    class Droplet {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      windForce: number;

      constructor() {
        if (!canvas) {
            this.x = 0; this.y = 0; this.length = 0; this.speed = 0; this.opacity = 0; this.windForce = 0;
            return;
        };
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.length = Math.random() * 25 + 15;
        this.speed = Math.random() * 6 + 3;
        this.opacity = Math.random() * 0.6 + 0.3;
        this.windForce = 1.5;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.windForce, this.y + this.length);
        ctx.strokeStyle = `rgba(200, 220, 240, ${this.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      update() {
        if (!canvas) return;
        this.y += this.speed;
        this.x -= this.windForce;

        if (this.y > canvas.height || this.x < 0) {
          this.y = 0 - this.length;
          this.x = Math.random() * canvas.width;
          this.speed = Math.random() * 6 + 3;
        }
        this.draw();
      }
    }

    function init() {
      if (!canvas) return;
      droplets = [];
      const numberOfDroplets = (canvas.width * canvas.height) / 5000;
      for (let i = 0; i < numberOfDroplets; i++) {
        droplets.push(new Droplet());
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < droplets.length; i++) {
        droplets[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      setCanvasSize();
      init();
      animate();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default RainEffect;
