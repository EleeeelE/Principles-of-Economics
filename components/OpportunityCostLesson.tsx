
import React, { useState } from 'react';
import { BookOpen, AlertTriangle, ArrowRight, Lightbulb, TrendingUp, Anchor, Heart, MessageCircle, DollarSign, Briefcase, GraduationCap, Calculator } from 'lucide-react';

export const OpportunityCostLesson: React.FC = () => {
  // State for interactive part (The True Cost of College Calculator)
  const [tuitionPerYear, setTuitionPerYear] = useState(2500); // 1920s inflated values for gameplay or keep realistic? Let's use relatable numbers scaled down or abstract. Let's use "Simulated Dollars".
  const [hourlyWage, setHourlyWage] = useState(15); // Foregone wage
  
  const studyYears = 4;
  const workHoursPerYear = 2000;
  
  // Calculations
  const totalExplicitCost = tuitionPerYear * studyYears;
  const totalImplicitCost = hourlyWage * workHoursPerYear * studyYears;
  const totalOpportunityCost = totalExplicitCost + totalImplicitCost;

  // Social Feed Data (Vintage Era Humans)
  const posts = [
    {
      id: 1,
      author: "Henry Ford II",
      role: "Industrialist",
      avatar: "https://images.unsplash.com/photo-1552085732-51c071d78292?auto=format&fit=crop&q=80&w=200",
      content: "They ask why I don't paint the cars red. 🚗 Paint is cheap, yes. But stopping the assembly line to switch colors cost me 100 Model Ts an hour. The cost of red paint isn't the pigment; it's the cars we didn't build.",
      imgUrl: "https://images.unsplash.com/photo-1596701140683-9118c7c9c07e?auto=format&fit=crop&q=80&w=600",
      time: "Tuesday, 10:00 AM",
      likes: "1,204",
      comments: [
        { user: "Shareholder", text: "Black paint dries faster. Time is money!" },
        { user: "Artist", text: "But a splash of color feeds the soul, Henry." }
      ],
      insight: "Time as a Resource"
    },
    {
      id: 2,
      author: "Margaret Sterling",
      role: "Typist",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      content: "Thinking of going to the cinema to see the new Chaplin film. 🎬 Ticket is 5 cents. But if I go, I miss 3 hours of overtime at the textile mill. The movie doesn't cost a nickel; it costs a nickel plus my evening's wages. Is laughter worth that much?",
      imgUrl: "https://images.unsplash.com/photo-1517604931442-710e8e9993ec?auto=format&fit=crop&q=80&w=600",
      time: "Friday, 5:30 PM",
      likes: "45",
      comments: [
        { user: "Mill Foreman", text: "The looms don't run themselves, Margaret." },
        { user: "Sister", text: "Go! You can't put a price on joy." }
      ],
      insight: "Explicit + Implicit Costs"
    },
    {
      id: 3,
      author: "Farmer John",
      role: "Agriculture",
      avatar: "https://images.unsplash.com/photo-1542596768-5d1d21f1cfda?auto=format&fit=crop&q=80&w=200",
      content: "The soil is ready. If I plant wheat, I cannot plant corn. 🌽 The cost of the wheat is not just the seed and the sweat—it is the profit I would have made from the corn. The land gives, but it demands a choice.",
      imgUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600",
      time: "Sunday, 5:00 AM",
      likes: "312",
      comments: [
        { user: "Neighbor", text: "Corn prices are up, John. Think carefully." },
        { user: "Wife", text: "We need flour for bread more than feed for cattle." }
      ],
      insight: "Mutually Exclusive Choices"
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      
      {/* PART 1: Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden group">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           <DollarSign size={200} />
        </div>
        <div className="absolute inset-0 bg-paper-texture opacity-10 pointer-events-none"></div>

        {/* Card Header */}
        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">📝</span> 
             Deep Analysis Card
           </h2>
           <span className="text-vintage-500 font-serif italic text-sm">Principle #02</span>
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
                   "The cost of something is what you give up to get it. This is called the opportunity cost."
                 </p>
                 <p className="text-right text-vintage-400 mt-2 text-sm">— N. Gregory Mankiw</p>
              </div>

              <div className="flex items-start gap-4 bg-vintage-100/5 p-5 rounded-lg border border-vintage-700">
                  <div className="bg-vintage-gold/20 p-2 rounded-full text-2xl">👵</div>
                  <div>
                    <span className="text-vintage-gold font-bold uppercase text-xs tracking-wider block mb-1">Grandma's Translation</span>
                    <p className="text-vintage-200 font-body">
                      "There's no such thing as a free lunch. Even if someone buys you a burger, you paid for it with the time you spent listening to them talk."
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
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Formula
                 </h4>
                 <div className="p-4 bg-black/30 rounded border border-vintage-700 text-center">
                    <span className="font-serif text-lg text-vintage-gold tracking-wider">
                       Total Cost = Explicit Cost + Implicit Cost
                    </span>
                 </div>
              </div>
              <div>
                 <h4 className="text-vintage-100 font-bold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Components
                 </h4>
                 <ul className="text-vintage-400 text-sm space-y-2 list-disc pl-4">
                   <li><strong>Explicit:</strong> Out-of-pocket payments (Tuition, Rent).</li>
                   <li><strong>Implicit:</strong> Input costs that do not require an outlay of money (Foregone Wages, Time).</li>
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
                   If your <strong className="text-vintage-accent">potential hourly wage</strong> rises, <br/>
                   Then the <strong className="text-vintage-accent">opportunity cost of leisure</strong> increases.
                 </p>
               </div>
               <ArrowRight className="text-vintage-600 hidden md:block" />
               <div className="flex-1 text-sm text-vintage-400 italic bg-vintage-800/50 p-3 rounded">
                  "It is more expensive for a lawyer to take a day off than it is for a student, because the lawyer gives up more income."
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
                    <h4 className="text-vintage-100 font-display">The College Dropout</h4>
                    <span className="text-[10px] uppercase bg-vintage-700 px-2 py-1 rounded text-vintage-300">Famous</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    Why do star athletes or geniuses like Bill Gates drop out of college? The <strong>Explicit Cost</strong> (tuition) is low for them, but the <strong>Implicit Cost</strong> (foregone millions in NBA contracts or software sales) is astronomical.
                  </p>
               </div>
               
               {/* Counter-Intuitive Case */}
               <div className="group/card bg-vintage-900/40 hover:bg-vintage-900/60 transition-colors p-5 rounded border border-vintage-700">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-vintage-100 font-display">Room & Board</h4>
                    <span className="text-[10px] uppercase bg-vintage-accent/20 px-2 py-1 rounded text-vintage-accent border border-vintage-accent/30">Trap</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    Room and board are <em>not</em> usually opportunity costs of college, because you have to sleep and eat somewhere regardless. They are only costs to the extent that they are <em>more expensive</em> at college than elsewhere.
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
                   <span className="font-bold text-red-400 shrink-0">IGNORE THIS:</span>
                   <span>
                     <strong>Sunk Costs</strong>. Costs that have already been incurred and cannot be recovered (like a non-refundable ticket) should not influence future decisions. Opportunity cost looks <em>forward</em>.
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
         
         <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Controls */}
            <div className="flex-1 space-y-8 w-full">
               <div>
                  <h2 className="font-display text-4xl text-vintage-100 mb-2">The Real Cost of College</h2>
                  <p className="text-vintage-400 font-serif italic text-lg">
                     Visualizing Explicit vs. Implicit Costs
                  </p>
                  <div className="mt-4 p-4 bg-vintage-800/50 rounded-lg border-l-4 border-vintage-gold text-sm text-vintage-300 leading-relaxed">
                    <strong className="text-vintage-gold block mb-1">Interactive Explanation</strong>
                    Most people think the cost of college is just tuition. Economics tells us the <strong>Implicit Cost</strong> (the money you <em>didn't</em> earn because you were studying instead of working) is often the biggest expense. 
                    <br/><br/>
                    Adjust the sliders to see how a higher potential wage makes college "more expensive."
                  </div>
               </div>

               <div className="bg-vintage-800 p-6 rounded-lg border border-vintage-700 shadow-inner space-y-6">
                  
                  {/* Control 1: Tuition */}
                  <div>
                    <div className="flex justify-between text-xs font-display uppercase tracking-widest text-vintage-400 mb-2">
                       <span>Annual Tuition (Explicit)</span>
                       <span className="text-vintage-gold">${tuitionPerYear}/yr</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="20000" 
                      step="500"
                      value={tuitionPerYear} 
                      onChange={(e) => setTuitionPerYear(parseInt(e.target.value))}
                      className="w-full h-2 bg-vintage-900 rounded-full appearance-none cursor-pointer accent-vintage-gold hover:accent-vintage-accent"
                    />
                  </div>

                  {/* Control 2: Wage */}
                  <div>
                    <div className="flex justify-between text-xs font-display uppercase tracking-widest text-vintage-400 mb-2">
                       <span>Potential Hourly Wage (Implicit)</span>
                       <span className="text-vintage-gold">${hourlyWage}/hr</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="100" 
                      step="1"
                      value={hourlyWage} 
                      onChange={(e) => setHourlyWage(parseInt(e.target.value))}
                      className="w-full h-2 bg-vintage-900 rounded-full appearance-none cursor-pointer accent-vintage-gold hover:accent-vintage-accent"
                    />
                    <p className="text-xs text-vintage-500 mt-2 italic">
                      *Assumes 2,000 work hours per year (Full Time)
                    </p>
                  </div>

               </div>
            </div>

            {/* The Ledger Visualization */}
            <div className="relative w-full lg:w-96 bg-[#e6ded5] text-vintage-900 p-6 rounded shadow-xl font-serif border-4 border-vintage-800">
               {/* Paper Texture Overlay */}
               <div className="absolute inset-0 bg-paper-texture opacity-50 pointer-events-none mix-blend-multiply"></div>
               
               <div className="relative z-10 border-2 border-vintage-900 p-4 h-full flex flex-col">
                  <div className="text-center border-b-2 border-vintage-900 pb-4 mb-4">
                     <h3 className="font-display font-bold text-2xl uppercase tracking-widest">The Ledger</h3>
                     <span className="text-xs italic text-vintage-700">Economic Accounting Dept.</span>
                  </div>

                  <div className="space-y-4 flex-1">
                     {/* Explicit Row */}
                     <div className="flex justify-between items-center border-b border-vintage-400 pb-2 border-dashed">
                        <div className="flex items-center gap-2">
                           <GraduationCap size={16} />
                           <span>Tuition (4 yrs)</span>
                        </div>
                        <span className="font-bold text-vintage-800">${totalExplicitCost.toLocaleString()}</span>
                     </div>

                     {/* Implicit Row */}
                     <div className="flex justify-between items-center border-b border-vintage-400 pb-2 border-dashed">
                        <div className="flex items-center gap-2">
                           <Briefcase size={16} />
                           <span>Lost Wages (4 yrs)</span>
                        </div>
                        <span className="font-bold text-vintage-800">${totalImplicitCost.toLocaleString()}</span>
                     </div>
                  </div>

                  {/* Total */}
                  <div className="mt-8 pt-4 border-t-4 border-double border-vintage-900">
                     <div className="flex justify-between items-end">
                        <span className="font-display font-bold text-lg uppercase">Total Opp. Cost</span>
                        <span className="font-display font-bold text-3xl text-red-900">
                           ${totalOpportunityCost.toLocaleString()}
                        </span>
                     </div>
                  </div>

                  {/* Visual Bar Graph overlaid on paper */}
                  <div className="mt-6 flex h-4 rounded overflow-hidden border border-vintage-900/30">
                     <div 
                        className="bg-vintage-500 h-full transition-all duration-500" 
                        style={{ width: `${(totalExplicitCost / totalOpportunityCost) * 100}%` }} 
                        title="Explicit Cost"
                     />
                     <div 
                        className="bg-vintage-accent h-full transition-all duration-500" 
                        style={{ width: `${(totalImplicitCost / totalOpportunityCost) * 100}%` }} 
                        title="Implicit Cost"
                     />
                  </div>
                  <div className="flex justify-between text-[10px] uppercase mt-1 text-vintage-600">
                     <span>Explicit</span>
                     <span>Implicit</span>
                  </div>

               </div>
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
