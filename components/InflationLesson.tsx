
import React, { useState, useEffect } from 'react';
import { BookOpen, AlertTriangle, ArrowRight, Lightbulb, TrendingUp, Anchor, Heart, MessageCircle, DollarSign, Coffee, Flame } from 'lucide-react';

export const InflationLesson: React.FC = () => {
  // State for Inflation Simulation
  // Concept: MV = PY. If V and Y are stable, increase in M leads to increase in P.
  const [moneySupply, setMoneySupply] = useState(1000); // M
  const velocity = 2; // V (Constant)
  const output = 1000; // Y (Constant real output)
  
  // Calculate Price Level (P = MV / Y)
  const priceLevel = (moneySupply * velocity) / output;
  const coffeePrice = 0.05 * priceLevel; // Base price of coffee

  const printMoney = () => {
    setMoneySupply(prev => prev + 500);
  };

  const burnMoney = () => {
    if (moneySupply > 500) setMoneySupply(prev => prev - 500);
  };

  // Social Feed Data
  const posts = [
    {
      id: 1,
      author: "Hans (Berlin)",
      role: "Factory Worker",
      avatar: "https://images.unsplash.com/photo-1549488497-226601f74813?auto=format&fit=crop&q=80&w=200",
      content: "I ordered a coffee for 5,000 marks. By the time I finished drinking it, the waiter said it was now 8,000 marks. ☕️ I should have ordered two at the start. Money is melting like ice in the sun.",
      imgUrl: "https://images.unsplash.com/photo-1544923405-2b490f848980?auto=format&fit=crop&q=80&w=600",
      time: "Thursday, 1923",
      likes: "15,000,000",
      comments: [
        { user: "Wife", text: "Bring the wheelbarrow for your wages today, Hans." }
      ],
      insight: "Hyperinflation"
    },
    {
      id: 2,
      author: "Confederate General",
      role: "Soldier",
      avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80&w=200",
      content: "We cannot tax the people, so we shall print the money to pay for the war. 🗡 It is the easiest tax of all, for it is hidden. But now a pair of boots costs $800 Confederate dollars.",
      imgUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=600",
      time: "Friday, 1864",
      likes: "400",
      comments: [
        { user: "Soldier", text: "My pay is worthless, sir." }
      ],
      insight: "Inflation Tax"
    },
    {
      id: 3,
      author: "Milton Friedman",
      role: "Economist",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
      content: "Inflation is always and everywhere a monetary phenomenon. 📉 It is not caused by greedy businessmen or labor unions. It is caused by the central bank producing too much money.",
      imgUrl: "https://images.unsplash.com/photo-1621981386829-9b7472855c14?auto=format&fit=crop&q=80&w=600",
      time: "Monday, 1970",
      likes: "4,500",
      comments: [
        { user: "Student", text: "Keep the money supply steady!" }
      ],
      insight: "Quantity Theory"
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      
      {/* PART 1: Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           <DollarSign size={200} />
        </div>
        <div className="absolute inset-0 bg-paper-texture opacity-10 pointer-events-none"></div>

        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">📝</span> 
             Deep Analysis Card
           </h2>
           <span className="text-vintage-500 font-serif italic text-sm">Principle #09</span>
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
                   "Prices rise when the government prints too much money."
                 </p>
                 <p className="text-right text-vintage-400 mt-2 text-sm">— N. Gregory Mankiw</p>
              </div>

              <div className="flex items-start gap-4 bg-vintage-100/5 p-5 rounded-lg border border-vintage-700">
                  <div className="bg-vintage-gold/20 p-2 rounded-full text-2xl">👵</div>
                  <div>
                    <span className="text-vintage-gold font-bold uppercase text-xs tracking-wider block mb-1">Grandma's Translation</span>
                    <p className="text-vintage-200 font-body">
                      "Imagine we're playing Monopoly. If I give everyone an extra million dollars, did we get richer? No. The person selling Boardwalk will just ask for a billion dollars. More paper doesn't mean more stuff."
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
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Quantity Theory
                 </h4>
                 <div className="p-4 bg-black/30 rounded border border-vintage-700 text-center">
                    <span className="font-serif text-lg text-vintage-gold tracking-wider">
                       M × V = P × Y
                    </span>
                 </div>
                 <p className="text-vintage-400 text-xs mt-2 text-center">Money × Velocity = Price × Output</p>
              </div>
              <div>
                 <h4 className="text-vintage-100 font-bold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Mechanism
                 </h4>
                 <p className="text-vintage-400 text-sm leading-relaxed">
                   When the government creates large quantities of money, the value of money falls. People bid up the prices of fixed goods.
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
                   If Money Supply <strong className="text-vintage-accent">increases</strong> rapidly, <br/>
                   Inflation <span className="italic border-b border-vintage-500">increases</span> proportionately.
                 </p>
               </div>
               <ArrowRight className="text-vintage-600 hidden md:block" />
               <div className="flex-1 text-sm text-vintage-400 italic bg-vintage-800/50 p-3 rounded">
                  "In almost all cases of large or persistent inflation, the culprit is growth in the quantity of money."
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
                    <h4 className="text-vintage-100 font-display">Germany (1921-1923)</h4>
                    <span className="text-[10px] uppercase bg-vintage-700 px-2 py-1 rounded text-vintage-300">Classic</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    Prices tripled every month. Workers were paid three times a day. People burned money for heat because it was cheaper than buying firewood. The cause? The government printed money to pay war reparations.
                  </p>
               </div>
               
               <div className="group/card bg-vintage-900/40 hover:bg-vintage-900/60 transition-colors p-5 rounded border border-vintage-700">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-vintage-100 font-display">Zimbabwe (2000s)</h4>
                    <span className="text-[10px] uppercase bg-vintage-accent/20 px-2 py-1 rounded text-vintage-accent border border-vintage-accent/30">Extreme</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    The government printed money to pay the army. Inflation reached 79,600,000,000% per month. They issued a $100 Trillion dollar bill... which was enough to buy a bus ticket.
                  </p>
               </div>
            </div>
          </section>

        </div>
      </div>

      {/* PART 2: Interactive Visualization */}
      <div className="bg-vintage-900 border border-vintage-600 rounded-sm p-8 lg:p-12 shadow-2xl relative">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vintage-700 via-vintage-gold to-vintage-700"></div>
         
         <div className="flex flex-col items-center gap-8">
            
            <div className="text-center max-w-2xl">
               <h2 className="font-display text-4xl text-vintage-100 mb-2">The Printing Press</h2>
               <p className="text-vintage-400 font-serif italic text-lg">
                  Central Bank Simulation
               </p>
               <div className="mt-4 p-4 bg-vintage-800/50 rounded-lg border-l-4 border-vintage-gold text-sm text-vintage-300 leading-relaxed">
                  <strong className="text-vintage-gold block mb-1">Scenario</strong>
                  You run the Central Bank. You can print more money (Increase M). 
                  Watch what happens to the price of a standard cup of coffee (P).
                  <br/><br/>
                  <em>Note: Real Output (Y) is fixed.</em>
               </div>
            </div>

            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-vintage-800 border border-vintage-700 p-8 rounded shadow-2xl">
               
               {/* Controls Side */}
               <div className="space-y-8">
                  <div className="bg-black/30 p-4 rounded border border-vintage-600 text-center">
                      <div className="text-xs uppercase text-vintage-500 tracking-widest mb-1">Money Supply (M)</div>
                      <div className="text-4xl font-display font-bold text-vintage-gold">
                         ${moneySupply.toLocaleString()}
                      </div>
                  </div>

                  <div className="flex gap-4">
                     <button 
                        onClick={printMoney}
                        className="flex-1 bg-green-900/50 hover:bg-green-800 text-green-200 border border-green-700 py-4 rounded font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 flex flex-col items-center gap-2"
                     >
                        <DollarSign />
                        Print Money
                     </button>
                     <button 
                        onClick={burnMoney}
                        disabled={moneySupply <= 500}
                        className="flex-1 bg-red-900/50 hover:bg-red-800 text-red-200 border border-red-700 py-4 rounded font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 flex flex-col items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                        <Flame />
                        Burn Money
                     </button>
                  </div>

                  <div className="p-4 rounded bg-vintage-900/50 border border-vintage-700 text-xs text-vintage-400 font-mono">
                     Formula: Price = (M × {velocity}) / {output}
                  </div>
               </div>

               {/* Visual Side */}
               <div className="flex flex-col items-center justify-center p-8 bg-[#e6ded5] rounded shadow-inner border-8 border-double border-vintage-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-paper-texture opacity-50 pointer-events-none"></div>
                  
                  {/* The Coffee Cup */}
                  <div className="relative z-10 transition-transform duration-300" style={{ transform: `scale(${1 + (moneySupply/5000)})` }}>
                     <Coffee size={80} className="text-vintage-900" strokeWidth={1.5} />
                  </div>

                  {/* The Price Tag */}
                  <div className="relative z-10 mt-6 transform -rotate-6">
                     <div className="bg-white px-4 py-2 shadow-xl border border-gray-300 flex items-center gap-1">
                        <span className="text-gray-500 text-xs uppercase font-bold">Price:</span>
                        <span className="text-3xl font-display font-bold text-red-700">
                           ${coffeePrice.toFixed(2)}
                        </span>
                     </div>
                  </div>

                  <div className="relative z-10 mt-8 text-center">
                     <div className="text-[10px] uppercase tracking-widest text-vintage-800 font-bold mb-1">Purchasing Power of $1</div>
                     <div className="w-32 h-2 bg-gray-300 rounded-full overflow-hidden mx-auto">
                        <div 
                           className="h-full bg-red-800 transition-all duration-500"
                           style={{ width: `${(1000/moneySupply) * 100}%` }}
                        ></div>
                     </div>
                  </div>

               </div>
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
