// ==========================================================================
// BroadcastWeb - Vanilla JavaScript (Zero Dependencies, Ultra Fast)
// ==========================================================================

// --- PROYECTOS DATA ---
const PROJECTS_DATA = [
  // 1. Paginas Web (Primeros en Todo y en Paginas web)
  { id: 1, title: 'Sitio web Inmobiliaria', category: 'Portal Inmobiliario / Real Estate', tab: 'web', image: 'public/imagenes-proyectos/Inmobiliaria-Website.webp', demoUrl: 'https://molinaivana.com.ar/' },
  { id: 2, title: 'Marmolería Benjamín', category: 'Web Corporativa / Marmolería', tab: 'web', image: 'public/imagenes-proyectos/Marmoleria-Pagina-web.png', demoUrl: 'https://marmoleria-benjamin.com/' },
  { id: 3, title: 'Página Web Cimes', category: 'Web Corporativa / Aguas', tab: 'web', image: 'public/imagenes-proyectos/Pagina-web-cimes.webp', demoUrl: 'https://paginaweb-cimes-loshermanos.vercel.app/' },
  { id: 4, title: 'Tienda de Agua Cimes', category: 'E-commerce / Aguas', tab: 'tienda', image: 'public/imagenes-proyectos/Tienda-de-agua-cimes.webp', demoUrl: 'https://tienda-de-agua-lh-cimes-local.vercel.app/' },
  { id: 5, title: 'Maderera web', category: 'Web Corporativa / Carpintería', tab: 'web', image: 'public/imagenes-proyectos/pagina-web-maderera-carpinteria.webp', demoUrl: 'https://pagina-web-maderera.vercel.app/' },

  // 2. Sistemas (Prioridad: Centralización, Actas con IA, Hoja de Ruta)
  { id: 5, title: 'Centralización de Cuentas', category: 'Software / Finanzas', tab: 'software', image: 'public/imagenes-proyectos/Sofware de centralizacion de cuenta bancarias y de mercago pago.webp', demoUrl: '' },
  { id: 6, title: 'Generación de Actas con IA', category: 'Software / IA', tab: 'software', image: 'public/imagenes-proyectos/Sfotware de generacion de actas automaticas con IA.webp', demoUrl: '' },
  { id: 7, title: 'Hoja de Ruta Inmobiliaria', category: 'Gestión / Real Estate', tab: 'software', image: 'public/imagenes-proyectos/Hoja-de-ruta-inmobiliaria.webp', demoUrl: 'https://hojaderuta-omega.vercel.app/' },
  { id: 8, title: 'Instituto & Sistema de Gestión', category: 'SaaS / Educación', tab: 'software', image: 'public/imagenes-proyectos/pagina-web-instituto-gestion-educativa.webp', demoUrl: 'https://web-sistema-de-gestion-educativo-ns.vercel.app/' },
  { id: 9, title: 'Salón & Turnero', category: 'App Web / Gestión de Turnos', tab: 'software', image: 'public/imagenes-proyectos/pagina-web-salon-turnero-belleza.webp', demoUrl: 'https://invitacion-xv-pied.vercel.app/' },
  { id: 10, title: 'Ruleta Carousel', category: 'App Web / Marketing & Sorteos', tab: 'software', image: 'public/imagenes-proyectos/app-web-ruleta-carousel.webp', demoUrl: 'https://belleza-by-naomi-ruleta.vercel.app/' },
  { id: 11, title: 'Ruleta Giratoria', category: 'App Web / Marketing & Sorteos', tab: 'software', image: 'public/imagenes-proyectos/app-web-ruleta-giratoria.webp', demoUrl: 'https://ruleta-gs-estetica.vercel.app/' },

  // 3. Tiendas (Prioridad: Parrilla, Panadería, Tienda de agua, Pizzería, etc.)
  { id: 12, title: 'Parrilla & Menú Digital', category: 'Gastronomía / Grill', tab: 'tienda', image: 'public/imagenes-proyectos/pagina-web-parrilla-menu.webp', demoUrl: 'https://menu-parrilla-restobar.vercel.app' },
  { id: 13, title: 'Panadería & Menú', category: 'Gastronomía / Panadería', tab: 'tienda', image: 'public/imagenes-proyectos/pagina-web-panaderia-menu.webp', demoUrl: 'https://panaderia-we-by-menu.vercel.app/' },
  { id: 14, title: 'Menú Pizzería', category: 'Gastronomía / Menú', tab: 'tienda', image: 'public/imagenes-proyectos/Menu-Pizzeria-tienda-online.webp', demoUrl: 'https://pizzeria-app-silk.vercel.app/' },
  { id: 15, title: 'Casa del Té', category: 'Gastronomía / Menú', tab: 'tienda', image: 'public/imagenes-proyectos/pagina-web-casa-del-te.webp', demoUrl: 'https://casa-del-te.vercel.app/' },
  { id: 16, title: 'Autopartes AutoElite', category: 'E-commerce / Autopartes', tab: 'tienda', image: 'public/imagenes-proyectos/pagina-web-autopartes.webp', demoUrl: 'https://autoelite-parts.vercel.app/' },

  // 4. Resto de Páginas Web
  { id: 17, title: 'Estética & Belleza', category: 'Landing Page / Estética', tab: 'web', image: 'public/imagenes-proyectos/pagina-web-estetica-belleza.webp', demoUrl: 'https://pagina-web-estetica.vercel.app/' },
  { id: 18, title: 'Estudio Jurídico', category: 'Web Profesional / Legal', tab: 'web', image: 'public/imagenes-proyectos/pagina-web-estudio-juridico.webp', demoUrl: 'https://pagina-web-abogadoss.vercel.app/' },
  { id: 19, title: 'Cafetería Café Gourmet', category: 'Gastronomía / Cafetería', tab: 'web', image: 'public/imagenes-proyectos/pagina-web-cafeteria.webp', demoUrl: 'https://cafeteria-pagina-web.vercel.app/' },
  { id: 20, title: 'Invitación Quince Años', category: 'Invitación Digital / Eventos', tab: 'web', image: 'public/imagenes-proyectos/invitacion-quince-anos.webp', demoUrl: 'https://invitacion-xv-pied.vercel.app/' },
  { id: 21, title: 'Club de Campo', category: 'Landing Page / Real Estate', tab: 'web', image: 'public/imagenes-proyectos/pagina-web-club-de-campo.webp', demoUrl: 'https://club-de-campo-web.vercel.app/' },
  { id: 22, title: 'Corralón de Materiales', category: 'Web Corporativa / Construcción', tab: 'web', image: 'public/imagenes-proyectos/pagina-web-corralon-materiales.webp', demoUrl: 'https://corralon-web-two.vercel.app/' },
  { id: 23, title: 'HidroArquitectura', category: 'Diseño & Construcción', tab: 'web', image: 'public/imagenes-proyectos/pagina-web-hidroarquitectura.webp', demoUrl: 'https://hidro-web-three.vercel.app/' }
];

