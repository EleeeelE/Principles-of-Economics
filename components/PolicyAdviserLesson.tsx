
import React, { useState } from 'react';
import { BookOpen, CheckCircle, XCircle, Mic, Building2, Gavel, Newspaper, RefreshCcw, Landmark } from 'lucide-react';

interface PolicyAdviserProps {
  defaultSection: string;
}

export const PolicyAdviserLesson: React.FC<PolicyAdviserProps> = ({ defaultSection }) => {
  // State for Positive vs Normative Game
  const [currentStatementIdx, setCurrentStatementIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState<null | 'correct' | 'incorrect'>(null);

  const statements = [
    { text: "Minimum-wage laws cause unemployment.", type: "Positive", explanation: "This is a claim about how the world works. It can be tested with data." },
    { text: "The government should raise the minimum wage.", type: "Normative", explanation: "This is a value judgment about what ought to be. It cannot be tested." },
    { text: "Higher interest rates reduce inflation.", type: "Positive", explanation: "Describes a mechanical relationship in the economy." },
    { text: "The Fed should target 2% inflation.", type: "Normative", explanation: "Prescribes a policy goal based on values." }
  ];

  const handleGuess = (guess: "Positive" | "Normative") => {
    if (showResult) return;
    const isCorrect = guess === statements[currentStatementIdx].type;
    if (isCorrect) setScore(score + 1);
    setShowResult(isCorrect ? 'correct' : 'incorrect');
  };

  const nextStatement = () => {
    setShowResult(null);
    setCurrentStatementIdx((prev) => (prev + 1) % statements.length);
  };

  // --- Render Functions for Sub-Sections ---

  const renderTechEconomists = () => (
    <div className="space-y-8 animate-in fade-in duration-700">
        <div className="bg-vintage-800 rounded border border-vintage-700 p-8 shadow-xl">
           <div className="flex items-center gap-3 mb-6 text-vintage-gold border-b border-vintage-700 pb-2">
              <Newspaper size={24} />
              <h3 className="font-display text-2xl uppercase">In The News</h3>
           </div>
           
           <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                 <h4 className="font-bold text-vintage-100 text-3xl mb-4">Why Tech Companies Hire Economists</h4>
                 <p className="text-vintage-200 font-serif text-lg leading-relaxed mb-6">
                   Google, Amazon, Uber, and Airbnb employ vast teams of PhD economists. It's not just for finance—it's for product design.
                 </p>
                 <div className="space-y-4">
                    <div className="bg-vintage-900/50 p-4 rounded border-l-4 border-vintage-500">
                       <strong className="text-vintage-gold block mb-1 uppercase text-xs tracking-widest">Forecasting</strong>
                       <p className="text-sm text-vintage-300">Predicting demand for cloud servers (AWS) or ride volume (Uber) to manage supply.</p>
                    </div>
                    <div className="bg-vintage-900/50 p-4 rounded border-l-4 border-vintage-500">
                       <strong className="text-vintage-gold block mb-1 uppercase text-xs tracking-widest">Market Design</strong>
                       <p className="text-sm text-vintage-300">Designing auction algorithms for ads (Google) or surge pricing mechanisms (Uber).</p>
                    </div>
                    <div className="bg-vintage-900/50 p-4 rounded border-l-4 border-vintage-500">
                       <strong className="text-vintage-gold block mb-1 uppercase text-xs tracking-widest">Antitrust Policy</strong>
                       <p className="text-sm text-vintage-300">Helping companies argue that their dominance is efficient, not harmful.</p>
                    </div>
                 </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                 <div className="w-full aspect-[3/4] bg-vintage-900 rounded border border-vintage-600 relative overflow-hidden flex flex-col items-center justify-center text-center p-6">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10"></div>
                    <Building2 size={64} className="text-vintage-400 mb-4" />
                    <span className="font-display text-xl text-vintage-100">Silicon Valley</span>
                    <span className="font-serif italic text-vintage-500 text-sm mt-2">The New Wall Street</span>
                 </div>
              </div>
           </div>
        </div>
    </div>
  );

  const renderPositiveNormative = () => (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="bg-vintage-900 border border-vintage-600 rounded-sm p-8 shadow-2xl relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vintage-700 via-vintage-gold to-vintage-700"></div>
        
        <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl text-vintage-100 mb-2 text-center">Positive vs. Normative Analysis</h2>
            <p className="text-vintage-400 font-serif italic mb-10 text-center">
              The dual roles of the economist: Scientist vs. Policy Adviser.
            </p>

            {/* Comparison Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-12 border-4 border-vintage-800 rounded-lg overflow-hidden shadow-lg">
                {/* Positive Column */}
                <div className="bg-[#e6ded5] text-vintage-900 p-6 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-vintage-400">
                    <div className="bg-blue-900/10 p-3 rounded-full mb-3">
                        <BookOpen className="text-blue-800" size={24}/>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-blue-900 mb-1">Positive</h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-vintage-500 mb-6">Descriptive Analysis</span>
                    
                    <ul className="space-y-4 text-sm font-serif text-left w-full pl-2 sm:pl-8">
                        <li className="flex items-start gap-2">
                            <span className="font-bold text-blue-800 w-20 shrink-0 text-right pr-2 border-r border-blue-800/30">Focus</span>
                            <span>How the world <em>is</em>.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold text-blue-800 w-20 shrink-0 text-right pr-2 border-r border-blue-800/30">Testable</span>
                            <span>Yes. Can be proven with data.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold text-blue-800 w-20 shrink-0 text-right pr-2 border-r border-blue-800/30">Role</span>
                            <span>Scientist</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold text-blue-800 w-20 shrink-0 text-right pr-2 border-r border-blue-800/30">Keywords</span>
                            <span>"Is", "Will", "Causes"</span>
                        </li>
                    </ul>
                </div>

                {/* Normative Column */}
                <div className="bg-[#e6ded5] text-vintage-900 p-6 flex flex-col items-center text-center">
                    <div className="bg-red-900/10 p-3 rounded-full mb-3">
                        <Gavel className="text-red-800" size={24}/>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-red-900 mb-1">Normative</h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-vintage-500 mb-6">Prescriptive Analysis</span>
                    
                    <ul className="space-y-4 text-sm font-serif text-left w-full pl-2 sm:pl-8">
                        <li className="flex items-start gap-2">
                            <span className="font-bold text-red-800 w-20 shrink-0 text-right pr-2 border-r border-red-800/30">Focus</span>
                            <span>How the world <em>should be</em>.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold text-red-800 w-20 shrink-0 text-right pr-2 border-r border-red-800/30">Testable</span>
                            <span>No. Involves ethics/values.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold text-red-800 w-20 shrink-0 text-right pr-2 border-r border-red-800/30">Role</span>
                            <span>Policy Adviser</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold text-red-800 w-20 shrink-0 text-right pr-2 border-r border-red-800/30">Keywords</span>
                            <span>"Should", "Ought to"</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Game Divider */}
            <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-vintage-700 flex-1 opacity-50"></div>
                <div className="font-display text-vintage-gold text-lg uppercase tracking-widest px-4 py-1 border border-vintage-700 rounded bg-vintage-800">
                   Quick Check
                </div>
                <div className="h-px bg-vintage-700 flex-1 opacity-50"></div>
            </div>

            {/* Game Container */}
            <div className="bg-vintage-200 text-vintage-900 p-8 rounded shadow-inner border-4 border-double border-vintage-800 min-h-[300px] flex flex-col justify-center items-center relative">
               <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest text-vintage-500">
                  Score: {score}
               </div>

               <div className="mb-8">
                 <h3 className="font-serif text-2xl font-bold leading-relaxed max-w-xl text-center">
                   "{statements[currentStatementIdx].text}"
                 </h3>
               </div>

               {!showResult ? (
                 <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <button 
                      onClick={() => handleGuess('Positive')}
                      className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-3 rounded font-display uppercase tracking-widest shadow-lg transition-all border border-blue-900"
                    >
                      Positive
                    </button>
                    <button 
                      onClick={() => handleGuess('Normative')}
                      className="bg-red-800 hover:bg-red-700 text-white px-8 py-3 rounded font-display uppercase tracking-widest shadow-lg transition-all border border-red-900"
                    >
                      Normative
                    </button>
                 </div>
               ) : (
                 <div className="animate-in zoom-in duration-300 w-full text-center">
                    <div className={`flex items-center justify-center gap-2 font-bold text-xl mb-4 ${showResult === 'correct' ? 'text-green-700' : 'text-red-700'}`}>
                       {showResult === 'correct' ? <CheckCircle /> : <XCircle />}
                       {showResult === 'correct' ? "Correct!" : "Incorrect."}
                    </div>
                    <p className="text-vintage-800 italic max-w-md mx-auto mb-6 bg-white/50 p-4 rounded border border-vintage-300">
                       {statements[currentStatementIdx].explanation}
                    </p>
                    <button 
                       onClick={nextStatement}
                       className="bg-vintage-900 text-vintage-100 px-6 py-2 rounded flex items-center gap-2 mx-auto hover:bg-vintage-800 transition-colors"
                    >
                       Next Statement <RefreshCcw size={14} />
                    </button>
                 </div>
               )}
            </div>
        </div>
      </div>
    </div>
  );

  const renderWashington = () => (
    <div className="space-y-8 animate-in fade-in duration-700">
        <div className="bg-vintage-800 rounded border border-vintage-700 p-8 shadow-xl">
           <div className="flex items-center gap-3 mb-6 text-vintage-gold border-b border-vintage-700 pb-2">
              <Landmark size={24} />
              <h3 className="font-display text-2xl uppercase">Economists in Washington</h3>
           </div>
           
           <p className="text-vintage-200 text-lg leading-relaxed mb-8">
             The President of the United States receives guidance from the <strong>Council of Economic Advisers (CEA)</strong>, a three-member group created in 1946 to advise on economic growth, stability, and employment.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-vintage-900/50 p-6 rounded border border-vintage-600">
                 <h4 className="font-bold text-vintage-100 mb-2">Executive Branch</h4>
                 <ul className="text-sm text-vintage-300 space-y-2 list-disc pl-4">
                    <li><strong>OMB:</strong> Office of Management and Budget (Federal Budget).</li>
                    <li><strong>Treasury:</strong> Tax policy and debt management.</li>
                    <li><strong>Department of Labor:</strong> Employment stats and regulations.</li>
                 </ul>
              </div>
              <div className="bg-vintage-900/50 p-6 rounded border border-vintage-600">
                 <h4 className="font-bold text-vintage-100 mb-2">Legislative Branch</h4>
                 <ul className="text-sm text-vintage-300 space-y-2 list-disc pl-4">
                    <li><strong>CBO:</strong> Congressional Budget Office (Non-partisan analysis).</li>
                    <li><strong>Federal Reserve:</strong> Monetary policy (Independent).</li>
                 </ul>
              </div>
           </div>

           <div className="bg-black/20 p-4 rounded italic text-vintage-400 text-center border-t border-vintage-700">
             "Economists are the plumbers of the policy world. We don't decide where the water goes, but we try to make sure the pipes don't leak."
           </div>
        </div>
    </div>
  );

  const renderAdviceIgnored = () => (
    <div className="space-y-8 animate-in fade-in duration-700">
        <div className="bg-vintage-800 rounded-sm border border-vintage-700 p-8 shadow-xl flex flex-col md:flex-row items-start gap-8">
           <div className="bg-vintage-900 p-6 rounded-full border border-vintage-600 hidden md:flex items-center justify-center shrink-0">
              <Mic size={48} className="text-vintage-gold" />
           </div>
           <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 text-vintage-gold border-b border-vintage-700 pb-2">
                 <Gavel size={24} />
                 <h3 className="font-display text-2xl uppercase">Why Advice is Often Ignored</h3>
              </div>
              
              <p className="text-vintage-200 text-lg leading-relaxed mb-6">
                 Economists often offer advice that seems obvious to them (e.g., "Remove all tariffs to maximize efficiency"), yet Presidents consistently ignore it. Why?
              </p>
              
              <div className="space-y-4">
                 <div className="bg-vintage-900/30 p-4 rounded border-l-4 border-red-800">
                    <h4 className="font-bold text-vintage-100">Politics</h4>
                    <p className="text-sm text-vintage-400">
                       Removing tariffs might be efficient for the country, but it hurts steel workers. Steel workers vote. Consumers (who benefit slightly) might not care enough to vote on it.
                    </p>
                 </div>
                 <div className="bg-vintage-900/30 p-4 rounded border-l-4 border-blue-800">
                    <h4 className="font-bold text-vintage-100">Equity</h4>
                    <p className="text-sm text-vintage-400">
                       Efficiency isn't the only goal. A policy might be efficient but unfair. Economists focus on the size of the pie; politicians focus on how it's cut.
                    </p>
                 </div>
                 <div className="bg-vintage-900/30 p-4 rounded border-l-4 border-green-800">
                    <h4 className="font-bold text-vintage-100">Public Relations</h4>
                    <p className="text-sm text-vintage-400">
                       "Free Trade" is a hard sell intellectually. "Protecting American Jobs" is an easy sell emotionally.
                    </p>
                 </div>
              </div>

              <p className="mt-8 text-sm italic text-vintage-500 text-center border-t border-vintage-700 pt-4">
                 "Economic advice is just one factor in a complex political calculation."
              </p>
           </div>
        </div>
    </div>
  );

  // --- Main Render Switch ---

  switch (defaultSection) {
    case 'tech_economists': return renderTechEconomists();
    case 'positive_normative': return renderPositiveNormative();
    case 'washington': return renderWashington();
    case 'advice_ignored': return renderAdviceIgnored();
    default: return renderPositiveNormative();
  }
};
