import React, { useState } from 'react';
import { AreaChart, Zap, ArrowRight, AlertTriangle, Play, RefreshCcw } from 'lucide-react';

export const PPFModelLesson: React.FC = () => {
  const [techLevel, setTechLevel] = useState(0); // 0 = standard, 1 = growth

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      {/* Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           <AreaChart size={200} />
        </div>
        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">2-1e</span> 
             Our Second Model: The Production Possibilities Frontier
           </h2>
        </div>
        <div className="p-8 space-y-8 relative z-10">
          <section>
             <h3 className="font-display text-lg text-vintage-gold uppercase mb-4 border-b border-vintage-700 pb-2">Definition</h3>
             <p className="text-vintage-200 font-serif text-lg leading-relaxed">
               "A graph that shows the combinations of output that the economy can possibly produce given the available factors of production and the available production technology."
             </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
             <div className="bg-green-900/20 p-4 border border-green-800 rounded">
                <div className="font-bold text-green-400 mb-1">Efficient</div>
                <div className="text-xs text-vintage-300">Points ON the line. Maximizing resources.</div>
             </div>
             <div className="bg-yellow-900/20 p-4 border border-yellow-800 rounded">
                <div className="font-bold text-yellow-400 mb-1">Inefficient</div>
                <div className="text-xs text-vintage-300">Points INSIDE the line. Unused resources (unemployment).</div>
             </div>
             <div className="bg-red-900/20 p-4 border border-red-800 rounded">
                <div className="font-bold text-red-400 mb-1">Impossible</div>
                <div className="text-xs text-vintage-300">Points OUTSIDE the line. Not enough resources... yet.</div>
             </div>
          </div>
        </div>
      </div>

      {/* Interactive Visualization */}
      <div className="bg-vintage-900 border border-vintage-600 rounded-sm p-8 shadow-2xl relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vintage-700 via-vintage-gold to-vintage-700"></div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
           <div className="flex-1 space-y-6">
              <h2 className="font-display text-3xl text-vintage-100">Economic Growth</h2>
              <p className="text-vintage-400 font-serif italic">
                 How to reach the impossible.
              </p>
              <div className="bg-vintage-800 p-6 rounded border border-vintage-700">
                 <p className="text-vintage-300 text-sm mb-4">
                    The PPF shows trade-offs at a specific moment in time. But over time, the economy can grow.
                 </p>
                 <button 
                   onClick={() => setTechLevel(prev => prev === 0 ? 1 : 0)}
                   className="flex items-center gap-2 bg-vintage-gold text-vintage-900 px-6 py-3 rounded font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg"
                 >
                    {techLevel === 0 ? <><Zap size={18}/> Invent New Technology</> : <><RefreshCcw size={18}/> Reset</>}
                 </button>
              </div>
              <div className="p-4 bg-vintage-800/50 rounded border-l-4 border-vintage-gold text-sm text-vintage-300">
                 {techLevel === 0 ? "Currently limited by old technology. The outer region is unreachable." : "Technological advance shifts the PPF outward! We can now produce MORE of both goods."}
              </div>
           </div>

           <div className="w-80 h-80 bg-vintage-800 border border-vintage-700 rounded relative p-8">
              <div className="absolute left-4 top-1/2 -rotate-90 text-xs text-vintage-500 font-bold">COMPUTERS</div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-vintage-500 font-bold">CARS</div>
              
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                 <line x1="0" y1="100" x2="100" y2="100" stroke="#5d4037" strokeWidth="2" />
                 <line x1="0" y1="0" x2="0" y2="100" stroke="#5d4037" strokeWidth="2" />
                 
                 {/* Old Curve */}
                 <path d="M 0 10 Q 60 60 70 100" fill="none" stroke="#d4af37" strokeWidth="3" opacity={techLevel === 1 ? 0.3 : 1} />
                 
                 {/* New Curve (Growth) */}
                 <path 
                   d="M 0 -10 Q 80 40 90 100" 
                   fill="none" 
                   stroke="#22c55e" 
                   strokeWidth="3" 
                   className={`transition-all duration-1000 ${techLevel === 0 ? 'opacity-0' : 'opacity-100'}`} 
                 />
                 
                 {/* Arrow showing shift */}
                 {techLevel === 1 && (
                    <g className="animate-in fade-in slide-in-from-left duration-1000">
                       <line x1="40" y1="50" x2="60" y2="30" stroke="#fff" strokeWidth="1" markerEnd="url(#arrow-white)" />
                    </g>
                 )}
                 
                 {/* Points */}
                 <circle cx="20" cy="80" r="2" fill="#22c55e" /> {/* Inefficient */}
                 <circle cx="35" cy="50" r="2" fill="#d4af37" /> {/* Efficient Old */}
                 <circle cx="80" cy="20" r="2" fill="#ef4444" opacity={techLevel === 1 ? 0.2 : 1}/> {/* Impossible Old */}
                 
              </svg>
           </div>
        </div>
      </div>
    </div>
  );
};