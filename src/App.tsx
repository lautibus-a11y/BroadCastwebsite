import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useAnimation } from 'framer-motion';
import {
  ArrowUpRight, Sparkles, ChevronDown,
  Instagram, Linkedin, Twitter, Dribbble,
  Menu, X, ExternalLink, ChevronLeft, ChevronRight, Facebook
} from 'lucide-react';

// --- DATA & CUSTOM SVGS ---
const NAV_LINKS = ['Servicios', 'Proyectos', 'Agencia', 'FAQ'];

const SvgWebDesign = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="32" rx="4" stroke="#8AFF00" strokeWidth="2"/>
    <path d="M4 16H44" stroke="#8AFF00" strokeWidth="2"/>
    <circle cx="10" cy="12" r="1.5" fill="#8AFF00"/>
    <circle cx="16" cy="12" r="1.5" fill="#8AFF00"/>
    <rect x="10" y="22" width="12" height="12" rx="2" stroke="white" strokeWidth="2" strokeOpacity="0.7"/>
    <rect x="26" y="22" width="12" height="4" rx="1" fill="white" fillOpacity="0.7"/>
    <rect x="26" y="30" width="8" height="4" rx="1" fill="white" fillOpacity="0.7"/>
  </svg>
);

const SvgWebDev = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L4 14V34L24 44L44 34V14L24 4Z" stroke="#8AFF00" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M24 4V44" stroke="#8AFF00" strokeWidth="2" strokeOpacity="0.5"/>
    <path d="M4 14L24 24L44 14" stroke="#8AFF00" strokeWidth="2" strokeOpacity="0.5"/>
    <path d="M4 34L24 24L44 34" stroke="#8AFF00" strokeWidth="2" strokeOpacity="0.5"/>
    <circle cx="24" cy="24" r="4" fill="white"/>
  </svg>
);

const SvgUIUX = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="4" width="24" height="40" rx="6" stroke="#8AFF00" strokeWidth="2"/>
    <path d="M20 40H28" stroke="#8AFF00" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2" strokeOpacity="0.7"/>
    <circle cx="24" cy="24" r="2" fill="white" fillOpacity="0.7"/>
  </svg>
);

const SvgBranding = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" stroke="#8AFF00" strokeWidth="2"/>
    <path d="M24 4C24 4 34 14 34 24C34 34 24 44 24 44C24 44 14 34 14 24C14 14 24 4 24 4Z" stroke="white" strokeWidth="2" strokeOpacity="0.7"/>
    <path d="M4 24H44" stroke="#8AFF00" strokeWidth="2" strokeOpacity="0.5"/>
  </svg>
);

const SvgMotion = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="36" height="36" rx="18" stroke="#8AFF00" strokeWidth="2" strokeDasharray="4 4"/>
    <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2" strokeOpacity="0.7"/>
    <path d="M22 20L28 24L22 28V20Z" fill="#8AFF00"/>
  </svg>
);

const WA_BASE = 'https://wa.me/1234567890?text=';

const SERVICES = [
  { id: 1, title: 'Diseño Web',       icon: SvgWebDesign, colSpan: 'md:col-span-2', desc: 'Interfaces digitales inmersivas y arquitecturas visuales de alto impacto.',   whatsappUrl: WA_BASE + encodeURIComponent('Hola, me interesa el servicio de Diseño Web.') },
  { id: 2, title: 'Desarrollo Web',   icon: SvgWebDev,    colSpan: 'md:col-span-1', desc: 'Sistemas escalables, rápidos y seguros.',                                     whatsappUrl: WA_BASE + encodeURIComponent('Hola, me interesa el servicio de Desarrollo Web.') },
  { id: 3, title: 'UI/UX Design',     icon: SvgUIUX,      colSpan: 'md:col-span-1', desc: 'Flujos intuitivos centrados en la retención del usuario.',                    whatsappUrl: WA_BASE + encodeURIComponent('Hola, me interesa el servicio de UI/UX Design.') },
  { id: 4, title: 'Branding Digital', icon: SvgBranding,  colSpan: 'md:col-span-1', desc: 'Identidades visuales preparadas para el entorno moderno.',                    whatsappUrl: WA_BASE + encodeURIComponent('Hola, me interesa el servicio de Branding Digital.') },
  { id: 5, title: 'Motion & 3D',      icon: SvgMotion,    colSpan: 'md:col-span-1', desc: 'Animaciones fluidas y experiencias WebGL interactivas.',                       whatsappUrl: WA_BASE + encodeURIComponent('Hola, me interesa el servicio de Motion & 3D.') },
];

const PROJECTS = [
  {
    id: 1,
    title: 'Aura OS',
    category: 'Diseño & Dev',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    demoUrl: '#',
  },
  {
    id: 2,
    title: 'Nexa Finance',
    category: 'Web3 / FinTech',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop',
    demoUrl: '#',
  },
  {
    id: 3,
    title: 'Luminary Engine',
    category: 'Creative Dev',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
    demoUrl: '#',
  },
  {
    id: 4,
    title: 'Stellar Brand',
    category: 'Branding & UI',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop',
    demoUrl: '#',
  },
  {
    id: 5,
    title: 'Apex Platform',
    category: 'SaaS / Dev',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop',
    demoUrl: '#',
  },
  {
    id: 6,
    title: 'Nova Motion',
    category: 'Motion & 3D',
    image: 'https://images.unsplash.com/photo-1614729375290-b2a429f85b7b?q=80&w=2574&auto=format&fit=crop',
    demoUrl: '#',
  },
];

