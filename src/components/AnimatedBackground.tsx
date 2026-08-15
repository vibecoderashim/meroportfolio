import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      color: string;
      alpha: number;
    }

    const particles: Particle[] = [];
    const count = 45;
    const colors = [
      "rgba(37, 99, 235, ", // Electric Blue
      "rgba(124, 58, 237, ", // Royal Purple
      "rgba(6, 182, 212, ", // Cyan
      "rgba(245, 158, 11, ", // Gold
    ];

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.45 + 0.15,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineAlpha = (1 - dist / 130) * 0.12;
            ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Render & update particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = p.color + "0.6)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Animated Gradient Blobs (SaaS / Apple / Linear Style) */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-[#2563eb]/20 to-[#7c3aed]/20 blur-3xl animate-blob"
        style={{ animationDuration: "12s" }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-[#06b6d4]/20 via-[#7c3aed]/15 to-[#2563eb]/20 blur-3xl animate-blob"
        style={{ animationDuration: "16s", animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-[#f59e0b]/15 via-[#f97316]/10 to-[#2563eb]/15 blur-3xl animate-blob"
        style={{ animationDuration: "14s", animationDelay: "4s" }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Interactive Particle Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />
    </div>
  );
}