// --- TEAM DATA ---
const TEAM_MEMBERS = [
  {
    name: 'Santiago Vega',
    role: 'Director Creativo',
    image: 'public/santiago_vega.png',
    desc: 'Con más de una década liderando proyectos de identidad visual y dirección de arte, Santiago transforma conceptos abstractos en experiencias digitales de alto impacto. Su mirada cinematográfica es el sello creativo que distingue a BroadcastWeb.',
    tags: ['Dirección de Arte', 'Brand Strategy', 'Motion Design']
  },
  {
    name: 'Valentina Rossi',
    role: 'Directora de Arquitectura',
    image: 'public/valentina_rossi.png',
    desc: 'Especialista en arquitectura de información y sistemas de diseño escalables, Valentina asegura que cada producto no solo luzca impecable, sino que esté construido para perdurar. Lidera la estructuración técnica de cada plataforma con precisión quirúrgica.',
    tags: ['Information Architecture', 'Design Systems', 'UX Strategy']
  },
  {
    name: 'Lucas Ferrer',
    role: 'Especialista en Marketing Digital',
    image: 'public/lucas_ferrer.png',
    desc: 'Experto en growth hacking, SEO técnico y campañas de performance, Lucas garantiza que cada lanzamiento digital alcance su máximo potencial. Transforma datos en decisiones estratégicas que escalan marcas al siguiente nivel.',
    tags: ['Growth Strategy', 'SEO Técnico', 'Performance Marketing']
  }
];

