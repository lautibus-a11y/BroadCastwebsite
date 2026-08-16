import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, ExternalLink, ChevronDown } from 'lucide-react';
import { SERVICES, PROJECTS, PROJECT_TABS, ProjectTabId, WA_BASE } from '../../data/data';
import { GlassPanel, SectionLabel, scrollToSection } from '../ui';

export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-[#050505]">
    {/* Background video */}
    <div className="absolute inset-0 w-full h-full z-0">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-85 md:opacity-95 mix-blend-screen" preload="metadata">
        <source src="/videohero/videohero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/5 via-[#050505]/20 to-[#050505]/60" />
    </div>

    <div className="w-full max-w-6xl relative z-10 flex flex-col items-center text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-[#151615]/50 backdrop-blur-md mb-6 md:mb-8"
      >
        <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#8AFF00]" />
        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#F5F3EE]/80 font-medium">Agencia de desarrollo web</span>
      </motion.div>

      {/* Main Title (Bug Fixed: Re-added missing text from previous designs) */}
      <motion.h1 
        className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[1.1] text-[#F5F3EE] mb-12 overflow-visible"
        initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
      >
        Elevamos tu marca a la <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5F3EE] via-[#8AFF00] to-[#5EFF00] italic pr-10">
          nueva realidad digital
        </span>
      </motion.h1>

      {/* CTAs */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
      >
        <a
          href="#proyectos"
          onClick={(e) => { e.preventDefault(); scrollToSection('proyectos'); }}
          className="px-6 py-3.5 md:px-8 md:py-4 rounded-xl bg-[#8AFF00] text-[#050505] font-semibold tracking-wide hover:shadow-[0_0_30px_rgba(138,255,0,0.4)] transition-all flex items-center justify-center gap-2 group text-sm md:text-base"
        >
          Ver Proyectos <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        <a
          href="#servicios"
          onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }}
          className="px-6 py-3.5 md:px-8 md:py-4 rounded-xl bg-[#151615]/50 backdrop-blur-md border border-white/10 text-[#F5F3EE] font-semibold hover:bg-white/10 transition-all text-sm md:text-base"
        >
          Servicios
        </a>
      </motion.div>
    </div>
  </section>
);

export const ClientsSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="py-3 md:py-4 bg-white border-y-[3px] border-[#8AFF00] relative z-20 overflow-hidden shadow-[0_0_40px_rgba(138,255,0,0.12)]"
  >
    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-20" />
    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-20" />
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
      style={{ willChange: 'transform' }}
    >
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center gap-8 md:gap-12 px-4 md:px-6">
          {['Diseño web', 'Presencia Online', 'aplicaciones web', 'software personalizado', 'soluciones digitales'].map((service, idx) => (
            <React.Fragment key={idx}>
              <span className="text-[#050505] text-lg md:text-2xl font-black tracking-widest uppercase">{service}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8AFF00] shrink-0">
                <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" fill="currentColor" />
              </svg>
            </React.Fragment>
          ))}
        </div>
      ))}
    </motion.div>
  </motion.section>
);

const serviceCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (id: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: id * 0.12 }
  }),
  hover: {
    scale: 0.98,
    y: -5,
    transition: { type: 'spring', stiffness: 400, damping: 30 }
  }
};