const INITIAL_VISIBLE = 3;

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'Analizamos tu mercado, audiencia y objetivos de negocio en profundidad para encontrar el ángulo tecnológico perfecto.' },
  { step: '02', title: 'Strategy', desc: 'Definimos la arquitectura del producto, wireframes estructurales y el stack tecnológico óptimo para escalabilidad.' },
  { step: '03', title: 'Design', desc: 'Creamos interfaces visualmente impactantes, aplicando nuestra estética Liquid Glass y sistemas de diseño robustos.' },
  { step: '04', title: 'Development', desc: 'Escribimos código limpio, optimizado y altamente animado. Dando vida al diseño con físicas y transiciones fluidas.' },
  { step: '05', title: 'Launch & Scale', desc: 'Despliegue en servidores premium, optimización SEO extrema y monitoreo continuo post-lanzamiento.' },
];

const TECH_STACK = ['React', 'GSAP', 'Framer Motion', 'Three.js', 'WebGL', 'Tailwind CSS', 'Next.js', 'TypeScript'];

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Santiago Vega',
    role: 'Director Creativo',
    image: '/santiago_vega.png',
    desc: 'Con más de una década liderando proyectos de identidad visual y dirección de arte, Santiago transforma conceptos abstractos en experiencias digitales de alto impacto. Su mirada cinematográfica es el sello creativo que distingue a NEXUS.',
    accent: '#8AFF00',
    tags: ['Dirección de Arte', 'Brand Strategy', 'Motion Design'],
  },
  {
    id: 2,
    name: 'Valentina Rossi',
    role: 'Directora de Arquitectura',
    image: '/valentina_rossi.png',
    desc: 'Especialista en arquitectura de información y sistemas de diseño escalables, Valentina asegura que cada producto no solo luzca impecable, sino que esté construido para perdurar. Lidera la estructuración técnica de cada plataforma con precisión quirúrgica.',
    accent: '#8AFF00',
    tags: ['Information Architecture', 'Design Systems', 'UX Strategy'],
  },
  {
    id: 3,
    name: 'Lucas Ferrer',
    role: 'Especialista en Marketing Digital',
    image: '/lucas_ferrer.png',
    desc: 'Experto en growth hacking, SEO técnico y campañas de performance, Lucas garantiza que cada lanzamiento digital alcance su máximo potencial. Transforma datos en decisiones estratégicas que escalan marcas al siguiente nivel.',
    accent: '#8AFF00',
    tags: ['Growth Strategy', 'SEO Técnico', 'Performance Marketing'],
  },
];

const FAQS = [
  { q: '¿Cuánto tiempo toma desarrollar un sitio web premium?', a: 'Depende de la complejidad. Un proyecto estándar toma entre 4 a 8 semanas, mientras que plataformas complejas o WebGL pueden tomar de 2 a 4 meses.' },
  { q: '¿Qué tecnologías utilizan?', a: 'Nos especializamos en el ecosistema React (Next.js), Tailwind CSS, Framer Motion y GSAP para animaciones. Para experiencias 3D usamos Three.js.' },
  { q: '¿Ofrecen mantenimiento post-lanzamiento?', a: 'Sí, ofrecemos planes de mantenimiento y evolución continua para asegurar que tu plataforma se mantenga rápida, segura y actualizada.' },
];

// --- UTILS & HOOKS ---
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const update = (ev: MouseEvent) => setMousePosition({ x: ev.clientX, y: ev.clientY });
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);
  return mousePosition;
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
};

