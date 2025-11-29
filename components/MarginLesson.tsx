
import React, { useState } from 'react';
import { BookOpen, AlertTriangle, ArrowRight, Lightbulb, TrendingUp, Anchor, Heart, MessageCircle, Plane, Coins, User } from 'lucide-react';

export const MarginLesson: React.FC = () => {
  // State for Airline Simulation
  // Scenario: Plane has 5 empty seats. Cost to fly plane $100,000. Seats 200. Avg Cost $500.
  // Marginal Cost of one passenger (peanuts + soda) = $10.
  // Standby passenger offers $300.
  const [ticketOffer, setTicketOffer] = useState(300);
  const marginalCost = 10;
  const averageCost = 500;
  
  const isRational = ticketOffer > marginalCost;
  const profitChange = ticketOffer - marginalCost;

  // Social Feed Data
  const posts = [
    {
      id: 1,
      author: "F. Scott Fitzgerald",
      role: "Novelist",
      avatar: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?auto=format&fit=crop&q=80&w=200",
      content: "The manuscript is due. I have written 2,000 words today. My hand cramps, the gin bottle is empty. 🍸 The benefit of one more paragraph? A finished chapter. The cost? My sanity. I shall write one more sentence, and then... perhaps just one more.",
      imgUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600",
      time: "Thursday, 3:15 AM",
      likes: "892",
      comments: [
        { user: "Zelda", text: "Come to bed, Scott. The marginal wit is fading." },
        { user: "Editor", text: "Keep going! The deadline is absolute." }
      ],
      insight: "Marginal Benefit vs. Marginal Cost"
    },
    {
      id: 2,
      author: "Diamond Jim",
      role: "Railroad Tycoon",
      avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80&w=200",
      content: "Why is water so cheap when I need it to live, yet this diamond on my pinky cost a fortune? 💎 Simply because I have plenty of water, but diamonds are rare. It is the LAST unit that sets the value, not the first.",
      imgUrl: "https://images.unsplash.com/photo-1615655406736-b37c4d898e69?auto=format&fit=crop&q=80&w=600",
      time: "Monday, 12:00 PM",
      likes: "4,051",
      comments: [
        { user: "Economist", text: "The paradox of value! It's all about the margin, Jim." }
      ],
      insight: "The Water-Diamond Paradox"
    },
    {
      id: 3,
      author: "Chef Pierre",
      role: "Restaurateur",
      avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=200",
      content: "The restaurant is closing in 10 minutes. A customer walks in. 🥘 The staff is paid regardless. The ovens are still hot. The cost to serve him is just the ingredients ($5). He pays $20. Even though average overhead is high, the marginal profit says: Feed him!",
      imgUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
      time: "Saturday, 10:55 PM",
      likes: "125",
      comments: [
        { user: "Waiter", text: "But Pierre, I want to go home!" },
        { user: "Pierre", text: "Hush, extra tips for you." }
      ],
      insight: "Sunk Costs are Irrelevant"
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      
      {/* PART 1: Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden group">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           <TrendingUp size={200} />
        </div>
        <div className="absolute inset-0 bg-paper-texture opacity-10 pointer-events-none"></div>

        {/* Card Header */}
        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">📝</span> 
             Deep Analysis Card
           </h2>
           <span className="text-vintage-500 font-serif italic text-sm">Principle #03</span>
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
                   "Rational people think at the margin. They make decisions by comparing marginal benefits and marginal costs."
                 </p>
                 <p className="text-right text-vintage-400 mt-2 text-sm">— N. Gregory Mankiw</p>
              </div>

              <div className="flex items-start gap-4 bg-vintage-100/5 p-5 rounded-lg border border-vintage-700">
                  <div className="bg-vintage-gold/20 p-2 rounded-full text-2xl">👵</div>
                  <div>
                    <span className="text-vintage-gold font-bold uppercase text-xs tracking-wider block mb-1">Grandma's Translation</span>
                    <p className="text-vintage-200 font-body">
                      "Life isn't about 'All or Nothing'. It's about 'A little bit more' or 'A little bit less'. You don't decide to 'eat food' for the rest of your life; you decide whether to eat <em>one more spoonful</em> right now."
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
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> The Logic
                 </h4>
                 <div className="p-4 bg-black/30 rounded border border-vintage-700 text-center">
                    <span className="font-serif text-lg text-vintage-gold tracking-wider">
                       Action if: MB {'>'} MC
                    </span>
                 </div>
                 <p className="text-vintage-400 text-xs mt-2 text-center">MB = Marginal Benefit, MC = Marginal Cost</p>
              </div>
              <div>
                 <h4 className="text-vintage-100 font-bold mb-2 flex items-center gap-2">
                   <span className="w-2 h-2 bg-vintage-accent rounded-full"></span> Key Assumption
                 </h4>
                 <ul className="text-vintage-400 text-sm space-y-2 list-disc pl-4">
                   <li><strong>Rationality:</strong> People systematically and purposefully do the best they can to achieve their objectives.</li>
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
                   As you consume <strong className="text-vintage-accent">more</strong> of something, <br/>
                   The <strong className="text-vintage-accent">Marginal Benefit</strong> typically <span className="italic border-b border-vintage-500">decreases</span>.
                 </p>
               </div>
               <ArrowRight className="text-vintage-600 hidden md:block" />
               <div className="flex-1 text-sm text-vintage-400 italic bg-vintage-800/50 p-3 rounded">
                  "The first glass of water saves your life. The second is refreshing. The tenth makes you sick." (Diminishing Marginal Utility)
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
                    <h4 className="text-vintage-100 font-display">The Diamond-Water Paradox</h4>
                    <span className="text-[10px] uppercase bg-vintage-700 px-2 py-1 rounded text-vintage-300">Classic</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    Why are diamonds expensive and water cheap? Because water is plentiful, the marginal benefit of <em>one more cup</em> is tiny. Diamonds are rare, so the marginal benefit of finding <em>one more</em> is huge.
                  </p>
               </div>
               
               {/* Counter-Intuitive Case */}
               <div className="group/card bg-vintage-900/40 hover:bg-vintage-900/60 transition-colors p-5 rounded border border-vintage-700">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-vintage-100 font-display">Airline Pricing</h4>
                    <span className="text-[10px] uppercase bg-vintage-accent/20 px-2 py-1 rounded text-vintage-accent border border-vintage-accent/30">Business</span>
                  </div>
                  <p className="text-sm text-vintage-300 leading-relaxed">
                    A plane flying with empty seats should sell a ticket for $200 even if the "Average Cost" per seat is $500. Why? Because the <em>Marginal Cost</em> of that passenger is just a bag of peanuts. Anything above $0 is profit.
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
                   <span className="font-bold text-red-400 shrink-0">TRAP:</span>
                   <span>
                     <strong>Average vs. Marginal</strong>. Never use the <em>Average</em> cost to make a decision about the <em>Next</em> unit. If you've already paid for the movie ticket (Sunk/Average), and the movie sucks, the marginal cost of staying is your time. Leave!
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
                  <h2 className="font-display text-4xl text-vintage-100 mb-2">The Last-Minute Ticket</h2>
                  <p className="text-vintage-400 font-serif italic text-lg">
                     A dilemma for the Pan-Atlantic Airship Co.
                  </p>
                  <div className="mt-4 p-4 bg-vintage-800/50 rounded-lg border-l-4 border-vintage-gold text-sm text-vintage-300 leading-relaxed">
                    <strong className="text-vintage-gold block mb-1">Scenario</strong>
                    Your airship is about to depart New York for London. It has 1 empty seat.
                    <br/>
                    • Average Cost to fly (Fuel/Crew ÷ Seats): <strong>${averageCost}</strong>
                    <br/>
                    • Marginal Cost for 1 more person (Food/Weight): <strong>${marginalCost}</strong>
                    <br/>
                    • A passenger runs up and offers you <strong>${ticketOffer}</strong>.
                    <br/><br/>
                    Do you take the money?
                  </div>
               </div>

               <div className="bg-vintage-800 p-6 rounded-lg border border-vintage-700 shadow-inner space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-display uppercase tracking-widest text-vintage-400 mb-2">
                       <span>Passenger Offer</span>
                       <span className="text-vintage-gold">${ticketOffer}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="600" 
                      step="10"
                      value={ticketOffer} 
                      onChange={(e) => setTicketOffer(parseInt(e.target.value))}
                      className="w-full h-2 bg-vintage-900 rounded-full appearance-none cursor-pointer accent-vintage-gold hover:accent-vintage-accent"
                    />
                  </div>
                  
                  <div className={`p-4 rounded border ${isRational ? 'bg-green-900/20 border-green-800 text-green-200' : 'bg-red-900/20 border-red-800 text-red-200'} transition-colors duration-500`}>
                     <div className="flex items-center gap-3 mb-2">
                        {isRational ? <Coins size={20}/> : <AlertTriangle size={20}/>}
                        <h4 className="font-bold uppercase tracking-wider">{isRational ? 'Rational Decision: SELL' : 'Rational Decision: REJECT'}</h4>
                     </div>
                     <p className="text-sm opacity-80">
                        {isRational 
                          ? `Even though $${ticketOffer} is less than the average cost ($${averageCost}), it covers the marginal cost ($${marginalCost}). You make $${profitChange} profit on this seat.`
                          : `The offer ($${ticketOffer}) doesn't even cover the peanuts ($${marginalCost}). You would lose money.`
                        }
                     </p>
                  </div>

               </div>
            </div>

            {/* Visual Scene */}
            <div className="relative w-full lg:w-96 aspect-square bg-vintage-800 border-4 border-vintage-900 shadow-2xl overflow-hidden rounded-full flex items-center justify-center group/scene">
               {/* Sky Background */}
               <div className="absolute inset-0 bg-[#2c3e50] group-hover/scene:bg-[#34495e] transition-colors duration-1000"></div>
               <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-vintage-100/20 blur-xl"></div>
               
               {/* Clouds */}
               <div className="absolute top-20 left-[-50px] animate-[slide_10s_linear_infinite] opacity-50">
                  <div className="w-20 h-8 bg-white/10 rounded-full blur-md"></div>
               </div>

               {/* Airship */}
               <div className="relative z-10 flex flex-col items-center animate-[float_4s_ease-in-out_infinite]">
                  <Plane size={120} className="text-vintage-200 drop-shadow-2xl rotate-[-5deg]" strokeWidth={1} />
                  <div className="mt-2 bg-vintage-900/80 text-vintage-gold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-vintage-600">
                     Pan-Atlantic
                  </div>
               </div>

               {/* Passenger on the ground (Conditional) */}
               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-500 transform translate-y-0">
                  <User size={40} className={`text-vintage-300 ${isRational ? 'animate-bounce text-green-400' : 'text-red-400 opacity-50'}`} />
                  <div className={`mt-1 text-[10px] bg-black/50 px-2 rounded text-white whitespace-nowrap ${isRational ? 'block' : 'hidden'}`}>
                     "Thanks for the seat!"
                  </div>
                   <div className={`mt-1 text-[10px] bg-black/50 px-2 rounded text-white whitespace-nowrap ${!isRational ? 'block' : 'hidden'}`}>
                     "Too cheap..."
                  </div>
               </div>

            </div>
         </div>
      </div>

      {/* PART 3: Social Feed */}
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
