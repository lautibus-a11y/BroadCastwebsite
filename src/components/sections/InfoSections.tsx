import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { TECH_STACK, FAQS } from '../../data/data';
import { GlassPanel, SectionLabel } from '../ui';

export const TechStackSection = () => (
  <section className="py-12 bg-[#050505] border-y border-white/5 relative z-10 overflow-hidden">
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      style={{ willChange: 'transform' }}
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

export const TestimonialsSection = () => (
  <section className="py-16 md:py-32 px-4 md:px-6 bg-[#F5F5F7] relative z-10">
    <div className="max-w-7xl mx-auto">
      <SectionLabel text="Testimonios Reales" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        {[
          { name: 'Sarah L.', role: 'CMO, GlobalTech', text: 'Llevaron nuestra marca al futuro. El nivel de detalle en el diseño y la fluidez de las animaciones superaron nuestras expectativas.' },
          { name: 'David M.', role: 'Founder, FinEdge', text: 'Buscábamos una agencia que entendiera Web3. BroadcastWeb no solo lo entendió, sino que creó la interfaz más premium de nuestro sector.' },
          { name: 'Elena R.', role: 'Director, ArtSpace', text: 'Trabajar con ellos es como ver magia. El motor WebGL que construyeron para nuestra galería virtual es simplemente impresionante.' },
        ].map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
            className="h-full"
          >
            <GlassPanel theme="light" className="p-6 md:p-8 relative h-full">
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
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-10 px-4 md:px-6 bg-[#F5F5F7] relative z-10 pb-16 md:pb-32">
      <div className="max-w-3xl mx-auto">
        <SectionLabel text="Preguntas Frecuentes" />
        <div className="flex flex-col gap-3 md:gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              >
                <GlassPanel theme="light" className="overflow-hidden" hoverEffect={false}>
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola BroadcastWeb! Mi nombre es ${name}. Mi email es ${email}. Proyecto: ${message}`;
    const url = `https://wa.me/5491172023171?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="py-16 md:py-32 px-4 md:px-6 bg-white relative z-10 overflow-hidden border-t border-black/5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto text-center relative"
      >
        <SectionLabel text="Inicia tu Proyecto" />
        <div className="absolute inset-0 bg-[#8AFF00]/10 blur-[120px] md:blur-[150px] rounded-full z-[-1]" />
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#050505] mb-4 md:mb-6 tracking-tighter">
          Comienza tu <br />
          <span className="text-[#429900] italic">transformación.</span>
        </h3>
        <p className="text-base md:text-xl text-[#050505]/60 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Estamos listos para construir el próximo gran éxito digital juntos. Agenda una llamada de descubrimiento.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-3 md:gap-4 mb-12 md:mb-16 text-left">
          <input
            type="text"
            placeholder="Tu Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl bg-[#F5F5F7] border border-black/5 focus:outline-none focus:border-[#8AFF00] focus:ring-4 focus:ring-[#8AFF00]/20 transition-all text-[#050505] font-medium text-sm md:text-base"
          />
          <input
            type="email"
            placeholder="Email Profesional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl bg-[#F5F5F7] border border-black/5 focus:outline-none focus:border-[#8AFF00] focus:ring-4 focus:ring-[#8AFF00]/20 transition-all text-[#050505] font-medium text-sm md:text-base"
          />
          <textarea
            placeholder="Cuéntanos brevemente sobre tu proyecto..."
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl bg-[#F5F5F7] border border-black/5 focus:outline-none focus:border-[#8AFF00] focus:ring-4 focus:ring-[#8AFF00]/20 transition-all text-[#050505] font-medium resize-none text-sm md:text-base"
          />
          <button
            type="submit"
            className="w-full py-4 md:py-5 mt-2 md:mt-4 rounded-xl md:rounded-2xl bg-[#050505] text-[#F5F3EE] text-base md:text-lg font-bold hover:bg-[#8AFF00] hover:text-[#050505] hover:shadow-[0_0_30px_rgba(138,255,0,0.4)] transition-all duration-300"
          >
            Agendar Reunión Inicial
          </button>
        </form>
      </motion.div>
    </section>
  );
};
