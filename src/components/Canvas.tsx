import React, { useEffect, useRef, useState } from 'react';

export const SolarParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    let solarNodes: any[] = [];

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Init particles
    for (let i = 0; i < 80; i++) {
      const typeRand = Math.random();
      let color = '#22C55E';
      if (typeRand > 0.6 && typeRand <= 0.85) color = '#F59E0B';
      else if (typeRand > 0.85) color = '#3B82F6';

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.width, // start spread out
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 1.7 + 0.8,
        color,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
      });
    }

    // Init solar flare nodes
    for (let i = 0; i < 5; i++) {
        solarNodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            radius: Math.random() * 4 + 4,
            phase: Math.random() * Math.PI * 2,
        });
    }

    const drawLine = (p1: any, p2: any, distance: number) => {
      const opacity = Math.max(0, 0.25 - (distance / 90) * 0.25);
      if (opacity > 0) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(34, 197, 94, ${opacity})`;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }
    };

    let time = 0;
    const render = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render nodes
      solarNodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        const pulse = Math.sin(time * 0.03 + node.phase) * 0.5 + 0.5;
        
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 6);
        gradient.addColorStop(0, `rgba(245, 158, 11, ${0.4 * pulse})`);
        gradient.addColorStop(1, 'rgba(245, 158, 11, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, node.radius * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(245, 158, 11, ${0.8 + 0.2 * pulse})`;
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render regular particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const alpha = Math.sin(time * p.speed + p.phase) * 0.35 + 0.55;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            drawLine(p, p2, dist);
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} />;
};

export const CircuitSVG: React.FC = () => {
  return (
    <div className="relative w-full h-[120px] bg-transparent overflow-hidden my-12 pointer-events-none opacity-50 flex items-center">
      <div className="absolute top-0 w-full h-[2px] bg-green-500/20 animate-scan-line"></div>
      <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 40 L 40% 40 L 40% 80 L 45% 80 L 45% 60 L 100% 60" fill="none" stroke="var(--green-500)" strokeWidth="1" strokeDasharray="1000" className="animate-circuit-trace" opacity="0.4" />
        <path d="M0 60 L 30% 60 L 30% 20 L 35% 20 L 35% 80 L 100% 80" fill="none" stroke="var(--green-400)" strokeWidth="1.5" strokeDasharray="1000" className="animate-circuit-trace" style={{animationDelay: '0.5s'}} opacity="0.6" />
        <path d="M0 20 L 60% 20 L 60% 50 L 65% 50 L 65% 30 L 100% 30" fill="none" stroke="var(--blue-400)" strokeWidth="1" strokeDasharray="1000" className="animate-circuit-trace" style={{animationDelay: '1s'}} opacity="0.5" />
        
        {/* Nodes */}
        <circle cx="45%" cy="60" r="3" fill="var(--green-500)" className="animate-glow-breathe" />
        <circle cx="35%" cy="80" r="4" fill="var(--green-400)" className="animate-glow-breathe" />
        <circle cx="65%" cy="30" r="2.5" fill="var(--blue-400)" className="animate-glow-breathe" />
      </svg>
    </div>
  );
};

export const EnergyFlowDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-12 hidden md:block">
        <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_0_15px_rgba(34,197,94,0.15)]">
            {/* Box Defs */}
            <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* Paths */}
            <path d="M120 100 L 250 100" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="15,10" className="animate-[circuitTrace_5s_linear_infinite]" strokeLinecap="round" />
            <path d="M350 100 L 480 100" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="15,10" className="animate-[circuitTrace_5s_linear_infinite]" strokeLinecap="round" style={{animationDelay: '1s'}} />
            <path d="M580 100 L 710 100" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="15,10" className="animate-[circuitTrace_5s_linear_infinite]" strokeLinecap="round" style={{animationDelay: '2s'}} />

            {/* Glow Paths */}
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--gold-400)" />
                <stop offset="50%" stopColor="var(--green-400)" />
                <stop offset="100%" stopColor="var(--blue-400)" />
            </linearGradient>

            {/* Nodes */}
            <g transform="translate(20, 60)" filter="url(#glow)">
                <rect width="100" height="80" rx="12" fill="var(--bg-surface)" stroke="var(--gold-500)" strokeWidth="1.5" />
                <text x="50" y="45" fill="white" fontSize="24" textAnchor="middle" dominantBaseline="middle">☀️</text>
                <text x="50" y="70" fill="var(--text-muted)" fontSize="11" fontFamily="DM Mono" letterSpacing="1" textAnchor="middle">SUN</text>
            </g>

            <g transform="translate(250, 60)" filter="url(#glow)">
                <rect width="100" height="80" rx="12" fill="var(--bg-surface)" stroke="var(--green-500)" strokeWidth="1.5" />
                <text x="50" y="45" fill="white" fontSize="24" textAnchor="middle" dominantBaseline="middle">⬛</text>
                <text x="50" y="70" fill="var(--text-muted)" fontSize="11" fontFamily="DM Mono" letterSpacing="1" textAnchor="middle">PANELS</text>
            </g>

            <g transform="translate(480, 60)" filter="url(#glow)">
                <rect width="100" height="80" rx="12" fill="var(--bg-surface)" stroke="var(--blue-500)" strokeWidth="1.5" />
                <text x="50" y="45" fill="white" fontSize="24" textAnchor="middle" dominantBaseline="middle">⚡</text>
                <text x="50" y="70" fill="var(--text-muted)" fontSize="11" fontFamily="DM Mono" letterSpacing="1" textAnchor="middle">INVERTER</text>
            </g>

            <g transform="translate(710, 60)" filter="url(#glow)">
                <rect width="100" height="80" rx="12" fill="var(--bg-surface)" stroke="var(--green-400)" strokeWidth="1.5" />
                <text x="50" y="45" fill="white" fontSize="24" textAnchor="middle" dominantBaseline="middle">🏠</text>
                <text x="50" y="70" fill="var(--text-muted)" fontSize="11" fontFamily="DM Mono" letterSpacing="1" textAnchor="middle">LOAD</text>
            </g>

            <g transform="translate(480, 150)" filter="url(#glow)">
                <rect width="100" height="40" rx="8" fill="var(--bg-surface)" stroke="var(--green-600)" strokeWidth="1.5" />
                <text x="50" y="22" fill="white" fontSize="16" textAnchor="middle" dominantBaseline="middle">🔋</text>
                <text x="50" y="38" fill="var(--text-muted)" fontSize="9" fontFamily="DM Mono" letterSpacing="1" textAnchor="middle">BATTERY</text>
            </g>

            <path d="M530 140 L 530 150" stroke="var(--green-500)" strokeWidth="2" strokeDasharray="4,4" className="animate-[circuitTrace_5s_linear_infinite]" />
        </svg>
    </div>
  );
};
