
import React, { useState } from 'react';
import { RefreshCcw, Briefcase, Home, DollarSign, Package } from 'lucide-react';

export const CircularFlowLesson: React.FC = () => {
  const [showFlow, setShowFlow] = useState<'dollars' | 'inputs'>('dollars');

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      {/* Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           <RefreshCcw size={200} />
        </div>
        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">2-1d</span> 
             Our First Model: The Circular-Flow Diagram
           </h2>
        </div>
        <div className="p-8 space-y-8 relative z-10">
          <section>
             <h3 className="font-display text-lg text-vintage-gold uppercase mb-4 border-b border-vintage-700 pb-2">Definition</h3>
             <p className="text-vintage-200 font-serif text-lg leading-relaxed">
               "A visual model of the economy that shows how dollars flow through markets among households and firms."
             </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-vintage-900/30 p-4 rounded border border-vintage-700">
                <h4 className="font-bold text-vintage-100 flex items-center gap-2 mb-2"><Briefcase size={16}/> Firms</h4>
                <ul className="text-sm text-vintage-300 list-disc pl-4 space-y-1">
                   <li>Produce and sell goods and services</li>
                   <li>Hire and use factors of production</li>
                </ul>
             </div>
             <div className="bg-vintage-900/30 p-4 rounded border border-vintage-700">
                <h4 className="font-bold text-vintage-100 flex items-center gap-2 mb-2"><Home size={16}/> Households</h4>
                <ul className="text-sm text-vintage-300 list-disc pl-4 space-y-1">
                   <li>Buy and consume goods and services</li>
                   <li>Own and sell factors of production (Labor, Land, Capital)</li>
                </ul>
             </div>
          </div>
        </div>
      </div>

      {/* Interactive Visualization */}
      <div className="bg-[#e6ded5] text-vintage-900 border-4 border-vintage-900 rounded-sm p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-paper-texture opacity-50 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center">
           <div className="flex gap-4 mb-8">
              <button 
                 onClick={() => setShowFlow('dollars')}
                 className={`px-6 py-2 rounded-full border-2 font-bold uppercase text-xs tracking-widest transition-all ${showFlow === 'dollars' ? 'bg-green-800 text-white border-green-800' : 'border-vintage-800 text-vintage-800'}`}
              >
                 Flow of Dollars
              </button>
              <button 
                 onClick={() => setShowFlow('inputs')}
                 className={`px-6 py-2 rounded-full border-2 font-bold uppercase text-xs tracking-widest transition-all ${showFlow === 'inputs' ? 'bg-orange-800 text-white border-orange-800' : 'border-vintage-800 text-vintage-800'}`}
              >
                 Flow of Inputs/Outputs
              </button>
           </div>

           <div className="relative w-full max-w-lg aspect-square">
              {/* Actors */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-vintage-900 text-vintage-100 p-4 rounded shadow-lg text-center w-40 z-20">
                 <div className="font-display font-bold">Markets for Goods & Services</div>
                 <div className="text-[10px] text-vintage-400">Firms sell, Households buy</div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-vintage-900 text-vintage-100 p-4 rounded shadow-lg text-center w-40 z-20">
                 <div className="font-display font-bold">Markets for Factors of Production</div>
                 <div className="text-[10px] text-vintage-400">Households sell, Firms buy</div>
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-vintage-800 text-vintage-100 p-6 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center z-20 border-4 border-double border-vintage-400">
                 <Briefcase className="mb-1"/>
                 <div className="font-display font-bold">Firms</div>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-vintage-800 text-vintage-100 p-6 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center z-20 border-4 border-double border-vintage-400">
                 <Home className="mb-1"/>
                 <div className="font-display font-bold">Households</div>
              </div>

              {/* Arrows SVG */}
              <svg className="absolute inset-0 w-full h-full z-10 overflow-visible">
                 <defs>
                    <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                       <path d="M0,0 L0,6 L9,3 z" fill="#15803d" />
                    </marker>
                    <marker id="arrow-orange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                       <path d="M0,0 L0,6 L9,3 z" fill="#c2410c" />
                    </marker>
                 </defs>

                 {/* Outer Loop (Dollars) - Green */}
                 {showFlow === 'dollars' && (
                   <g className="animate-in fade-in duration-500">
                     {/* Household -> Goods Market (Spending) */}
                     <path d="M 380 200 Q 380 80 280 60" fill="none" stroke="#15803d" strokeWidth="4" markerEnd="url(#arrow-green)" />
                     <text x="350" y="100" fontSize="10" fill="#15803d" fontWeight="bold">Spending ($)</text>

                     {/* Goods Market -> Firms (Revenue) */}
                     <path d="M 220 60 Q 120 80 120 200" fill="none" stroke="#15803d" strokeWidth="4" markerEnd="url(#arrow-green)" />
                     <text x="120" y="100" fontSize="10" fill="#15803d" fontWeight="bold">Revenue ($)</text>

                     {/* Firms -> Factor Market (Wages/Rent) */}
                     <path d="M 120 300 Q 120 420 220 440" fill="none" stroke="#15803d" strokeWidth="4" markerEnd="url(#arrow-green)" />
                     <text x="100" y="400" fontSize="10" fill="#15803d" fontWeight="bold">Wages, Rent, Profit ($)</text>

                     {/* Factor Market -> Households (Income) */}
                     <path d="M 280 440 Q 380 420 380 300" fill="none" stroke="#15803d" strokeWidth="4" markerEnd="url(#arrow-green)" />
                     <text x="350" y="400" fontSize="10" fill="#15803d" fontWeight="bold">Income ($)</text>
                   </g>
                 )}

                 {/* Inner Loop (Inputs/Outputs) - Orange */}
                 {showFlow === 'inputs' && (
                   <g className="animate-in fade-in duration-500">
                     {/* Households -> Factor Market (Labor/Land) */}
                     <path d="M 340 300 Q 340 380 280 390" fill="none" stroke="#c2410c" strokeWidth="4" markerEnd="url(#arrow-orange)" />
                     <text x="300" y="350" fontSize="10" fill="#c2410c" fontWeight="bold">Labor, Land, Capital</text>

                     {/* Factor Market -> Firms (Factors) */}
                     <path d="M 220 390 Q 160 380 160 300" fill="none" stroke="#c2410c" strokeWidth="4" markerEnd="url(#arrow-orange)" />
                     <text x="130" y="350" fontSize="10" fill="#c2410c" fontWeight="bold">Factors of Production</text>

                     {/* Firms -> Goods Market (Goods Sold) */}
                     <path d="M 160 200 Q 160 120 220 110" fill="none" stroke="#c2410c" strokeWidth="4" markerEnd="url(#arrow-orange)" />
                     <text x="130" y="150" fontSize="10" fill="#c2410c" fontWeight="bold">Goods & Services Sold</text>

                     {/* Goods Market -> Households (Goods Bought) */}
                     <path d="M 280 110 Q 340 120 340 200" fill="none" stroke="#c2410c" strokeWidth="4" markerEnd="url(#arrow-orange)" />
                     <text x="300" y="150" fontSize="10" fill="#c2410c" fontWeight="bold">Goods & Services Bought</text>
                   </g>
                 )}
              </svg>

              {/* Center Icons */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                 {showFlow === 'dollars' ? <DollarSign size={100} className="text-green-900"/> : <Package size={100} className="text-orange-900"/>}
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};
