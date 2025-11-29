
import React, { useState } from 'react';
import { PieChart, BarChart as BarChartIcon, TrendingUp, ScatterChart, Move, MousePointer2, AlertTriangle, EyeOff, Scale, ArrowRight, ArrowLeft, RefreshCcw } from 'lucide-react';

export const GraphingLesson: React.FC = () => {
  const [graphType, setGraphType] = useState<'pie' | 'bar' | 'time'>('pie');
  const [emmaIncome, setEmmaIncome] = useState(40000); // 30k, 40k, 50k
  const [emmaPrice, setEmmaPrice] = useState(8); // Price of novels
  const [showOmitted, setShowOmitted] = useState(false);
  const [reverseCausality, setReverseCausality] = useState(false);

  // Demand Function Logic
  // Q = 25 - 2*P + (Income - 40000)/10000 * 3
  // Base at 40k, P=8: Q = 25 - 16 + 0 = 9 (matches text roughly)
  // Text says at 40k: P=8->13 novels. Let's tune formula to match table.
  // Table 40k: P10->5, P9->9, P8->13, P7->17, P6->21, P5->25
  // Formula: Q = 45 - 4P. (At P=8, Q=13).
  // Shift: Each 10k income adds roughly 3-4 books?
  // Table 30k: P10->2. (Diff is 3). P5->22 (Diff is 3).
  // Shift is constant 3 units per 10k income.
  
  const calculateQuantity = (p: number, inc: number) => {
    const baseQ = 45 - 4 * p;
    const shift = ((inc - 40000) / 10000) * 3;
    return baseQ + shift;
  };

  const currentQ = calculateQuantity(emmaPrice, emmaIncome);

  return (
    <div className="space-y-16 w-full max-w-5xl mx-auto">
      
      {/* SECTION 1: TYPES OF GRAPHS */}
      <section className="animate-in fade-in slide-in-from-bottom duration-700">
         <div className="flex items-center gap-3 mb-6 text-vintage-gold border-b border-vintage-700/50 pb-2">
            <PieChart size={24} />
            <h2 className="font-display text-3xl uppercase tracking-wider text-vintage-100">Graphs of a Single Variable</h2>
         </div>
         
         <div className="bg-vintage-900 border border-vintage-600 p-8 rounded shadow-xl flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-6">
               <p className="text-vintage-200 text-lg leading-relaxed">
                  Three common graphs show how a single variable behaves.
               </p>
               <div className="flex flex-col gap-2">
                  <button 
                     onClick={() => setGraphType('pie')}
                     className={`p-4 rounded border text-left transition-all ${graphType === 'pie' ? 'bg-vintage-gold text-vintage-900 font-bold border-vintage-gold' : 'bg-vintage-800 text-vintage-300 border-vintage-700 hover:bg-vintage-700'}`}
                  >
                     Pie Chart (Shares of Total)
                  </button>
                  <button 
                     onClick={() => setGraphType('bar')}
                     className={`p-4 rounded border text-left transition-all ${graphType === 'bar' ? 'bg-vintage-gold text-vintage-900 font-bold border-vintage-gold' : 'bg-vintage-800 text-vintage-300 border-vintage-700 hover:bg-vintage-700'}`}
                  >
                     Bar Graph (Comparison)
                  </button>
                  <button 
                     onClick={() => setGraphType('time')}
                     className={`p-4 rounded border text-left transition-all ${graphType === 'time' ? 'bg-vintage-gold text-vintage-900 font-bold border-vintage-gold' : 'bg-vintage-800 text-vintage-300 border-vintage-700 hover:bg-vintage-700'}`}
                  >
                     Time-Series Graph (Trend)
                  </button>
               </div>
            </div>

            <div className="flex-1 bg-[#e6ded5] rounded p-8 flex items-center justify-center border-4 border-vintage-800 shadow-inner min-h-[300px]">
               {graphType === 'pie' && (
                  <div className="text-center w-full animate-in zoom-in duration-300">
                     <h4 className="font-display text-vintage-900 font-bold mb-4 uppercase">U.S. National Income</h4>
                     <svg viewBox="0 0 100 100" className="w-48 h-48 mx-auto overflow-visible">
                        <circle cx="50" cy="50" r="45" fill="#8d6e63" stroke="#2c1810" strokeWidth="1"/>
                        <path d="M 50 50 L 50 5 A 45 45 0 0 1 95 50 Z" fill="#d4af37" stroke="#2c1810" strokeWidth="0.5"/>
                        <path d="M 50 50 L 95 50 A 45 45 0 0 1 50 95 Z" fill="#cd7f32" stroke="#2c1810" strokeWidth="0.5"/>
                        <text x="65" y="30" fontSize="6" fill="#1a120b" fontWeight="bold">Compensation (60%)</text>
                        <text x="20" y="60" fontSize="6" fill="#f5f5dc" fontWeight="bold">Profits (25%)</text>
                        <text x="60" y="80" fontSize="6" fill="#1a120b" fontWeight="bold">Rent/Int (15%)</text>
                     </svg>
                  </div>
               )}
               {graphType === 'bar' && (
                  <div className="text-center w-full animate-in zoom-in duration-300">
                     <h4 className="font-display text-vintage-900 font-bold mb-4 uppercase">Average Income</h4>
                     <div className="flex items-end justify-around h-40 w-full px-4 border-b-2 border-vintage-900">
                        <div className="w-8 bg-vintage-500 h-[20%] relative group"><span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-vintage-900">India</span></div>
                        <div className="w-8 bg-vintage-600 h-[40%] relative group"><span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-vintage-900">China</span></div>
                        <div className="w-8 bg-vintage-700 h-[70%] relative group"><span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-vintage-900">UK</span></div>
                        <div className="w-8 bg-vintage-800 h-[90%] relative group"><span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-vintage-900">USA</span></div>
                     </div>
                  </div>
               )}
               {graphType === 'time' && (
                  <div className="text-center w-full animate-in zoom-in duration-300">
                     <h4 className="font-display text-vintage-900 font-bold mb-4 uppercase">Productivity (1950-2000)</h4>
                     <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                        <polyline points="0,50 20,45 40,35 60,25 80,10 100,5" fill="none" stroke="#b91c1c" strokeWidth="2" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke="#1a120b" strokeWidth="1" />
                        <line x1="0" y1="0" x2="0" y2="50" stroke="#1a120b" strokeWidth="1" />
                        <circle cx="0" cy="50" r="2" fill="#1a120b"/>
                        <circle cx="100" cy="5" r="2" fill="#1a120b"/>
                     </svg>
                  </div>
               )}
            </div>
         </div>
      </section>

      {/* SECTION 2: COORDINATE SYSTEM */}
      <section className="animate-in fade-in slide-in-from-bottom duration-700 delay-100">
         <div className="flex items-center gap-3 mb-6 text-vintage-gold border-b border-vintage-700/50 pb-2">
            <ScatterChart size={24} />
            <h2 className="font-display text-3xl uppercase tracking-wider text-vintage-100">Two Variables: Scatter Plot</h2>
         </div>

         <div className="bg-vintage-800 p-8 rounded border border-vintage-700 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 text-vintage-200">
               <p className="mb-4">
                  Economists often look at the relationship between two variables using the coordinate system.
               </p>
               <div className="bg-black/30 p-4 rounded border border-vintage-600 mb-4">
                  <h4 className="font-bold text-vintage-gold mb-2">Ordered Pairs (x, y)</h4>
                  <ul className="space-y-2 text-sm">
                     <li className="flex justify-between border-b border-vintage-700 pb-1">
                        <span><strong>Albert E.</strong> (Study: 25h, GPA: 3.5)</span>
                        <span className="text-green-400">High Effort, High Reward</span>
                     </li>
                     <li className="flex justify-between border-b border-vintage-700 pb-1">
                        <span><strong>Alfred E.</strong> (Study: 5h, GPA: 2.0)</span>
                        <span className="text-red-400">Low Effort, Low Reward</span>
                     </li>
                  </ul>
               </div>
               <p className="text-sm italic text-vintage-400">
                  This demonstrates a <strong>Positive Correlation</strong>: As X increases, Y tends to increase.
               </p>
            </div>

            <div className="w-full max-w-xs aspect-square bg-white rounded p-6 relative shadow-lg">
               {/* Grid */}
               <div className="absolute inset-6 border-l-2 border-b-2 border-gray-800"></div>
               <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-600">Study Time (Hours)</div>
               <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-gray-600">GPA</div>

               {/* Points */}
               <div className="absolute left-[70%] bottom-[80%] w-3 h-3 bg-green-600 rounded-full hover:scale-150 transition-transform cursor-pointer" title="Albert E. (25, 3.5)"></div>
               <div className="absolute left-[20%] bottom-[40%] w-3 h-3 bg-red-600 rounded-full hover:scale-150 transition-transform cursor-pointer" title="Alfred E. (5, 2.0)"></div>
               
               {/* Other students */}
               <div className="absolute left-[50%] bottom-[65%] w-2 h-2 bg-gray-400 rounded-full opacity-50"></div>
               <div className="absolute left-[30%] bottom-[50%] w-2 h-2 bg-gray-400 rounded-full opacity-50"></div>
               <div className="absolute left-[80%] bottom-[85%] w-2 h-2 bg-gray-400 rounded-full opacity-50"></div>
            </div>
         </div>
      </section>

      {/* SECTION 3: CURVES AND SHIFTS */}
      <section className="animate-in fade-in slide-in-from-bottom duration-700 delay-200">
         <div className="flex items-center gap-3 mb-6 text-vintage-gold border-b border-vintage-700/50 pb-2">
            <TrendingUp size={24} />
            <h2 className="font-display text-3xl uppercase tracking-wider text-vintage-100">Curves: Movement vs. Shift</h2>
         </div>

         <div className="bg-vintage-900 border border-vintage-600 p-8 rounded shadow-2xl">
            <h3 className="font-display text-2xl text-vintage-100 mb-2">Emma's Demand for Novels</h3>
            <p className="text-vintage-400 font-serif italic mb-8">
               See how changing Price moves along the curve, while changing Income shifts the curve.
            </p>

            <div className="flex flex-col lg:flex-row gap-12">
               {/* Controls */}
               <div className="flex-1 space-y-8">
                  <div className="bg-vintage-800 p-6 rounded border border-vintage-700">
                     <label className="text-xs uppercase font-bold text-vintage-500 mb-2 block">Price of Novels ($)</label>
                     <input 
                        type="range" min="5" max="10" step="1" value={emmaPrice} 
                        onChange={(e) => setEmmaPrice(parseInt(e.target.value))}
                        className="w-full h-2 bg-vintage-900 rounded-full appearance-none cursor-pointer accent-vintage-gold mb-2"
                     />
                     <div className="flex justify-between text-sm text-vintage-200 font-mono">
                        <span>$5</span>
                        <span className="text-vintage-gold font-bold">${emmaPrice}</span>
                        <span>$10</span>
                     </div>
                     <p className="text-xs text-vintage-400 mt-2 bg-black/20 p-2 rounded">
                        Changing Price causes a <strong>Movement along the curve</strong>.
                     </p>
                  </div>

                  <div className="bg-vintage-800 p-6 rounded border border-vintage-700">
                     <label className="text-xs uppercase font-bold text-vintage-500 mb-2 block">Emma's Income</label>
                     <div className="flex gap-2">
                        <button onClick={() => setEmmaIncome(30000)} className={`flex-1 py-2 text-xs uppercase font-bold border rounded ${emmaIncome === 30000 ? 'bg-vintage-gold text-vintage-900 border-vintage-gold' : 'border-vintage-600 text-vintage-400'}`}>$30k</button>
                        <button onClick={() => setEmmaIncome(40000)} className={`flex-1 py-2 text-xs uppercase font-bold border rounded ${emmaIncome === 40000 ? 'bg-vintage-gold text-vintage-900 border-vintage-gold' : 'border-vintage-600 text-vintage-400'}`}>$40k</button>
                        <button onClick={() => setEmmaIncome(50000)} className={`flex-1 py-2 text-xs uppercase font-bold border rounded ${emmaIncome === 50000 ? 'bg-vintage-gold text-vintage-900 border-vintage-gold' : 'border-vintage-600 text-vintage-400'}`}>$50k</button>
                     </div>
                     <p className="text-xs text-vintage-400 mt-2 bg-black/20 p-2 rounded">
                        Changing Income causes a <strong>Shift of the curve</strong>.
                     </p>
                  </div>

                  <div className="text-center">
                     <div className="text-3xl font-display font-bold text-vintage-100">{currentQ.toFixed(0)} Novels</div>
                     <div className="text-xs uppercase tracking-widest text-vintage-500">Quantity Demanded</div>
                  </div>
               </div>

               {/* Graph */}
               <div className="w-full lg:w-96 aspect-square bg-[#fffcf5] rounded border-4 border-vintage-800 relative p-8 shadow-inner">
                  {/* Axes */}
                  <div className="absolute inset-8 border-l-2 border-b-2 border-vintage-900"></div>
                  <div className="absolute left-2 top-1/2 -rotate-90 text-xs font-bold text-vintage-900">Price ($)</div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold text-vintage-900">Quantity</div>

                  {/* SVG */}
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                     {/* Base Curve (40k) - Faded if not selected */}
                     <line x1="5" y1="5" x2="85" y2="85" stroke="#ccc" strokeWidth="1" strokeDasharray="4,4" />
                     <text x="85" y="80" fontSize="4" fill="#ccc">D1 (40k)</text>

                     {/* Active Curve */}
                     {/* Mapping: Q (0-30) -> X (0-100). P (11-0) -> Y (0-100) */}
                     {/* Let's simplify visualization mapping. P=10 -> Y=10. P=0 -> Y=100. */}
                     {/* Q=0 -> X=0. Q=30 -> X=100. */}
                     {/* D1 (40k): P=10, Q=5. P=5, Q=25. */}
                     {/* Point 1: x=(5/30)*100 = 16.6, y=(10/11)*100 = 9 roughly? Let's treat Y axis as P=0 to 12. */}
                     {/* Y = 100 - (P/12 * 100). X = (Q/30) * 100. */}
                     
                     {/* Draw line for current income */}
                     {(() => {
                        const pHigh = 11; const qHigh = calculateQuantity(pHigh, emmaIncome);
                        const pLow = 4; const qLow = calculateQuantity(pLow, emmaIncome);
                        
                        const x1 = (qHigh/30) * 100;
                        const y1 = 100 - (pHigh/12 * 100);
                        const x2 = (qLow/30) * 100;
                        const y2 = 100 - (pLow/12 * 100);

                        return (
                           <line 
                              x1={x1} y1={y1} x2={x2} y2={y2} 
                              stroke="#d4af37" strokeWidth="3" 
                              className="transition-all duration-500"
                           />
                        );
                     })()}

                     {/* Current Point */}
                     {(() => {
                        const cx = (currentQ/30) * 100;
                        const cy = 100 - (emmaPrice/12 * 100);
                        return (
                           <>
                              <circle cx={cx} cy={cy} r="4" fill="#1a120b" className="transition-all duration-300" />
                              <line x1={0} y1={cy} x2={cx} y2={cy} stroke="#1a120b" strokeWidth="0.5" strokeDasharray="2,2"/>
                              <line x1={cx} y1={100} x2={cx} y2={cy} stroke="#1a120b" strokeWidth="0.5" strokeDasharray="2,2"/>
                           </>
                        );
                     })()}
                  </svg>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 4: SLOPE */}
      <section className="animate-in fade-in slide-in-from-bottom duration-700 delay-300">
         <div className="flex items-center gap-3 mb-6 text-vintage-gold border-b border-vintage-700/50 pb-2">
            <Scale size={24} />
            <h2 className="font-display text-3xl uppercase tracking-wider text-vintage-100">Slope</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-vintage-800 p-8 rounded border border-vintage-700">
            <div>
               <h3 className="font-bold text-vintage-100 mb-4 text-xl">Calculating the Slope</h3>
               <p className="text-vintage-300 mb-6 text-sm leading-relaxed">
                  Slope is the ratio of the vertical distance covered to the horizontal distance covered as we move along the line.
               </p>
               <div className="bg-black/30 p-6 rounded text-center mb-6 font-mono text-lg text-vintage-gold">
                  Slope = Δy / Δx = Rise / Run
               </div>
               <div className="space-y-2 text-sm text-vintage-400">
                  <p>Using points (13, $8) and (21, $6):</p>
                  <p>Δy (Price Change) = 6 - 8 = <strong className="text-red-400">-2</strong></p>
                  <p>Δx (Quantity Change) = 21 - 13 = <strong className="text-green-400">+8</strong></p>
                  <p>Slope = -2 / 8 = <strong>-0.25</strong></p>
               </div>
            </div>
            
            <div className="bg-[#e6ded5] rounded p-6 relative flex items-center justify-center border-4 border-vintage-900">
               <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  {/* Line Segment */}
                  <line x1="20" y1="30" x2="80" y2="70" stroke="#1a120b" strokeWidth="2" />
                  
                  {/* Rise */}
                  <line x1="80" y1="30" x2="80" y2="70" stroke="#b91c1c" strokeWidth="2" strokeDasharray="4,2"/>
                  <text x="85" y="50" fontSize="6" fill="#b91c1c" fontWeight="bold">Rise (-2)</text>
                  
                  {/* Run */}
                  <line x1="20" y1="30" x2="80" y2="30" stroke="#15803d" strokeWidth="2" strokeDasharray="4,2"/>
                  <text x="45" y="25" fontSize="6" fill="#15803d" fontWeight="bold">Run (+8)</text>

                  {/* Points */}
                  <circle cx="20" cy="30" r="3" fill="#1a120b"/>
                  <text x="15" y="20" fontSize="6" fill="#1a120b">(13, $8)</text>
                  
                  <circle cx="80" cy="70" r="3" fill="#1a120b"/>
                  <text x="75" y="80" fontSize="6" fill="#1a120b">(21, $6)</text>
               </svg>
            </div>
         </div>
      </section>

      {/* SECTION 5: PITFALLS */}
      <section className="animate-in fade-in slide-in-from-bottom duration-700 delay-400">
         <div className="flex items-center gap-3 mb-6 text-vintage-gold border-b border-vintage-700/50 pb-2">
            <AlertTriangle size={24} />
            <h2 className="font-display text-3xl uppercase tracking-wider text-vintage-100">Cause & Effect Pitfalls</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Omitted Variable */}
            <div className="bg-vintage-900 border border-vintage-600 p-6 rounded shadow-lg">
               <h3 className="font-bold text-vintage-100 mb-4 flex items-center gap-2">
                  <EyeOff size={20} className="text-red-400"/> Omitted Variable
               </h3>
               <div className="bg-vintage-800 p-4 rounded mb-4 h-32 flex flex-col justify-center items-center text-center">
                  <p className="text-vintage-200 italic mb-2">"People with more lighters get more cancer."</p>
                  <ArrowRight className="rotate-90 text-vintage-500 my-1" />
                  <p className="text-vintage-200 italic">"Therefore, lighters cause cancer?"</p>
               </div>
               <button 
                  onClick={() => setShowOmitted(!showOmitted)}
                  className="w-full py-2 border border-vintage-500 text-vintage-400 hover:text-vintage-gold hover:border-vintage-gold rounded uppercase text-xs tracking-widest transition-colors"
               >
                  {showOmitted ? "Hide Truth" : "Reveal Hidden Variable"}
               </button>
               {showOmitted && (
                  <div className="mt-4 p-4 bg-red-900/20 border-l-4 border-red-500 animate-in fade-in slide-in-from-top">
                     <p className="text-sm text-vintage-200">
                        <strong>Smoking</strong> causes both! It's the omitted 3rd variable. Lighters and cancer are correlated, but not causally linked directly.
                     </p>
                  </div>
               )}
            </div>

            {/* Reverse Causality */}
            <div className="bg-vintage-900 border border-vintage-600 p-6 rounded shadow-lg">
               <h3 className="font-bold text-vintage-100 mb-4 flex items-center gap-2">
                  <RefreshCcw size={20} className="text-orange-400"/> Reverse Causality
               </h3>
               <div className="bg-vintage-800 p-4 rounded mb-4 h-32 flex flex-col justify-center items-center text-center">
                  <p className="text-vintage-200 italic mb-2">"Cities with more police have more crime."</p>
                  
                  <div className="flex items-center gap-4 my-2">
                     <span className={`transition-opacity duration-500 ${reverseCausality ? 'opacity-30' : 'opacity-100 font-bold text-red-400'}`}>Police Cause Crime?</span>
                     <ArrowRight size={16} className="text-vintage-600"/>
                     <span className={`transition-opacity duration-500 ${reverseCausality ? 'opacity-100 font-bold text-green-400' : 'opacity-30'}`}>Crime Causes Police?</span>
                  </div>
               </div>
               <button 
                  onClick={() => setReverseCausality(!reverseCausality)}
                  className="w-full py-2 border border-vintage-500 text-vintage-400 hover:text-vintage-gold hover:border-vintage-gold rounded uppercase text-xs tracking-widest transition-colors"
               >
                  Flip Causality
               </button>
               <div className="mt-4 p-4 bg-vintage-800 rounded text-sm text-vintage-400">
                  {reverseCausality ? (
                     "Dangerous cities hire more police to combat the crime. The crime came first."
                  ) : (
                     "This graph suggests we should fire police to reduce crime. A dangerous mistake!"
                  )}
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};
