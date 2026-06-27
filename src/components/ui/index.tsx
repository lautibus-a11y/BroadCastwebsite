import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// --- UTILS & HOOKS ---
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const update = (ev: MouseEvent) => setMousePosition({ x: ev.clientX, y: ev.clientY });
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);
  return mousePosition;
};

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
};

export const SectionLabel = ({ text }: { text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex justify-center mb-8 md:mb-16 w-full"
  >
    <h2 className="bg-white border-[3px] border-[#050505] text-[#050505] px-5 py-2 md:px-8 md:py-3 rounded-full font-bold text-xs md:text-sm tracking-[0.2em] uppercase shadow-[4px_4px_0px_#8AFF00] md:shadow-[6px_6px_0px_#8AFF00] transform -rotate-1 hover:rotate-0 hover:translate-y-1 hover:shadow-[2px_2px_0px_#8AFF00] transition-all duration-300">
      {text}
    </h2>
  </motion.div>
);

export const GlassPanel = ({
  children,
  className = '',
  onClick,
  style = {},
  hoverEffect = true,
  theme = 'dark',
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  hoverEffect?: boolean;
  theme?: 'dark' | 'light';
}) => {
  const isDark = theme === 'dark';
  return (
    <motion.div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] backdrop-blur-2xl
        ${isDark
          ? 'bg-[#151615]/40 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-white border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.04)]'
        }
        ${hoverEffect
          ? (isDark ? 'hover:bg-[#151615]/60 hover:border-[#8AFF00]/30' : 'hover:bg-[#F5F5F7] hover:border-[#8AFF00]/40') + ' transition-colors duration-500 cursor-pointer group'
          : ''
        }
        ${className}
      `}
      style={style}
      whileHover={hoverEffect ? { scale: 0.98, y: -4 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-white/[0.05]' : 'from-white/[0.2]'} via-transparent to-transparent opacity-50 pointer-events-none`} />
      <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${isDark ? 'from-white/[0.03]' : 'from-white/[0.1]'} to-transparent pointer-events-none`} />
      {children}
    </motion.div>
  );
};

export const InteractiveGlow = () => {
  const { x, y } = useMousePosition();
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 mix-blend-screen hidden md:block"
      style={{ background: `radial-gradient(800px circle at ${x}px ${y}px, rgba(138, 255, 0, 0.03), transparent 40%)` }}
    />
  );
};

export const AnimatedPieChart = ({ value, label, sublabel, delay = 0 }: {
  value: number;
  label: string;
  sublabel: string;
  delay?: number;
}) => {
  const radius = 40;
  const strokeWidth = 7;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference * (1 - value / 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.5 }}
      className="flex flex-col items-center gap-4 md:gap-5"
    >
      <div className="relative w-28 h-28 md:w-36 md:h-36">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90" aria-hidden="true">
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="rgba(5,5,5,0.08)"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="#8AFF00"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: targetOffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: delay * 0.5 }}
          />
          <motion.circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="#8AFF00"
            strokeWidth={3}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference, opacity: 0 }}
            whileInView={{ strokeDashoffset: targetOffset, opacity: 0.35 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: delay * 0.5 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-xl md:text-2xl font-black text-[#050505] leading-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay * 0.5 + 0.5 }}
          >
            {value}%
          </motion.span>
        </div>
      </div>
      <div className="text-center px-2">
        <p className="font-bold text-[#050505] text-sm md:text-base leading-tight">{label}</p>
        <p className="text-[#050505]/50 text-[11px] md:text-sm font-medium mt-0.5">{sublabel}</p>
      </div>
    </motion.div>
  );
};

export const CinematicLoader = ({ onComplete }: { onComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(100, prev + increment);
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const delay = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(delay);
    }
  }, [progress, onComplete]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const count = Math.min(65, Math.floor((canvas.width * canvas.height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 1.5 + 1.2,
      }));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawElectricArc = (x1: number, y1: number, x2: number, y2: number, opacity: number) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      const segments = Math.max(3, Math.floor(dist / 15));
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      
      for (let i = 1; i < segments; i++) {
        const t = i / segments;
        let lx = x1 + dx * t;
        let ly = y1 + dy * t;
        
        const perpX = -dy / dist;
        const perpY = dx / dist;
        
        const offset = (Math.random() - 0.5) * 12;
        lx += perpX * offset;
        ly += perpY * offset;
        
        ctx.lineTo(lx, ly);
      }
      
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(138, 255, 0, ${opacity * (Math.random() > 0.15 ? 0.35 : 0.08)})`;
      ctx.lineWidth = Math.random() * 1.2 + 0.4;
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const threshold = Math.min(130, canvas.width / 6.5);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < threshold) {
            const alpha = 1 - dist / threshold;
            drawElectricArc(particles[i].x, particles[i].y, particles[j].x, particles[j].y, alpha);
          }
        }
      }

      particles.forEach((p) => {
        p.vx += (Math.random() - 0.5) * 0.4;
        p.vy += (Math.random() - 0.5) * 0.4;

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 2.4;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const flickerRadius = p.radius * (Math.random() * 0.4 + 0.8);

        ctx.beginPath();
        ctx.arc(p.x, p.y, flickerRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#8AFF00';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, flickerRadius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(138, 255, 0, 0.15)';
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <motion.div
      key="cinematic-loader"
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="absolute w-48 h-48 rounded-full bg-[#8AFF00]/5 blur-[70px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-[0.15em] text-[#F5F3EE] mb-2 relative">
            BroadcastWeb
            <span className="absolute -top-1.5 -right-3 w-1.5 h-1.5 rounded-full bg-[#8AFF00] shadow-[0_0_8px_#8AFF00]" />
          </h2>
          <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#F5F3EE]/40 font-medium mb-12">
            Estudio creativo digital
          </span>
          <div className="font-mono text-5xl md:text-7xl font-bold text-[#8AFF00] tabular-nums tracking-tighter leading-none mb-4 select-none drop-shadow-[0_0_15px_rgba(138,255,0,0.2)]">
            {String(progress).padStart(3, '0')}
            <span className="text-xl md:text-2xl font-light text-[#F5F3EE]/50 ml-1">%</span>
          </div>
          <div className="h-5 flex items-center justify-center">
            <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-[#F5F3EE]/60 uppercase">
              {progress < 30 && 'Inicializando sistemas...'}
              {progress >= 30 && progress < 60 && 'Cargando malla de protones...'}
              {progress >= 60 && progress < 90 && 'Alineando interfaz premium...'}
              {progress >= 90 && 'Listo para el despegue'}
            </span>
          </div>
          <div className="w-40 md:w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-6 relative">
            <motion.div 
              className="h-full bg-[#8AFF00] shadow-[0_0_8px_#8AFF00] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
