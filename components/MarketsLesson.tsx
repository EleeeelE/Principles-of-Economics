
import React, { useState } from 'react';
import { BookOpen, AlertTriangle, ArrowRight, Lightbulb, TrendingUp, Anchor, Heart, MessageCircle, ShoppingCart, Store, Gavel } from 'lucide-react';

export const MarketsLesson: React.FC = () => {
  // State for Market Equilibrium Simulation
  // Simple Price control
  const [price, setPrice] = useState(50); // 0 to 100
  
  // Demand Curve: P = 100 - Q -> Qd = 100 - P
  const quantityDemanded = Math.max(0, 100 - price);
  
  // Supply Curve: P = Q -> Qs = P
  const quantitySupplied = Math.max(0, price);
  
  const equilibriumPrice = 50;
  
  let marketStatus = "Equilibrium";
  let statusColor = "text-green-400";
  if (price < equilibriumPrice) {
    marketStatus = "Shortage (Excess Demand)";
    statusColor = "text-red-400";
  } else if (price > equilibriumPrice) {
    marketStatus = "Surplus (Excess Supply)";
    statusColor = "text-orange-400";
  }

  // Social Feed Data
  const posts = [
    {
      id: 1,
      author: "Adam Smith",
      role: "Philosopher",
      avatar: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&q=80&w=200",
      content: "It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest. 🥖 The Invisible Hand guides them to serve society, though they intend only their own gain.",
      imgUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
      time: "Thursday, 6:00 PM",
      likes: "17,760",
      comments: [
        { user: "Baker", text: "I just want to sell bread, Adam." },
        { user: "Adam", text: "Exactly!" }
      ],
      insight: "Self-Interest"
    },
    {
      id: 2,
      author: "Stock Broker",
      role: "Wall Street",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
      content: "Pandemonium on the floor! 📈 Everyone wants General Motors stock today. The price shot up $10 in an hour. No government committee set this price; the crowd shouted it into existence. The market knows what it's worth before the ink dries on the newspaper.",
      imgUrl: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=600",
      time: "Friday, 4:00 PM",
      likes: "892",
      comments: [
        { user: "Investor", text: "Buy! Buy! Buy!" }
      ],
      insight: "Prices as Signals"
    },
    {
      id: 3,
      author: "Soviet Planner",
      role: "Bureaucrat",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
      content: "I calculated we need 5 million left-footed boots. 👞 I forgot to order the right ones. Now the warehouses are full, but the people are barefoot. Perhaps... perhaps the price mechanism has merit?",
      imgUrl: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?auto=format&fit=crop&q=80&w=600",
      time: "Monday, 8:00 AM",
      likes: "12",
      comments: [
        { user: "Citizen", text: "We are cold, comrade." }
      ],
      insight: "Central Planning Failure"
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      
      {/* PART 1: Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           <Store size={200} />
        </div>
        <div className="absolute inset-0 bg-paper-texture opacity-10 pointer-events-none"></div>

        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">📝</span> 
             Deep Analysis Card
           </h2>
           <span className="text-vintage-500 font-serif italic text-sm">Principle #06</span>
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
                   "Markets are usually a good way to organize economic activity. Households and firms interacting in markets act as if they are guided by an 'invisible hand' that leads them to desirable market outcomes."
                 </p>
                 <p className="text-right text-vintage-400 mt-2 text-sm">— N. Gregory Mankiw / Adam Smith</p>
              </div>

              <div className="flex items-start gap-4 bg-vintage-100/5 p-5 rounded-lg border border-vintage-700">
                  <div className="bg-vintage-gold/20 p-2 rounded-full text-2xl">👵</div>
                  <div>
                    <span className="text-vintage-gold font-bold uppercase text-xs tracking-wider block mb-1">Grandma's Translation</span>
                    <p className="text-vintage-200 font-body">
                      "Nobody tells the grocer how many apples to buy. He buys them because he wants profit. You buy them because you're hungry. Somehow, there are exactly enough apples on the shelf."
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
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> The Signal
                 </h4>
                 <p className="text-vintage-400 text-sm leading-relaxed">
                   <strong>Price</strong> is information. High price = "Society wants this, make more!" Low price = "We have enough, stop making this."
                 </p>
              </div>
              <div>
                 <h4 className="text-vintage-100 font-bold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Decentralization
                 </h4>
                 <p className="text-vintage-400 text-sm leading-relaxed">
                   Instead of one planner making millions of decisions, millions of people make one decision each. This processes information far more efficiently.
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
                   If <strong className="text-vintage-accent">Demand</strong> exceeds Supply, <br/>
                   Prices <span className="italic border-b border-vintage-500">rise</span>.
                 </p>
               </div>
               <ArrowRight className="text-vintage-600 hidden md:block" />
               <div className="flex-1 text-sm text-vintage-400 italic bg-vintage-800/50 p-3 rounded">
                  "This higher price incentivizes producers to make more (solving the shortage) and consumers to buy less."
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
                    <h4 className="text-vintage-100 font-display">The Fall of Communism</h4>
                    <span className="text-[10px] uppercase bg-vintage-700 px-2 py-1 rounded text-vintage-300">History</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    Central planners tried to manage the economy like a single factory. They failed because they couldn't process the infinite information (tastes, costs, weather) that prices handle automatically.
                  </p>
               </div>
               
               <div className="group/card bg-vintage-900/40 hover:bg-vintage-900/60 transition-colors p-5 rounded border border-vintage-700">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-vintage-100 font-display">Uber Surge Pricing</h4>
                    <span className="text-[10px] uppercase bg-vintage-accent/20 px-2 py-1 rounded text-vintage-accent border border-vintage-accent/30">Modern</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    When it rains, Uber prices go up. This annoys riders, BUT it incentivizes more drivers to get on the road, increasing the supply of rides when they are needed most. The market self-corrects.
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
                  <h2 className="font-display text-4xl text-vintage-100 mb-2">The Invisible Hand</h2>
                  <p className="text-vintage-400 font-serif italic text-lg">
                    Finding Equilibrium in the Wheat Market
                  </p>
                  <div className="mt-4 p-4 bg-vintage-800/50 rounded-lg border-l-4 border-vintage-gold text-sm text-vintage-300 leading-relaxed">
                    <strong className="text-vintage-gold block mb-1">Scenario</strong>
                    You control the price of wheat. 
                    <br/>
                    • If the price is too low, everyone wants to buy (Shortage).
                    <br/>
                    • If the price is too high, farmers produce too much (Surplus).
                    <br/><br/>
                    Move the slider to find the "Equilibrium" where Supply equals Demand.
                  </div>
               </div>

               <div className="bg-vintage-800 p-6 rounded-lg border border-vintage-700 shadow-inner">
                  <div className="flex justify-between text-xs font-display uppercase tracking-widest text-vintage-400 mb-4">
                     <span>Price Low ($0)</span>
                     <span>Price High ($100)</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={price} 
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                    className="w-full h-2 bg-vintage-900 rounded-full appearance-none cursor-pointer accent-vintage-gold hover:accent-vintage-accent transition-all"
                  />
                  <div className="mt-6 text-center">
                     <span className={`text-xl font-bold font-display uppercase tracking-widest transition-colors duration-300 ${statusColor}`}>
                        {marketStatus}
                     </span>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-vintage-800/50 rounded border border-vintage-700">
                     <div className="text-3xl font-display font-bold text-vintage-100">{quantityDemanded}</div>
                     <div className="text-[10px] uppercase tracking-widest text-vintage-400 mt-1">Buyers Want</div>
                  </div>
                  <div className="text-center p-4 bg-vintage-800/50 rounded border border-vintage-700">
                     <div className="text-3xl font-display font-bold text-vintage-100">{quantitySupplied}</div>
                     <div className="text-[10px] uppercase tracking-widest text-vintage-400 mt-1">Sellers Offer</div>
                  </div>
               </div>
            </div>

            {/* The Graph */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-vintage-800 rounded-lg shadow-2xl border border-vintage-700 p-8 select-none flex-shrink-0">
               <div className="absolute inset-8 border-l border-b border-vintage-600 opacity-50 pointer-events-none"></div>
               
               <div className="absolute -left-8 top-1/2 -rotate-90 text-xs text-vintage-gold font-bold tracking-widest whitespace-nowrap">PRICE ($)</div>
               <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-xs text-vintage-gold font-bold tracking-widest whitespace-nowrap">QUANTITY</div>

               <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  {/* Supply Curve (Upward) */}
                  <line x1="0" y1="100" x2="100" y2="0" stroke="#cd7f32" strokeWidth="2" />
                  <text x="90" y="5" fontSize="5" fill="#cd7f32" fontWeight="bold">S</text>
                  
                  {/* Demand Curve (Downward) */}
                  <line x1="0" y1="0" x2="100" y2="100" stroke="#8d6e63" strokeWidth="2" />
                  <text x="90" y="95" fontSize="5" fill="#8d6e63" fontWeight="bold">D</text>

                  {/* Current Price Line */}
                  <line 
                    x1="0" y1={100 - price} 
                    x2="100" y2={100 - price} 
                    stroke="#d4af37" strokeWidth="1" strokeDasharray="2,2" 
                  />
                  
                  {/* Intersection Dots */}
                  <circle cx={quantitySupplied} cy={100 - price} r="2" fill="#cd7f32" />
                  <circle cx={quantityDemanded} cy={100 - price} r="2" fill="#8d6e63" />

                  {/* Equilibrium Point Marker */}
                  <circle cx="50" cy="50" r="1" fill="#fff" opacity="0.5" />

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
