import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, Mail, Sparkles, Layers, 
  ChevronDown, CheckCircle2,
  Instagram, Linkedin, Twitter, Dribbble
} from 'lucide-react';

// --- DATA & CUSTOM SVGS ---
const NAV_LINKS = ['Servicios', 'Proyectos', 'Agencia', 'FAQ'];

// SVGs Profesionales para las cards
const SvgWebDesign = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L4 14V34L24 44L44 34V14L24 4Z" stroke="#8AFF00" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M24 4V44" stroke="#8AFF00" strokeWidth="2" strokeOpacity="0.5"/>
    <path d="M4 14L24 24L44 14" stroke="#8AFF00" strokeWidth="2" strokeOpacity="0.5"/>
    <path d="M4 34L24 24L44 34" stroke="#8AFF00" strokeWidth="2" strokeOpacity="0.5"/>
    <circle cx="24" cy="24" r="4" fill="white"/>
  </svg>
);

const SvgUIUX = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="4" width="24" height="40" rx="6" stroke="#8AFF00" strokeWidth="2"/>
    <path d="M20 40H28" stroke="#8AFF00" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2" strokeOpacity="0.7"/>
    <circle cx="24" cy="24" r="2" fill="white" fillOpacity="0.7"/>
  </svg>
);

const SvgBranding = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" stroke="#8AFF00" strokeWidth="2"/>
    <path d="M24 4C24 4 34 14 34 24C34 34 24 44 24 44C24 44 14 34 14 24C14 14 24 4 24 4Z" stroke="white" strokeWidth="2" strokeOpacity="0.7"/>
    <path d="M4 24H44" stroke="#8AFF00" strokeWidth="2" strokeOpacity="0.5"/>
  </svg>
);

const SvgMotion = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="36" height="36" rx="18" stroke="#8AFF00" strokeWidth="2" strokeDasharray="4 4"/>
    <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2" strokeOpacity="0.7"/>
    <path d="M22 20L28 24L22 28V20Z" fill="#8AFF00"/>
  </svg>
);

const SERVICES = [
  { id: 1, title: 'Diseño Web', icon: SvgWebDesign, colSpan: 'md:col-span-2', desc: 'Interfaces digitales inmersivas y arquitecturas visuales de alto impacto.' },
  { id: 2, title: 'Desarrollo Web', icon: SvgWebDev, colSpan: 'md:col-span-1', desc: 'Sistemas escalables, rápidos y seguros.' },
  { id: 3, title: 'UI/UX Design', icon: SvgUIUX, colSpan: 'md:col-span-1', desc: 'Flujos intuitivos centrados en la retención del usuario.' },
  { id: 4, title: 'Branding Digital', icon: SvgBranding, colSpan: 'md:col-span-1', desc: 'Identidades visuales preparadas para el entorno moderno.' },
  { id: 5, title: 'Motion & 3D', icon: SvgMotion, colSpan: 'md:col-span-1', desc: 'Animaciones fluidas y experiencias WebGL interactivas.' },
];

