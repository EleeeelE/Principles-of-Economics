
import React, { useState } from 'react';
import { BookOpen, AlertTriangle, ArrowRight, Lightbulb, TrendingUp, Scale, Anchor, Heart, MessageCircle, MoreHorizontal } from 'lucide-react';

export const TradeOffsLesson: React.FC = () => {
  // State for interactive part (Guns vs Butter simulation)
  // 0 = All Butter, 100 = All Guns
  const [allocation, setAllocation] = useState(50); 

  // Simple calculation for a Production Possibility Frontier (PPF)
  // Modeled as a quarter circle (x^2 + y^2 = r^2) to show the "bowed out" shape concept simplistically
  const radius = 100;
  const guns = allocation;
  const butter = Math.sqrt(Math.pow(radius, 2) - Math.pow(guns, 2));
  
  // Format for display
  const gunsDisplay = Math.round(guns);
  const butterDisplay = Math.round(butter);

  // Social Feed Data (Vintage Era Humans)
  const posts = [
    {
      id: 1,
      author: "Eleanor Vance",
      role: "Jazz Singer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      content: "The speakeasy is bustling tonight! 🎷 I stand before a dilemma: Do I spend my week's wages on that silk flapper dress for the upcoming show, or pay the landlord on time? He has a terrible temper, but the rhythm... the rhythm demands style.",
      imgUrl: "https://images.unsplash.com/photo-1569074187119-c87815b476da?auto=format&fit=crop&q=80&w=600",
      time: "Friday, 8:00 PM",
      likes: "142",
      comments: [
        { user: "Landlord Mr. Katz", text: "Rent is due on the 1st, Eleanor. No excuses this time." },
        { user: "Daisy", text: "Choose the dress, darling! One cannot sing the blues in last year's cotton." }
      ],
      insight: "Instant Gratification vs. Security"
    },
    {
      id: 2,
      author: "Arthur Shelby",
      role: "Factory Foreman",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      content: "The boss offered double pay for a double shift today. 🏭 The body is weary and the boys are gathering at the pub for a pint. To work is to earn, but to rest is to live. What is the true price of a man's evening?",
      imgUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=600",
      time: "Saturday, 6:00 AM",
      likes: "89",
      comments: [
        { user: "Martha", text: "We need the coal money, Arthur. Winter is coming." },
        { user: "Jack", text: "The ale isn't going to drink itself, Artie! Come on." }
      ],
      insight: "Income vs. Leisure Time"
    },
    {
      id: 3,
      author: "Thomas Miller",
      role: "University Student",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
      content: "The exams are tomorrow at dawn. 📚 My eyes are heavy, and sleep beckons like a sweet siren. If I sleep now, I am rested but unprepared. If I study, I am prepared but exhausted. The eternal struggle of the scholar.",
      imgUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=600",
      time: "Sunday, 2:00 AM",
      likes: "24",
      comments: [
        { user: "Professor H.", text: "Preparation prevents poor performance, Mr. Miller." },
        { user: "Roommate", text: "Turn off the lamp! Some of us are trying to dream." }
      ],
      insight: "Short-term Comfort vs. Long-term Grade"
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      
      {/* PART 1: Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden group">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           <Scale size={200} />
        </div>
        <div className="absolute inset-0 bg-paper-texture opacity-10 pointer-events-none"></div>

        {/* Card Header */}
        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">📝</span> 
             Deep Analysis Card
           </h2>
           <span className="text-vintage-500 font-serif italic text-sm">Principle #01</span>
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
                   "To get one thing that we like, we usually have to give up another thing that we like. Making decisions requires trading off one goal against another."
                 </p>
                 <p className="text-right text-vintage-400 mt-2 text-sm">— N. Gregory Mankiw</p>
              </div>

              <div className="flex items-start gap-4 bg-vintage-100/5 p-5 rounded-lg border border-vintage-700">
                  <div className="bg-vintage-gold/20 p-2 rounded-full text-2xl">👵</div>
                  <div>
                    <span className="text-vintage-gold font-bold uppercase text-xs tracking-wider block mb-1">Grandma's Translation</span>
                    <p className="text-vintage-200 font-body">
                      "You can't have your cake and eat it too. If you spend your time watching TV, you can't spend that same time reading a book. Everything has a price, even if it's not money."
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
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Problem Solved
                 </h4>
                 <p className="text-vintage-400 text-sm leading-relaxed">
                   How to allocate <strong className="text-vintage-200">scarce resources</strong> (time, money, labor) to satisfy unlimited human wants.
                 </p>
              </div>
              <div>
                 <h4 className="text-vintage-100 font-bold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Constraints
                 </h4>
                 <ul className="text-vintage-400 text-sm space-y-1 list-disc pl-4">
                   <li>Resource Scarcity (Fixed amount of time/money)</li>
                   <li>Exclusivity (A dollar spent on X cannot be spent on Y)</li>
                 </ul>
              </div>
            </div>
            
            <div className="p-6 bg-black/30 rounded border border-vintage-700 flex justify-center items-center">
               <span className="font-serif text-xl sm:text-2xl text-vintage-gold tracking-wider">
                  Cost(A) = Benefit(B<sub>forgone</sub>)
               </span>
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
                   If <strong className="text-vintage-accent">National Defense</strong> increases, <br/>
                   Then <strong className="text-vintage-accent">Consumer Goods</strong> must <span className="italic border-b border-vintage-500">decrease</span>.
                 </p>
               </div>
               <ArrowRight className="text-vintage-600 hidden md:block" />
               <div className="flex-1 text-sm text-vintage-400 italic bg-vintage-800/50 p-3 rounded">
                  "Because the labor and steel used for tanks cannot simultaneously be used for toaster ovens."
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
               {/* Typical Case */}
               <div className="group/card bg-vintage-900/40 hover:bg-vintage-900/60 transition-colors p-5 rounded border border-vintage-700">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-vintage-100 font-display">Efficiency vs. Equity</h4>
                    <span className="text-[10px] uppercase bg-vintage-700 px-2 py-1 rounded text-vintage-300">Typical</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    <strong>Efficiency</strong> is the size of the economic pie. <strong>Equity</strong> is how the pie is divided. Policies that redistribute income (Equity) often reduce the incentive to work, shrinking the pie (Efficiency).
                  </p>
               </div>
               
               {/* Counter-Intuitive Case */}
               <div className="group/card bg-vintage-900/40 hover:bg-vintage-900/60 transition-colors p-5 rounded border border-vintage-700">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-vintage-100 font-display">Environment vs. Income</h4>
                    <span className="text-[10px] uppercase bg-vintage-accent/20 px-2 py-1 rounded text-vintage-accent border border-vintage-accent/30">Paradox</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    Regulations for cleaner air increase costs for firms. This leads to lower profits, lower wages, or higher prices. We trade material wealth for health.
                  </p>
               </div>
            </div>
          </section>

          {/* 5. Debug */}
          <section>
            <div className="flex items-center gap-3 mb-4 text-vintage-gold border-b border-vintage-700/50 pb-2">
              <AlertTriangle size={20} />
              <h3 className="font-display text-lg tracking-widest uppercase">5. Critical Thinking (Debug)</h3>
            </div>
            
            <div className="bg-gradient-to-r from-red-900/20 to-transparent border-l-4 border-red-900/50 p-4">
               <ul className="space-y-3 text-sm text-vintage-300">
                 <li className="flex gap-3">
                   <span className="font-bold text-red-400 shrink-0">FAIL CASE:</span>
                   <span>
                     The trade-off logic does not apply if resources are currently <strong>idle or inefficiently used</strong> (e.g., high unemployment). In that case, you can increase production of BOTH goods by simply putting idle resources to work (moving from inside the curve to the boundary).
                   </span>
                 </li>
                 <li className="flex gap-3">
                   <span className="font-bold text-vintage-gold shrink-0">DISTINCTION:</span>
                   <span>
                     <strong>Trade-off</strong> is the situation of having to choose. <strong>Opportunity Cost</strong> is the specific value of the next best alternative you gave up.
                   </span>
                 </li>
               </ul>
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
                  <h2 className="font-display text-4xl text-vintage-100 mb-2">Guns vs. Butter</h2>
                  <p className="text-vintage-400 font-serif italic text-lg">
                    The classic economic model for production possibilities.
                  </p>
                  <div className="mt-4 p-4 bg-vintage-800/50 rounded-lg border-l-4 border-vintage-gold text-sm text-vintage-300 leading-relaxed">
                    <strong className="text-vintage-gold block mb-1">Interactive Explanation</strong>
                    Imagine a nation has a fixed amount of resources (workers, factories). It can use them to build defenses ("Guns") or make consumer goods ("Butter"). 
                    It cannot have maximum amounts of both. As you move the slider, observe that to get more of one, you <em>must</em> give up some of the other. 
                    This curve represents the <strong>Production Possibilities Frontier</strong>.
                  </div>
               </div>

               <div className="bg-vintage-800 p-6 rounded-lg border border-vintage-700 shadow-inner">
                  <div className="flex justify-between text-xs font-display uppercase tracking-widest text-vintage-400 mb-4">
                     <span>More Butter</span>
                     <span>More Guns</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={allocation} 
                    onChange={(e) => setAllocation(parseInt(e.target.value))}
                    className="w-full h-2 bg-vintage-900 rounded-full appearance-none cursor-pointer accent-vintage-gold hover:accent-vintage-accent transition-all"
                  />
                  <div className="mt-6 flex justify-between items-center text-sm">
                     <span className={`transition-colors duration-300 ${allocation < 50 ? 'text-vintage-gold font-bold' : 'text-vintage-500'}`}>
                        Prioritize Civilian
                     </span>
                     <span className={`transition-colors duration-300 ${allocation > 50 ? 'text-vintage-gold font-bold' : 'text-vintage-500'}`}>
                        Prioritize Defense
                     </span>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-vintage-800/50 rounded border border-vintage-700">
                     <div className="text-3xl font-display font-bold text-vintage-100">{butterDisplay}</div>
                     <div className="text-[10px] uppercase tracking-widest text-vintage-400 mt-1">Butter Units</div>
                  </div>
                  <div className="text-center p-4 bg-vintage-800/50 rounded border border-vintage-700">
                     <div className="text-3xl font-display font-bold text-vintage-100">{gunsDisplay}</div>
                     <div className="text-[10px] uppercase tracking-widest text-vintage-400 mt-1">Guns Units</div>
                  </div>
               </div>
            </div>

            {/* The Graph */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-vintage-800 rounded-lg shadow-2xl border border-vintage-700 p-8 select-none flex-shrink-0">
               {/* Grid Lines (Optional style) */}
               <div className="absolute inset-8 border-l border-b border-vintage-600 opacity-50 pointer-events-none"></div>
               
               {/* Labels */}
               <div className="absolute -left-8 top-1/2 -rotate-90 text-xs text-vintage-gold font-bold tracking-widest whitespace-nowrap">BUTTER (Civilian)</div>
               <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-xs text-vintage-gold font-bold tracking-widest whitespace-nowrap">GUNS (Defense)</div>

               <svg viewBox="-10 -10 120 120" className="w-full h-full overflow-visible">
                  {/* Defs for gradients/filters */}
                  <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Axes */}
                  <line x1="0" y1="100" x2="100" y2="100" stroke="#8d6e63" strokeWidth="1" />
                  <line x1="0" y1="0" x2="0" y2="100" stroke="#8d6e63" strokeWidth="1" />

                  {/* PPF Curve (Quarter Circle) */}
                  <path 
                    d="M 0 0 A 100 100 0 0 1 100 100" 
                    fill="none" 
                    stroke="#d4af37" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />

                  {/* Dynamic Lines */}
                  <line 
                    x1={guns} y1={100} 
                    x2={guns} y2={100 - butter} 
                    stroke="#cd7f32" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" 
                  />
                  <line 
                    x1={0} y1={100 - butter} 
                    x2={guns} y2={100 - butter} 
                    stroke="#cd7f32" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" 
                  />

                  {/* The Point */}
                  <circle 
                    cx={guns} 
                    cy={100 - butter} 
                    r="5" 
                    fill="#1a120b" 
                    stroke="#cd7f32" 
                    strokeWidth="3"
                    className="cursor-pointer shadow-lg hover:r-6 transition-all"
                  />
                  
                  {/* Value Tags on axes */}
                  <text x={guns} y="115" fontSize="6" fill="#bcaaa4" textAnchor="middle">{gunsDisplay}</text>
                  <text x="-15" y={100 - butter + 2} fontSize="6" fill="#bcaaa4" textAnchor="middle">{butterDisplay}</text>

               </svg>
            </div>
         </div>
      </div>

      {/* PART 3: Social Feed (Newspaper Style) */}
      <div className="bg-vintage-200 text-vintage-900 border-4 border-double border-vintage-900 shadow-2xl max-w-4xl mx-auto overflow-hidden relative">
        <div className="absolute inset-0 bg-paper-texture opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
        
        {/* Newspaper Header */}
        <div className="bg-vintage-200 p-8 border-b-2 border-vintage-900 relative">
          <div className="text-center">
             <div className="border-t border-b border-vintage-900 py-1 mb-2 inline-block px-4">
               <span className="font-serif italic text-vintage-700 text-xs tracking-[0.2em] uppercase">Est. 1923 • New York</span>
             </div>
             <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-vintage-900 mb-2">The Society Ledger</h2>
             <p className="font-serif italic text-vintage-800 text-lg">Chronicles of Daily Choices & Consequences</p>
          </div>
        </div>

        {/* Feed List */}
        <div className="p-8 sm:p-12 space-y-12 bg-vintage-200">
          {posts.map((post) => (
            <article key={post.id} className="relative group">
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                
                {/* Avatar Column */}
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

                {/* Content Column */}
                <div className="flex-1">
                   {/* Post Body */}
                   <div className="mb-6">
                      <p className="font-serif text-xl leading-relaxed text-vintage-900 first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-vintage-800">
                        {post.content}
                      </p>
                   </div>

                   {/* Main Image */}
                   <figure className="mb-6 relative border-8 border-white shadow-xl transform rotate-1 transition-transform group-hover:rotate-0 duration-500">
                      <img src={post.imgUrl} alt="Historical context" className="w-full h-64 sm:h-80 object-cover sepia-[0.4] grayscale-[0.3] contrast-125" />
                      <figcaption className="absolute bottom-0 left-0 bg-vintage-900/80 text-vintage-200 text-xs p-2 font-sans uppercase tracking-widest backdrop-blur-sm">
                         Fig. {post.id}: {post.insight}
                      </figcaption>
                   </figure>

                   {/* Footer / Interaction */}
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
                   
                   {/* Insight Badge */}
                   <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-vintage-800 text-vintage-100 text-sm font-serif italic rounded-sm shadow-md">
                      <Lightbulb size={14} className="text-vintage-gold" />
                      <span>Analysis: <strong className="text-vintage-gold not-italic">{post.insight}</strong></span>
                   </div>

                </div>
              </div>

              {/* Separator */}
              {post.id !== posts.length && (
                 <div className="w-full h-px bg-vintage-400 my-12 relative flex items-center justify-center">
                    <div className="w-2 h-2 bg-vintage-900 rotate-45"></div>
                 </div>
              )}
            </article>
          ))}
        </div>
        
        {/* Footer */}
        <div className="bg-vintage-900 p-4 text-center text-vintage-400 text-xs font-serif uppercase tracking-widest">
           Printed in the United States of America • Price: 2 Cents
        </div>
      </div>
    </div>
  );
};
