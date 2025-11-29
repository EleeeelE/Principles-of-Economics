
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, BookOpen } from 'lucide-react';
import { chatWithTutor } from '../services/gemini';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings. I am your economics tutor. Ask me anything about the principles we are studying.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await chatWithTutor(messages, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  // Helper to format text with paragraphs, bolding, and lists
  const formatChatMessage = (text: string, isUser: boolean) => {
    return text.split('\n').map((line, i) => {
      // Handle empty lines as spacers
      if (!line.trim()) {
        return <div key={i} className="h-3" />;
      }

      // Handle bullet points
      const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
      const cleanLine = isBullet ? line.trim().substring(2) : line;

      // Parse bolding (**text**)
      const parts = cleanLine.split(/(\*\*.*?\*\*)/g).map((part, j) =>
        part.startsWith('**') && part.endsWith('**')
          ? <strong key={j} className={isUser ? "font-bold opacity-90" : "font-bold text-yellow-400"}>{part.slice(2, -2)}</strong>
          : part
      );

      return (
        <div key={i} className={`min-h-[1.5em] leading-relaxed ${isBullet ? 'pl-4 relative my-1' : 'mb-1'}`}>
          {isBullet && (
            <span className={`absolute left-0 top-0 font-bold ${isUser ? 'text-vintage-900' : 'text-yellow-400'}`}>•</span>
          )}
          {parts}
        </div>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-body">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-vintage-gold hover:bg-vintage-accent text-vintage-900 rounded-full p-4 shadow-xl transition-transform hover:scale-105 border-2 border-vintage-100/20"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="bg-vintage-800 rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col border border-vintage-600 overflow-hidden h-[500px]">
          {/* Header */}
          <div className="bg-vintage-900 p-4 border-b border-vintage-600 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-vintage-gold" />
              <h3 className="text-vintage-100 font-display font-bold text-lg">Tutor</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-vintage-400 hover:text-vintage-100">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-vintage-900/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    msg.role === 'user'
                      ? 'bg-vintage-gold text-vintage-900 font-medium shadow-md'
                      : 'bg-vintage-700 text-vintage-100 border border-vintage-600 shadow-md'
                  }`}
                >
                  {formatChatMessage(msg.text, msg.role === 'user')}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-vintage-700 rounded-2xl px-4 py-3 text-xs text-vintage-300 animate-pulse border border-vintage-600">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 bg-vintage-800 border-t border-vintage-600">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                className="w-full bg-vintage-900 text-vintage-100 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-vintage-gold border border-vintage-600 placeholder-vintage-600"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-vintage-gold hover:text-vintage-100 disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