// --- CHATBOT RESPONSES ---
const BOT_RESPONSES = [
  {
    keywords: ['pagina web', 'web', 'sitio web', 'landing page', 'tienda online', 'ecommerce', 'desarrollo web', 'pagina para mi negocio', 'presupuesto web'],
    response: "¡Claro que sí! 💻 El desarrollo de páginas web en BroadcastWeb tiene un valor desde $150.000 ARS e incluye un diseño totalmente personalizado, hosting y dominio. ✨\n\n¿Te gustaría hablar con un asesor humano para generar un presupuesto a tu medida? 👇"
  },
  {
    keywords: ['redes sociales', 'instagram', 'facebook', 'community manager', 'manejo de redes', 'publicaciones', 'contenido'],
    response: "¡Excelente elección! 📱 Nuestro servicio de manejo de redes sociales comienza desde $60.000 ARS mensuales. Incluye gestión completa y creación de contenido para hacer brillar tu presencia digital. 🚀\n\n¿Te gustaría hablar con un asesor humano para armar un plan a tu medida? 👇"
  },
  {
    keywords: ['sistema', 'aplicacion web', 'app web', 'gestion', 'turnos', 'panel administrativo', 'software'],
    response: "¡Qué gran proyecto! ⚙️ Las aplicaciones web (como sistemas de gestión o turnos) tienen un valor desde $200.000 ARS y se desarrollan 100% a medida según lo que tu negocio necesite. 🛠️\n\n¿Te gustaría contactar a un asesor humano para charlar sobre tu idea y hacer un presupuesto? 👇"
  },
  {
    keywords: ['chatbot ia', 'inteligencia artificial', 'asistente virtual', 'automatizacion', 'bot inteligente'],
    response: "¡El futuro es hoy! 🤖 Nuestros chatbots con Inteligencia Artificial comienzan desde $300.000 ARS. ¡Son increíbles para automatizar tus consultas y cerrar ventas las 24 horas del día! ⚡\n\n¿Te gustaría que un asesor humano te envíe un presupuesto personalizado? 👇"
  },
  {
    keywords: ['chatbot', 'respuestas automaticas', 'preguntas frecuentes', 'bot web'],
    response: "¡Automatizar siempre ayuda! 💬 Los chatbots tradicionales tienen un costo desde $60.000 ARS. Son la opción ideal para responder las consultas frecuentes de tus clientes al instante. ⏱️\n\n¿Te gustaría hablar con un asesor humano para un presupuesto detallado? 👇"
  },
  {
    keywords: ['menu qr', 'carta digital', 'restaurante', 'menu digital', 'menus qr'],
    response: "¡Perfecto para modernizar tu negocio! 📋 Los menús QR interactivos tienen un valor desde $40.000 ARS. Te permiten mostrar todos tus productos súper fácil y sin gastar en papel. 🍔\n\n¿Te gustaría hablar con un asesor humano para hacer un presupuesto personalizado? 👇"
  },
  {
    keywords: ['invitacion', 'invitacion digital', 'casamiento', 'cumpleanos', 'evento', 'invitaciones'],
    response: "¡A celebrar! 🎉 Las invitaciones interactivas comienzan desde $30.000 ARS y son perfectas para cumpleaños, casamientos o eventos corporativos inolvidables. 🥳\n\n¿Te gustaría hablar con un asesor humano para que te cuente más y armar un presupuesto? 👇"
  },
  {
    keywords: ['contratar', 'quiero contratar', 'quiero empezar', 'presupuesto personalizado', 'hablar con asesor', 'hablar con humano'],
    response: "¡Perfecto! ✨ Haz clic en el botón de 'Hablar con un asesor' abajo para que un especialista humano te envíe un presupuesto personalizado y sin compromiso."
  },
  {
    keywords: ['precio', 'costo', 'valor', 'cuanto sale', 'cuanto cuesta'],
    response: "¿De qué servicio te gustaría conocer el precio? (Páginas web, Redes Sociales, Aplicaciones Web, Chatbots, Menús QR, etc.)"
  },
  {
    keywords: ['hola', 'buenas', 'buenos dias', 'buenas tardes', 'que tal'],
    response: "¡Hola! 😊 ¿Te interesa una página web, una aplicación web, manejo de redes sociales o alguno de nuestros otros servicios?"
  }
];

const FALLBACK_MESSAGES = [
  "Mmm... no estoy muy seguro de haber entendido tu consulta. 🤔 Si lo prefieres, puedes hablar directamente con un asesor humano para que te ayude mejor. 👇",
  "Parece que no tengo la respuesta exacta a eso. 😅 ¿Te gustaría contactar con uno de nuestros asesores para recibir atención personalizada? 👇",
  "¡Uy! Me he confundido un poco. 🤖 Lo mejor será que hables con un asesor humano, ¡estará encantado de ayudarte con tu proyecto! 👇"
];

// --- DOM ELEMENTS & INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initProjects();
  initTeamSlider();
  initFaq();
  initChatbot();
  initPerformanceObservers();
});

