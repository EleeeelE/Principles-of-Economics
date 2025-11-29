
import React, { useState } from 'react';
import { ZoomIn, ZoomOut, User, Globe, Building2, TrendingUp } from 'lucide-react';

export const MicroMacroLesson: React.FC = () => {
  const [view, setView] = useState<'micro' | 'macro'>('micro');

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      {/* Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           {view === 'micro' ? <User size={200} /> : <Globe size={200} />}
        </div>
        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">2-1f</span> 
             Microeconomics and Macroeconomics
           </h2>
        </div>
        <div className="p-8 space-y-8 relative z-10">
          <section>
             <p className="text-vintage-200 font-serif text-lg leading-relaxed mb-6">
               "Economics is studied on various levels. We can study the decisions of individual households and firms, or we can study the operation of the economy as a whole."
             </p>
             <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => setView('micro')}
                  className={`flex items-center gap-2 px-6 py-3 rounded border-2 transition-all ${view === 'micro' ? 'bg-vintage-gold text-vintage-900 border-vintage-gold' : 'border-vintage-600 text-vintage-400 hover:border-vintage-gold'}`}
                >
                   <ZoomIn size={18} /> Micro
                </button>
                <button 
                  onClick={() => setView('macro')}
                  className={`flex items-center gap-2 px-6 py-3 rounded border-2 transition-all ${view === 'macro' ? 'bg-vintage-gold text-vintage-900 border-vintage-gold' : 'border-vintage-600 text-vintage-400 hover:border-vintage-gold'}`}
                >
                   <ZoomOut size={18} /> Macro
                </button>
             </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
             {/* Micro Column */}
             <div className={`transition-opacity duration-500 ${view === 'micro' ? 'opacity-100' : 'opacity-40 blur-sm'}`}>
                <h3 className="font-display text-xl text-vintage-100 mb-4 flex items-center gap-2">
                   <User className="text-vintage-gold"/> Microeconomics
                </h3>
                <p className="text-sm text-vintage-300 mb-4">
                   The study of how households and firms make decisions and interact in markets.
                </p>
                <ul className="bg-vintage-900/30 p-4 rounded text-sm space-y-2 border-l-2 border-vintage-600">
                   <li>• Effect of rent control on NYC housing</li>
                   <li>• Impact of foreign competition on US Auto industry</li>
                   <li>• Compulsory school attendance & worker earnings</li>
                </ul>
             </div>

             {/* Macro Column */}
             <div className={`transition-opacity duration-500 ${view === 'macro' ? 'opacity-100' : 'opacity-40 blur-sm'}`}>
                <h3 className="font-display text-xl text-vintage-100 mb-4 flex items-center gap-2">
                   <Globe className="text-vintage-gold"/> Macroeconomics
                </h3>
                <p className="text-sm text-vintage-300 mb-4">
                   The study of economy-wide phenomena, including inflation, unemployment, and economic growth.
                </p>
                <ul className="bg-vintage-900/30 p-4 rounded text-sm space-y-2 border-l-2 border-vintage-600">
                   <li>• Effect of federal borrowing</li>
                   <li>• Unemployment rate over time</li>
                   <li>• Alternative policies to promote national growth</li>
                </ul>
             </div>
          </div>
          
          <div className="mt-8 p-4 bg-vintage-100/5 rounded text-center text-vintage-400 italic text-sm">
             Note: They are closely intertwined. You cannot understand the macroeconomy without understanding the micro-decisions that comprise it.
          </div>
        </div>
      </div>
    </div>
  );
};
