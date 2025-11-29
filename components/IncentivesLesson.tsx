
import React, { useState } from 'react';
import { BookOpen, AlertTriangle, ArrowRight, Lightbulb, TrendingUp, Anchor, Heart, MessageCircle, Home, Hammer } from 'lucide-react';

export const IncentivesLesson: React.FC = () => {
  // State for Window Tax Simulation
  // Historic Context: England 1696. Tax based on number of windows.
  const [taxRate, setTaxRate] = useState(0); // 0 to 10 scale
  
  // Logic: As tax increases, windows are bricked up.
  // 0-2: All windows (6)
  // 3-5: 4 windows
  // 6-8: 2 windows
  // 9-10: 0 windows
  const getWindowCount = (tax: number) => {
    if (tax > 8) return 0;
    if (tax > 5) return 2;
    if (tax > 2) return 4;
    return 6;
  };
  
  const windowCount = getWindowCount(taxRate);

  // Social Feed Data
  const posts = [
    {
      id: 1,
      author: "Al Capone",
      role: "Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1596701140683-9118c7c9c07e?auto=format&fit=crop&q=80&w=200",
      content: "The government banned the drink. They thought people would stop drinking. 🥃 Instead, the price skyrocketed, and now I'm a millionaire. When you make a product illegal but demand remains, you don't end the market... you just give it to me.",
      imgUrl: "https://images.unsplash.com/photo-1518599806-653995eb049b?auto=format&fit=crop&q=80&w=600",
      time: "Friday, 11:30 PM",
      likes: "12,420",
      comments: [
        { user: "Elliot Ness", text: "Enjoy it while it lasts, Al." },
        { user: "Customer", text: "The price is high, but the gin is cold." }
      ],
      insight: "Perverse Incentives"
    },
    {
      id: 2,
      author: "Ralph Nader (1920s)",
      role: "Safety Advocate",
      avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=200",
      content: "We installed safer brakes on the automobiles. We expected fewer accidents. Instead, drivers are driving faster and tailgating closer! 🚗 When you make it safer to crash, people drive more dangerously. The human mind is a tricky engine.",
      imgUrl: "https://images.unsplash.com/photo-1495856458515-0637185db551?auto=format&fit=crop&q=80&w=600",
      time: "Wednesday, 2:15 PM",
      likes: "56",
      comments: [
        { user: "Sam Peltzman", text: "I shall call this the Peltzman Effect." }
      ],
      insight: "Unintended Consequences"
    },
    {
      id: 3,
      author: "Captain Smith",
      role: "Ship Captain",
      avatar: "https://images.unsplash.com/photo-1549488497-226601f74813?auto=format&fit=crop&q=80&w=200",
      content: "The company now pays us for every prisoner who arrives alive in Australia, rather than a flat fee for the voyage. ⚓️ Miraculously, survival rates have jumped from 40% to 98%. It seems benevolence is most effective when it is profitable.",
      imgUrl: "https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?auto=format&fit=crop&q=80&w=600",
      time: "Monday, 8:00 AM",
      likes: "3,100",
      comments: [
        { user: "Governor", text: "Finally, a policy that works." }
      ],
      insight: "Incentive Alignment"
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
           <span className="text-vintage-500 font-serif italic text-sm">Principle #04</span>
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
                   "People respond to incentives. The rest is commentary."
                 </p>
                 <p className="text-right text-vintage-400 mt-2 text-sm">— Steven Landsburg / Mankiw</p>
              </div>

              <div className="flex items-start gap-4 bg-vintage-100/5 p-5 rounded-lg border border-vintage-700">
                  <div className="bg-vintage-gold/20 p-2 rounded-full text-2xl">👵</div>
                  <div>
                    <span className="text-vintage-gold font-bold uppercase text-xs tracking-wider block mb-1">Grandma's Translation</span>
                    <p className="text-vintage-200 font-body">
                      "If you want the donkey to move, dangle a carrot (reward) or use a stick (punishment). People aren't that different from donkeys, dear."
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
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Mechanism
                 </h4>
                 <div className="p-4 bg-black/30 rounded border border-vintage-700 text-center">
                    <span className="font-serif text-lg text-vintage-gold tracking-wider">
                       Change in Benefit/Cost → Change in Behavior
                    </span>
                 </div>
              </div>
              <div>
                 <h4 className="text-vintage-100 font-bold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Types
                 </h4>
                 <ul className="text-vintage-400 text-sm space-y-2 list-disc pl-4">
                   <li><strong>Positive:</strong> Subsidies, Bonuses, Discounts.</li>
                   <li><strong>Negative:</strong> Taxes, Fines, Jail.</li>
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
                   If the <strong className="text-vintage-accent">Price of Apples</strong> rises, <br/>
                   People eat <span className="italic border-b border-vintage-500">fewer</span> apples and plant <span className="italic border-b border-vintage-500">more</span> trees.
                 </p>
               </div>
               <ArrowRight className="text-vintage-600 hidden md:block" />
               <div className="flex-1 text-sm text-vintage-400 italic bg-vintage-800/50 p-3 rounded">
                  "Higher prices incentive consumers to buy less and producers to produce more. This is how markets self-regulate."
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
                    <h4 className="text-vintage-100 font-display">Gasoline Tax</h4>
                    <span className="text-[10px] uppercase bg-vintage-700 px-2 py-1 rounded text-vintage-300">Policy</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    Europe has high gas taxes; the US has low ones. Result: Europeans drive small, efficient cars and use trains. Americans drive large SUVs. The incentive (price) dictates the lifestyle.
                  </p>
               </div>
               
               <div className="group/card bg-vintage-900/40 hover:bg-vintage-900/60 transition-colors p-5 rounded border border-vintage-700">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-vintage-100 font-display">The Cobra Effect</h4>
                    <span className="text-[10px] uppercase bg-vintage-accent/20 px-2 py-1 rounded text-vintage-accent border border-vintage-accent/30">Warning</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    The British government in India offered a bounty for dead cobras to reduce the population. Result? People started <em>breeding</em> cobras to kill them for the bounty. When the bounty ended, they released them, increasing the population.
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
                   <span className="font-bold text-red-400 shrink-0">FAIL:</span>
                   <span>
                     <strong>Ignoring Secondary Effects</strong>. Policymakers often look at the direct effect (Seatbelts save lives) but ignore the incentive effect (Drivers drive faster). Always ask: "How will people change their behavior to exploit this?"
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
                  <h2 className="font-display text-4xl text-vintage-100 mb-2">The Window Tax (1696)</h2>
                  <p className="text-vintage-400 font-serif italic text-lg">
                     Visualizing Unintended Consequences
                  </p>
                  <div className="mt-4 p-4 bg-vintage-800/50 rounded-lg border-l-4 border-vintage-gold text-sm text-vintage-300 leading-relaxed">
                    <strong className="text-vintage-gold block mb-1">Scenario</strong>
                    King William III needs money. He imposes a tax based on the number of windows in a house, assuming rich people have more windows (Progressive Tax).
                    <br/><br/>
                    As the tax assessor, increase the tax rate and observe how the homeowners respond to this negative incentive.
                  </div>
               </div>

               <div className="bg-vintage-800 p-6 rounded-lg border border-vintage-700 shadow-inner space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-display uppercase tracking-widest text-vintage-400 mb-2">
                       <span>Tax Severity</span>
                       <span className="text-vintage-gold">{taxRate}/10</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="10" 
                      step="1"
                      value={taxRate} 
                      onChange={(e) => setTaxRate(parseInt(e.target.value))}
                      className="w-full h-2 bg-vintage-900 rounded-full appearance-none cursor-pointer accent-vintage-gold hover:accent-vintage-accent"
                    />
                  </div>
                  
                  <div className="p-4 rounded border bg-black/30 border-vintage-700 text-vintage-300">
                     <p className="font-serif italic text-center">
                        "{taxRate < 3 ? "A reasonable levy. We shall pay." : 
                          taxRate < 6 ? "The tax is high! Brick up the spare room windows!" :
                          taxRate < 9 ? "Daylight is a luxury we cannot afford! Close them up!" :
                          "Complete darkness is better than bankruptcy!"}"
                     </p>
                  </div>

               </div>
            </div>

            {/* Visual Scene: The House */}
            <div className="relative w-full lg:w-96 aspect-[4/5] bg-[#2c1810] border-4 border-vintage-600 shadow-2xl overflow-hidden rounded-t-full flex items-end justify-center group/house p-8">
               {/* Background / Sky */}
               <div className="absolute inset-0 bg-[#1a237e] opacity-30"></div>
               
               {/* The House Facade */}
               <div className="w-full h-full bg-[#5d4037] relative flex flex-wrap content-start p-4 gap-4 justify-center border-t-8 border-vintage-800">
                  {/* Roof */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-vintage-900 -mt-4"></div>

                  {/* Windows Grid */}
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-20 h-24 bg-[#8d6e63] relative rounded border-4 border-[#3e2723] overflow-hidden shadow-inner">
                        {/* The Window Glass (Visible if index < windowCount) */}
                        <div className={`absolute inset-0 bg-[#81d4fa] transition-all duration-700 ${i < windowCount ? 'opacity-100' : 'opacity-0'}`}>
                           {/* Window Panes */}
                           <div className="absolute inset-0 border-r-2 border-[#3e2723] left-1/2"></div>
                           <div className="absolute inset-0 border-b-2 border-[#3e2723] top-1/2"></div>
                           {/* Light Reflection */}
                           <div className="absolute top-1 left-1 w-16 h-4 bg-white/30 skew-x-12"></div>
                        </div>

                        {/* The Brick Wall (Visible if index >= windowCount) */}
                        <div className={`absolute inset-0 bg-[#5d4037] transition-all duration-700 flex flex-wrap content-start ${i < windowCount ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'}`}>
                           {[...Array(12)].map((_, b) => (
                             <div key={b} className="w-1/2 h-1/4 border border-[#3e2723] bg-[#4e342e]"></div>
                           ))}
                        </div>
                    </div>
                  ))}

                  {/* Door */}
                  <div className="absolute bottom-0 w-24 h-32 bg-[#2c1810] rounded-t-lg border-4 border-[#1a120b] flex items-center justify-end pr-2">
                     <div className="w-2 h-2 rounded-full bg-vintage-gold"></div>
                  </div>
               </div>

               {/* Tax Collector Overlay */}
               <div className={`absolute bottom-0 left-0 m-4 transition-opacity duration-500 ${taxRate > 5 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="bg-vintage-100/90 text-vintage-900 text-[10px] p-2 rounded shadow-lg font-bold uppercase tracking-widest">
                     Daylight Robbery!
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
