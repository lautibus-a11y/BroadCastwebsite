import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { PROCESS, PIE_STATS, TEAM_MEMBERS } from '../../data/data';
import { GlassPanel, SectionLabel, AnimatedPieChart } from '../ui';

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

export const ProcessSection = () => (
  <section className="py-16 md:py-32 px-4 md:px-6 bg-[#F5F5F7] relative z-10">
    <div className="max-w-4xl mx-auto">
      <SectionLabel text="Metodología de Trabajo" />
      <div className="flex flex-col gap-4 md:gap-6">
        {PROCESS.map((p, i) => <ProcessStep key={i} p={p} />)}
      </div>
    </div>
  </section>
);

export const WhyUsSection = () => (
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

export const AboutSection = () => {
  const SKILLS_STATS = [
    { label: 'Diseño UI/UX & Branding', value: 95 },
    { label: 'Desarrollo Frontend & React', value: 98 },
    { label: 'Animación & Motion Design', value: 90 },
    { label: 'Arquitectura Web3 & Backend', value: 85 },
  ];

  return (
    <section id="agencia" className="py-16 md:py-32 px-4 md:px-6 bg-[#050505] relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="Conoce el Estudio" />
        <GlassPanel theme="dark" hoverEffect={false} className="p-6 md:p-16 border-[#8AFF00]/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-2xl md:text-4xl font-bold text-[#F5F3EE] mb-4 md:mb-6 leading-tight">
                Redefiniendo el estándar digital moderno.
              </h3>
              <p className="text-[#F5F3EE]/70 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                BroadcastWeb es una agencia boutique compuesta por diseñadores visionarios y desarrolladores de élite. No usamos plantillas. Cada línea de código y cada pixel están meticulosamente elaborados a medida.
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[240px] md:h-[500px] rounded-2xl md:rounded-[2rem] overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                alt="Agency Team"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#8AFF00]/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
};

export const TeamSliderSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const total = TEAM_MEMBERS.length;

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + total) % total);
  }, [total]);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      paginate(1);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current, paginate]);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#050505] relative z-10 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 60%, ${member.accent}18, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto">
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
          onTouchStart={handleDragStart as any}
          onTouchEnd={handleDragEnd as any}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]"
            >
              <div className="hidden lg:block relative overflow-hidden lg:rounded-l-[2rem] min-h-[380px] lg:min-h-0">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]/60" />
                <motion.div
                  className="absolute bottom-0 right-0 top-0 w-1 h-full bg-[#8AFF00]"
                  layoutId="accent-stripe"
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div
                className="relative flex flex-col justify-between p-5 md:p-8 lg:p-12 lg:rounded-r-[2rem] rounded-2xl lg:rounded-l-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(21,22,21,0.98) 0%, rgba(10,10,10,0.95) 100%)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#8AFF00]/60 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 lg:hidden mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#8AFF00]/80 shadow-[0_0_12px_rgba(138,255,0,0.25)]"
                      />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold tracking-[0.15em] text-[#8AFF00] uppercase mb-0.5">
                          {member.role}
                        </span>
                        <h3 className="text-lg font-bold text-[#F5F3EE] tracking-tight">
                          {member.name}
                        </h3>
                      </div>
                    </div>

                    <span className="hidden lg:inline-block px-3 py-1 rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-4 bg-[#8AFF00]/20 text-[#8AFF00] border border-[#8AFF00]/40">
                      {member.role}
                    </span>

                    <h3 className="hidden lg:block text-3xl lg:text-4xl font-bold text-[#F5F3EE] mb-4 leading-tight tracking-tighter">
                      {member.name}
                    </h3>

                    <p className="text-[#F5F3EE]/75 text-xs md:text-sm lg:text-base leading-relaxed mb-4 md:mb-6">
                      {member.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5 md:mb-6">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[9px] md:text-xs font-semibold tracking-wide text-[#F5F3EE]/70 bg-white/[0.05] border border-white/[0.08]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/5 pt-4 mt-auto">
                    <button
                      onClick={() => paginate(-1)}
                      className="w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-[#F5F3EE]/60 hover:text-[#8AFF00] hover:border-[#8AFF00]/30 hover:bg-white/10 transition-all duration-300 active:scale-90"
                      aria-label="Anterior"
                    >
                      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </button>

                    <div className="flex gap-1.5 items-center">
                      {TEAM_MEMBERS.map((m, i) => (
                        <button
                          key={i}
                          onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                          className="p-1"
                          aria-label={`Ir a ${m.name}`}
                        >
                          <motion.div
                            animate={{ width: i === current ? 18 : 6, opacity: i === current ? 1 : 0.3 }}
                            transition={{ duration: 0.3 }}
                            className="h-1.5 rounded-full bg-[#8AFF00]"
                          />
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => paginate(1)}
                      className="w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-[#F5F3EE]/60 hover:text-[#8AFF00] hover:border-[#8AFF00]/30 hover:bg-white/10 transition-all duration-300 active:scale-90"
                      aria-label="Siguiente"
                    >
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>

                    <span className="ml-auto text-[#F5F3EE]/30 text-xs font-mono tabular-nums">
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

export const SocialFloat = () => {
  const socials = [
    { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
    { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
  ];

  return (
    <div className="py-10 md:py-16 px-4 md:px-6 bg-[#050505] relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
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
              <div className="absolute -top-full -left-full w-[300%] h-[300%] bg-gradient-to-b from-white/[0.08] via-white/[0.01] to-transparent rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-in-out pointer-events-none" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(138, 255, 0, 0.15), transparent 70%)' }}
              />
              <s.icon className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:scale-110 relative z-10 text-[#F5F3EE]/75 group-hover:text-[#8AFF00]" />
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