const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Blob 1 - Verde Neón */}
    <motion.div
      animate={{
        x: ['-20%', '20%', '-10%', '10%', '-20%'],
        y: ['-15%', '15%', '5%', '-15%', '-15%'],
        scale: [1, 1.15, 0.9, 1.1, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] md:w-[60%] md:h-[60%] rounded-full bg-[#8AFF00]/8 blur-[60px] md:blur-[150px]"
    />
    
    {/* Blob 2 - Verde Oscuro */}
    <motion.div
      animate={{
        x: ['20%', '-20%', '10%', '-10%', '20%'],
        y: ['15%', '-15%', '-5%', '15%', '15%'],
        scale: [1.1, 0.9, 1.15, 0.95, 1.1],
      }}
      transition={{
        duration: 32,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute -bottom-1/4 -right-1/4 w-[90%] h-[90%] md:w-[70%] md:h-[70%] rounded-full bg-[#429900]/6 blur-[70px] md:blur-[180px]"
    />
  </div>
);

// --- CORE COMPONENTS ---
const SectionLabel = ({ text }: { text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex justify-center mb-8 md:mb-16 w-full"
  >
    <div className="bg-white border-[3px] border-[#050505] text-[#050505] px-5 py-2 md:px-8 md:py-3 rounded-full font-bold text-xs md:text-sm tracking-[0.2em] uppercase shadow-[4px_4px_0px_#8AFF00] md:shadow-[6px_6px_0px_#8AFF00] transform -rotate-1 hover:rotate-0 hover:translate-y-1 hover:shadow-[2px_2px_0px_#8AFF00] transition-all duration-300">
      {text}
    </div>
  </motion.div>
);

const GlassPanel = ({
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

const InteractiveGlow = () => {
  const { x, y } = useMousePosition();
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 mix-blend-screen hidden md:block"
      style={{ background: `radial-gradient(800px circle at ${x}px ${y}px, rgba(138, 255, 0, 0.03), transparent 40%)` }}
    />
  );
};

// --- NAVBAR ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link: string) => {
    setMenuOpen(false);
    scrollToSection(link.toLowerCase().replace(' ', '-'));
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 px-4 md:px-6 ${scrolled ? 'pt-3 md:pt-4' : 'pt-4 md:pt-8'}`}
      >
        <div className="flex items-center justify-between px-5 py-3 md:px-8 md:py-4 w-full max-w-5xl mx-auto rounded-2xl md:rounded-full bg-[#050505]/90 border border-white/[0.08] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#F5F3EE] font-bold text-lg md:text-xl tracking-tighter flex items-center gap-2 cursor-pointer select-none"
          >
            <div className="w-2 h-2 rounded-full bg-[#8AFF00] shadow-[0_0_10px_#8AFF00]" />
            NEXUS
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link, i) => (
              <button
                key={i}
                onClick={() => handleNavClick(link)}
                className="text-[#F5F3EE]/60 hover:text-[#8AFF00] transition-colors text-sm font-medium tracking-wide"
              >
                {link}
              </button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scrollToSection('contacto')}
              className="hidden md:block px-5 py-2 rounded-xl bg-[#8AFF00] text-[#050505] text-sm font-semibold hover:shadow-[0_0_20px_rgba(138,255,0,0.3)] transition-all"
            >
              Iniciar Proyecto
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#F5F3EE]"
              aria-label="Menú"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#050505]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNavClick(link)}
                className="text-3xl font-bold text-[#F5F3EE]/80 hover:text-[#8AFF00] transition-colors tracking-tight"
              >
                {link}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
              onClick={() => {
                setMenuOpen(false);
                scrollToSection('contacto');
              }}
              className="mt-4 px-8 py-4 rounded-xl bg-[#8AFF00] text-[#050505] text-lg font-bold"
            >
              Iniciar Proyecto
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- 1. HERO SECTION ---
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-[#050505]">
    {/* Background video */}
    <div className="absolute inset-0 w-full h-full z-0">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 md:opacity-40 mix-blend-screen">
        <source src="https://cdn.pixabay.com/video/2023/10/22/186115-876931580_large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/60 to-[#050505]" />
    </div>

    <div className="w-full max-w-5xl relative z-10 flex flex-col items-center text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-[#151615]/50 backdrop-blur-md mb-6 md:mb-8"
      >
        <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#8AFF00]" />
        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#F5F3EE]/80 font-medium">Agencia Creativa Digital</span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-[1.1] text-[#F5F3EE] mb-5 md:mb-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Elevamos tu marca a la{' '}
        <br className="hidden sm:block" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5F3EE] via-[#8AFF00] to-[#5EFF00] italic pr-2">
          nueva realidad digital
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="max-w-xl md:max-w-2xl text-base md:text-xl text-[#F5F3EE]/60 font-light mb-8 md:mb-12 leading-relaxed px-2 md:px-0"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Diseñamos y desarrollamos plataformas web premium que combinan estética cinematográfica con rendimiento técnico impecable.
      </motion.p>

      {/* CTAs — menos redondeados */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
      >
        <button 
          onClick={() => scrollToSection('proyectos')}
          className="px-6 py-3.5 md:px-8 md:py-4 rounded-xl bg-[#8AFF00] text-[#050505] font-semibold tracking-wide hover:shadow-[0_0_30px_rgba(138,255,0,0.4)] transition-all flex items-center justify-center gap-2 group text-sm md:text-base"
        >
          Ver Proyectos <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
        <button 
          onClick={() => scrollToSection('servicios')}
          className="px-6 py-3.5 md:px-8 md:py-4 rounded-xl bg-[#151615]/50 backdrop-blur-md border border-white/10 text-[#F5F3EE] font-semibold hover:bg-white/10 transition-all text-sm md:text-base"
        >
          Servicios
        </button>
      </motion.div>
    </div>
  </section>
);

// --- 2. CLIENTS MARQUEE (más delgada) ---
const ClientsSection = () => (
  <section className="py-3 md:py-4 bg-white border-y-[3px] border-[#8AFF00] relative z-20 overflow-hidden shadow-[0_0_40px_rgba(138,255,0,0.12)]">
    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-20" />
    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-20" />
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ ease: 'linear', duration: 22, repeat: Infinity }}
    >
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center gap-8 md:gap-12 px-4 md:px-6">
          {['APPLE', 'TESLA', 'NIKE', 'SPOTIFY', 'SQUARESPACE', 'VERCEL', 'ROBLOX'].map((client, idx) => (
            <React.Fragment key={idx}>
              <span className="text-[#050505] text-lg md:text-2xl font-black tracking-widest uppercase">{client}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8AFF00] shrink-0">
                <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" fill="currentColor" />
              </svg>
            </React.Fragment>
          ))}
        </div>
      ))}
    </motion.div>
  </section>
);

// --- 3. SERVICES SECTION ---
const ServicesSection = () => (
  <section id="servicios" className="py-16 md:py-32 px-4 md:px-6 bg-[#050505] relative z-10 overflow-hidden">
    <AuroraBackground />
    <div className="max-w-7xl mx-auto relative z-10">
      <SectionLabel text="Áreas de Especialidad" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {SERVICES.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 0.98, y: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className={`
              relative overflow-hidden rounded-2xl md:rounded-[2rem] p-7 md:p-10 flex flex-col justify-between min-h-[240px] md:min-h-[300px] group
              bg-gradient-to-br from-white/[0.07] to-transparent
              backdrop-blur-3xl
              border border-white/25
              shadow-[0_10px_40px_rgba(0,0,0,0.55),inset_0_1px_0px_rgba(255,255,255,0.35),inset_1px_0px_0px_rgba(255,255,255,0.1)]
              hover:border-white/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_0px_rgba(255,255,255,0.5),0_0_0_1px_rgba(138,255,0,0.15)]
              transition-all duration-500 cursor-pointer
              ${service.colSpan}
            `}
          >
            {/* Top shimmer border highlight */}
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

            {/* Subtle inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent opacity-60 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            {/* Gloss sweep */}
            <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-b from-white/[0.07] via-white/[0.01] to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[50%] transition-transform duration-[1.5s] ease-in-out pointer-events-none" />

            {/* Icon */}
            <div className="relative z-10 mb-5 transform group-hover:scale-110 transition-transform duration-500 origin-left drop-shadow-[0_0_15px_rgba(138,255,0,0.35)]">
              <service.icon />
            </div>

            {/* Text + CTA */}
            <div className="relative z-10 flex flex-col gap-3">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#F5F3EE] mb-1.5 md:mb-2 group-hover:text-[#8AFF00] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-[#F5F3EE]/55 leading-relaxed text-sm md:text-base font-medium">{service.desc}</p>
              </div>

              {/* Consultar CTA */}
              <a
                href={service.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-[#8AFF00] text-sm font-bold mt-1 w-fit
                  border-b border-transparent hover:border-[#8AFF00] transition-all duration-300 group/cta"
              >
                Consultar
                <motion.span
                  className="inline-flex"
                  animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- 4. PROJECTS SECTION ---
const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const hasMore = PROJECTS.length > INITIAL_VISIBLE;
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_VISIBLE);

  return (
    <section id="proyectos" className="py-16 md:py-32 px-4 md:px-6 bg-[#050505] relative z-10 overflow-hidden">
      <AuroraBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionLabel text="Obras Destacadas" />

        <div className="flex flex-col gap-5 md:gap-10">
          <AnimatePresence initial={false}>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="md:sticky md:top-28"
                style={{ zIndex: index + 1 }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassPanel theme="dark" hoverEffect={false} className="p-2.5 md:p-4 group">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl md:rounded-[1.5rem]">
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#8AFF00]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-[1.5s]"
                    />
                    {/* Gradient overlay with title and button */}
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-20">
                      <span className="text-[#8AFF00] text-[10px] md:text-sm font-bold tracking-widest uppercase mb-1 md:mb-2 block">
                        {project.category}
                      </span>
                      <div className="flex items-end justify-between gap-3">
                        <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F3EE] leading-tight">
                          {project.title}
                        </h3>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-5 md:py-3 rounded-xl bg-[#8AFF00] text-[#050505] text-[11px] md:text-sm font-bold hover:shadow-[0_0_20px_rgba(138,255,0,0.5)] transition-all active:scale-95 whitespace-nowrap"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Ver demo
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Ver más button */}
        {hasMore && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="flex justify-center mt-8 md:mt-14"
          >
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 md:gap-3 px-6 py-3.5 md:px-8 md:py-4 rounded-xl border border-white/15 bg-white/[0.04] text-[#F5F3EE] font-semibold text-sm md:text-base hover:bg-[#8AFF00] hover:text-[#050505] hover:border-[#8AFF00] hover:shadow-[0_0_30px_rgba(138,255,0,0.25)] transition-all duration-300 backdrop-blur-md"
            >
              Ver más proyectos
              <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// --- 5. PROCESS SECTION ---
const ProcessStep = ({ p }: { p: typeof PROCESS[number] }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ margin: '-30% 0px -30% 0px' }}
    className="group"
  >
    <GlassPanel theme="light" className="p-5 md:p-10 flex flex-col gap-2">
      <div className="flex items-center gap-4 md:gap-6">
        <span className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#050505]/20 to-transparent group-hover:from-[#8AFF00] transition-colors shrink-0">
          {p.step}
        </span>
        <h3 className="text-xl md:text-3xl font-bold text-[#050505]">{p.title}</h3>
      </div>
      <motion.div
        variants={{
          hidden: { height: 0, opacity: 0, marginTop: 0 },
          visible: { height: 'auto', opacity: 1, marginTop: 12 },
        }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="text-[#050505]/70 text-sm md:text-lg border-l-2 border-[#8AFF00] pl-4 md:pl-6 ml-0 md:ml-[4.5rem] leading-relaxed">
          {p.desc}
        </p>
      </motion.div>
    </GlassPanel>
  </motion.div>
);

const ProcessSection = () => (
  <section className="py-16 md:py-32 px-4 md:px-6 bg-[#F5F5F7] relative z-10">
    <div className="max-w-4xl mx-auto">
      <SectionLabel text="Metodología de Trabajo" />
      <div className="flex flex-col gap-4 md:gap-6">
        {PROCESS.map((p, i) => <ProcessStep key={i} p={p} />)}
      </div>
    </div>
  </section>
);

// --- 6. PIE CHART STATS ---
const PIE_STATS = [
  { value: 87, label: 'Proyectos Entregados', sublabel: 'a tiempo y en presupuesto' },
  { value: 99, label: 'Satisfacción del Cliente', sublabel: 'tasa de aprobación' },
  { value: 95, label: 'Ranking Awwwards', sublabel: 'top agencias globales' },
  { value: 100, label: 'Soporte Activo', sublabel: '24 / 7 disponibilidad' },
];

const AnimatedPieChart = ({ value, label, sublabel, delay = 0 }: {
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
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center gap-4 md:gap-5"
    >
      {/* SVG donut chart */}
      <div className="relative w-28 h-28 md:w-36 md:h-36">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90" aria-hidden="true">
          {/* Track */}
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="rgba(5,5,5,0.08)"
            strokeWidth={strokeWidth}
          />
          {/* Animated fill */}
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
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: delay + 0.2 }}
            style={{ filter: 'drop-shadow(0 0 5px rgba(138,255,0,0.7))' }}
          />
          {/* Outer glow ring */}
          <motion.circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="#8AFF00"
            strokeWidth={1}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference, opacity: 0 }}
            whileInView={{ strokeDashoffset: targetOffset, opacity: 0.25 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: delay + 0.2 }}
          />
        </svg>
        {/* Centered percentage */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-xl md:text-2xl font-black text-[#050505] leading-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + 1 }}
          >
            {value}%
          </motion.span>
        </div>
      </div>

      {/* Labels */}
      <div className="text-center px-2">
        <p className="font-bold text-[#050505] text-sm md:text-base leading-tight">{label}</p>
        <p className="text-[#050505]/50 text-[11px] md:text-sm font-medium mt-0.5">{sublabel}</p>
      </div>
    </motion.div>
  );
};

const WhyUsSection = () => (
  <section className="py-12 md:py-20 px-4 md:px-6 bg-[#F5F5F7] relative z-10 pb-16 md:pb-32">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {PIE_STATS.map((stat, i) => (
          <AnimatedPieChart
            key={i}
            value={stat.value}
            label={stat.label}
            sublabel={stat.sublabel}
            delay={i * 0.12}
          />
        ))}
      </div>
    </div>
  </section>
);

// --- 7. TEAM SLIDER ---
const TeamSliderSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const total = TEAM_MEMBERS.length;

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + total) % total);
  }, [total]);

  // Touch / swipe support
  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
  };
  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;
    const delta = dragStartX.current - endX;
    if (Math.abs(delta) > 50) paginate(delta > 0 ? 1 : -1);
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0, scale: 0.92 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, scale: 0.92 }),
  };

  const member = TEAM_MEMBERS[current];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#050505] relative z-10 overflow-hidden">
      <AuroraBackground />
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000 z-0"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 60%, ${member.accent}18, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10 md:mb-14"
        >
          <div className="bg-white border-[3px] border-[#050505] text-[#050505] px-5 py-2 md:px-8 md:py-3 rounded-full font-bold text-xs md:text-sm tracking-[0.2em] uppercase shadow-[4px_4px_0px_#8AFF00] md:shadow-[6px_6px_0px_#8AFF00] transform -rotate-1 hover:rotate-0 transition-all duration-300">
            Nuestro Equipo
          </div>
        </motion.div>

        <div
          className="relative overflow-hidden rounded-2xl md:rounded-[2rem] select-none"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] md:min-h-[560px]"
            >
              {/* Photo side */}
              <div className="relative overflow-hidden rounded-t-2xl lg:rounded-l-[2rem] lg:rounded-tr-none min-h-[260px] md:min-h-[380px] lg:min-h-0">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#050505]/60" />
                {/* Accent stripe */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 lg:h-full lg:w-1 lg:right-0 lg:top-0 lg:left-auto"
                  style={{ background: member.accent }}
                  layoutId="accent-stripe"
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Content side */}
              <div
                className="relative flex flex-col justify-center p-6 md:p-10 lg:p-14"
                style={{
                  background: 'linear-gradient(135deg, rgba(21,22,21,0.98) 0%, rgba(10,10,10,0.95) 100%)',
                  backdropFilter: 'blur(24px)',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  borderRight: '1px solid rgba(255,255,255,0.06)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Shimmer top */}
                <div className="absolute top-0 left-6 right-6 h-px" style={{ background: `linear-gradient(90deg, transparent, ${member.accent}60, transparent)` }} />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {/* Role badge */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-4"
                    style={{ background: `${member.accent}20`, color: member.accent, border: `1px solid ${member.accent}40` }}
                  >
                    {member.role}
                  </span>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F3EE] mb-4 leading-tight tracking-tighter">
                    {member.name}
                  </h3>

                  <p className="text-[#F5F3EE]/65 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                    {member.desc}
                  </p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold tracking-wide text-[#F5F3EE]/70 bg-white/[0.06] border border-white/[0.1] hover:border-white/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => paginate(-1)}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-white/15 bg-white/5 text-[#F5F3EE]/60 hover:text-[#F5F3EE] hover:border-white/40 hover:bg-white/10 transition-all duration-300 active:scale-90"
                      aria-label="Anterior"
                    >
                      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2 items-center">
                      {TEAM_MEMBERS.map((m, i) => (
                        <button
                          key={i}
                          onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                          className="transition-all duration-400"
                          aria-label={`Ir a ${m.name}`}
                        >
                          <motion.div
                            animate={{ width: i === current ? 24 : 8, opacity: i === current ? 1 : 0.35 }}
                            transition={{ duration: 0.3 }}
                            className="h-2 rounded-full"
                            style={{ background: i === current ? member.accent : '#fff' }}
                          />
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => paginate(1)}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-white/15 bg-white/5 text-[#F5F3EE]/60 hover:text-[#F5F3EE] hover:border-white/40 hover:bg-white/10 transition-all duration-300 active:scale-90"
                      aria-label="Siguiente"
                    >
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>

                    <span className="ml-auto text-[#F5F3EE]/30 text-sm font-mono tabular-nums">
                      {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// --- LIQUID GLASS SOCIAL FLOATS ---
const SocialFloat = () => {
  const socials = [
    {
      href: 'https://facebook.com',
      label: 'Facebook',
      icon: Facebook,
    },
    {
      href: 'https://instagram.com',
      label: 'Instagram',
      icon: Instagram,
    },
    {
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      icon: Linkedin,
    },
    {
      href: 'https://twitter.com',
      label: 'Twitter',
      icon: Twitter,
    },
  ];

  return (
    <div className="py-10 md:py-16 px-4 md:px-6 bg-[#050505] relative z-10 overflow-hidden">
      <AuroraBackground />
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#F5F3EE]/40 text-xs tracking-[0.25em] uppercase font-semibold"
        >
          Síguenos en redes
        </motion.p>
        <div className="flex flex-wrap justify-center gap-5 md:gap-8">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              animate={{ y: [0, -6, 0] }}
              style={{
                animationDuration: `${4 + i * 0.8}s`,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out',
              }}
              // @ts-ignore
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                backgroundColor: 'rgba(138, 255, 0, 0.08)',
                borderColor: 'rgba(138, 255, 0, 0.4)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.25), 0 0 25px rgba(138, 255, 0, 0.3)',
              }}
              whileTap={{ scale: 0.96 }}
              className="relative flex items-center gap-3 px-5 py-3.5 md:px-7 md:py-4 rounded-2xl group overflow-hidden cursor-pointer transition-all duration-300 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] text-[#F5F3EE]/75 hover:text-[#8AFF00]"
            >
              {/* Liquid glass dynamic reflection sweep */}
              <div className="absolute -top-full -left-full w-[300%] h-[300%] bg-gradient-to-b from-white/[0.08] via-white/[0.01] to-transparent rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-in-out pointer-events-none" />
              
              {/* Animated glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(138, 255, 0, 0.15), transparent 70%)' }}
              />

              <s.icon
                className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:scale-110 relative z-10 text-[#F5F3EE]/75 group-hover:text-[#8AFF00]"
              />
              <span className="font-semibold text-sm md:text-base tracking-wide relative z-10 transition-colors duration-300">
                {s.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 7. ABOUT ---
const AboutSection = () => {
  const SKILLS_STATS = [
    { label: 'Diseño UI/UX & Branding', value: 95 },
    { label: 'Desarrollo Frontend & React', value: 98 },
    { label: 'Animación & Motion Design', value: 90 },
    { label: 'Arquitectura Web3 & Backend', value: 85 },
  ];

  return (
    <section id="agencia" className="py-16 md:py-32 px-4 md:px-6 bg-[#050505] relative z-10 overflow-hidden">
      <AuroraBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionLabel text="Conoce el Estudio" />
        <GlassPanel theme="dark" hoverEffect={false} className="p-6 md:p-16 border-[#8AFF00]/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-[#F5F3EE] mb-4 md:mb-6 leading-tight">
                Redefiniendo el estándar digital moderno.
              </h3>
              <p className="text-[#F5F3EE]/70 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                NEXUS es una agencia boutique compuesta por diseñadores visionarios y desarrolladores de élite. No usamos plantillas. Cada línea de código y cada pixel están meticulosamente elaborados a medida.
              </p>
              <div className="flex flex-col gap-4 md:gap-6">
                {SKILLS_STATS.map((stat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-[#F5F3EE] mb-1.5 md:mb-2 text-xs md:text-sm font-bold tracking-wide">
                      <span>{stat.label}</span>
                      <span className="text-[#8AFF00]">{stat.value}%</span>
                    </div>
                    <div className="h-[5px] md:h-[6px] w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                        className="h-full bg-[#8AFF00] shadow-[0_0_12px_#8AFF00] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[240px] md:h-[500px] rounded-2xl md:rounded-[2rem] overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                alt="Agency Team"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#8AFF00]/10 mix-blend-overlay" />
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
};

// --- 8. TECH STACK MARQUEE ---
const TechStackSection = () => (
  <section className="py-8 md:py-12 bg-[#050505] border-y border-white/5 relative z-10 overflow-hidden">
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
    >
      {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
        <span
          key={index}
          className="mx-6 md:mx-10 text-xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#F5F3EE]/40 to-[#F5F3EE]/10 hover:from-[#8AFF00] hover:to-[#429900] transition-colors cursor-default"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  </section>
);

// --- 9. TESTIMONIALS ---
const TestimonialsSection = () => (
  <section className="py-16 md:py-32 px-4 md:px-6 bg-[#F5F5F7] relative z-10">
    <div className="max-w-7xl mx-auto">
      <SectionLabel text="Testimonios Reales" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        {[
          { name: 'Sarah L.', role: 'CMO, GlobalTech', text: 'Llevaron nuestra marca al futuro. El nivel de detalle en el diseño y la fluidez de las animaciones superaron nuestras expectativas.' },
          { name: 'David M.', role: 'Founder, FinEdge', text: 'Buscábamos una agencia que entendiera Web3. Nexus no solo lo entendió, sino que creó la interfaz más premium de nuestro sector.' },
          { name: 'Elena R.', role: 'Director, ArtSpace', text: 'Trabajar con ellos es como ver magia. El motor WebGL que construyeron para nuestra galería virtual es simplemente impresionante.' },
        ].map((t, i) => (
          <GlassPanel key={i} theme="light" className="p-6 md:p-8 relative">
            <div className="absolute top-5 right-6 text-[#050505]/10 font-serif text-5xl md:text-6xl leading-none">"</div>
            <div className="flex gap-1 mb-4 md:mb-6 text-[#8AFF00]">
              {[1, 2, 3, 4, 5].map(star => (
                <svg key={star} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[#050505]/70 italic mb-6 md:mb-8 text-sm md:text-base leading-relaxed relative z-10">"{t.text}"</p>
            <div>
              <p className="font-bold text-[#050505] text-sm md:text-base">{t.name}</p>
              <p className="text-[#050505]/50 text-xs md:text-sm font-medium tracking-wide">{t.role}</p>
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  </section>
);

// --- 10. FAQ ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-10 px-4 md:px-6 bg-[#F5F5F7] relative z-10 pb-16 md:pb-32">
      <div className="max-w-3xl mx-auto">
        <SectionLabel text="Preguntas Frecuentes" />
        <div className="flex flex-col gap-3 md:gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <GlassPanel key={index} theme="light" className="overflow-hidden" hoverEffect={false}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 md:p-8 flex justify-between items-center font-bold text-sm md:text-lg text-[#050505] hover:text-[#429900] transition-colors gap-4 min-h-[56px]"
                >
                  <span>{faq.q}</span>
                  <div className={`shrink-0 p-1.5 md:p-2 rounded-full border border-black/10 transition-transform duration-500 ${isOpen ? 'rotate-180 bg-[#8AFF00] border-[#8AFF00]' : ''}`}>
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="px-5 md:px-8 pb-5 md:pb-8 text-[#050505]/70 text-sm md:text-base border-t border-black/5 pt-4 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- 11. CONTACT ---
const ContactSection = () => (
  <section id="contacto" className="py-16 md:py-32 px-4 md:px-6 bg-white relative z-10 overflow-hidden border-t border-black/5">
    <div className="max-w-4xl mx-auto text-center relative">
      <SectionLabel text="Inicia tu Proyecto" />
      <div className="absolute inset-0 bg-[#8AFF00]/10 blur-[120px] md:blur-[150px] rounded-full z-[-1]" />
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#050505] mb-4 md:mb-6 tracking-tighter">
        Comienza tu <br />
        <span className="text-[#429900] italic">transformación.</span>
      </h2>
      <p className="text-base md:text-xl text-[#050505]/60 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
        Estamos listos para construir el próximo gran éxito digital juntos. Agenda una llamada de descubrimiento.
      </p>
      <form className="max-w-lg mx-auto flex flex-col gap-3 md:gap-4 mb-12 md:mb-16 text-left">
        <input
          type="text"
          placeholder="Tu Nombre"
          className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl bg-[#F5F5F7] border border-black/5 focus:outline-none focus:border-[#8AFF00] focus:ring-4 focus:ring-[#8AFF00]/20 transition-all text-[#050505] font-medium text-sm md:text-base"
        />
        <input
          type="email"
          placeholder="Email Profesional"
          className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl bg-[#F5F5F7] border border-black/5 focus:outline-none focus:border-[#8AFF00] focus:ring-4 focus:ring-[#8AFF00]/20 transition-all text-[#050505] font-medium text-sm md:text-base"
        />
        <textarea
          placeholder="Cuéntanos brevemente sobre tu proyecto..."
          rows={4}
          className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl bg-[#F5F5F7] border border-black/5 focus:outline-none focus:border-[#8AFF00] focus:ring-4 focus:ring-[#8AFF00]/20 transition-all text-[#050505] font-medium resize-none text-sm md:text-base"
        />
        <button
          type="button"
          className="w-full py-4 md:py-5 mt-2 md:mt-4 rounded-xl md:rounded-2xl bg-[#050505] text-[#F5F3EE] text-base md:text-lg font-bold hover:bg-[#8AFF00] hover:text-[#050505] hover:shadow-[0_0_30px_rgba(138,255,0,0.4)] transition-all duration-300"
        >
          Agendar Reunión Inicial
        </button>
      </form>
    </div>
  </section>
);

// --- 12. FOOTER ---
const Footer = () => (
  <footer className="pt-12 md:pt-20 pb-8 md:pb-10 px-4 md:px-6 bg-[#050505] text-[#F5F3EE] relative z-10 border-t border-[#8AFF00]/20 overflow-hidden">
    <AuroraBackground />
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16 relative z-10">
      <div className="col-span-1 md:col-span-2">
        <div className="font-bold text-xl md:text-2xl tracking-tighter flex items-center gap-2 mb-4 md:mb-6">
          <div className="w-2 h-2 rounded-full bg-[#8AFF00] shadow-[0_0_10px_#8AFF00]" />
          NEXUS AGENCY
        </div>
        <p className="text-[#F5F3EE]/50 max-w-sm leading-relaxed text-sm md:text-base">
          Creando experiencias digitales del mañana, hoy. Diseño premium, desarrollo de élite y resultados tangibles.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-4 md:mb-6 uppercase tracking-widest text-xs md:text-sm text-[#8AFF00]">Navegación</h4>
        <ul className="space-y-2 md:space-y-3 text-[#F5F3EE]/60 font-medium text-sm md:text-base">
          {['Servicios', 'Proyectos', 'Agencia', 'Contacto'].map((l) => (
            <li key={l}>
              <a 
                href={`#${l.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(l.toLowerCase().replace(' ', '-')); }}
                className="hover:text-[#F5F3EE] transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4 md:mb-6 uppercase tracking-widest text-xs md:text-sm text-[#8AFF00]">Redes</h4>
        <div className="flex gap-3 md:gap-4 flex-wrap">
          {[Twitter, Instagram, Linkedin, Dribbble].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8AFF00] hover:text-[#050505] hover:border-[#8AFF00] transition-all duration-300"
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-[#F5F3EE]/40 pt-6 md:pt-8 border-t border-white/10 gap-3 md:gap-0">
      <p>© {new Date().getFullYear()} Nexus Digital Agency. Todos los derechos reservados.</p>
      <div className="flex gap-4 md:gap-6 font-medium">
        <a href="#" className="hover:text-[#8AFF00] transition-colors">Privacidad</a>
        <a href="#" className="hover:text-[#8AFF00] transition-colors">Términos</a>
      </div>
    </div>
  </footer>
);

// --- SMOOTH SCROLL HOOK ---
const useSmoothScroll = () => {
  useEffect(() => {
    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let rafId: number;
    let isScrolling = false;
    const ease = 0.082; // smoothing factor — lower = more inertia

    const onWheel = (e: WheelEvent) => {
      // Only apply on non-touch devices
      if (e.deltaMode === 0) {
        e.preventDefault();
        targetY = Math.max(0, Math.min(document.body.scrollHeight - window.innerHeight, targetY + e.deltaY));
        if (!isScrolling) {
          isScrolling = true;
          raf();
        }
      }
    };

    const raf = () => {
      const diff = targetY - currentY;
      if (Math.abs(diff) < 0.5) {
        currentY = targetY;
        isScrolling = false;
        return;
      }
      currentY += diff * ease;
      window.scrollTo(0, currentY);
      rafId = requestAnimationFrame(raf);
    };

    // Only enable on desktop
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      window.addEventListener('wheel', onWheel, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', onWheel);
      cancelAnimationFrame(rafId);
    };
  }, []);
};

// --- CINEMATIC REVEAL LOADER ---
const CinematicLoader = ({ onComplete }: { onComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState(0);

  // Progress Counter Simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3; // 3-10% per step
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

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Particle System (constellation/proton garden)
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

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
        radius: Math.random() * 1.5 + 1.2,
      }));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw connections (proton bonds)
      const threshold = Math.min(125, canvas.width / 7);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < threshold) {
            const alpha = 1 - dist / threshold;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(138, 255, 0, ${alpha * 0.15})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 2. Draw & update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce walls
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Base dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#8AFF00';
        ctx.fill();

        // Glow ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
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

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Glow backdrop */}
        <div className="absolute w-48 h-48 rounded-full bg-[#8AFF00]/5 blur-[70px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Logo brand */}
          <h2 className="text-4xl md:text-5xl font-black tracking-[0.25em] text-[#F5F3EE] mb-2 relative">
            NEXUS
            <span className="absolute -top-1.5 -right-3 w-1.5 h-1.5 rounded-full bg-[#8AFF00] shadow-[0_0_8px_#8AFF00]" />
          </h2>
          
          <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#F5F3EE]/40 font-medium mb-12">
            Creative Digital Studio
          </span>

          {/* Progress number counter */}
          <div className="font-mono text-5xl md:text-7xl font-bold text-[#8AFF00] tabular-nums tracking-tighter leading-none mb-4 select-none drop-shadow-[0_0_15px_rgba(138,255,0,0.2)]">
            {String(progress).padStart(3, '0')}
            <span className="text-xl md:text-2xl font-light text-[#F5F3EE]/50 ml-1">%</span>
          </div>

          {/* Dynamic text feedback */}
          <div className="h-5 flex items-center justify-center">
            <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-[#F5F3EE]/60 uppercase">
              {progress < 30 && 'Inicializando sistemas...'}
              {progress >= 30 && progress < 60 && 'Cargando malla de protones...'}
              {progress >= 60 && progress < 90 && 'Alineando interfaz premium...'}
              {progress >= 90 && 'Listo para el despegue'}
            </span>
          </div>

          {/* Loading bar track */}
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

// --- MAIN APP ---
export default function App() {
  useSmoothScroll();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <CinematicLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div
        className="min-h-screen bg-[#050505] text-[#F5F3EE] selection:bg-[#8AFF00] selection:text-[#050505]"
        style={{ fontFamily: '"Inter", "Space Grotesk", system-ui, sans-serif' }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          h1, h2, h3, h4, .font-bold, .font-black { font-family: 'Space Grotesk', sans-serif; }
          html { scroll-behavior: smooth; }
          * { -webkit-tap-highlight-color: transparent; }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #050505; }
          ::-webkit-scrollbar-thumb { background: #151615; border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #8AFF00; }
          /* Cinematic momentum on anchor links */
          @media (prefers-reduced-motion: no-preference) {
            html { scroll-behavior: smooth; }
          }
        ` }} />

        <InteractiveGlow />
        <Navbar />

        <main>
          <HeroSection />
          <ClientsSection />
          <ServicesSection />
          <ProjectsSection />
          <ProcessSection />
          <WhyUsSection />
          <AboutSection />
          <TeamSliderSection />
          <SocialFloat />
          <TechStackSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}