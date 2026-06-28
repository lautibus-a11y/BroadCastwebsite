import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, MessageSquare } from 'lucide-react';
import { ChatMessage, INITIAL_MESSAGE, getBotResponse } from './chatbotLogic';

const QUICK_ACTIONS = [
  { label: '💻 Páginas web', query: 'página web' },
  { label: '📱 Redes sociales', query: 'redes sociales' },
  { label: '⚙️ Aplicaciones web', query: 'aplicación web' },
  { label: '🤖 Chatbots IA', query: 'chatbot ia' },
  { label: '📋 Menús QR', query: 'menú qr' },
  { label: '🎉 Invitaciones digitales', query: 'invitación' },
  { label: '💬 Hablar por WhatsApp', query: 'whatsapp', isLink: true, url: 'https://wa.me/5491172023171' } 
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Load initial messages or from session storage
  useEffect(() => {
    const savedSession = sessionStorage.getItem('broadcastweb-chatbot');
    if (savedSession) {
      setMessages(JSON.parse(savedSession));
    } else {
      setMessages([
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: INITIAL_MESSAGE,
          timestamp: new Date()
        }
      ]);
    }
  }, []);

  // Save to session storage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem('broadcastweb-chatbot', JSON.stringify(messages));
    }
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse.text,
        timestamp: new Date(),
        showAdvisorButton: botResponse.showAdvisorButton
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1s and 2s
  };

  const handleQuickAction = (action: typeof QUICK_ACTIONS[0]) => {
    if (action.isLink && action.url) {
      window.open(action.url, '_blank');
    } else {
      handleSendMessage(action.query);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans"
            style={{ height: '500px', maxHeight: '80vh' }}
          >
            {/* Header */}
            <div className="p-4 bg-[#111111] border-b border-[#1a1a1a] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8AFF00] to-[#5c9900] flex items-center justify-center text-[#050505]">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-[#F5F3EE] font-bold text-sm m-0">Asesor BroadcastWeb</h3>
                  <div className="flex items-center text-xs text-[#8AFF00]">
                    <span className="w-2 h-2 rounded-full bg-[#8AFF00] mr-1.5 inline-block"></span>
                    En línea
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="Cerrar chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex flex-col space-y-1.5 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap ${
                      msg.sender === 'user' 
                        ? 'bg-[#8AFF00] text-[#050505] rounded-br-sm' 
                        : 'bg-[#1a1a1a] text-[#F5F3EE] rounded-bl-sm border border-[#2a2a2a]'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.showAdvisorButton && (
                    <a
                      href="https://wa.me/5491172023171?text=Hola%20me%20gustaria%20un%20presupuesto%20personalizado"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs flex items-center space-x-1.5 px-3 py-1.5 bg-[#8AFF00]/10 text-[#8AFF00] border border-[#8AFF00]/20 rounded-full hover:bg-[#8AFF00]/20 transition-colors"
                    >
                      <MessageSquare size={14} />
                      <span>Hablar con un asesor</span>
                    </a>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#1a1a1a] text-[#F5F3EE] rounded-2xl rounded-bl-sm border border-[#2a2a2a] px-4 py-3 flex space-x-1.5 items-center">
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 pb-2 pt-2 border-t border-[#1a1a1a] overflow-x-auto whitespace-nowrap hide-scrollbar">
              <div className="flex space-x-2">
                {QUICK_ACTIONS.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="text-xs px-3 py-1.5 bg-[#111111] border border-[#2a2a2a] text-gray-300 rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#111111] border-t border-[#1a1a1a]">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe tu consulta..."
                  className="flex-1 bg-[#1a1a1a] text-white border border-[#2a2a2a] rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#8AFF00] focus:ring-1 focus:ring-[#8AFF00] transition-all"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  aria-label="Enviar mensaje"
                  className="bg-[#8AFF00] text-[#050505] p-2 rounded-full hover:bg-[#9eff33] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#8AFF00] flex items-center justify-center text-[#050505] shadow-lg hover:shadow-[#8AFF00]/20 hover:shadow-2xl transition-all"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Bot size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
