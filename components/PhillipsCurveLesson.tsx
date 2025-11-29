
import React, { useState } from 'react';
import { BookOpen, AlertTriangle, ArrowRight, Lightbulb, TrendingUp, Anchor, Heart, MessageCircle, BarChart3, Briefcase, Activity } from 'lucide-react';

export const PhillipsCurveLesson: React.FC = () => {
  // State for Phillips Curve Simulation
  // Slider controls Money Supply Injection (Aggregate Demand)
  // 0 = Low Demand (Low Inflation, High Unemployment)
  // 100 = High Demand (High Inflation, Low Unemployment)
  const [stimulus, setStimulus] = useState(50);
  
  // Model logic
  // Unemployment starts at 5% (Natural Rate) + Cyclical
  // Inflation starts at 2% + Demand Pull
  
  // Low stimulus (0) -> Unemp: 10%, Infl: 0%
  // High stimulus (100) -> Unemp: 2%, Infl: 10%
  const unemployment = 10 - (stimulus * 0.08); 
  const inflation = stimulus * 0.1;

  // Social Feed Data
  const posts = [
    {
      id: 1,
      author: "Paul Volcker",
      role: "Central Banker",
      avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80&w=200",
      content: "Inflation is a dragon that eats the savings of the elderly. 🐉 To kill it, we must raise interest rates and cool the economy. Yes, men will lose their jobs in the short run. But it is the bitter medicine we must take.",
      imgUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
      time: "Wednesday, 1980",
      likes: "210",
      comments: [
        { user: "Car Dealer", text: "You are killing my business, Paul!" },
        { user: "Saver", text: "Finally, my bank account means something." }
      ],
      insight: "Contractionary Policy"
    },
    {
      id: 2,
      author: "Construction Boss",
      role: "Employer",
      avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=200",
      content: "The government pumped so much cash into the city for the new dam project! 🏗 I have hired every man with two hands. Wages are up! But try buying lumber... the price has doubled since Monday.",
      imgUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600",
      time: "Monday, 8:00 AM",
      likes: "1,200",
      comments: [
        { user: "Worker", text: "High wages don't help when rent goes up too." }
      ],
      insight: "Expansionary Policy"
    },
    {
      id: 3,
      author: "Newspaper Ed.",
      role: "The Times",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
      content: "The Business Cycle turns again. We feasted during the boom, now we starve during the bust. 🎢 Is there no middle path? Can we not have jobs without inflating our currency to dust?",
      imgUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600",
      time: "Friday, 1930",
      likes: "8,900",
      comments: [
        { user: "Keynes", text: "In the long run, we are all dead. Act now." }
      ],
      insight: "Short-Run Trade-off"
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      
      {/* PART 1: Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           <Activity size={200} />
        </div>
        <div className="absolute inset-0 bg-paper-texture opacity-10 pointer-events-none"></div>

        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">📝</span> 
             Deep Analysis Card
           </h2>
           <span className="text-vintage-500 font-serif italic text-sm">Principle #10</span>
        </div>

        <div className="p-8 space-y-10 relative z-10">

          {/* 1. Core Definition */}
          <section>
            <div className="flex items-center gap-3 mb-4 text-vintage-gold border-b border-vintage-700/50 pb-2">
              <BookOpen size={20} />
              <h3 className="font-display text-lg tracking-widest uppercase">1. Core Definition</h3>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-vintage-900/40 p-6 border-l-2 border-vintage-500">
                 <p className="font-serif text-xl text-vintage-200 leading-relaxed italic">
                   "Society faces a short-run trade-off between inflation and unemployment."
                 </p>
                 <p className="text-right text-vintage-400 mt-2 text-sm">— N. Gregory Mankiw</p>
              </div>

              <div className="flex items-start gap-4 bg-vintage-100/5 p-5 rounded-lg border border-vintage-700">
                  <div className="bg-vintage-gold/20 p-2 rounded-full text-2xl">👵</div>
                  <div>
                    <span className="text-vintage-gold font-bold uppercase text-xs tracking-wider block mb-1">Grandma's Translation</span>
                    <p className="text-vintage-200 font-body">
                      "It's like a wild party. You can pump up the music (print money) and everyone dances (low unemployment), but the next morning you have a headache (inflation). You can't have the party without the headache... at least not for long."
                    </p>
                  </div>
               </div>
            </div>
          </section>

          {/* 2. First Principles */}
          <section>
            <div className="flex items-center gap-3 mb-4 text-vintage-gold border-b border-vintage-700/50 pb-2">
              <Anchor size={20} />
              <h3 className="font-display text-lg tracking-widest uppercase">2. First Principles</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                 <h4 className="text-vintage-100 font-bold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> The Mechanism
                 </h4>
                 <p className="text-vintage-400 text-sm leading-relaxed">
                   Increase Money Supply -> Increases Spending -> Firms Hire More Workers -> Lower Unemployment -> But High Demand Raises Prices (Inflation).
                 </p>
              </div>
              <div>
                 <h4 className="text-vintage-100 font-bold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Sticky Prices
                 </h4>
                 <p className="text-vintage-400 text-sm leading-relaxed">
                   Prices are slow to adjust. In the short run, more money feels like real wealth, stimulating the economy. Eventually, prices catch up.
                 </p>
              </div>
            </div>
          </section>

          {/* 3. Dynamic Deduction */}
          <section>
            <div className="flex items-center gap-3 mb-4 text-vintage-gold border-b border-vintage-700/50 pb-2">
              <TrendingUp size={20} />
              <h3 className="font-display text-lg tracking-widest uppercase">3. Dynamic Deduction</h3>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 bg-vintage-900/30 p-6 rounded-lg">
               <div className="flex-1 text-center md:text-left">
                 <p className="text-lg text-vintage-200">
                   If policymakers <strong className="text-vintage-accent">expand</strong> aggregate demand, <br/>
                   Unemployment <span className="italic border-b border-vintage-500">falls</span> but Inflation <span className="italic border-b border-vintage-500">rises</span>.
                 </p>
               </div>
               <ArrowRight className="text-vintage-600 hidden md:block" />
               <div className="flex-1 text-sm text-vintage-400 italic bg-vintage-800/50 p-3 rounded">
                  "This relationship is known as the Phillips Curve. It is a key tool for understanding the business cycle."
               </div>
            </div>
          </section>

          {/* 4. Case Study */}
          <section>
            <div className="flex items-center gap-3 mb-4 text-vintage-gold border-b border-vintage-700/50 pb-2">
              <Lightbulb size={20} />
              <h3 className="font-display text-lg tracking-widest uppercase">4. Case Study</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="group/card bg-vintage-900/40 hover:bg-vintage-900/60 transition-colors p-5 rounded border border-vintage-700">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-vintage-100 font-display">The Volcker Disinflation</h4>
                    <span className="text-[10px] uppercase bg-vintage-700 px-2 py-1 rounded text-vintage-300">History</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    In the early 1980s, Fed Chair Paul Volcker wanted to lower inflation. He contracted the money supply. Result: Inflation fell, but unemployment temporarily spiked to 10%. He chose the recession to cure the inflation.
                  </p>
               </div>
               
               <div className="group/card bg-vintage-900/40 hover:bg-vintage-900/60 transition-colors p-5 rounded border border-vintage-700">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-vintage-100 font-display">Long Run?</h4>
                    <span className="text-[10px] uppercase bg-vintage-accent/20 px-2 py-1 rounded text-vintage-accent border border-vintage-accent/30">Debug</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    This trade-off only exists in the <strong>Short Run</strong> (a few years). In the Long Run, printing money does not affect unemployment; it only causes inflation. The curve becomes vertical.
                  </p>
               </div>
            </div>
          </section>

        </div>
      </div>

      {/* PART 2: Interactive Visualization */}
      <div className="bg-vintage-900 border border-vintage-600 rounded-sm p-8 lg:p-12 shadow-2xl relative">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vintage-700 via-vintage-gold to-vintage-700"></div>
         
         <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Visual Header & Controls */}
            <div className="flex-1 space-y-8 w-full">
               <div>
                  <h2 className="font-display text-4xl text-vintage-100 mb-2">The Policy Lever</h2>
                  <p className="text-vintage-400 font-serif italic text-lg">
                     Navigating the Phillips Curve
                  </p>
                  <div className="mt-4 p-4 bg-vintage-800/50 rounded-lg border-l-4 border-vintage-gold text-sm text-vintage-300 leading-relaxed">
                    <strong className="text-vintage-gold block mb-1">Scenario</strong>
                    You are the Central Bank Chairperson. You can stimulate the economy (Print Money/Lower Rates) or contract it (Raise Rates).
                    <br/><br/>
                    • <strong>Stimulus:</strong> Creates jobs (Low Unemployment) but causes Inflation.
                    <br/>
                    • <strong>Austerity:</strong> Cures Inflation but kills jobs (High Unemployment).
                    <br/><br/>
                    Move the slider to see the trade-off.
                  </div>
               </div>

               <div className="bg-vintage-800 p-6 rounded-lg border border-vintage-700 shadow-inner">
                  <div className="flex justify-between text-xs font-display uppercase tracking-widest text-vintage-400 mb-4">
                     <span>Austerity (Contract)</span>
                     <span>Stimulus (Expand)</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={stimulus} 
                    onChange={(e) => setStimulus(parseInt(e.target.value))}
                    className="w-full h-2 bg-vintage-900 rounded-full appearance-none cursor-pointer accent-vintage-gold hover:accent-vintage-accent transition-all"
                  />
                  <div className="mt-6 flex justify-between text-center gap-4">
                     <div className={`flex-1 p-2 rounded border ${inflation > 6 ? 'bg-red-900/30 border-red-800' : 'bg-green-900/30 border-green-800'}`}>
                        <div className="text-[10px] uppercase text-vintage-400 mb-1">Inflation Rate</div>
                        <div className={`text-xl font-bold ${inflation > 6 ? 'text-red-400' : 'text-green-400'}`}>{inflation.toFixed(1)}%</div>
                     </div>
                     <div className={`flex-1 p-2 rounded border ${unemployment > 6 ? 'bg-red-900/30 border-red-800' : 'bg-green-900/30 border-green-800'}`}>
                        <div className="text-[10px] uppercase text-vintage-400 mb-1">Unemployment</div>
                        <div className={`text-xl font-bold ${unemployment > 6 ? 'text-red-400' : 'text-green-400'}`}>{unemployment.toFixed(1)}%</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* The Graph */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-vintage-800 rounded-lg shadow-2xl border border-vintage-700 p-8 select-none flex-shrink-0">
               <div className="absolute inset-8 border-l border-b border-vintage-600 opacity-50 pointer-events-none"></div>
               
               <div className="absolute -left-8 top-1/2 -rotate-90 text-xs text-vintage-gold font-bold tracking-widest whitespace-nowrap">INFLATION RATE (%)</div>
               <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-xs text-vintage-gold font-bold tracking-widest whitespace-nowrap">UNEMPLOYMENT RATE (%)</div>

               <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  
                  {/* The Phillips Curve (Convex) */}
                  {/* Pts approximated: (2, 10), (10, 2) */}
                  <path 
                     d="M 10 5 Q 15 80 90 90" 
                     fill="none" 
                     stroke="#8d6e63" 
                     strokeWidth="2" 
                     strokeDasharray="4,4"
                  />

                  {/* Current Position Marker */}
                  {/* Map values to SVG coords. Unemp (X): 2-10 -> 10-90. Infl (Y): 0-10 -> 90-10 (invert) */}
                  {/* Logic: Unemp X = (unemp - 2) * 10 + 10 roughly? Let's use precise math from state */}
                  {/* State: Unemp goes 10 -> 2. Infl goes 0 -> 10. */}
                  
                  <circle 
                     cx={(unemployment * 10) - 10} 
                     cy={100 - (inflation * 10)} 
                     r="4" 
                     fill="#d4af37" 
                     stroke="#2c1810" 
                     strokeWidth="2"
                     className="transition-all duration-300 ease-out"
                  />
                  
                  {/* Dashed Tracer Lines */}
                  <line 
                     x1={(unemployment * 10) - 10} y1={100 - (inflation * 10)}
                     x2={(unemployment * 10) - 10} y2={100}
                     stroke="#d4af37" strokeWidth="1" strokeOpacity="0.5"
                  />
                  <line 
                     x1={0} y1={100 - (inflation * 10)}
                     x2={(unemployment * 10) - 10} y2={100 - (inflation * 10)}
                     stroke="#d4af37" strokeWidth="1" strokeOpacity="0.5"
                  />

               </svg>
            </div>
         </div>
      </div>

      {/* PART 3: Social Feed */}
      <div className="bg-vintage-200 text-vintage-900 border-4 border-double border-vintage-900 shadow-2xl max-w-4xl mx-auto overflow-hidden relative">
        <div className="absolute inset-0 bg-paper-texture opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
        
        <div className="bg-vintage-200 p-8 border-b-2 border-vintage-900 relative">
          <div className="text-center">
             <div className="border-t border-b border-vintage-900 py-1 mb-2 inline-block px-4">
               <span className="font-serif italic text-vintage-700 text-xs tracking-[0.2em] uppercase">Est. 1923 • New York</span>
             </div>
             <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-vintage-900 mb-2">The Society Ledger</h2>
             <p className="font-serif italic text-vintage-800 text-lg">Chronicles of Daily Choices & Consequences</p>
          </div>
        </div>

        <div className="p-8 sm:p-12 space-y-12 bg-vintage-200">
          {posts.map((post) => (
            <article key={post.id} className="relative group">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-48 flex-shrink-0 flex flex-col items-center text-center">
                   <div className="w-24 h-24 rounded-full border-4 border-vintage-800 overflow-hidden mb-4 shadow-lg sepia contrast-125">
                      <img src={post.avatar} alt={post.author} className="w-full h-full object-cover grayscale" />
                   </div>
                   <h4 className="font-display font-bold text-xl text-vintage-900 leading-none mb-1">{post.author}</h4>
                   <span className="font-serif italic text-vintage-700 text-sm mb-3">{post.role}</span>
                   <div className="text-[10px] font-bold tracking-widest uppercase border border-vintage-900 px-2 py-1 rounded-sm text-vintage-900">
                      {post.time}
                   </div>
                </div>

                <div className="flex-1">
                   <div className="mb-6">
                      <p className="font-serif text-xl leading-relaxed text-vintage-900 first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-vintage-800">
                        {post.content}
                      </p>
                   </div>
                   <figure className="mb-6 relative border-8 border-white shadow-xl transform rotate-1 transition-transform group-hover:rotate-0 duration-500">
                      <img src={post.imgUrl} alt="Historical context" className="w-full h-64 sm:h-80 object-cover sepia-[0.4] grayscale-[0.3] contrast-125" />
                      <figcaption className="absolute bottom-0 left-0 bg-vintage-900/80 text-vintage-200 text-xs p-2 font-sans uppercase tracking-widest backdrop-blur-sm">
                         Fig. {post.id}: {post.insight}
                      </figcaption>
                   </figure>
                   <div className="bg-vintage-300/30 p-6 border-l-4 border-vintage-800 space-y-4">
                      <div className="flex items-center gap-6 text-sm font-bold text-vintage-800 uppercase tracking-wider border-b border-vintage-400 pb-3">
                         <span className="flex items-center gap-2"><Heart size={16} className="fill-vintage-800"/> {post.likes} Endorsements</span>
                         <span className="flex items-center gap-2"><MessageCircle size={16} /> Public Discourse</span>
                      </div>
                      <div className="space-y-3 font-serif text-vintage-900">
                         {post.comments.map((comment, idx) => (
                           <div key={idx} className="flex gap-2">
                             <span className="font-bold text-vintage-800 whitespace-nowrap">{comment.user}:</span>
                             <span className="italic text-vintage-700">"{comment.text}"</span>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-vintage-800 text-vintage-100 text-sm font-serif italic rounded-sm shadow-md">
                      <Lightbulb size={14} className="text-vintage-gold" />
                      <span>Analysis: <strong className="text-vintage-gold not-italic">{post.insight}</strong></span>
                   </div>
                </div>
              </div>
              {post.id !== posts.length && (
                 <div className="w-full h-px bg-vintage-400 my-12 relative flex items-center justify-center">
                    <div className="w-2 h-2 bg-vintage-900 rotate-45"></div>
                 </div>
              )}
            </article>
          ))}
        </div>
        <div className="bg-vintage-900 p-4 text-center text-vintage-400 text-xs font-serif uppercase tracking-widest">
           Printed in the United States of America • Price: 2 Cents
        </div>
      </div>
    </div>
  );
};