// 1. Cinematic Loader
function initLoader() {
  const loader = document.getElementById('cinematic-loader');
  const numElem = document.getElementById('loader-percent');
  const barElem = document.getElementById('loader-bar-fill');
  const statusElem = document.getElementById('loader-status');
  if (!loader) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 4;
    if (progress > 100) progress = 100;

    if (numElem) numElem.textContent = String(progress).padStart(3, '0');
    if (barElem) barElem.style.width = progress + '%';

    if (statusElem) {
      if (progress < 30) statusElem.textContent = 'Inicializando sistemas...';
      else if (progress < 60) statusElem.textContent = 'Cargando interfaz ultraligera...';
      else if (progress < 90) statusElem.textContent = 'Alineando componentes...';
      else statusElem.textContent = 'Listo para el despegue';
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('hide');
        document.body.style.overflow = '';
      }, 400);
    }
  }, 40);
}

// 2. Navbar & Mobile Menu
function initNavbar() {
  const header = document.querySelector('.header-nav');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 40) {
          header?.classList.add('scrolled');
        } else {
          header?.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.toggle('active');
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('active');
      });
    });
  }
}

// 3. Projects Showcase (Filtering & Pagination)
let currentTab = 'all';
let visibleCount = 4;

function initProjects() {
  const tabsContainer = document.querySelector('.project-tabs');
  const loadMoreBtn = document.getElementById('btn-load-more');

  if (tabsContainer) {
    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.getAttribute('data-tab');
      visibleCount = 4;
      renderProjects();
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleCount += 4;
      renderProjects();
    });
  }

  renderProjects();
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const loadMoreWrap = document.getElementById('load-more-wrap');
  if (!grid) return;

  const filtered = currentTab === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.tab === currentTab);

  const toShow = filtered.slice(0, visibleCount);
  const waBase = 'https://wa.me/5491172023171?text=';

  grid.innerHTML = toShow.map(p => `
    <div class="project-card">
      <div class="project-img-box">
        <span class="project-badge">${p.category.split('/')[0].trim()}</span>
        <img src="${p.image}" alt="${p.title}" loading="lazy" decoding="async" width="600" height="375">
      </div>
      <div class="project-content">
        <div>
          <h3 class="project-name">${p.title}</h3>
          <p class="project-cat">${p.category}</p>
        </div>
        <div style="margin-top: auto; padding-top: 0.5rem;">
          ${p.demoUrl ? `
            <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-project-demo">
              <span>Ver demo</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          ` : `
            <a href="${waBase}${encodeURIComponent('Hola! Me gustaría consultar y solicitar una demo del desarrollo: ' + p.title)}" target="_blank" rel="noopener noreferrer" class="btn-project-private">
              <span>Software Privado</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8AFF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          `}
        </div>
      </div>
    </div>
  `).join('');

  if (loadMoreWrap) {
    loadMoreWrap.style.display = filtered.length > visibleCount ? 'flex' : 'none';
  }
}

// 4. Team Slider
let currentTeamIdx = 0;
function initTeamSlider() {
  const container = document.getElementById('team-slider-card');
  const prevBtn = document.getElementById('team-prev-btn');
  const nextBtn = document.getElementById('team-next-btn');
  const dotsContainer = document.getElementById('team-dots');
  const countDisplay = document.getElementById('team-count');

  if (!container) return;

  function renderTeamMember(idx) {
    currentTeamIdx = idx;
    const m = TEAM_MEMBERS[currentTeamIdx];
    
    document.getElementById('team-member-img').src = m.image;
    document.getElementById('team-member-img').alt = m.name;
    document.getElementById('team-member-role').textContent = m.role;
    document.getElementById('team-member-name').textContent = m.name;
    document.getElementById('team-member-bio').textContent = m.desc;
    
    const tagsElem = document.getElementById('team-member-tags');
    if (tagsElem) {
      tagsElem.innerHTML = m.tags.map(t => `<span class="team-tag">${t}</span>`).join('');
    }

    if (dotsContainer) {
      dotsContainer.innerHTML = TEAM_MEMBERS.map((_, i) => `
        <div class="team-dot ${i === currentTeamIdx ? 'active' : ''}" data-idx="${i}"></div>
      `).join('');
    }

    if (countDisplay) {
      countDisplay.textContent = `${String(currentTeamIdx + 1).padStart(2, '0')} / ${String(TEAM_MEMBERS.length).padStart(2, '0')}`;
    }
  }

  prevBtn?.addEventListener('click', () => {
    currentTeamIdx = (currentTeamIdx - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length;
    renderTeamMember(currentTeamIdx);
  });

  nextBtn?.addEventListener('click', () => {
    currentTeamIdx = (currentTeamIdx + 1) % TEAM_MEMBERS.length;
    renderTeamMember(currentTeamIdx);
  });

  dotsContainer?.addEventListener('click', (e) => {
    const dot = e.target.closest('.team-dot');
    if (dot) {
      renderTeamMember(parseInt(dot.getAttribute('data-idx'), 10));
    }
  });

  // Auto slide every 5 seconds (solo si no hay interacción ni está en background)
  let slideInterval = setInterval(() => {
    if (!document.hidden) {
      currentTeamIdx = (currentTeamIdx + 1) % TEAM_MEMBERS.length;
      renderTeamMember(currentTeamIdx);
    }
  }, 5000);

  container.addEventListener('mouseenter', () => clearInterval(slideInterval));
  container.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
      if (!document.hidden) {
        currentTeamIdx = (currentTeamIdx + 1) % TEAM_MEMBERS.length;
        renderTeamMember(currentTeamIdx);
      }
    }, 5000);
  });

  renderTeamMember(0);
}

