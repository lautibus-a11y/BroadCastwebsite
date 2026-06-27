
import React from 'react';

export const NAV_LINKS = ['Servicios', 'Proyectos', 'Agencia', 'FAQ'];

export const SvgWebDesign = () => (
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

export const SvgWebDev = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L4 14V34L24 44L44 34V14L24 4Z" stroke="#8AFF00" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M24 4V44" stroke="#8AFF00" strokeWidth="2" strokeOpacity="0.5"/>
    <path d="M4 14L24 24L44 14" stroke="#8AFF00" strokeWidth="2" strokeOpacity="0.5"/>
    <path d="M4 34L24 24L44 34" stroke="#8AFF00" strokeWidth="2" strokeOpacity="0.5"/>
    <circle cx="24" cy="24" r="4" fill="white"/>
  </svg>
);

export const SvgUIUX = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="4" width="24" height="40" rx="6" stroke="#8AFF00" strokeWidth="2"/>
    <path d="M20 40H28" stroke="#8AFF00" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2" strokeOpacity="0.7"/>
    <circle cx="24" cy="24" r="2" fill="white" fillOpacity="0.7"/>
  </svg>
);

export const SvgBranding = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" stroke="#8AFF00" strokeWidth="2"/>
    <path d="M24 4C24 4 34 14 34 24C34 34 24 44 24 44C24 44 14 34 14 24C14 14 24 4 24 4Z" stroke="white" strokeWidth="2" strokeOpacity="0.7"/>
    <path d="M4 24H44" stroke="#8AFF00" strokeWidth="2" strokeOpacity="0.5"/>
  </svg>
);

export const SvgMotion = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="36" height="36" rx="18" stroke="#8AFF00" strokeWidth="2" strokeDasharray="4 4"/>
    <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2" strokeOpacity="0.7"/>
    <path d="M22 20L28 24L22 28V20Z" fill="#8AFF00"/>
  </svg>
);

export const WA_BASE = 'https://wa.me/5491172023171?text=';

export const SERVICES = [
  { id: 1, title: 'Diseño Web',       icon: SvgWebDesign, colSpan: 'md:col-span-2', desc: 'Interfaces digitales inmersivas y arquitecturas visuales de alto impacto.',   whatsappUrl: WA_BASE + encodeURIComponent('Hola, me interesa el servicio de Diseño Web.') },
  { id: 2, title: 'Desarrollo Web',   icon: SvgWebDev,    colSpan: 'md:col-span-1', desc: 'Sistemas escalables, rápidos y seguros.',                                     whatsappUrl: WA_BASE + encodeURIComponent('Hola, me interesa el servicio de Desarrollo Web.') },
  { id: 3, title: 'UI/UX Design',     icon: SvgUIUX,      colSpan: 'md:col-span-1', desc: 'Flujos intuitivos centrados en la retención del usuario.',                    whatsappUrl: WA_BASE + encodeURIComponent('Hola, me interesa el servicio de UI/UX Design.') },
  { id: 4, title: 'Branding Digital', icon: SvgBranding,  colSpan: 'md:col-span-1', desc: 'Identidades visuales preparadas para el entorno moderno.',                    whatsappUrl: WA_BASE + encodeURIComponent('Hola, me interesa el servicio de Branding Digital.') },
  { id: 5, title: 'Motion & 3D',      icon: SvgMotion,    colSpan: 'md:col-span-1', desc: 'Animaciones fluidas y experiencias WebGL interactivas.',                       whatsappUrl: WA_BASE + encodeURIComponent('Hola, me interesa el servicio de Motion & 3D.') },
];

