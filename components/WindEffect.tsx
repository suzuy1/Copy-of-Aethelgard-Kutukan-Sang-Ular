import React, { useRef, useEffect } from 'react';

const WindEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let windParticles: WindParticle[];
    let animationFrameId: number;

    const setCanvasSize = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    
    setCanvasSize();

    class WindParticle {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.length, this.y);
        ctx.strokeStyle = `rgba(200, 220, 240, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      update() {
        this.x -= this.speed;
        if (this.x + this.length < 0) {
          this.x = canvas.width;
          this.y = Math.random() * canvas.height;
          this.speed = Math.random() * 2 + 1;
        }
        this.draw();
      }
    }

    function init() {
      if (!canvas) return;
      windParticles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        windParticles.push(new WindParticle());
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < windParticles.length; i++) {
        windParticles[i].update();
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
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-70"
    />
  );
};

export default WindEffect;