const PROJECTS = [
  { id: 1, title: 'Aura OS', category: 'Diseño & Dev', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop' },
  { id: 2, title: 'Nexa Finance', category: 'Web3 / FinTech', image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop' },
  { id: 3, title: 'Luminary Engine', category: 'Creative Dev', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop' }
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'Analizamos tu mercado, audiencia y objetivos de negocio en profundidad para encontrar el ángulo tecnológico perfecto.' },
  { step: '02', title: 'Strategy', desc: 'Definimos la arquitectura del producto, wireframes estructurales y el stack tecnológico óptimo para escalabilidad.' },
  { step: '03', title: 'Design', desc: 'Creamos interfaces visualmente impactantes, aplicando nuestra estética Liquid Glass y sistemas de diseño robustos.' },
  { step: '04', title: 'Development', desc: 'Escribimos código limpio, optimizado y altamente animado. Dando vida al diseño con físicas y transiciones fluidas.' },
  { step: '05', title: 'Launch & Scale', desc: 'Despliegue en servidores premium, optimización SEO extrema y monitoreo continuo post-lanzamiento.' }
];

const TECH_STACK = ['React', 'GSAP', 'Framer Motion', 'Three.js', 'WebGL', 'Tailwind CSS', 'Next.js', 'TypeScript'];

const FAQS = [
  { q: '¿Cuánto tiempo toma desarrollar un sitio web premium?', a: 'Depende de la complejidad. Un proyecto estándar toma entre 4 a 8 semanas, mientras que plataformas complejas o WebGL pueden tomar de 2 a 4 meses.' },
  { q: '¿Qué tecnologías utilizan?', a: 'Nos especializamos en el ecosistema React (Next.js), Tailwind CSS, Framer Motion y GSAP para animaciones. Para experiencias 3D usamos Three.js.' },
  { q: '¿Ofrecen mantenimiento post-lanzamiento?', a: 'Sí, ofrecemos planes de mantenimiento y evolución continua para asegurar que tu plataforma se mantenga rápida, segura y actualizada.' }
];

// --- UTILS & HOOKS ---
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = ev => setMousePosition({ x: ev.clientX, y: ev.clientY });
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  return mousePosition;
};

// --- CORE COMPONENTS ---
const SectionLabel = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex justify-center mb-16 w-full"
  >
    <div className="bg-white border-[3px] border-[#050505] text-[#050505] px-8 py-3 rounded-full font-bold text-sm tracking-[0.2em] uppercase shadow-[6px_6px_0px_#8AFF00] transform -rotate-1 hover:rotate-0 hover:translate-y-1 hover:shadow-[2px_2px_0px_#8AFF00] transition-all duration-300">
      {text}
    </div>
  </motion.div>
);

