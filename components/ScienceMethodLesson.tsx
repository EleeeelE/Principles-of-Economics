
import React, { useState } from 'react';
import { BookOpen, Search, Lightbulb, Microscope, ScrollText, Heart, MessageCircle } from 'lucide-react';

export const ScienceMethodLesson: React.FC = () => {
  // State for interactive "Hypothesis Testing"
  const [observationCount, setObservationCount] = useState(0);
  const [theoryFormed, setTheoryFormed] = useState(false);
  
  // Historical context data
  const dataPoints = [
    { year: 1600, price: "Low", gold: "Low" },
    { year: 1620, price: "Medium", gold: "Medium" },
    { year: 1640, price: "High", gold: "High (Discovery of Americas)" }
  ];

  const handleObserve = () => {
    if (observationCount < 3) {
      setObservationCount(prev => prev + 1);
    } else {
      setTheoryFormed(true);
    }
  };

  const socialPosts = [
    {
      id: 1,
      author: "Isaac Newton",
      role: "Physicist & Master of Mint",
      avatar: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200",
      content: "I can calculate the motion of heavenly bodies, but not the madness of people. 🍎 Yet, if we observe prices long enough, do they not follow laws like gravity? Economics needs its own Principia.",
      imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
      time: "London, 1720",
      likes: "1,687",
      comments: [
        { user: "Voltaire", text: "Reason applies to markets as well as planets, Sir Isaac." }
      ],
      insight: "Observation"
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 w-full">
      {/* Deep Analysis Card */}
      <div className="bg-vintage-800 rounded-sm border border-vintage-700 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
           <Microscope size={200} />
        </div>
        <div className="bg-vintage-900/80 border-b border-vintage-700 p-6 flex items-center justify-between backdrop-blur-sm">
           <h2 className="font-display text-2xl text-vintage-100 flex items-center gap-3">
             <span className="text-vintage-gold">2-1a</span> 
             The Scientific Method
           </h2>
        </div>
        <div className="p-8 space-y-10 relative z-10">
          <section>
            <div className="flex items-center gap-3 mb-4 text-vintage-gold border-b border-vintage-700/50 pb-2">
              <BookOpen size={20} />
              <h3 className="font-display text-lg tracking-widest uppercase">Observation, Theory, Observation</h3>
            </div>
            <div className="bg-vintage-900/40 p-6 border-l-2 border-vintage-500">
               <p className="font-serif text-xl text-vintage-200 leading-relaxed italic">
                 "Economists try to address their subject with a scientist's objectivity... The interplay between theory and observation also occurs in the field of economics."
               </p>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                  <h4 className="font-bold text-vintage-100 mb-2">The Challenge</h4>
                  <p className="text-sm text-vintage-300">
                    Unlike physicists, economists cannot usually conduct controlled experiments in labs. We cannot stop the US economy to test a tax theory.
                  </p>
               </div>
               <div>
                  <h4 className="font-bold text-vintage-100 mb-2">The Solution</h4>
                  <p className="text-sm text-vintage-300">
                    We use <strong>History</strong> as our laboratory. We pay close attention to "natural experiments" offered by history (e.g., wars, gold rushes, oil shocks).
                  </p>
               </div>
            </div>
          </section>
        </div>
      </div>

      {/* Interactive Activity */}
      <div className="bg-vintage-900 border border-vintage-600 rounded-sm p-8 shadow-2xl relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vintage-700 via-vintage-gold to-vintage-700"></div>
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl text-vintage-100 mb-6">Historical Lab: Inflation (17th Century)</h2>
            <p className="text-vintage-400 font-serif italic mb-8">
              Observe the data points to form a theory.
            </p>
            
            <div className="bg-vintage-800 p-8 rounded border border-vintage-700 mb-8 min-h-[200px] flex items-center justify-center">
               {theoryFormed ? (
                 <div className="animate-in zoom-in duration-500">
                    <Lightbulb size={48} className="text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-vintage-100">Theory Formed!</h3>
                    <p className="text-vintage-300 mt-2">
                      "When the quantity of money (gold) increases, price levels rise."
                    </p>
                    <div className="text-xs uppercase tracking-widest text-vintage-500 mt-4">The Quantity Theory of Money</div>
                 </div>
               ) : (
                 <div className="space-y-4 w-full">
                    {dataPoints.slice(0, observationCount).map((d, i) => (
                      <div key={i} className="flex justify-between items-center bg-black/20 p-3 rounded animate-in slide-in-from-bottom">
                         <span className="font-mono text-vintage-400">{d.year}</span>
                         <span className="text-vintage-200">Gold Supply: {d.gold}</span>
                         <span className="text-vintage-gold font-bold">Prices: {d.price}</span>
                      </div>
                    ))}
                    {observationCount === 0 && <div className="text-vintage-500 italic">No data observed yet...</div>}
                 </div>
               )}
            </div>

            <button 
              onClick={handleObserve}
              disabled={theoryFormed}
              className={`px-8 py-3 rounded font-display uppercase tracking-widest text-sm transition-all ${theoryFormed ? 'bg-vintage-700 text-vintage-500 cursor-not-allowed' : 'bg-vintage-gold text-vintage-900 hover:scale-105'}`}
            >
               {theoryFormed ? "Experiment Complete" : "Observe Next Data Point"}
            </button>
        </div>
      </div>

      {/* Social Feed */}
      <div className="bg-vintage-200 text-vintage-900 border-4 border-double border-vintage-900 shadow-2xl max-w-4xl mx-auto overflow-hidden relative">
        <div className="absolute inset-0 bg-paper-texture opacity-30 pointer-events-none"></div>
        <div className="p-8 space-y-8">
           {socialPosts.map(post => (
             <div key={post.id} className="flex gap-6 items-start">
                <img src={post.avatar} alt={post.author} className="w-16 h-16 rounded-full border-2 border-vintage-800 sepia grayscale" />
                <div>
                   <h4 className="font-bold font-display text-lg">{post.author}</h4>
                   <p className="font-serif italic text-vintage-700 mb-2">"{post.content}"</p>
                   <div className="flex gap-4 text-xs font-bold uppercase text-vintage-500">
                      <span>{post.likes} Likes</span>
                      <span>Theory: {post.insight}</span>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
