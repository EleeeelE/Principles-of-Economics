
import React, { useState } from 'react';
import { BookOpen, Map, Box, Info } from 'lucide-react';

export const AssumptionsLesson: React.FC = () => {
  const [complexity, setComplexity] = useState(100);

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      {/* Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           <Box size={200} />
        </div>
        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">2-1b & 2-1c</span> 
             Assumptions & Models
           </h2>
        </div>
        <div className="p-8 space-y-8 relative z-10">
          <section>
             <h3 className="font-display text-lg text-vintage-gold uppercase mb-4 border-b border-vintage-700 pb-2">Why Make Assumptions?</h3>
             <p className="text-vintage-200 font-serif text-lg leading-relaxed">
               "Assumptions can make the world easier to understand. To study the effects of international trade, for example, we might assume that the world consists of only two countries and that each country produces only two goods."
             </p>
             <div className="mt-4 bg-vintage-900/30 p-4 rounded border-l-2 border-vintage-500 text-sm text-vintage-400 italic">
                Reality is too messy. By assuming away irrelevant details, we can see the core machinery of the economy.
             </div>
          </section>
          
          <section>
             <h3 className="font-display text-lg text-vintage-gold uppercase mb-4 border-b border-vintage-700 pb-2">Economic Models</h3>
             <p className="text-vintage-200 text-sm leading-relaxed mb-4">
                Economists use models (diagrams and equations) that omit many details to allow us to see what is truly important.
             </p>
             <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-vintage-700 rounded-full flex items-center justify-center">
                   <div className="text-2xl">💀</div>
                </div>
                <div className="text-vintage-300 text-sm">
                   <strong>Analogy:</strong> A biology teacher uses a plastic model of the human body. It doesn't have real blood or skin, but it's perfect for learning where the heart is.
                </div>
             </div>
          </section>
        </div>
      </div>

      {/* Interactive Visualization */}
      <div className="bg-vintage-900 border border-vintage-600 rounded-sm p-8 shadow-2xl relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vintage-700 via-vintage-gold to-vintage-700"></div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
           <div className="flex-1 space-y-6">
              <h2 className="font-display text-3xl text-vintage-100">The Power of Simplification</h2>
              <p className="text-vintage-400 font-serif italic">
                 "A map with a scale of 1:1 is useless."
              </p>
              <div className="bg-vintage-800 p-6 rounded border border-vintage-700">
                 <label className="text-xs uppercase tracking-widest text-vintage-500 mb-2 block">Level of Detail (Assumptions)</label>
                 <input 
                   type="range" 
                   min="0" 
                   max="100" 
                   value={complexity} 
                   onChange={(e) => setComplexity(parseInt(e.target.value))}
                   className="w-full h-2 bg-vintage-900 rounded-full appearance-none cursor-pointer accent-vintage-gold"
                 />
                 <div className="flex justify-between text-xs mt-2 text-vintage-400">
                    <span>Abstract Model</span>
                    <span>Messy Reality</span>
                 </div>
              </div>
              <div className="p-4 bg-vintage-800/50 rounded border-l-4 border-vintage-gold text-sm text-vintage-300">
                 {complexity > 75 ? "Too much detail! It's hard to see the path from A to B because of all the trees and potholes." : 
                  complexity > 25 ? "A good road map. Major highways are visible. Minor details removed." :
                  "A subway map. Highly abstract. Distances are distorted, but connections are perfectly clear. Useful for travel planning."}
              </div>
           </div>

           <div className="w-full md:w-96 aspect-square bg-vintage-800 rounded border border-vintage-700 overflow-hidden relative shadow-inner">
              {/* Complex Map Layer */}
              <div 
                 className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale sepia transition-opacity duration-300"
                 style={{ opacity: complexity / 100 }}
              ></div>
              
              {/* Simple Map Layer */}
              <div 
                 className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-[#e6ded5]"
                 style={{ opacity: 1 - (complexity / 100) }}
              >
                 <svg viewBox="0 0 100 100" className="w-full h-full p-8">
                    <line x1="20" y1="80" x2="80" y2="20" stroke="#cd7f32" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="20" cy="80" r="5" fill="#1a120b" />
                    <circle cx="50" cy="50" r="5" fill="#1a120b" />
                    <circle cx="80" cy="20" r="5" fill="#1a120b" />
                    <text x="25" y="80" fontSize="8" fontFamily="serif">Home</text>
                    <text x="85" y="25" fontSize="8" fontFamily="serif">Work</text>
                 </svg>
              </div>

              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded">
                 Model View
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
