
import React, { useState } from 'react';
import { BookOpen, AlertTriangle, ArrowRight, Lightbulb, TrendingUp, Anchor, Heart, MessageCircle, Globe, Ship, ShoppingBag } from 'lucide-react';

export const TradeBenefitLesson: React.FC = () => {
  // State for Comparative Advantage Simulation
  // Scenario: Rancher vs Farmer. 
  // Rancher is better at everything, but still benefits from trade.
  // Rancher: 1h -> 8 Meat OR 2 Potatoes
  // Farmer: 1h -> 1 Meat OR 2 Potatoes
  // 8 hour day.
  
  const [tradeEnabled, setTradeEnabled] = useState(false);
  
  // No Trade Production (Autarky) - simplified assumptions for balance
  const rancherMeat = 24; 
  const rancherPotatoes = 8;
  const farmerMeat = 2;
  const farmerPotatoes = 10;
  
  // With Trade (Specialization)
  const rancherMeatTrade = 32; // Spends more time on meat
  const rancherPotatoesTrade = 12; // Imports potatoes
  const farmerMeatTrade = 4; // Imports meat
  const farmerPotatoesTrade = 14; // Specializes in potatoes
  
  const totalMeat = tradeEnabled ? (rancherMeatTrade + farmerMeatTrade) : (rancherMeat + farmerMeat);
  const totalPotatoes = tradeEnabled ? (rancherPotatoesTrade + farmerPotatoesTrade) : (rancherPotatoes + farmerPotatoes);

  // Social Feed Data
  const posts = [
    {
      id: 1,
      author: "Coco Chanel",
      role: "Fashion Designer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      content: "Why should I stitch my own shoes when I can design dresses? 👗 The cobbler makes better shoes in half the time. I trade my sketches for his soles, and we both walk in style. Specialization is the height of elegance.",
      imgUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=600",
      time: "Tuesday, 2:00 PM",
      likes: "2,304",
      comments: [
        { user: "The Cobbler", text: "A pleasure doing business, Mademoiselle." }
      ],
      insight: "Specialization"
    },
    {
      id: 2,
      author: "Henry Ford",
      role: "Industrialist",
      avatar: "https://images.unsplash.com/photo-1552085732-51c071d78292?auto=format&fit=crop&q=80&w=200",
      content: "We buy rubber from Brazil. Could we grow it in Detroit? Perhaps, in a greenhouse, at great expense. 🏭 But trade allows us to focus on engines while they focus on latex. The result? A $300 automobile for the common man.",
      imgUrl: "https://images.unsplash.com/photo-1532155297579-24b910e97262?auto=format&fit=crop&q=80&w=600",
      time: "Monday, 9:00 AM",
      likes: "5,120",
      comments: [
        { user: "Union Rep", text: "As long as the wages are fair, Mr. Ford." }
      ],
      insight: "Comparative Advantage"
    },
    {
      id: 3,
      author: "Housewife Editorial",
      role: "Daily Mail",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      content: "Look at this breakfast table! ☕️ Coffee from Colombia, sugar from the Caribbean, bacon from the local butcher. Without trade, we would be eating gruel from our own backyards. The world on a plate.",
      imgUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
      time: "Sunday, 8:30 AM",
      likes: "891",
      comments: [
        { user: "Reader", text: "A marvel of the modern age!" }
      ],
      insight: "Variety of Goods"
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      
      {/* PART 1: Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           <Globe size={200} />
        </div>
        <div className="absolute inset-0 bg-paper-texture opacity-10 pointer-events-none"></div>

        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">📝</span> 
             Deep Analysis Card
           </h2>
           <span className="text-vintage-500 font-serif italic text-sm">Principle #05</span>
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
                   "Trade allows each person to specialize in the activities he or she does best. By trading with others, people can buy a greater variety of goods and services at lower cost."
                 </p>
                 <p className="text-right text-vintage-400 mt-2 text-sm">— N. Gregory Mankiw</p>
              </div>

              <div className="flex items-start gap-4 bg-vintage-100/5 p-5 rounded-lg border border-vintage-700">
                  <div className="bg-vintage-gold/20 p-2 rounded-full text-2xl">👵</div>
                  <div>
                    <span className="text-vintage-gold font-bold uppercase text-xs tracking-wider block mb-1">Grandma's Translation</span>
                    <p className="text-vintage-200 font-body">
                      "Don't try to make your own toothpaste, knit your own socks, AND grow your own wheat. You'll be tired and have bad teeth. Do one thing well, and trade for the rest."
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
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Comparative Advantage
                 </h4>
                 <p className="text-vintage-400 text-sm leading-relaxed">
                   Even if you are better at EVERYTHING than your neighbor, you should still trade. You should focus on what you are <em>most</em> efficient at (lowest opportunity cost).
                 </p>
              </div>
              <div>
                 <h4 className="text-vintage-100 font-bold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Not a Zero-Sum Game
                 </h4>
                 <p className="text-vintage-400 text-sm leading-relaxed">
                   Sports are zero-sum (one wins, one loses). Economics is positive-sum. Trade makes the total size of the economic pie larger.
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
                   If a country <strong className="text-vintage-accent">isolates</strong> itself (Autarky), <br/>
                   It consumes <span className="italic border-b border-vintage-500">only what it produces</span>.
                 </p>
               </div>
               <ArrowRight className="text-vintage-600 hidden md:block" />
               <div className="flex-1 text-sm text-vintage-400 italic bg-vintage-800/50 p-3 rounded">
                  "By trading, a country ends up consuming a bundle of goods OUTSIDE its own production possibilities frontier."
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
                    <h4 className="text-vintage-100 font-display">Babe Ruth</h4>
                    <span className="text-[10px] uppercase bg-vintage-700 px-2 py-1 rounded text-vintage-300">Classic</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    Babe Ruth was a great pitcher AND a great hitter. But he stopped pitching to focus entirely on hitting. The opportunity cost of him pitching was too high (fewer home runs). He specialized.
                  </p>
               </div>
               
               <div className="group/card bg-vintage-900/40 hover:bg-vintage-900/60 transition-colors p-5 rounded border border-vintage-700">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-vintage-100 font-display">Tariffs</h4>
                    <span className="text-[10px] uppercase bg-vintage-accent/20 px-2 py-1 rounded text-vintage-accent border border-vintage-accent/30">Debug</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    When governments impose tariffs to "protect jobs," they are essentially forcing the country to make things it is bad at making. This lowers the overall standard of living, even if it saves specific jobs.
                  </p>
               </div>
            </div>
          </section>

        </div>
      </div>

      {/* PART 2: Interactive Visualization */}
      <div className="bg-vintage-900 border border-vintage-600 rounded-sm p-8 lg:p-12 shadow-2xl relative">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vintage-700 via-vintage-gold to-vintage-700"></div>
         
         <div className="flex flex-col gap-8 items-center text-center">
            
            <div className="max-w-2xl">
               <h2 className="font-display text-4xl text-vintage-100 mb-2">The Magic of Trade</h2>
               <p className="text-vintage-400 font-serif italic text-lg">
                  Comparative Advantage in Action
               </p>
               <div className="mt-4 p-4 bg-vintage-800/50 rounded-lg border-l-4 border-vintage-gold text-sm text-vintage-300 leading-relaxed text-left">
                  <strong className="text-vintage-gold block mb-1">Scenario</strong>
                  Imagine a Rancher (who is great at everything) and a Farmer (who is slower). 
                  <br/><br/>
                  • <strong>Without Trade:</strong> They each split their time and eat what they kill/grow.
                  <br/>
                  • <strong>With Trade:</strong> The Rancher focuses on Meat, the Farmer focuses on Potatoes, and they swap.
                  <br/><br/>
                  Toggle the switch to see how <strong>Specialization</strong> increases the total food available!
               </div>
            </div>

            <div className="bg-vintage-800 p-8 rounded-lg border border-vintage-700 shadow-2xl w-full max-w-4xl">
               
               <div className="flex justify-center mb-8">
                 <button 
                   onClick={() => setTradeEnabled(!tradeEnabled)}
                   className={`px-8 py-3 rounded-full font-display uppercase tracking-widest text-sm transition-all duration-500 border-2 ${tradeEnabled ? 'bg-vintage-gold border-vintage-gold text-vintage-900 shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'bg-transparent border-vintage-500 text-vintage-500 hover:border-vintage-gold hover:text-vintage-gold'}`}
                 >
                    {tradeEnabled ? "Trade Network Active" : "Enable Trade"}
                 </button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left: Rancher */}
                  <div className="relative p-6 bg-vintage-900/50 rounded border border-vintage-700">
                     <div className="absolute -top-3 left-4 bg-vintage-800 px-2 text-vintage-gold text-xs uppercase font-bold tracking-widest">The Rancher</div>
                     <div className="flex justify-between mb-2 text-sm text-vintage-300">
                        <span>Meat Output:</span>
                        <span className={`font-bold ${tradeEnabled ? 'text-green-400' : 'text-vintage-100'}`}>{tradeEnabled ? rancherMeatTrade : rancherMeat} lbs</span>
                     </div>
                     <div className="w-full bg-vintage-900 h-2 rounded-full overflow-hidden mb-4">
                        <div className="h-full bg-red-900 transition-all duration-700" style={{ width: `${(tradeEnabled ? rancherMeatTrade : rancherMeat)/40 * 100}%` }}></div>
                     </div>
                     
                     <div className="flex justify-between mb-2 text-sm text-vintage-300">
                        <span>Potato Output:</span>
                        <span className={`font-bold ${tradeEnabled ? 'text-green-400' : 'text-vintage-100'}`}>{tradeEnabled ? rancherPotatoesTrade : rancherPotatoes} lbs</span>
                     </div>
                     <div className="w-full bg-vintage-900 h-2 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-700 transition-all duration-700" style={{ width: `${(tradeEnabled ? rancherPotatoesTrade : rancherPotatoes)/40 * 100}%` }}></div>
                     </div>
                  </div>

                  {/* Right: Farmer */}
                  <div className="relative p-6 bg-vintage-900/50 rounded border border-vintage-700">
                     <div className="absolute -top-3 left-4 bg-vintage-800 px-2 text-vintage-gold text-xs uppercase font-bold tracking-widest">The Farmer</div>
                     <div className="flex justify-between mb-2 text-sm text-vintage-300">
                        <span>Meat Output:</span>
                        <span className={`font-bold ${tradeEnabled ? 'text-green-400' : 'text-vintage-100'}`}>{tradeEnabled ? farmerMeatTrade : farmerMeat} lbs</span>
                     </div>
                     <div className="w-full bg-vintage-900 h-2 rounded-full overflow-hidden mb-4">
                        <div className="h-full bg-red-900 transition-all duration-700" style={{ width: `${(tradeEnabled ? farmerMeatTrade : farmerMeat)/40 * 100}%` }}></div>
                     </div>
                     
                     <div className="flex justify-between mb-2 text-sm text-vintage-300">
                        <span>Potato Output:</span>
                        <span className={`font-bold ${tradeEnabled ? 'text-green-400' : 'text-vintage-100'}`}>{tradeEnabled ? farmerPotatoesTrade : farmerPotatoes} lbs</span>
                     </div>
                     <div className="w-full bg-vintage-900 h-2 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-700 transition-all duration-700" style={{ width: `${(tradeEnabled ? farmerPotatoesTrade : farmerPotatoes)/40 * 100}%` }}></div>
                     </div>
                  </div>
               </div>

               {/* Summary Totals */}
               <div className="mt-8 pt-8 border-t border-vintage-700 flex flex-col md:flex-row justify-around items-center gap-6">
                  <div className="text-center">
                     <div className="text-xs uppercase text-vintage-500 tracking-widest mb-1">Total Economy Meat</div>
                     <div className="text-3xl font-display font-bold text-vintage-100 flex items-end gap-2 justify-center">
                        {totalMeat} <span className="text-sm font-sans font-normal text-vintage-400 mb-1">lbs</span>
                     </div>
                     {tradeEnabled && <span className="text-green-500 text-xs font-bold uppercase">+10 lbs gain!</span>}
                  </div>
                  <div className="h-12 w-px bg-vintage-700 hidden md:block"></div>
                  <div className="text-center">
                     <div className="text-xs uppercase text-vintage-500 tracking-widest mb-1">Total Economy Potatoes</div>
                     <div className="text-3xl font-display font-bold text-vintage-100 flex items-end gap-2 justify-center">
                        {totalPotatoes} <span className="text-sm font-sans font-normal text-vintage-400 mb-1">lbs</span>
                     </div>
                     {tradeEnabled && <span className="text-green-500 text-xs font-bold uppercase">+8 lbs gain!</span>}
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