// 5. FAQ Accordion
function initFaq() {
  const faqList = document.querySelector('.faq-list');
  if (!faqList) return;

  faqList.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-btn');
    if (!btn) return;
    const item = btn.closest('.faq-item');
    const wasActive = item.classList.contains('active');

    faqList.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasActive) {
      item.classList.add('active');
    }
  });
}

// 8. Chatbot
function initChatbot() {
  const trigger = document.getElementById('chatbot-trigger');
  const windowElem = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('chat-close-btn');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const msgContainer = document.getElementById('chat-messages');
  const quickActions = document.getElementById('chat-quick-actions');

  if (!trigger || !windowElem) return;

  trigger.addEventListener('click', () => {
    windowElem.classList.toggle('open');
    if (windowElem.classList.contains('open')) {
      input?.focus();
    }
  });

  closeBtn?.addEventListener('click', () => {
    windowElem.classList.remove('open');
  });

  // Add initial message
  addMessage('bot', "¡Hola! 👋 Soy el asistente virtual de BroadcastWeb. ¿En qué servicio estás interesado? (Páginas web, Apps, Redes, Chatbots IA)", true);

  // Form submit
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (!val) return;
    addMessage('user', val);
    input.value = '';

    setTimeout(() => {
      const resp = getBotReply(val);
      addMessage('bot', resp.text, resp.showAdvisor);
    }, 700);
  });

  // Quick buttons
  quickActions?.addEventListener('click', (e) => {
    const btn = e.target.closest('.quick-btn');
    if (!btn) return;
    const query = btn.getAttribute('data-query');
    if (query === 'whatsapp') {
      window.open('https://wa.me/5491172023171', '_blank');
    } else {
      addMessage('user', btn.textContent.trim());
      setTimeout(() => {
        const resp = getBotReply(query);
        addMessage('bot', resp.text, resp.showAdvisor);
      }, 700);
    }
  });

  function addMessage(sender, text, showAdvisor = false) {
    if (!msgContainer) return;
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.textContent = text;
    msgContainer.appendChild(bubble);

    if (showAdvisor) {
      const advisorBtn = document.createElement('a');
      advisorBtn.className = 'chat-advisor-btn';
      advisorBtn.href = 'https://wa.me/5491172023171?text=Hola%20me%20gustaria%20un%20presupuesto%20personalizado';
      advisorBtn.target = '_blank';
      advisorBtn.rel = 'noopener noreferrer';
      advisorBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <span>Hablar con un asesor</span>
      `;
      msgContainer.appendChild(advisorBtn);
    }

    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function getBotReply(inputStr) {
    const norm = inputStr.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (const item of BOT_RESPONSES) {
      const match = item.keywords.some(k => {
        const normK = k.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return norm.includes(normK);
      });
      if (match) return { text: item.response, showAdvisor: true };
    }
    const randFallback = FALLBACK_MESSAGES[Math.floor(Math.random() * FALLBACK_MESSAGES.length)];
    return { text: randFallback, showAdvisor: true };
  }
}

// 7. Performance & Resource Observers (Batería, GPU & Background)
function initPerformanceObservers() {
  if ('IntersectionObserver' in window) {
    const marqueeTracks = document.querySelectorAll('.marquee-track, .tech-track');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('paused');
        } else {
          entry.target.classList.add('paused');
        }
      });
    }, { rootMargin: '100px' });

    marqueeTracks.forEach(t => observer.observe(t));
  }

  document.addEventListener('visibilitychange', () => {
    const isHidden = document.hidden;
    const tracks = document.querySelectorAll('.marquee-track, .tech-track');
    tracks.forEach(t => {
      if (isHidden) t.classList.add('paused');
      else t.classList.remove('paused');
    });
  });
}