export const PROJECTS = [
  { id: 1, title: 'Inmobiliaria Premium', category: 'Portal Inmobiliario / Real Estate', image: '/imagenes-proyectos/Inmobiliaria-Website.webp', demoUrl: 'https://inmobiliaria-website.vercel.app/' },
  { id: 2, title: 'Maderera', category: 'Web Corporativa / Carpintería', image: '/imagenes-proyectos/pagina-web-maderera-carpinteria.webp', demoUrl: 'https://pagina-web-maderera.vercel.app/' },
  { id: 3, title: 'Estética & Belleza', category: 'Landing Page / Estética', image: '/imagenes-proyectos/pagina-web-estetica-belleza.webp', demoUrl: 'https://pagina-web-estetica.vercel.app/' },
  { id: 4, title: 'Estudio Jurídico', category: 'Web Profesional / Legal', image: '/imagenes-proyectos/pagina-web-estudio-juridico.webp', demoUrl: 'https://pagina-web-abogadoss.vercel.app/' },
  { id: 5, title: 'Cafetería Café Gourmet', category: 'Gastronomía / Cafetería', image: '/imagenes-proyectos/pagina-web-cafeteria.webp', demoUrl: 'https://cafeteria-pagina-web.vercel.app/' },
  { id: 6, title: 'Instituto & Sistema de Gestión', category: 'SaaS / Educación', image: '/imagenes-proyectos/pagina-web-instituto-gestion-educativa.webp', demoUrl: 'https://web-sistema-de-gestion-educativo-ns.vercel.app/' },
  { id: 7, title: 'Autopartes AutoElite', category: 'E-commerce / Autopartes', image: '/imagenes-proyectos/pagina-web-autopartes.webp', demoUrl: 'https://autoelite-parts.vercel.app/' },
  { id: 8, title: 'Invitación Quince Años', category: 'Invitación Digital / Eventos', image: '/imagenes-proyectos/invitacion-quince-anos.webp', demoUrl: 'https://invitacion-xv-pied.vercel.app/' },
  { id: 9, title: 'Salón & Turnero', category: 'App Web / Gestión de Turnos', image: '/imagenes-proyectos/pagina-web-salon-turnero-belleza.webp', demoUrl: 'https://invitacion-xv-pied.vercel.app/' },
  { id: 10, title: 'Club de Campo', category: 'Landing Page / Real Estate', image: '/imagenes-proyectos/pagina-web-club-de-campo.webp', demoUrl: 'https://club-de-campo-web.vercel.app/' },
  { id: 11, title: 'Ruleta Carousel', category: 'App Web / Marketing & Sorteos', image: '/imagenes-proyectos/app-web-ruleta-carousel.webp', demoUrl: 'https://belleza-by-naomi-ruleta.vercel.app/' },
  { id: 12, title: 'Corralón de Materiales', category: 'Web Corporativa / Construcción', image: '/imagenes-proyectos/pagina-web-corralon-materiales.webp', demoUrl: 'https://corralon-web-two.vercel.app/' },
  { id: 13, title: 'Casa del Té', category: 'Gastronomía / Menú', image: '/imagenes-proyectos/pagina-web-casa-del-te.webp', demoUrl: 'https://casa-del-te.vercel.app/' },
  { id: 14, title: 'Parrilla & Menú Digital', category: 'Gastronomía / Grill', image: '/imagenes-proyectos/pagina-web-parrilla-menu.webp', demoUrl: 'https://parrilla-pagina-web.vercel.app/' },
  { id: 15, title: 'HidroArquitectura', category: 'Diseño & Construcción', image: '/imagenes-proyectos/pagina-web-hidroarquitectura.webp', demoUrl: 'https://hidro-web-three.vercel.app/' },
  { id: 16, title: 'Ruleta Giratoria', category: 'App Web / Marketing & Sorteos', image: '/imagenes-proyectos/app-web-ruleta-giratoria.webp', demoUrl: 'https://ruleta-gs-estetica.vercel.app/' },
  { id: 17, title: 'Panadería & Menú', category: 'Gastronomía / Panadería', image: '/imagenes-proyectos/pagina-web-panaderia-menu.webp', demoUrl: 'https://panaderia-we-by-menu.vercel.app/' },
];

export const INITIAL_VISIBLE = 3;

export const PROCESS = [
  { step: '01', title: 'Descubrimiento', desc: 'Analizamos tu mercado, audiencia y objetivos de negocio en profundidad para encontrar el ángulo tecnológico perfecto.' },
  { step: '02', title: 'Estrategia', desc: 'Definimos la arquitectura del producto, wireframes estructurales y el stack tecnológico óptimo para escalabilidad.' },
  { step: '03', title: 'Diseño', desc: 'Creamos interfaces visualmente impactantes, aplicando nuestra estética Liquid Glass y sistemas de diseño robustos.' },
  { step: '04', title: 'Desarrollo', desc: 'Escribimos código limpio, optimizado y altamente animado. Dando vida al diseño con físicas y transiciones fluidas.' },
  { step: '05', title: 'Lanzamiento & Escala', desc: 'Despliegue en servidores premium, optimización SEO extrema y monitoreo continuo post-lanzamiento.' },
];

export const TECH_STACK = ['React', 'GSAP', 'Framer Motion', 'Three.js', 'WebGL', 'Tailwind CSS', 'Next.js', 'TypeScript'];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Santiago Vega',
    role: 'Director Creativo',
    image: '/santiago_vega.png',
    desc: 'Con más de una década liderando proyectos de identidad visual y dirección de arte, Santiago transforma conceptos abstractos en experiencias digitales de alto impacto. Su mirada cinematográfica es el sello creativo que distingue a BroadcastWeb.',
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

export const FAQS = [
  { q: '¿Cuánto tiempo toma desarrollar un sitio web premium?', a: 'Depende de la complejidad. Un proyecto estándar toma entre 4 a 8 semanas, mientras que plataformas complejas o WebGL pueden tomar de 2 a 4 meses.' },
  { q: '¿Qué tecnologías utilizan?', a: 'Nos especializamos en el ecosistema React (Next.js), Tailwind CSS, Framer Motion y GSAP para animaciones. Para experiencias 3D usamos Three.js.' },
  { q: '¿Ofrecen mantenimiento post-lanzamiento?', a: 'Sí, ofrecemos planes de mantenimiento y evolución continua para asegurar que tu plataforma se mantenga rápida, segura y actualizada.' },
];

export const PIE_STATS = [
  { value: 87, label: 'Proyectos Entregados', sublabel: 'a tiempo y en presupuesto' },
  { value: 99, label: 'Satisfacción del Cliente', sublabel: 'tasa de aprobación' },
  { value: 95, label: 'Ranking Awwwards', sublabel: 'top agencias globales' },
  { value: 100, label: 'Soporte Activo', sublabel: '24 / 7 disponibilidad' },
];
