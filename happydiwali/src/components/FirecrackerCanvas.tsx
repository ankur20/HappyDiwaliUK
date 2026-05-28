import React, { useEffect, useRef, useState } from 'react';

interface GlowParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  hue: number;
  brightness: number;
  wobble: number;
  wobbleSpeed: number;
}

export const FirecrackerCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<GlowParticle[]>([]);
  const [isActive, setIsActive] = useState(true);

  // Generate random number within a range
  const randomRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  // Create a gentle golden sparkle
  const createSparkle = (x: number, y: number, isClick = false) => {
    // Determine count: clicks make a small beautiful cluster, auto-spawn makes single floating embers
    const count = isClick ? 15 : 1;
    
    for (let i = 0; i < count; i++) {
      // Golden/Amber hues (30 to 48)
      const hue = randomRange(30, 48);
      const angle = isClick ? randomRange(0, Math.PI * 2) : randomRange(-Math.PI * 0.7, -Math.PI * 0.3);
      const speed = isClick ? randomRange(0.5, 3) : randomRange(0.2, 1.2);
      
      const particle: GlowParticle = {
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (isClick ? 0 : randomRange(0.2, 0.6)), // slight upward drift for ambient particles
        size: randomRange(1.5, isClick ? 4 : 3),
        alpha: randomRange(0.4, 0.85),
        decay: randomRange(0.005, 0.015), // slow fade out
        hue: hue,
        brightness: randomRange(55, 75),
        wobble: randomRange(0, Math.PI * 2),
        wobbleSpeed: randomRange(0.01, 0.03)
      };

      particlesRef.current.push(particle);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrameId: number;

    const updateAndDraw = () => {
      animationFrameId = requestAnimationFrame(updateAndDraw);

      // Clean the canvas with slight trail effect (using warm beige alpha)
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(251, 248, 243, 0.18)'; // Matches #fbf8f3 base background with trail opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Light glow compositing
      ctx.globalCompositeOperation = 'multiply'; // soft traditional blend
      
      // We will actually use source-over or darker/multiply, but standard lighter is best for glowing embers.
      // Since it's a light background, lighter composition might wash out. 
      // Actually, 'source-over' is perfect because the embers have a dark border/glow or a rich warm amber color.
      ctx.globalCompositeOperation = 'source-over';

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Move particle
        p.x += p.vx + Math.sin(p.wobble) * 0.2;
        p.y += p.vy;
        p.wobble += p.wobbleSpeed;

        // Apply decay to alpha
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          // Draw particle as a glowing golden star or soft circles
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          
          // Gradient fill for a realistic fire glow
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
          grad.addColorStop(0, `hsla(${p.hue}, 100%, 80%, ${p.alpha})`);
          grad.addColorStop(0.3, `hsla(${p.hue}, 100%, ${p.brightness}%, ${p.alpha * 0.9})`);
          grad.addColorStop(1, `hsla(${p.hue - 15}, 100%, 40%, 0)`);
          
          ctx.fillStyle = grad;
          ctx.fill();

          // Subtle extra sparkle glow for clicking particles
          if (p.alpha > 0.6) {
            ctx.beginPath();
            ctx.moveTo(p.x - p.size * 1.5, p.y);
            ctx.lineTo(p.x + p.size * 1.5, p.y);
            ctx.moveTo(p.x, p.y - p.size * 1.5);
            ctx.lineTo(p.x, p.y + p.size * 1.5);
            ctx.strokeStyle = `rgba(217, 119, 6, ${p.alpha * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Automatically spawn gentle rising embers when active
      if (isActive && Math.random() < 0.15) { // 15% spawn chance per frame, very calm
        const rx = randomRange(0, canvas.width);
        // Start near the bottom or mid-height
        const ry = randomRange(canvas.height * 0.4, canvas.height);
        createSparkle(rx, ry);
      }
    };

    updateAndDraw();

    // Spawn sparkles on user click/interaction
    const handleCanvasClick = (e: MouseEvent) => {
      createSparkle(e.clientX, e.clientY, true);
    };

    canvas.addEventListener('mousedown', handleCanvasClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousedown', handleCanvasClick);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto select-none z-0">
      <canvas
        ref={canvasRef}
        className="block w-full h-full cursor-pointer opacity-90"
      />
      {/* Auto Sparkler Controls */}
      <button
        onClick={() => setIsActive(!isActive)}
        className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-full border border-amber-600/20 bg-white/70 text-xs font-semibold text-amber-900 backdrop-blur-md hover:bg-amber-50 hover:border-amber-500/40 transition-all duration-300 pointer-events-auto cursor-pointer flex items-center gap-1.5 shadow-sm"
      >
        <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-amber-500 animate-pulse' : 'bg-stone-300'}`}></span>
        {isActive ? 'Ambient Glow: ON' : 'Ambient Glow: OFF'}
      </button>
      
      {/* Floating Instructions */}
      <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-full bg-white/40 text-[10px] sm:text-xs text-amber-900/65 border border-amber-600/10 backdrop-blur-sm pointer-events-none">
        🪔 Click anywhere to scatter golden sparkler embers
      </div>
    </div>
  );
};