export const ServicesSection = () => (
  <section id="servicios" className="py-16 md:py-32 px-4 md:px-6 bg-[#050505] relative z-10">
    <div className="max-w-7xl mx-auto">
      <SectionLabel text="Áreas de Especialidad" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {SERVICES.map((service) => (
          <motion.div
            key={service.id}
            variants={serviceCardVariants}
            custom={service.id}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: '-50px' }}
            className={`
              relative overflow-hidden rounded-2xl md:rounded-[2rem] p-7 md:p-10 flex flex-col justify-between min-h-[240px] md:min-h-[300px] group
              bg-gradient-to-br from-white/[0.07] to-transparent
              border border-white/25
              shadow-[0_10px_40px_rgba(0,0,0,0.55),inset_0_1px_0px_rgba(255,255,255,0.35),inset_1px_0px_0px_rgba(255,255,255,0.1)]
              hover:border-white/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_0px_rgba(255,255,255,0.5),0_0_0_1px_rgba(138,255,0,0.15)]
              transition-[border-color,box-shadow] duration-500 cursor-pointer
              ${service.colSpan}
            `}
          >
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent opacity-60 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-b from-white/[0.07] via-white/[0.01] to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[50%] transition-transform duration-[1.5s] ease-in-out pointer-events-none" />
            
            <div className="relative z-10 mb-5 transform group-hover:scale-110 transition-transform duration-500 origin-left drop-shadow-[0_0_15px_rgba(138,255,0,0.35)]">
              <service.icon />
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#F5F3EE] mb-1.5 md:mb-2 group-hover:text-[#8AFF00] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-[#F5F3EE]/55 leading-relaxed text-sm md:text-base font-medium">{service.desc}</p>
              </div>
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

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<ProjectTabId>('all');
  const [visibleCount, setVisibleCount] = useState<number>(4);

  // Filter projects by active tab
  const filteredProjects = React.useMemo(() => {
    if (activeTab === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.tab === activeTab);
  }, [activeTab]);

  // Reset pagination count when changing tabs
  const handleTabChange = (tabId: ProjectTabId) => {
    setActiveTab(tabId);
    setVisibleCount(4);
  };

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = filteredProjects.length > visibleCount;

  return (
    <section id="proyectos" className="py-16 md:py-32 px-3 sm:px-4 md:px-6 bg-[#050505] relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="Obras Destacadas" />

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 md:mb-14">
          <div className="inline-flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-[#121312]/80 border border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] max-w-full overflow-x-auto no-scrollbar">
            {PROJECT_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`
                    px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 relative
                    ${isActive
                      ? 'bg-[#8AFF00] text-[#050505] font-bold shadow-[0_0_20px_rgba(138,255,0,0.35)] scale-[1.02]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Grid (Desktop & Mobile) */}
        <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                <GlassPanel
                  theme="dark"
                  hoverEffect={false}
                  className="p-2 sm:p-3.5 md:p-5 flex flex-col h-full group border border-white/[0.08] hover:border-[#8AFF00]/35 transition-all duration-500 bg-[#121312]/60 hover:bg-[#151615]/90 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_25px_rgba(138,255,0,0.08)] rounded-xl sm:rounded-2xl md:rounded-[1.8rem]"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-[1.2rem] bg-[#080808]">
                    <div className="absolute inset-0 bg-[#8AFF00]/15 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent z-10 pointer-events-none" />

                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.category} | BroadcastWeb`}
                      loading="lazy"
                      width="800"
                      height="500"
                      className="w-full h-full object-cover object-top scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Category badge */}
                    <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 z-20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#050505]/80 border border-white/10 backdrop-blur-md">
                      <span className="text-[#8AFF00] text-[8px] sm:text-[10px] md:text-xs font-bold tracking-wider uppercase block truncate max-w-[110px] sm:max-w-[180px]">
                        {project.category.split('/')[0].trim()}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2.5 sm:pt-4 md:pt-5 flex flex-col flex-grow justify-between gap-2 sm:gap-3">
                    <div>
                      <h3 className="text-xs sm:text-base md:text-xl lg:text-2xl font-bold text-[#F5F3EE] group-hover:text-[#8AFF00] transition-colors duration-300 leading-tight line-clamp-1 sm:line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-white/50 mt-0.5 sm:mt-1 truncate hidden sm:block">
                        {project.category}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-1 sm:pt-2 mt-auto">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 sm:gap-2 w-full py-1.5 sm:py-2.5 md:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl bg-[#8AFF00] text-[#050505] text-[10px] sm:text-xs md:text-sm font-bold hover:shadow-[0_0_20px_rgba(138,255,0,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300 whitespace-nowrap"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Ver demo</span>
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0" />
                        </a>
                      ) : (
                        <a
                          href={`${WA_BASE}${encodeURIComponent(`Hola! Me gustaría consultar y solicitar una demo del desarrollo: ${project.title}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 sm:gap-2 w-full py-1.5 sm:py-2.5 md:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl bg-white/[0.06] border border-white/10 hover:border-[#8AFF00]/50 hover:bg-[#8AFF00]/10 text-white/90 hover:text-[#8AFF00] text-[10px] sm:text-xs md:text-sm font-medium hover:scale-[1.02] active:scale-95 transition-all duration-300 whitespace-nowrap backdrop-blur-md"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Software Privado</span>
                          <ArrowUpRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-[#8AFF00]" />
                        </a>
                      )}
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-8 md:mt-14"
          >
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="flex items-center gap-2 md:gap-3 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full border border-white/15 bg-white/[0.04] text-[#F5F3EE] font-semibold text-xs sm:text-sm md:text-base hover:bg-[#8AFF00] hover:text-[#050505] hover:border-[#8AFF00] hover:shadow-[0_0_30px_rgba(138,255,0,0.3)] transition-all duration-300 backdrop-blur-md active:scale-95 cursor-pointer"
            >
              <span>Ver más proyectos</span>
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

