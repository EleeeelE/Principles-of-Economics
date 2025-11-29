
import React, { useState, useEffect } from 'react';
import { BookOpen, AlertTriangle, ArrowRight, Lightbulb, TrendingUp, Anchor, Heart, MessageCircle, Hammer, GraduationCap, Zap, Coins } from 'lucide-react';

export const ProductivityLesson: React.FC = () => {
  // State for Productivity Simulation
  // Concept: Y = A * F(L, K, H, N)
  // We will simulate a simple worker.
  const [widgets, setWidgets] = useState(0);
  const [money, setMoney] = useState(0);
  
  // Levels
  const [toolLevel, setToolLevel] = useState(1); // Physical Capital (K)
  const [eduLevel, setEduLevel] = useState(1);   // Human Capital (H)
  const [techLevel, setTechLevel] = useState(1); // Technological Knowledge (A)

  // Costs
  const toolCost = toolLevel * 50;
  const eduCost = eduLevel * 100;
  const techCost = techLevel * 200;

  // Calculation
  // Output per click = Tools * Education * Tech
  const productivity = Math.floor(toolLevel * (1 + (eduLevel * 0.5)) * (1 + (techLevel * 0.2)));

  const work = () => {
    setWidgets(prev => prev + productivity);
    setMoney(prev => prev + productivity); // Assume 1 widget = $1 for simplicity
  };

  const upgradeTool = () => {
    if (money >= toolCost) {
      setMoney(prev => prev - toolCost);
      setToolLevel(prev => prev + 1);
    }
  };

  const upgradeEdu = () => {
    if (money >= eduCost) {
      setMoney(prev => prev - eduCost);
      setEduLevel(prev => prev + 1);
    }
  };

  const upgradeTech = () => {
    if (money >= techCost) {
      setMoney(prev => prev - techCost);
      setTechLevel(prev => prev + 1);
    }
  };

  // Social Feed Data
  const posts = [
    {
      id: 1,
      author: "Henry Ford",
      role: "Industrialist",
      avatar: "https://images.unsplash.com/photo-1552085732-51c071d78292?auto=format&fit=crop&q=80&w=200",
      content: "Before the assembly line, a worker spent 12 hours building one magneto. Now, with the moving line, he builds one in 13 minutes. 🏭 Productivity is not about working harder; it is about working smarter. This is why I can pay $5 a day.",
      imgUrl: "https://images.unsplash.com/photo-1628151016027-46a23b9d8857?auto=format&fit=crop&q=80&w=600",
      time: "Tuesday, 8:00 AM",
      likes: "8,901",
      comments: [
        { user: "Competitor", text: "You'll bankrupt us all with those wages!" },
        { user: "Worker", text: "I bought a Model T with my wages. Thank you, sir." }
      ],
      insight: "Physical Capital"
    },
    {
      id: 2,
      author: "School Board",
      role: "Public Education",
      avatar: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=200",
      content: "Why send a child to school when they could be earning pennies in the field? 📚 Because a child who can read manuals can fix the machine. A child who knows algebra can engineer the bridge. Education is the investment that pays the highest dividends.",
      imgUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600",
      time: "Monday, 9:00 AM",
      likes: "450",
      comments: [
        { user: "Farmer", text: "But who will harvest the wheat?" }
      ],
      insight: "Human Capital"
    },
    {
      id: 3,
      author: "Robinson Crusoe",
      role: "Castaway",
      avatar: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80&w=200",
      content: "I spent three weeks weaving a fishing net. I starved while doing it. But now? I catch more fish in an hour than I used to catch in a day with my bare hands. 🐟 My standard of living has tripled because my capital stock increased.",
      imgUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600",
      time: "Sunday, 6:00 PM",
      likes: "22",
      comments: [
        { user: "Friday", text: "Nice net, boss." }
      ],
      insight: "Investment & Saving"
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      
      {/* PART 1: Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           <Hammer size={200} />
        </div>
        <div className="absolute inset-0 bg-paper-texture opacity-10 pointer-events-none"></div>

        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">📝</span> 
             Deep Analysis Card
           </h2>
           <span className="text-vintage-500 font-serif italic text-sm">Principle #08</span>
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
                   "A country's standard of living depends on its ability to produce goods and services."
                 </p>
                 <p className="text-right text-vintage-400 mt-2 text-sm">— N. Gregory Mankiw</p>
              </div>

              <div className="flex items-start gap-4 bg-vintage-100/5 p-5 rounded-lg border border-vintage-700">
                  <div className="bg-vintage-gold/20 p-2 rounded-full text-2xl">👵</div>
                  <div>
                    <span className="text-vintage-gold font-bold uppercase text-xs tracking-wider block mb-1">Grandma's Translation</span>
                    <p className="text-vintage-200 font-body">
                      "You can't eat what you don't bake. If we want a bigger feast (richer life), we need to bake more pies per hour (productivity). Printing money doesn't bake pies; ovens and skills do."
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
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> The Formula
                 </h4>
                 <div className="p-4 bg-black/30 rounded border border-vintage-700 text-center">
                    <span className="font-serif text-lg text-vintage-gold tracking-wider">
                       Productivity = Output / Labor Hour
                    </span>
                 </div>
              </div>
              <div>
                 <h4 className="text-vintage-100 font-bold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Drivers
                 </h4>
                 <ul className="text-vintage-400 text-sm space-y-2 list-disc pl-4">
                   <li><strong>Physical Capital:</strong> Tools, machines.</li>
                   <li><strong>Human Capital:</strong> Education, skills, health.</li>
                   <li><strong>Technology:</strong> Best ways to do things.</li>
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
                   If Productivity <strong className="text-vintage-accent">doubles</strong>, <br/>
                   Average Income <span className="italic border-b border-vintage-500">doubles</span>.
                 </p>
               </div>
               <ArrowRight className="text-vintage-600 hidden md:block" />
               <div className="flex-1 text-sm text-vintage-400 italic bg-vintage-800/50 p-3 rounded">
                  "There is a near one-to-one relationship between productivity growth and income growth over long periods."
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
                    <h4 className="text-vintage-100 font-display">South Korea (1960-2000)</h4>
                    <span className="text-[10px] uppercase bg-vintage-700 px-2 py-1 rounded text-vintage-300">Success</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    In 1960, South Korea was as poor as Nigeria. By investing heavily in education (Human Capital) and importing technology, their productivity exploded. Today, their standard of living matches Europe.
                  </p>
               </div>
               
               <div className="group/card bg-vintage-900/40 hover:bg-vintage-900/60 transition-colors p-5 rounded border border-vintage-700">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-vintage-100 font-display">The Solow Paradox</h4>
                    <span className="text-[10px] uppercase bg-vintage-accent/20 px-2 py-1 rounded text-vintage-accent border border-vintage-accent/30">Mystery</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    "You can see the computer age everywhere but in the productivity statistics." Sometimes new technology takes decades to actually improve output (e.g., electricity took 40 years to revolutionize factories).
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
               <h2 className="font-display text-4xl text-vintage-100 mb-2">The Wealth Factory</h2>
               <p className="text-vintage-400 font-serif italic text-lg">
                  Invest in the factors of production
               </p>
               <div className="mt-4 p-4 bg-vintage-800/50 rounded-lg border-l-4 border-vintage-gold text-sm text-vintage-300 leading-relaxed">
                  <strong className="text-vintage-gold block mb-1">How to Play</strong>
                  Click "Produce" to earn money. Use money to upgrade your factors. 
                  See how <strong>Capital</strong> and <strong>Technology</strong> multiply your output per click (Productivity).
               </div>
            </div>

            <div className="w-full max-w-4xl bg-vintage-800 border border-vintage-700 p-8 rounded shadow-2xl">
               
               {/* Stats Row */}
               <div className="flex justify-between items-center mb-12 bg-black/30 p-4 rounded border border-vintage-600">
                  <div className="text-center">
                     <div className="text-xs uppercase text-vintage-500 tracking-widest">Treasury</div>
                     <div className="text-3xl font-display font-bold text-vintage-gold flex items-center gap-2">
                        <Coins size={24} /> ${money}
                     </div>
                  </div>
                  <div className="text-center">
                     <div className="text-xs uppercase text-vintage-500 tracking-widest">Productivity</div>
                     <div className="text-2xl font-bold text-vintage-100 flex items-center gap-2">
                        <Zap size={20} className="text-yellow-500" /> {productivity} <span className="text-xs font-normal text-vintage-400">/hr</span>
                     </div>
                  </div>
                  <div className="text-center">
                     <div className="text-xs uppercase text-vintage-500 tracking-widest">Total Output</div>
                     <div className="text-2xl font-bold text-vintage-100">
                        {widgets} units
                     </div>
                  </div>
               </div>

               {/* Game Area */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* WORK BUTTON */}
                  <div className="flex items-center justify-center bg-vintage-900/50 rounded-lg border-2 border-vintage-700 p-8 relative overflow-hidden group">
                     <div className="absolute inset-0 bg-paper-texture opacity-5"></div>
                     <button 
                        onClick={work}
                        className="relative z-10 bg-vintage-gold text-vintage-900 font-display font-bold text-xl uppercase tracking-widest px-12 py-6 rounded shadow-lg hover:scale-105 hover:bg-vintage-100 transition-all active:scale-95"
                     >
                        Produce Goods
                     </button>
                     <div className="absolute bottom-4 text-vintage-500 text-xs italic">
                        Click to generate value
                     </div>
                  </div>

                  {/* UPGRADES */}
                  <div className="space-y-4">
                     
                     {/* Tool Upgrade */}
                     <button 
                        onClick={upgradeTool}
                        disabled={money < toolCost}
                        className={`w-full flex items-center justify-between p-4 rounded border transition-all ${money >= toolCost ? 'bg-vintage-700 border-vintage-500 hover:bg-vintage-600' : 'bg-vintage-900/30 border-vintage-800 opacity-50 cursor-not-allowed'}`}
                     >
                        <div className="flex items-center gap-4">
                           <div className="bg-vintage-900 p-3 rounded">
                              <Hammer size={24} className="text-vintage-300" />
                           </div>
                           <div className="text-left">
                              <div className="font-bold text-vintage-100">Physical Capital</div>
                              <div className="text-xs text-vintage-400">Better Tools (Lvl {toolLevel})</div>
                           </div>
                        </div>
                        <div className="text-right">
                           <div className="text-vintage-gold font-bold">${toolCost}</div>
                           <div className="text-[10px] text-vintage-500">Output +1 base</div>
                        </div>
                     </button>

                     {/* Education Upgrade */}
                     <button 
                        onClick={upgradeEdu}
                        disabled={money < eduCost}
                        className={`w-full flex items-center justify-between p-4 rounded border transition-all ${money >= eduCost ? 'bg-vintage-700 border-vintage-500 hover:bg-vintage-600' : 'bg-vintage-900/30 border-vintage-800 opacity-50 cursor-not-allowed'}`}
                     >
                        <div className="flex items-center gap-4">
                           <div className="bg-vintage-900 p-3 rounded">
                              <GraduationCap size={24} className="text-vintage-300" />
                           </div>
                           <div className="text-left">
                              <div className="font-bold text-vintage-100">Human Capital</div>
                              <div className="text-xs text-vintage-400">Worker Skills (Lvl {eduLevel})</div>
                           </div>
                        </div>
                        <div className="text-right">
                           <div className="text-vintage-gold font-bold">${eduCost}</div>
                           <div className="text-[10px] text-vintage-500">Multiplier +50%</div>
                        </div>
                     </button>

                     {/* Tech Upgrade */}
                     <button 
                        onClick={upgradeTech}
                        disabled={money < techCost}
                        className={`w-full flex items-center justify-between p-4 rounded border transition-all ${money >= techCost ? 'bg-vintage-700 border-vintage-500 hover:bg-vintage-600' : 'bg-vintage-900/30 border-vintage-800 opacity-50 cursor-not-allowed'}`}
                     >
                        <div className="flex items-center gap-4">
                           <div className="bg-vintage-900 p-3 rounded">
                              <Lightbulb size={24} className="text-vintage-300" />
                           </div>
                           <div className="text-left">
                              <div className="font-bold text-vintage-100">Technology</div>
                              <div className="text-xs text-vintage-400">Knowledge (Lvl {techLevel})</div>
                           </div>
                        </div>
                        <div className="text-right">
                           <div className="text-vintage-gold font-bold">${techCost}</div>
                           <div className="text-[10px] text-vintage-500">Multiplier +20%</div>
                        </div>
                     </button>

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
