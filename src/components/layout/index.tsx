import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Twitter, Instagram, Linkedin, Dribbble } from 'lucide-react';
import { NAV_LINKS, WA_BASE } from '../../data/data';
import { scrollToSection } from '../ui';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link: string) => {
    setMenuOpen(false);
    scrollToSection(link.toLowerCase().replace(/ /g, '-'));
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
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#F5F3EE] font-bold text-lg md:text-xl tracking-tighter flex items-center gap-3 cursor-pointer select-none"
          >
            <img src="/logo.png" alt="BroadcastWeb Logo" className="w-9 h-9 md:w-10 md:h-10 object-contain rounded-lg" />
            BroadcastWeb
          </div>

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

          <div className="flex items-center gap-3">
            <a 
              href={`${WA_BASE}${encodeURIComponent('Hola, me interesa iniciar un proyecto con BroadcastWeb.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-5 py-2 rounded-xl bg-[#8AFF00] text-[#050505] text-sm font-semibold hover:shadow-[0_0_20px_rgba(138,255,0,0.3)] transition-all text-center"
            >
              Iniciar Proyecto
            </a>
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
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
              href={`${WA_BASE}${encodeURIComponent('Hola, me interesa iniciar un proyecto con BroadcastWeb.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-8 py-4 rounded-xl bg-[#8AFF00] text-[#050505] text-lg font-bold text-center"
            >
              Iniciar Proyecto
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Footer = () => (
  <footer className="pt-12 md:pt-20 pb-8 md:pb-10 px-4 md:px-6 bg-[#050505] text-[#F5F3EE] relative z-10 border-t border-[#8AFF00]/20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
      <div className="col-span-1 md:col-span-2">
        <div className="font-bold text-xl md:text-2xl tracking-tighter flex items-center gap-2 mb-4 md:mb-6">
          <div className="w-2 h-2 rounded-full bg-[#8AFF00] shadow-[0_0_10px_#8AFF00]" />
          BroadcastWeb
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
          {[
            { href: 'https://twitter.com/broadcastweb', Icon: Twitter },
            { href: 'https://instagram.com/broadcastweb', Icon: Instagram },
            { href: 'https://linkedin.com/company/broadcastweb', Icon: Linkedin },
            { href: 'https://dribbble.com/broadcastweb', Icon: Dribbble },
          ].map(({ href, Icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8AFF00] hover:text-[#050505] hover:border-[#8AFF00] transition-all duration-300"
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-[#F5F3EE]/40 pt-6 md:pt-8 border-t border-white/10 gap-3 md:gap-0">
      <p>© {new Date().getFullYear()} BroadcastWeb. Todos los derechos reservados.</p>
      <div className="flex gap-4 md:gap-6 font-medium">
        <a href="#" className="hover:text-[#8AFF00] transition-colors">Privacidad</a>
        <a href="#" className="hover:text-[#8AFF00] transition-colors">Términos</a>
      </div>
    </div>
  </footer>
);
