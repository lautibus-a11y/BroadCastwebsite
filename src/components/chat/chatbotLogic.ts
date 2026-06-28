export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  showAdvisorButton?: boolean;
}

export const INITIAL_MESSAGE = "¡Hola! 👋 Soy el asistente virtual de BroadcastWeb. Puedo ayudarte con información sobre páginas web, aplicaciones web, redes sociales, chatbots y otros servicios digitales. ¿Sobre qué te gustaría consultar? 😊";

export const FALLBACK_MESSAGES = [
  "Mmm... no estoy muy seguro de haber entendido tu consulta. 🤔 Si lo prefieres, puedes hablar directamente con un asesor humano para que te ayude mejor. 👇",
  "Parece que no tengo la respuesta exacta a eso. 😅 ¿Te gustaría contactar con uno de nuestros asesores para recibir atención personalizada? 👇",
  "¡Uy! Me he confundido un poco. 🤖 Lo mejor será que hables con un asesor humano, ¡estará encantado de ayudarte con tu proyecto! 👇"
];

export const NO_SERVICE_SPECIFIED_MESSAGE = "¡Hola! 😊 ¿Te interesa una página web, una aplicación web, manejo de redes sociales o alguno de nuestros otros servicios?";

export const HIRE_MESSAGE = "¡Perfecto! ✨ Haz clic en el botón de 'Hablar con un asesor' abajo para que un especialista humano te envíe un presupuesto personalizado y sin compromiso.";

const RESPONSES = [
  {
    keywords: ['página web', 'web', 'sitio web', 'landing page', 'tienda online', 'ecommerce', 'desarrollo web', 'página para mi negocio', 'presupuesto web'],
    response: "¡Claro que sí! 💻 El desarrollo de páginas web en BroadcastWeb tiene un valor desde $150.000 ARS e incluye un diseño totalmente personalizado, hosting y dominio. ✨ El precio final puede variar según las secciones y funcionalidades que necesites.\n\n¿Te gustaría hablar con un asesor humano para generar un presupuesto a tu medida? 👇"
  },
  {
    keywords: ['redes sociales', 'instagram', 'facebook', 'community manager', 'manejo de redes', 'publicaciones', 'contenido'],
    response: "¡Excelente elección! 📱 Nuestro servicio de manejo de redes sociales comienza desde $60.000 ARS mensuales. Incluye gestión completa y creación de contenido para hacer brillar tu presencia digital. 🚀\n\n¿Te gustaría hablar con un asesor humano para armar un plan a tu medida? 👇"
  },
  {
    keywords: ['sistema', 'aplicación web', 'app web', 'gestión', 'turnos', 'panel administrativo', 'software'],
    response: "¡Qué gran proyecto! ⚙️ Las aplicaciones web (como sistemas de gestión o turnos) tienen un valor desde $200.000 ARS y se desarrollan 100% a medida según lo que tu negocio necesite. 🛠️\n\n¿Te gustaría contactar a un asesor humano para charlar sobre tu idea y hacer un presupuesto? 👇"
  },
  {
    keywords: ['chatbot ia', 'inteligencia artificial', 'asistente virtual', 'automatización', 'bot inteligente'],
    response: "¡El futuro es hoy! 🤖 Nuestros chatbots con Inteligencia Artificial comienzan desde $300.000 ARS. ¡Son increíbles para automatizar tus consultas y cerrar ventas las 24 horas del día! ⚡\n\n¿Te gustaría que un asesor humano te envíe un presupuesto personalizado? 👇"
  },
  {
    keywords: ['chatbot', 'respuestas automáticas', 'preguntas frecuentes', 'bot web'],
    response: "¡Automatizar siempre ayuda! 💬 Los chatbots tradicionales tienen un costo desde $60.000 ARS. Son la opción ideal para responder las consultas frecuentes de tus clientes al instante. ⏱️\n\n¿Te gustaría hablar con un asesor humano para un presupuesto detallado? 👇"
  },
  {
    keywords: ['menú qr', 'carta digital', 'restaurante', 'menú digital', 'menus qr'],
    response: "¡Perfecto para modernizar tu negocio! 📋 Los menús QR interactivos tienen un valor desde $40.000 ARS. Te permiten mostrar todos tus productos súper fácil y sin gastar en papel. 🍔\n\n¿Te gustaría hablar con un asesor humano para hacer un presupuesto personalizado? 👇"
  },
  {
    keywords: ['invitación', 'invitacion', 'invitación digital', 'casamiento', 'cumpleaños', 'evento', 'invitaciones'],
    response: "¡A celebrar! 🎉 Las invitaciones interactivas comienzan desde $30.000 ARS y son perfectas para cumpleaños, casamientos o eventos corporativos inolvidables. 🥳\n\n¿Te gustaría hablar con un asesor humano para que te cuente más y armar un presupuesto? 👇"
  },
  {
    keywords: ['contratar', 'quiero contratar', 'quiero empezar', 'presupuesto personalizado', 'hablar con asesor', 'hablar con humano'],
    response: HIRE_MESSAGE
  },
  {
    keywords: ['precio', 'costo', 'valor', 'cuanto sale', 'cuánto sale', 'cuanto cuesta', 'cuánto cuesta'],
    response: "¿De qué servicio te gustaría conocer el precio? (Páginas web, Redes Sociales, Aplicaciones Web, Chatbots, Menús QR, etc.)"
  },
  {
    keywords: ['hola', 'buenas', 'buenos', 'que tal', 'qué tal'],
    response: NO_SERVICE_SPECIFIED_MESSAGE
  }
];

export function getBotResponse(userInput: string): { text: string, showAdvisorButton: boolean } {
  const normalizedInput = userInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove accents for matching

  for (const item of RESPONSES) {
    const matched = item.keywords.some(keyword => {
      const normalizedKeyword = keyword.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      // Use word boundaries or exact match
      return normalizedInput.includes(normalizedKeyword);
    });

    if (matched) {
      return { text: item.response, showAdvisorButton: true };
    }
  }

  const randomFallback = FALLBACK_MESSAGES[Math.floor(Math.random() * FALLBACK_MESSAGES.length)];
  return { text: randomFallback, showAdvisorButton: true };
}
