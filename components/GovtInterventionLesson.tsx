
import React, { useState } from 'react';
import { BookOpen, AlertTriangle, ArrowRight, Lightbulb, TrendingUp, Anchor, Heart, MessageCircle, Factory, Cloud, Shield } from 'lucide-react';

export const GovtInterventionLesson: React.FC = () => {
  // State for Externality Simulation
  // Factory produces Goods but also Pollution.
  const [taxRate, setTaxRate] = useState(0); // 0 to 10
  
  // As tax increases, Production decreases, but Pollution decreases faster.
  const production = Math.max(0, 100 - (taxRate * 8));
  const pollution = Math.max(0, 100 - (taxRate * 12));
  
  const socialWelfare = production - (pollution * 0.5) + (taxRate * 5); // Simple model

  // Social Feed Data
  const posts = [
    {
      id: 1,
      author: "River Fisherman",
      role: "Local Resident",
      avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200",
      content: "The Dye Factory upstream is booming. Good for them. But my fish are dead, and the water is purple. 🐟 They get the profit, I get the poison. The market price of their dye doesn't include the cost of my livelihood.",
      imgUrl: "https://images.unsplash.com/photo-1618123069712-9c6f56488b3f?auto=format&fit=crop&q=80&w=600",
      time: "Saturday, 7:00 AM",
      likes: "342",
      comments: [
        { user: "Factory Owner", text: "We are creating jobs! Don't be selfish." },
        { user: "Mayor", text: "Perhaps a regulation is in order..." }
      ],
      insight: "Negative Externality"
    },
    {
      id: 2,
      author: "John D. Rockefeller",
      role: "Standard Oil",
      avatar: "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?auto=format&fit=crop&q=80&w=200",
      content: "Competition is a sin. ⛽️ I have bought all the refineries. Now I can set the price to whatever I wish. Who is going to stop me? The market? I AM the market.",
      imgUrl: "https://images.unsplash.com/photo-1518115392661-3a6d71b3e647?auto=format&fit=crop&q=80&w=600",
      time: "Wednesday, 10:00 AM",
      likes: "1,000,000",
      comments: [
        { user: "Sherman Act", text: "Knock knock." }
      ],
      insight: "Market Power (Monopoly)"
    },
    {
      id: 3,
      author: "Sheriff",
      role: "Law Enforcement",
      avatar: "https://images.unsplash.com/photo-1521142517876-4776856037e9?auto=format&fit=crop&q=80&w=200",
      content: "If Farmer Bill can't trust that his corn won't be stolen, he won't plant corn. 🌽 The invisible hand needs the iron fist of the law to protect property rights. No police, no market.",
      imgUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=600",
      time: "Monday, 6:00 AM",
      likes: "512",
      comments: [
        { user: "Farmer Bill", text: "Amen, Sheriff." }
      ],
      insight: "Property Rights"
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      
      {/* PART 1: Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           <Shield size={200} />
        </div>
        <div className="absolute inset-0 bg-paper-texture opacity-10 pointer-events-none"></div>

        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">📝</span> 
             Deep Analysis Card
           </h2>
           <span className="text-vintage-500 font-serif italic text-sm">Principle #07</span>
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
                   "Governments can sometimes improve market outcomes. The invisible hand can work its magic only if the government enforces the rules and maintains the institutions."
                 </p>
                 <p className="text-right text-vintage-400 mt-2 text-sm">— N. Gregory Mankiw</p>
              </div>

              <div className="flex items-start gap-4 bg-vintage-100/5 p-5 rounded-lg border border-vintage-700">
                  <div className="bg-vintage-gold/20 p-2 rounded-full text-2xl">👵</div>
                  <div>
                    <span className="text-vintage-gold font-bold uppercase text-xs tracking-wider block mb-1">Grandma's Translation</span>
                    <p className="text-vintage-200 font-body">
                      "The market is a great game, but you still need a referee. If players cheat (steal) or if the ball pops (pollution), the game stops working."
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
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Market Failure
                 </h4>
                 <p className="text-vintage-400 text-sm leading-relaxed">
                   Situations where the market acts inefficiently on its own.
                   <br/>
                   1. <strong>Externality</strong>: Impact on a bystander (Pollution).
                   <br/>
                   2. <strong>Market Power</strong>: Monopoly pricing.
                 </p>
              </div>
              <div>
                 <h4 className="text-vintage-100 font-bold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Role of Govt
                 </h4>
                 <ul className="text-vintage-400 text-sm space-y-2 list-disc pl-4">
                   <li>Enforce Property Rights (Police/Courts)</li>
                   <li>Promote Efficiency (Tax pollution, break monopolies)</li>
                   <li>Promote Equality (Welfare, progressive tax)</li>
                 </ul>
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
                   If a factory does <strong className="text-vintage-accent">not pay</strong> for its pollution, <br/>
                   It will produce <span className="italic border-b border-vintage-500">more than</span> the social optimum.
                 </p>
               </div>
               <ArrowRight className="text-vintage-600 hidden md:block" />
               <div className="flex-1 text-sm text-vintage-400 italic bg-vintage-800/50 p-3 rounded">
                  "Government can internalize this externality by imposing a tax on pollution, aligning private incentives with social well-being."
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
                    <h4 className="text-vintage-100 font-display">Standard Oil (1911)</h4>
                    <span className="text-[10px] uppercase bg-vintage-700 px-2 py-1 rounded text-vintage-300">Monopoly</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    Rockefeller controlled 90% of US oil. He could set high prices because there was no competition. The government intervened (Sherman Act) to break up the company and restore market forces.
                  </p>
               </div>
               
               <div className="group/card bg-vintage-900/40 hover:bg-vintage-900/60 transition-colors p-5 rounded border border-vintage-700">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-vintage-100 font-display">Vaccines</h4>
                    <span className="text-[10px] uppercase bg-vintage-accent/20 px-2 py-1 rounded text-vintage-accent border border-vintage-accent/30">Positive</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    When you get vaccinated, you protect others (Positive Externality). The free market might produce too few vaccines because individuals don't value the benefit to strangers. Govts subsidize them to improve the outcome.
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
                  <h2 className="font-display text-4xl text-vintage-100 mb-2">The Smog City Dilemma</h2>
                  <p className="text-vintage-400 font-serif italic text-lg">
                    Balancing Industry vs. Environment
                  </p>
                  <div className="mt-4 p-4 bg-vintage-800/50 rounded-lg border-l-4 border-vintage-gold text-sm text-vintage-300 leading-relaxed">
                    <strong className="text-vintage-gold block mb-1">Scenario</strong>
                    A factory produces useful widgets but pumps smog into the air. 
                    <br/>
                    • <strong>Market Alone:</strong> Max Production, Max Pollution.
                    <br/>
                    • <strong>Government Role:</strong> Use a "Pigovian Tax" to discourage pollution.
                    <br/><br/>
                    Increase the Pollution Tax to see how it affects output and air quality. Find the balance!
                  </div>
               </div>

               <div className="bg-vintage-800 p-6 rounded-lg border border-vintage-700 shadow-inner">
                  <div className="flex justify-between text-xs font-display uppercase tracking-widest text-vintage-400 mb-4">
                     <span>No Regulation</span>
                     <span>Heavy Regulation</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    value={taxRate} 
                    onChange={(e) => setTaxRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-vintage-900 rounded-full appearance-none cursor-pointer accent-vintage-gold hover:accent-vintage-accent transition-all"
                  />
                  <div className="mt-6 text-center">
                     <span className="text-vintage-500 uppercase tracking-widest text-xs">Social Welfare Score</span>
                     <div className="text-2xl font-display font-bold text-vintage-100 mt-1">{socialWelfare.toFixed(0)}</div>
                  </div>
               </div>
            </div>

            {/* The Visualization: Factory */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-[#2c3e50] rounded-lg shadow-2xl border border-vintage-700 overflow-hidden flex flex-col justify-end items-center group/factory">
               {/* Sky */}
               <div className={`absolute inset-0 transition-colors duration-1000 ${pollution > 60 ? 'bg-[#546e7a]' : 'bg-[#81d4fa]'}`}></div>
               
               {/* Clouds / Smog */}
               {[...Array(5)].map((_, i) => (
                  <div key={i} className={`absolute transition-all duration-1000 ${pollution > 50 ? 'bg-gray-800 opacity-60' : 'bg-white opacity-40'} rounded-full blur-xl`} 
                       style={{
                         width: `${pollution + 50}px`, 
                         height: `${pollution/2 + 20}px`,
                         top: `${10 + i * 15}%`,
                         left: `${Math.random() * 80}%`
                       }}>
                  </div>
               ))}

               {/* Factory Building */}
               <div className="relative z-10 w-48 h-32 bg-vintage-800 border-2 border-vintage-900 flex flex-col items-center justify-center">
                   <Factory size={64} className="text-vintage-400" />
                   <div className="mt-2 bg-black/30 px-2 py-1 rounded text-xs text-vintage-300 font-mono">
                      Output: {production}%
                   </div>
               </div>
               
               {/* Smoke Stacks */}
               <div className="absolute bottom-32 flex gap-4">
                  <div className="w-8 h-12 bg-vintage-700 border border-vintage-900"></div>
                  <div className="w-8 h-12 bg-vintage-700 border border-vintage-900"></div>
               </div>
               
               {/* Smoke Particles */}
               <div className="absolute bottom-44 left-1/2 -translate-x-1/2 flex gap-8">
                  <Cloud size={pollution > 20 ? 40 : 0} className="text-gray-600 animate-pulse transition-all duration-500" />
                  <Cloud size={pollution > 60 ? 60 : 0} className="text-gray-700 animate-bounce transition-all duration-500" />
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
