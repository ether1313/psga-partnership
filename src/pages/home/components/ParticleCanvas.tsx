import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  type: 'coin' | 'spark' | 'streak';
  rotation: number;
  rotationSpeed: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#f59e0b', '#fbbf24', '#fde68a', '#ef4444', '#fff'];

    const spawnParticle = () => {
      const type = Math.random() < 0.5 ? 'coin' : Math.random() < 0.7 ? 'spark' : 'streak';
      particles.push({
        x: Math.random() * canvas.width,
        y: type === 'coin' ? -20 : Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: type === 'coin' ? Math.random() * 2 + 1 : (Math.random() - 0.5) * 1,
        size: type === 'coin' ? Math.random() * 8 + 4 : Math.random() * 3 + 1,
        alpha: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        type,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.15,
      });
    };

    const drawCoin = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.alpha;
      const scaleX = Math.abs(Math.cos(p.rotation));
      ctx.scale(scaleX, 1);
      ctx.beginPath();
      ctx.arc(0, 0, p.size, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(-p.size * 0.3, -p.size * 0.3, 0, 0, 0, p.size);
      grad.addColorStop(0, '#fde68a');
      grad.addColorStop(0.5, '#f59e0b');
      grad.addColorStop(1, '#b45309');
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.restore();
    };

    const drawSpark = (p: Particle) => {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawStreak = (p: Particle) => {
      ctx.save();
      ctx.globalAlpha = p.alpha * 0.6;
      ctx.strokeStyle = p.color;
      ctx.lineWidth = p.size * 0.5;
      ctx.shadowBlur = 6;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x - p.vx * 20, p.y - p.vy * 20);
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.15 && particles.length < 80) {
        spawnParticle();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        if (p.type === 'coin') {
          if (p.y > canvas.height + 20) {
            particles.splice(i, 1);
            continue;
          }
          p.alpha = Math.max(0, 1 - (p.y / canvas.height) * 0.3);
          drawCoin(p);
        } else if (p.type === 'spark') {
          p.alpha -= 0.008;
          if (p.alpha <= 0) { particles.splice(i, 1); continue; }
          drawSpark(p);
        } else {
          p.alpha -= 0.005;
          if (p.alpha <= 0) { particles.splice(i, 1); continue; }
          drawStreak(p);
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
