import { useEffect, useRef } from 'react';

interface GridBackgroundProps {
  /** Which zone this grid is in — affects highlight intensity */
  zone?: 'hero' | 'normal' | 'dark';
  className?: string;
  style?: React.CSSProperties;
}

export default function GridBackground({ zone = 'normal', className = '', style = {} }: GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let sweepX = -200;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const CELL = 48; // grid cell size in px

    // Perspective grid helper — maps a flat grid point to a perspective-skewed point
    const perspectivePoint = (x: number, y: number, w: number, h: number) => {
      const cx = w / 2;
      const strength = 0.18; // perspective strength (0 = flat, higher = more 3D)
      const dy = y / h; // 0 at top, 1 at bottom
      const dx = (x - cx) / w; // -0.5 to 0.5
      return {
        px: x + dx * dy * w * strength,
        py: y,
      };
    };

    const drawGrid = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // ── Layer 1: Base grid — very subtle dark gold ──────────────────────────
      const baseAlpha = zone === 'hero' ? 0.07 : 0.045;
      ctx.strokeStyle = `rgba(180, 130, 20, ${baseAlpha})`;
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = 0; x <= w; x += CELL) {
        const top = perspectivePoint(x, 0, w, h);
        const bot = perspectivePoint(x, h, w, h);
        ctx.beginPath();
        ctx.moveTo(top.px, top.py);
        ctx.lineTo(bot.px, bot.py);
        ctx.stroke();
      }
      // Horizontal lines
      for (let y = 0; y <= h; y += CELL) {
        const left = perspectivePoint(0, y, w, h);
        const right = perspectivePoint(w, y, w, h);
        ctx.beginPath();
        ctx.moveTo(left.px, left.py);
        ctx.lineTo(right.px, right.py);
        ctx.stroke();
      }

      // ── Layer 2: Mid-layer soft gold glow lines (every 4th line) ───────────
      const midAlpha = zone === 'hero' ? 0.18 : 0.10;
      ctx.lineWidth = 1;

      // Vertical glow lines
      for (let x = 0; x <= w; x += CELL * 4) {
        const top = perspectivePoint(x, 0, w, h);
        const bot = perspectivePoint(x, h, w, h);
        const grad = ctx.createLinearGradient(top.px, 0, bot.px, h);
        grad.addColorStop(0, `rgba(200, 150, 20, 0)`);
        grad.addColorStop(0.3, `rgba(200, 150, 20, ${midAlpha})`);
        grad.addColorStop(0.7, `rgba(200, 150, 20, ${midAlpha})`);
        grad.addColorStop(1, `rgba(200, 150, 20, 0)`);
        ctx.strokeStyle = grad;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(200, 150, 20, 0.3)`;
        ctx.beginPath();
        ctx.moveTo(top.px, top.py);
        ctx.lineTo(bot.px, bot.py);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Horizontal glow lines
      for (let y = 0; y <= h; y += CELL * 4) {
        const left = perspectivePoint(0, y, w, h);
        const right = perspectivePoint(w, y, w, h);
        const grad = ctx.createLinearGradient(0, y, w, y);
        grad.addColorStop(0, `rgba(200, 150, 20, 0)`);
        grad.addColorStop(0.2, `rgba(200, 150, 20, ${midAlpha})`);
        grad.addColorStop(0.8, `rgba(200, 150, 20, ${midAlpha})`);
        grad.addColorStop(1, `rgba(200, 150, 20, 0)`);
        ctx.strokeStyle = grad;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(200, 150, 20, 0.3)`;
        ctx.beginPath();
        ctx.moveTo(left.px, left.py);
        ctx.lineTo(right.px, right.py);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // ── Layer 3: Bright yellow highlight cells (hero/jackpot zones only) ───
      if (zone === 'hero') {
        const highlightCells = [
          { col: 2, row: 1 }, { col: 5, row: 3 }, { col: 8, row: 2 },
          { col: 3, row: 5 }, { col: 7, row: 4 }, { col: 1, row: 7 },
          { col: 10, row: 1 }, { col: 4, row: 8 },
        ];
        highlightCells.forEach(({ col, row }) => {
          const x = col * CELL;
          const y = row * CELL;
          if (x > w || y > h) return;
          const pulse = 0.06 + Math.sin(time * 0.04 + col + row) * 0.04;
          const tl = perspectivePoint(x, y, w, h);
          const tr = perspectivePoint(x + CELL, y, w, h);
          const br = perspectivePoint(x + CELL, y + CELL, w, h);
          const bl = perspectivePoint(x, y + CELL, w, h);
          ctx.beginPath();
          ctx.moveTo(tl.px, tl.py);
          ctx.lineTo(tr.px, tr.py);
          ctx.lineTo(br.px, br.py);
          ctx.lineTo(bl.px, bl.py);
          ctx.closePath();
          ctx.fillStyle = `rgba(255, 210, 0, ${pulse})`;
          ctx.fill();
          // bright border
          ctx.strokeStyle = `rgba(255, 220, 0, ${pulse * 2.5})`;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(255, 200, 0, 0.5)`;
          ctx.stroke();
          ctx.shadowBlur = 0;
        });
      }

      // ── Light sweep effect ──────────────────────────────────────────────────
      const sweepWidth = 120;
      if (sweepX < w + sweepWidth) {
        const sweepGrad = ctx.createLinearGradient(sweepX - sweepWidth, 0, sweepX + sweepWidth, 0);
        sweepGrad.addColorStop(0, 'rgba(255, 220, 100, 0)');
        sweepGrad.addColorStop(0.5, 'rgba(255, 220, 100, 0.04)');
        sweepGrad.addColorStop(1, 'rgba(255, 220, 100, 0)');
        ctx.fillStyle = sweepGrad;
        ctx.fillRect(sweepX - sweepWidth, 0, sweepWidth * 2, h);
      }

      // ── Intersection dots on glow lines ────────────────────────────────────
      for (let x = 0; x <= w; x += CELL * 4) {
        for (let y = 0; y <= h; y += CELL * 4) {
          const pt = perspectivePoint(x, y, w, h);
          const dotAlpha = zone === 'hero' ? 0.35 : 0.18;
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 200, 50, ${dotAlpha})`;
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'rgba(255, 200, 50, 0.5)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    };

    const animate = () => {
      time++;
      // Sweep moves across then resets
      sweepX += 0.8;
      if (sweepX > canvas.width + 200) sweepX = -200;

      drawGrid();
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [zone]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0, ...style }}
    />
  );
}
