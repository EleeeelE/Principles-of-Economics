
import React, { useState } from 'react';
import { BookOpen, Scale, Users, ThumbsUp, HelpCircle, Heart, Eye, Ticket } from 'lucide-react';

interface DisagreementProps {
  defaultSection: string;
}

export const DisagreementLesson: React.FC<DisagreementProps> = ({ defaultSection }) => {
  const [showExpertAnswer, setShowExpertAnswer] = useState(false);

  // --- Render Functions ---

  const renderJudgments = () => (
    <div className="space-y-8 animate-in fade-in duration-700">
       <div className="bg-vintage-800 p-8 rounded-sm border border-vintage-700 relative overflow-hidden shadow-xl">
           <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
             <Scale size={200} />
           </div>
           
           <div className="bg-vintage-900/50 p-6 -mx-8 -mt-8 mb-8 border-b border-vintage-700 flex items-center gap-3">
              <span className="text-vintage-gold font-display text-xl">2-3a</span>
              <h3 className="font-display text-3xl text-vintage-100">
                Differences in Scientific Judgments
              </h3>
           </div>

           <p className="text-vintage-200 text-lg leading-relaxed mb-8">
              Economists often disagree because they have different hunches about the <strong>validity of alternative theories</strong> or about the size of important parameters that measure how economic variables are related.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-vintage-900/50 p-6 rounded border border-vintage-600">
                 <h4 className="font-bold text-vintage-100 mb-2 border-b border-vintage-700 pb-2">The Debate</h4>
                 <p className="text-sm text-vintage-300">
                    If the government taxes household income, will people save less?
                 </p>
              </div>
              
              <div className="space-y-4">
                 <div className="bg-blue-900/20 p-4 rounded border-l-4 border-blue-500">
                    <span className="text-xs uppercase font-bold text-blue-400">Economist A</span>
                    <p className="text-sm text-vintage-300 italic">
                       "Yes. Taxing income reduces the return on saving. People will spend more now. We should switch to a consumption tax."
                    </p>
                 </div>
                 <div className="bg-red-900/20 p-4 rounded border-l-4 border-red-500">
                    <span className="text-xs uppercase font-bold text-red-400">Economist B</span>
                    <p className="text-sm text-vintage-300 italic">
                       "No. People save for fixed goals (retirement). If you tax them, they might save *more* to hit their target. The current tax system is fine."
                    </p>
                 </div>
              </div>
           </div>
       </div>
    </div>
  );

  const renderValues = () => (
    <div className="space-y-8 animate-in fade-in duration-700">
       <div className="bg-vintage-800 p-8 rounded-sm border border-vintage-700 relative overflow-hidden shadow-xl">
           <div className="absolute top-0 right-0 p-8 opacity-5 text-vintage-gold pointer-events-none">
             <Heart size={200} />
           </div>
           
           <div className="bg-vintage-900/50 p-6 -mx-8 -mt-8 mb-8 border-b border-vintage-700 flex items-center gap-3">
              <span className="text-vintage-gold font-display text-xl">2-3b</span>
              <h3 className="font-display text-3xl text-vintage-100">
                Differences in Values
              </h3>
           </div>

           <p className="text-vintage-200 text-lg leading-relaxed mb-8">
              Economists give different advice because they have different <strong>normative views</strong> (values) about what policy should try to accomplish. Science cannot determine whether Peter <em>should</em> be taxed to pay Paul.
           </p>

           <div className="bg-[#e6ded5] text-vintage-900 p-8 rounded shadow-inner max-w-3xl mx-auto border-4 border-double border-vintage-800">
              <h4 className="font-display font-bold text-2xl mb-4 text-center">The Water Cooler Problem</h4>
              
              <div className="flex flex-col gap-4">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-vintage-800 text-vintage-100 flex items-center justify-center font-bold shrink-0">P</div>
                    <div>
                       <strong className="block text-vintage-800">Peter (High Income)</strong>
                       <p className="text-sm text-vintage-700">"I pay $10,000 in taxes. That pays for the well."</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-vintage-400 text-vintage-900 flex items-center justify-center font-bold shrink-0">P</div>
                    <div>
                       <strong className="block text-vintage-800">Paul (Low Income)</strong>
                       <p className="text-sm text-vintage-700">"I pay $0 due to my low income. I need water too."</p>
                    </div>
                 </div>
                 
                 <div className="mt-4 pt-4 border-t border-vintage-400">
                    <p className="italic font-serif text-center">
                       Is this fair? <br/>
                       <strong>Economist A:</strong> "Yes, based on ability to pay."<br/>
                       <strong>Economist B:</strong> "No, based on benefit received."
                    </p>
                 </div>
              </div>
           </div>
       </div>
    </div>
  );

  const renderPerception = () => (
    <div className="space-y-8 animate-in fade-in duration-700">
       <div className="bg-vintage-900 border border-vintage-600 rounded-sm p-8 shadow-2xl relative">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vintage-700 via-vintage-gold to-vintage-700"></div>
         
         <div className="flex items-center justify-center gap-3 mb-8">
            <Eye className="text-vintage-gold" size={32} />
            <h2 className="font-display text-3xl text-vintage-100">Perception vs. Reality</h2>
         </div>

         <p className="text-center text-vintage-400 mb-12 max-w-2xl mx-auto text-lg">
            "If all the economists were laid end to end, they would not reach a conclusion." <br/>
            <span className="text-sm not-italic">— George Bernard Shaw</span>
            <br/><br/>
            <span className="text-vintage-200">Actually, Shaw was wrong. Economists agree on much more than the public realizes.</span>
         </p>
         
         <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
            {[
               { topic: "Rent Control", consensus: "93%", view: "A ceiling on rents reduces the quantity and quality of housing available." },
               { topic: "Tariffs & Quotas", consensus: "93%", view: "Tariffs and import quotas usually reduce general economic welfare." },
               { topic: "Floating Rates", consensus: "90%", view: "Floating exchange rates are effective for the international monetary system." },
               { topic: "Fiscal Stimulus", consensus: "90%", view: "Fiscal policy (e.g., tax cuts/spending) has a significant stimulative impact on a less than fully employed economy." }
            ].map((item, idx) => (
               <div key={idx} className="flex flex-col sm:flex-row items-center justify-between bg-vintage-800 p-6 rounded border-l-4 border-vintage-gold hover:bg-vintage-700 transition-colors group">
                  <div className="mb-4 sm:mb-0">
                     <span className="font-display font-bold text-xl text-vintage-100 block mb-1">{item.topic}</span>
                     <span className="text-sm text-vintage-400 font-serif leading-relaxed">{item.view}</span>
                  </div>
                  <div className="text-center sm:text-right sm:pl-8 sm:border-l border-vintage-600 shrink-0">
                     <span className="block text-4xl font-display font-bold text-vintage-gold group-hover:scale-110 transition-transform">{item.consensus}</span>
                     <span className="text-[10px] uppercase tracking-widest text-vintage-500">Consensus</span>
                  </div>
               </div>
            ))}
         </div>
       </div>
    </div>
  );

  const renderTicketResale = () => (
    <div className="space-y-8 animate-in fade-in duration-700">
       <div className="bg-[#e6ded5] text-vintage-900 border-4 border-vintage-900 rounded-sm p-8 shadow-2xl relative max-w-3xl mx-auto">
         <div className="absolute inset-0 bg-paper-texture opacity-50 pointer-events-none"></div>
         <div className="absolute top-4 right-4 opacity-10">
            <Ticket size={120} />
         </div>
         
         <div className="relative z-10 text-center">
            <div className="inline-block border-2 border-vintage-900 px-4 py-1 font-bold uppercase tracking-widest text-xs mb-6 bg-vintage-100">
               Ask The Experts
            </div>
            
            <h2 className="font-display text-4xl mb-6">Ticket Resale Laws</h2>
            
            <div className="bg-white/60 p-6 rounded border border-vintage-300 mb-8 font-serif italic text-lg text-vintage-800">
               "Should the government ban the resale of tickets for sporting events at prices above the original price?"
            </div>

            <div className="flex flex-col items-center gap-6">
               {!showExpertAnswer ? (
                  <button 
                     onClick={() => setShowExpertAnswer(true)}
                     className="bg-vintage-900 text-vintage-100 px-10 py-4 rounded font-display uppercase tracking-widest transition-all hover:scale-105 shadow-xl flex items-center gap-3"
                  >
                     <Users size={20} /> Reveal Consensus
                  </button>
               ) : (
                  <div className="animate-in slide-in-from-bottom duration-500 w-full">
                     <div className="bg-vintage-900 text-vintage-100 p-8 rounded shadow-2xl mb-6">
                        <div className="flex items-center justify-center gap-3 text-red-400 font-bold text-4xl mb-2 font-display">
                           <ThumbsUp className="rotate-180" size={40} /> 
                           <span>DISAGREE</span>
                        </div>
                        <div className="text-sm font-mono uppercase tracking-widest text-vintage-500 mb-4">Consensus Level: High</div>
                        <p className="text-lg text-vintage-200 leading-relaxed font-serif">
                           Most economists believe "scalping" laws are inefficient.
                        </p>
                     </div>
                     
                     <div className="text-left bg-white/80 p-6 rounded border-l-4 border-vintage-900 text-vintage-900">
                        <p className="text-sm leading-relaxed mb-2">
                           <strong>Why?</strong> Resale markets move tickets from those who value them less to those who value them more.
                        </p>
                        <p className="text-sm leading-relaxed">
                           "If I buy a ticket for $50 but decide I'd rather have $200 (which you are willing to pay), preventing the trade hurts both of us."
                        </p>
                        <div className="mt-4 pt-4 border-t border-vintage-300 text-xs text-vintage-600 font-bold uppercase tracking-widest">
                           — Darrell Duffie, Stanford University
                        </div>
                     </div>
                     
                     <button 
                        onClick={() => setShowExpertAnswer(false)}
                        className="mt-8 text-vintage-600 hover:text-vintage-900 text-sm underline underline-offset-4"
                     >
                        Reset Poll
                     </button>
                  </div>
               )}
            </div>
         </div>
       </div>
    </div>
  );

  // --- Main Switch ---

  switch (defaultSection) {
    case 'diff_judgments': return renderJudgments();
    case 'diff_values': return renderValues();
    case 'perception_reality': return renderPerception();
    case 'ticket_resale': return renderTicketResale();
    default: return renderJudgments();
  }
};