const GlassPanel = ({ children, className = "", onClick, style = {}, hoverEffect = true, theme = "dark" }) => {
  const isDark = theme === "dark";
  return (
    <motion.div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-[2rem] backdrop-blur-2xl
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
      whileHover={hoverEffect ? { scale: 0.98, y: -5 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
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
      className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 mix-blend-screen"
      style={{ background: `radial-gradient(800px circle at ${x}px ${y}px, rgba(138, 255, 0, 0.03), transparent 40%)` }}
    />
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 flex justify-center ${scrolled ? 'pt-4' : 'pt-8'}`}
    >
      <GlassPanel theme="dark" hoverEffect={false} className="flex items-center justify-between px-8 py-4 w-full max-w-5xl rounded-full bg-[#050505]/80">
        <div className="text-[#F5F3EE] font-bold text-xl tracking-tighter flex items-center gap-3">
          <img src="/logo.png" alt="BroadcastWeb Logo" className="w-9 h-9 md:w-10 md:h-10 object-contain rounded-lg" />
          BroadcastWeb
        </div>
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link, i) => (
            <a key={i} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[#F5F3EE]/60 hover:text-[#8AFF00] transition-colors text-sm font-medium tracking-wide">
              {link}
            </a>
          ))}
        </div>
        <a 
          href="https://wa.me/5491172023171?text=Hola,%20me%20interesa%20iniciar%20un%20proyecto%20con%20BroadcastWeb."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full bg-[#8AFF00] text-[#050505] text-sm font-semibold hover:shadow-[0_0_20px_rgba(138,255,0,0.3)] transition-all text-center"
        >
          Iniciar Proyecto
        </a>
      </GlassPanel>
    </motion.nav>
  );
};

// --- 1. HERO SECTION ---
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-[#050505]">
      {/* ESPACIO PARA VIDEO (Reemplazar src con el tuyo) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-85 mix-blend-screen">
          <source src="https://cdn.pixabay.com/video/2023/10/22/186115-876931580_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/5 via-[#050505]/20 to-[#050505]/60"></div>
      </div>

      <div className="w-full max-w-6xl relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#151615]/50 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#8AFF00]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#F5F3EE]/80 font-medium">Agencia de desarrollo web</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[1.1] text-[#F5F3EE] mb-6"
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
        >
          Elevamos tu marca a la <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5F3EE] via-[#8AFF00] to-[#5EFF00] italic pr-4">
            nueva realidad digital
          </span>
        </motion.h1>

        <motion.p 
          className="max-w-2xl text-lg md:text-xl text-[#F5F3EE]/60 font-light mb-12 leading-relaxed"
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
        >
          Diseñamos y desarrollamos plataformas web premium que combinan estética cinematográfica con rendimiento técnico impecable.
        </motion.p>

        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="flex gap-4">
          <button className="px-8 py-4 rounded-full bg-[#8AFF00] text-[#050505] font-semibold tracking-wide hover:shadow-[0_0_30px_rgba(138,255,0,0.4)] transition-all flex items-center gap-2 group">
            Ver Proyectos <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full bg-[#151615]/50 backdrop-blur-md border border-white/10 text-[#F5F3EE] font-semibold hover:bg-white/10 transition-all">
            Servicios
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// --- 2. TRUSTED BY CLIENTS (CINTILLA BLANCA Y VERDE) ---
const ClientsSection = () => (
  <section className="py-8 bg-white border-y-4 border-[#8AFF00] relative z-20 overflow-hidden shadow-[0_0_50px_rgba(138,255,0,0.15)]">
    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20" />
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20" />
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      style={{ willChange: 'transform' }}
    >
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center gap-12 px-6">
          {['Diseño web', 'Presencia Online', 'aplicaciones web', 'software personalizado', 'soluciones digitales'].map((service, idx) => (
            <React.Fragment key={idx}>
              <span className="text-[#050505] text-2xl font-black tracking-widest uppercase">{service}</span>
              {/* Estrella Verde Separadora */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8AFF00]">
                <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" fill="currentColor"/>
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
  <section id="servicios" className="py-32 px-6 bg-[#050505] relative z-10">
    <div className="max-w-7xl mx-auto">
      <SectionLabel text="Áreas de Especialidad" />
      
      {/* Bento Grid Layout con efecto Liquid Glass */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 0.98, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`
              relative overflow-hidden rounded-[2rem] p-10 flex flex-col justify-between min-h-[280px] group
              bg-gradient-to-br from-white/[0.08] to-transparent
              border-t border-l border-white/[0.2]
              border-b border-r border-white/[0.05]
              shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.3)]
              hover:border-[#8AFF00]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_1px_10px_rgba(138,255,0,0.15)]
              transition-[border-color,box-shadow] duration-500 cursor-pointer
              ${service.colSpan}
            `}
          >
            {/* Liquid Glass Dynamic Reflections */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-white/[0.02] to-transparent opacity-50 group-hover:opacity-80 transition-all duration-700 pointer-events-none" />
            
            {/* Glossy Diagonal Sweep (Brillo líquido al pasar el mouse) */}
            <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[50%] transition-transform duration-[1.5s] ease-in-out pointer-events-none" />

            {/* Icono con sutil elevación */}
            <div className="relative z-10 mb-8 transform group-hover:scale-110 transition-transform duration-500 origin-left drop-shadow-[0_0_15px_rgba(138,255,0,0.3)]">
              <service.icon />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#F5F3EE] mb-3 group-hover:text-[#8AFF00] transition-colors duration-500 drop-shadow-md">{service.title}</h3>
              <p className="text-[#F5F3EE]/60 leading-relaxed font-medium">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- 4. FEATURED PROJECTS ---
const ProjectsSection = () => (
  <section id="proyectos" className="py-32 px-6 bg-[#050505] relative z-10">
    <div className="max-w-6xl mx-auto">
      <SectionLabel text="Obras Destacadas" />
      
      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="sticky top-32"
            style={{ zIndex: index }}
            initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          >
            <GlassPanel theme="dark" hoverEffect={false} className="p-4 group">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.5rem]">
                <div className="absolute inset-0 bg-[#8AFF00]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img src={project.image} alt={project.title} className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-[1.5s]" />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent z-20">
                  <span className="text-[#8AFF00] text-sm font-bold tracking-widest uppercase mb-2 block">{project.category}</span>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#F5F3EE]">{project.title}</h3>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- 5. AGENCY PROCESS (GSAP Style Unfold) ---
const ProcessStep = ({ p, i }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-35% 0px -35% 0px" }} // Dispara cuando entra en el tercio central
      className="group"
    >
      <GlassPanel theme="light" className="p-8 md:p-10 flex flex-col gap-2">
        <div className="flex items-start md:items-center gap-6">
          <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#050505]/20 to-transparent group-hover:from-[#8AFF00] transition-colors">{p.step}</span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#050505]">{p.title}</h3>
        </div>
        
        {/* Micro-interacción: Se despliega al scrollear */}
        <motion.div
          variants={{
            hidden: { height: 0, opacity: 0, marginTop: 0 },
            visible: { height: 'auto', opacity: 1, marginTop: 16 }
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Curva elástica estilo GSAP
          className="overflow-hidden"
        >
          <p className="text-[#050505]/70 text-lg border-l-2 border-[#8AFF00] pl-6 ml-4 md:ml-[4.5rem]">
            {p.desc}
          </p>
        </motion.div>
      </GlassPanel>
    </motion.div>
  );
};

const ProcessSection = () => (
  <section className="py-32 px-6 bg-[#F5F5F7] relative z-10">
    <div className="max-w-4xl mx-auto">
      <SectionLabel text="Metodología de Trabajo" />
      <div className="flex flex-col gap-6">
        {PROCESS.map((p, i) => (
          <ProcessStep key={i} p={p} i={i} />
        ))}
      </div>
    </div>
  </section>
);

// --- 6. WHY CHOOSE US ---
const WhyUsSection = () => (
  <section className="py-20 px-6 bg-[#F5F5F7] relative z-10 pb-32">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { val: '50+', label: 'Proyectos Entregados' },
        { val: '99%', label: 'Satisfacción del Cliente' },
        { val: 'Top 10', label: 'Agencias Awwwards' },
        { val: '24/7', label: 'Soporte Técnico' }
      ].map((stat, i) => (
        <div key={i} className="text-center relative">
          <div className="text-6xl font-black text-[#050505] mb-2 tracking-tighter">{stat.val}</div>
          <div className="text-[#050505]/60 font-medium uppercase tracking-widest text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

// --- 7. ABOUT AGENCY (Con Progress Bars) ---
const AboutSection = () => {
  const SKILLS_STATS = [
    { label: "Diseño UI/UX & Branding", value: 95 },
    { label: "Desarrollo Frontend & React", value: 98 },
    { label: "Animación & Motion Design", value: 90 },
    { label: "Arquitectura Web3 & Backend", value: 85 }
  ];

  return (
    <section id="agencia" className="py-32 px-6 bg-[#050505] relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="Conoce el Estudio" />
        
        <GlassPanel theme="dark" hoverEffect={false} className="p-8 md:p-16 border-[#8AFF00]/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#F5F3EE] mb-6 leading-tight">Redefiniendo el estándar digital moderno.</h3>
              <p className="text-[#F5F3EE]/70 text-lg mb-8 leading-relaxed">
                BroadcastWeb es una agencia boutique compuesta por diseñadores visionarios y desarrolladores de élite. No usamos plantillas. Cada línea de código y cada pixel están meticulosamente elaborados a medida.
              </p>
              
              {/* Progress Bars Verdes */}
              <div className="flex flex-col gap-6">
                {SKILLS_STATS.map((stat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-[#F5F3EE] mb-2 text-sm font-bold tracking-wide">
                      <span>{stat.label}</span>
                      <span className="text-[#8AFF00]">{stat.value}%</span>
                    </div>
                    <div className="h-[6px] w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-[#8AFF00] shadow-[0_0_12px_#8AFF00] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" alt="Agency Team" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-[#8AFF00]/10 mix-blend-overlay"></div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
};

// --- 8. TECHNOLOGIES STACK ---
const TechStackSection = () => (
  <section className="py-12 bg-[#050505] border-y border-white/5 relative z-10 overflow-hidden">
    <motion.div className="flex whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 25, repeat: Infinity }}>
      {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
        <span key={index} className="mx-10 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#F5F3EE]/40 to-[#F5F3EE]/10 hover:from-[#8AFF00] hover:to-[#429900] transition-colors cursor-default">
          {tech}
        </span>
      ))}
    </motion.div>
  </section>
);

// --- 9. TESTIMONIALS ---
const TestimonialsSection = () => (
  <section className="py-32 px-6 bg-[#F5F5F7] relative z-10">
    <div className="max-w-7xl mx-auto">
      <SectionLabel text="Testimonios Reales" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: 'Sarah L.', role: 'CMO, GlobalTech', text: '"Llevaron nuestra marca al futuro. El nivel de detalle en el diseño y la fluidez de las animaciones superaron nuestras expectativas."' },
          { name: 'David M.', role: 'Founder, FinEdge', text: '"Buscábamos una agencia que entendiera Web3. BroadcastWeb no solo lo entendió, sino que creó la interfaz más premium de nuestro sector."' },
          { name: 'Elena R.', role: 'Director, ArtSpace', text: '"Trabajar con ellos es como ver magia. El motor WebGL que construyeron para nuestra galería virtual es simplemente impresionante."' }
        ].map((t, i) => (
          <GlassPanel key={i} theme="light" className="p-8 relative">
            <div className="absolute top-8 right-8 text-[#050505]/10 font-serif text-6xl">"</div>
            <div className="flex gap-1 mb-6 text-[#8AFF00]">
              {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
            <p className="text-[#050505]/70 italic mb-8 text-lg relative z-10">"{t.text}"</p>
            <div>
              <p className="font-bold text-[#050505]">{t.name}</p>
              <p className="text-[#050505]/50 text-sm font-medium tracking-wide">{t.role}</p>
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  </section>
);

// --- 10. FAQ (Liquid Accordion) ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <section id="faq" className="py-10 px-6 bg-[#F5F5F7] relative z-10 pb-32">
      <div className="max-w-3xl mx-auto">
        <SectionLabel text="Preguntas Frecuentes" />
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <GlassPanel key={index} theme="light" className="overflow-hidden" hoverEffect={false}>
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center font-bold text-lg text-[#050505] hover:text-[#429900] transition-colors"
                >
                  {faq.q}
                  <div className={`p-2 rounded-full border border-black/10 transition-transform duration-500 ${isOpen ? 'rotate-180 bg-[#8AFF00] border-[#8AFF00]' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      className="px-6 md:px-8 pb-8 text-[#050505]/70 text-lg border-t border-black/5 pt-4"
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

// --- 11. CONTACT SECTION ---
const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola BroadcastWeb! Mi nombre es ${name}. Mi email es ${email}. Proyecto: ${message}`;
    const url = `https://wa.me/5491172023171?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-32 px-6 bg-white relative z-10 overflow-hidden border-t border-black/5">
      <div className="max-w-4xl mx-auto text-center relative">
        <SectionLabel text="Inicia tu Proyecto" />
        <div className="absolute inset-0 bg-[#8AFF00]/10 blur-[150px] rounded-full z-[-1]" />
        
        <h2 className="text-5xl md:text-7xl font-bold text-[#050505] mb-6 tracking-tighter">
          Comienza tu <br/><span className="text-[#429900] italic">transformación.</span>
        </h2>
        <p className="text-xl text-[#050505]/60 mb-12 max-w-2xl mx-auto">Estamos listos para construir el próximo gran éxito digital juntos. Agenda una llamada de descubrimiento.</p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4 mb-16 text-left">
          <input
            type="text"
            placeholder="Tu Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-5 rounded-2xl bg-[#F5F5F7] border border-black/5 focus:outline-none focus:border-[#8AFF00] focus:ring-4 focus:ring-[#8AFF00]/20 transition-all text-[#050505] font-medium"
          />
          <input
            type="email"
            placeholder="Email Profesional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-5 rounded-2xl bg-[#F5F5F7] border border-black/5 focus:outline-none focus:border-[#8AFF00] focus:ring-4 focus:ring-[#8AFF00]/20 transition-all text-[#050505] font-medium"
          />
          <textarea
            placeholder="Cuéntanos brevemente sobre tu proyecto..."
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-5 rounded-2xl bg-[#F5F5F7] border border-black/5 focus:outline-none focus:border-[#8AFF00] focus:ring-4 focus:ring-[#8AFF00]/20 transition-all text-[#050505] font-medium resize-none"
          />
          
          <button type="submit" className="w-full py-5 mt-4 rounded-2xl bg-[#050505] text-[#F5F3EE] text-lg font-bold hover:bg-[#8AFF00] hover:text-[#050505] hover:shadow-[0_0_30px_rgba(138,255,0,0.4)] transition-all duration-300">
            Agendar Reunión Inicial
          </button>
        </form>
      </div>
    </section>
  );
};

// --- 12. FOOTER ---
const Footer = () => (
  <footer className="pt-20 pb-10 px-6 bg-[#050505] text-[#F5F3EE] relative z-10 border-t border-[#8AFF00]/20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-2">
        <div className="font-bold text-2xl tracking-tighter flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#8AFF00] shadow-[0_0_10px_#8AFF00]"></div>
          BroadcastWeb
        </div>
        <p className="text-[#F5F3EE]/50 max-w-sm leading-relaxed">Creando experiencias digitales del mañana, hoy. Diseño premium, desarrollo de élite y resultados tangibles.</p>
      </div>
      
      <div>
        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-[#8AFF00]">Navegación</h4>
        <ul className="space-y-3 text-[#F5F3EE]/60 font-medium">
          <li><a href="#" className="hover:text-[#F5F3EE] transition-colors">Servicios</a></li>
          <li><a href="#" className="hover:text-[#F5F3EE] transition-colors">Proyectos</a></li>
          <li><a href="#" className="hover:text-[#F5F3EE] transition-colors">Agencia</a></li>
          <li><a href="#" className="hover:text-[#F5F3EE] transition-colors">Contacto</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-[#8AFF00]">Redes</h4>
        <div className="flex gap-4">
           {[Twitter, Instagram, Linkedin, Dribbble].map((Icon, i) => (
             <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8AFF00] hover:text-[#050505] hover:border-[#8AFF00] transition-all duration-300">
               <Icon className="w-5 h-5" />
             </a>
           ))}
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-[#F5F3EE]/40 pt-8 border-t border-white/10">
      <p>© {new Date().getFullYear()} BroadcastWeb. Todos los derechos reservados.</p>
      <div className="flex gap-6 mt-4 md:mt-0 font-medium">
        <a href="#" className="hover:text-[#8AFF00] transition-colors">Privacidad</a>
        <a href="#" className="hover:text-[#8AFF00] transition-colors">Términos</a>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F3EE] selection:bg-[#8AFF00] selection:text-[#050505]" style={{ fontFamily: '"Inter", "Space Grotesk", system-ui, sans-serif' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700;900&display=swap');
        h1, h2, h3, h4, .font-bold, .font-black { font-family: 'Space Grotesk', sans-serif; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #151615; border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #8AFF00; }
      `}} />

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
        <TechStackSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}