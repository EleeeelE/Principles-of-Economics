
import React, { useState } from 'react';
import { BookOpen, HelpCircle, PenTool, CheckCircle, ChevronDown, ChevronUp, Calculator, DollarSign, AlertTriangle, RefreshCcw, Activity, Globe, User, Gavel, MousePointer2 } from 'lucide-react';

export const LetsGoLesson: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  
  // State for Problem 1 (Circular Flow)
  const [p1Answers, setP1Answers] = useState<Record<string, string | null>>({});
  
  // State for Problem 2 (PPF)
  const [hawkDovePosition, setHawkDovePosition] = useState(50); // 0 = Hawk, 100 = Dove

  // State for Problem 5 (Micro/Macro)
  const [microMacroScore, setMicroMacroScore] = useState(0);
  const [mmAnswers, setMmAnswers] = useState<Record<string, boolean>>({});

  // State for Problem 6 (Pos/Norm)
  const [posNormAnswers, setPosNormAnswers] = useState<Record<string, string | null>>({});

  const KEY_CONCEPTS = [
    { id: 'circular', term: 'Circular-Flow Diagram', def: 'A visual model of the economy that shows how dollars flow through markets among households and firms.' },
    { id: 'ppf', term: 'Production Possibilities Frontier', def: 'A graph that shows the combinations of output that the economy can possibly produce given the available factors of production and the available production technology.' },
    { id: 'micro', term: 'Microeconomics', def: 'The study of how households and firms make decisions and how they interact in markets.' },
    { id: 'macro', term: 'Macroeconomics', def: 'The study of economy-wide phenomena, including inflation, unemployment, and economic growth.' },
    { id: 'positive', term: 'Positive Statements', def: 'Claims that attempt to describe the world as it is (descriptive).' },
    { id: 'normative', term: 'Normative Statements', def: 'Claims that attempt to prescribe how the world should be (prescriptive).' },
  ];

  const QUESTIONS = [
    { id: 1, q: "In what ways is economics a science?", hint: "Economists use the scientific method: Observation, Theory, and More Observation. They use data to test theories." },
    { id: 2, q: "Why do economists make assumptions?", hint: "To simplify the complex world and make it easier to understand (like a map scale)." },
    { id: 3, q: "Should an economic model exactly describe reality?", hint: "No. A model is a simplification. A plastic heart model doesn't need real blood to be useful for anatomy." },
    { id: 4, q: "Name a way that your family interacts in the markets for factors of production and markets for goods.", hint: "Factors: Selling labor (working). Goods: Buying groceries." },
    { id: 5, q: "Name one economic interaction that isn’t covered by the simplified circular-flow diagram.", hint: "International trade, Government taxation/spending, or Banking/Financial markets." },
    { id: 6, q: "Draw and explain a production possibilities frontier for an economy that produces milk and cookies.", hint: "It should be bowed out. Producing more cookies requires moving resources (cows/land) less suited for cookies, increasing opportunity cost." },
    { id: 7, q: "What happens to this frontier if a disease kills half of the economy’s cows?", hint: "The PPF shifts inward. The economy can produce less of both goods (especially milk)." },
    { id: 8, q: "Use a production possibilities frontier to describe the idea of efficiency.", hint: "Points ON the curve are efficient. Points INSIDE are inefficient." },
    { id: 9, q: "What are the two subfields of economics? Explain what each subfield studies.", hint: "Micro (Individual agents/markets) and Macro (Economy-wide forces)." },
    { id: 10, q: "What is the difference between a positive and a normative statement? Give an example.", hint: "Positive = Fact (Min wage causes X). Normative = Opinion (Govt should raise min wage)." },
    { id: 11, q: "Why do economists sometimes offer conflicting advice to policymakers?", hint: "Differences in scientific judgments (parameters) or differences in values (fairness vs efficiency)." }
  ];

  // --- PROBLEM DATA ---

  const P1_SCENARIOS = [
    { id: 'a', text: "Selena pays a storekeeper $1 for a quart of milk.", type: 'goods', flow: 'dollar' },
    { id: 'b', text: "Stuart earns $8 per hour working at a fast-food restaurant.", type: 'factor', flow: 'dollar' },
    { id: 'c', text: "Shanna spends $40 to get a haircut.", type: 'goods', flow: 'dollar' },
    { id: 'd', text: "Salma earns $20,000 from her 10% ownership of Acme Industrial.", type: 'factor', flow: 'dollar' }
  ];

  const P5_SCENARIOS = [
    { id: 'a', text: "A family’s decision about how much income to save", type: 'Micro' },
    { id: 'b', text: "The effect of government regulations on auto emissions", type: 'Micro' },
    { id: 'c', text: "The impact of higher national saving on economic growth", type: 'Macro' },
    { id: 'd', text: "A firm’s decision about how many workers to hire", type: 'Micro' },
    { id: 'e', text: "The relationship between the inflation rate and changes in money supply", type: 'Macro' }
  ];

  const P6_SCENARIOS = [
    { id: 'a', text: "Society faces a short-run trade-off between inflation and unemployment.", type: 'Positive' },
    { id: 'b', text: "A reduction in the growth rate of the money supply will reduce the rate of inflation.", type: 'Positive' },
    { id: 'c', text: "The Federal Reserve should reduce the growth rate of the money supply.", type: 'Normative' },
    { id: 'd', text: "Society ought to require welfare recipients to look for jobs.", type: 'Normative' },
    { id: 'e', text: "Lower tax rates encourage more work and more saving.", type: 'Positive' }
  ];

  // --- INTERACTION HANDLERS ---

  const handleP1Select = (id: string, type: string) => {
    setP1Answers(prev => ({ ...prev, [id]: type }));
  };

  const handleP5Select = (id: string, choice: string) => {
    if (mmAnswers[id]) return;
    const correct = P5_SCENARIOS.find(s => s.id === id)?.type === choice;
    setMmAnswers(prev => ({ ...prev, [id]: correct }));
    if (correct) setMicroMacroScore(prev => prev + 1);
  };

  const handleP6Select = (id: string, choice: string) => {
    setPosNormAnswers(prev => ({ ...prev, [id]: choice }));
  };

  return (
    <div className="space-y-16 w-full max-w-5xl mx-auto">
      
      {/* SECTION 1: CHAPTER IN A NUTSHELL */}
      <section className="animate-in fade-in slide-in-from-bottom duration-700">
         <div className="flex items-center gap-3 mb-6 text-vintage-gold border-b border-vintage-700/50 pb-2">
            <BookOpen size={24} />
            <h2 className="font-display text-3xl uppercase tracking-wider text-vintage-100">Chapter in a Nutshell</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-vintage-800 p-6 rounded border border-vintage-700 hover:border-vintage-gold transition-colors">
               <h3 className="font-bold text-vintage-100 mb-2 uppercase tracking-wide flex items-center gap-2">
                  <Activity size={18} className="text-vintage-gold"/> The Economist as Scientist
               </h3>
               <p className="text-sm text-vintage-300 leading-relaxed">
                  Economists use objectivity, assumptions, and models (like the Circular-Flow Diagram and PPF) to understand the world. They divide the field into Microeconomics (individual parts) and Macroeconomics (the whole).
               </p>
            </div>
            <div className="bg-vintage-800 p-6 rounded border border-vintage-700 hover:border-vintage-gold transition-colors">
               <h3 className="font-bold text-vintage-100 mb-2 uppercase tracking-wide flex items-center gap-2">
                  <Gavel size={18} className="text-vintage-gold"/> The Economist as Policy Adviser
               </h3>
               <p className="text-sm text-vintage-300 leading-relaxed">
                  <strong>Positive</strong> statements describe the world as it is. <strong>Normative</strong> statements prescribe how it ought to be. Economists differ due to scientific judgments or values, but often agree more than the public thinks.
               </p>
            </div>
         </div>
      </section>

      {/* SECTION 2: KEY CONCEPTS */}
      <section className="animate-in fade-in slide-in-from-bottom duration-700 delay-100">
         <div className="flex items-center gap-3 mb-6 text-vintage-gold border-b border-vintage-700/50 pb-2">
            <PenTool size={24} />
            <h2 className="font-display text-3xl uppercase tracking-wider text-vintage-100">Key Concepts</h2>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {KEY_CONCEPTS.map((concept) => (
               <button
                  key={concept.id}
                  onClick={() => setActiveConcept(activeConcept === concept.id ? null : concept.id)}
                  className={`p-3 rounded text-sm font-bold border transition-all duration-300 text-left relative overflow-hidden group
                     ${activeConcept === concept.id 
                        ? 'bg-vintage-gold text-vintage-900 border-vintage-gold shadow-lg scale-105 z-10' 
                        : 'bg-vintage-800 text-vintage-300 border-vintage-700 hover:bg-vintage-700'
                     }`}
               >
                  <span className="relative z-10">{concept.term}</span>
                  {activeConcept === concept.id && (
                     <div className="absolute inset-0 bg-paper-texture opacity-30 mix-blend-multiply"></div>
                  )}
               </button>
            ))}
         </div>

         <div className={`mt-6 transition-all duration-500 overflow-hidden ${activeConcept ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-[#e6ded5] text-vintage-900 p-6 rounded shadow-inner border-l-4 border-vintage-gold">
               <h4 className="font-display font-bold text-xl mb-2">
                  {KEY_CONCEPTS.find(c => c.id === activeConcept)?.term}
               </h4>
               <p className="font-serif italic text-lg">
                  "{KEY_CONCEPTS.find(c => c.id === activeConcept)?.def}"
               </p>
            </div>
         </div>
      </section>

      {/* SECTION 3: QUESTIONS FOR REVIEW */}
      <section className="animate-in fade-in slide-in-from-bottom duration-700 delay-200">
         <div className="flex items-center gap-3 mb-6 text-vintage-gold border-b border-vintage-700/50 pb-2">
            <HelpCircle size={24} />
            <h2 className="font-display text-3xl uppercase tracking-wider text-vintage-100">Questions for Review</h2>
         </div>

         <div className="space-y-2">
            {QUESTIONS.map((q) => (
               <div key={q.id} className="bg-vintage-800 rounded border border-vintage-700 overflow-hidden">
                  <button 
                     onClick={() => setExpandedQuestion(expandedQuestion === q.id ? null : q.id)}
                     className="w-full flex justify-between items-center p-4 hover:bg-vintage-700 transition-colors text-left"
                  >
                     <span className="text-vintage-200 font-medium pr-4">{q.id}. {q.q}</span>
                     {expandedQuestion === q.id ? <ChevronUp className="text-vintage-gold shrink-0"/> : <ChevronDown className="text-vintage-500 shrink-0"/>}
                  </button>
                  
                  {expandedQuestion === q.id && (
                     <div className="bg-vintage-900/50 p-4 border-t border-vintage-700 text-sm text-vintage-300 animate-in slide-in-from-top duration-300">
                        <strong className="text-vintage-gold block mb-1">Professor's Hint:</strong>
                        {q.hint}
                     </div>
                  )}
               </div>
            ))}
         </div>
      </section>

      {/* SECTION 4: PROBLEMS AND APPLICATIONS */}
      <section className="animate-in fade-in slide-in-from-bottom duration-700 delay-300">
         <div className="flex items-center gap-3 mb-6 text-vintage-gold border-b border-vintage-700/50 pb-2">
            <Calculator size={24} />
            <h2 className="font-display text-3xl uppercase tracking-wider text-vintage-100">Problems & Applications</h2>
         </div>

         <div className="space-y-12">
            
            {/* PROBLEM 1: Circular Flow */}
            <div className="bg-vintage-900 border border-vintage-600 p-6 rounded shadow-xl">
               <h3 className="font-display text-xl text-vintage-100 mb-4 border-b border-vintage-700 pb-2">1. Circular-Flow Classifier</h3>
               <p className="text-vintage-400 text-sm mb-6 italic">Identify the market part for each activity.</p>
               
               <div className="space-y-4">
                  {P1_SCENARIOS.map((s) => (
                     <div key={s.id} className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-vintage-800/50 p-3 rounded">
                        <p className="text-sm text-vintage-200 flex-1">{s.id}. {s.text}</p>
                        <div className="flex gap-2 shrink-0">
                           <button 
                              onClick={() => handleP1Select(s.id, 'goods')}
                              className={`px-3 py-1 text-xs rounded border ${p1Answers[s.id] === 'goods' ? 'bg-green-900 text-green-200 border-green-600' : 'bg-vintage-900 text-vintage-500 border-vintage-600'}`}
                           >
                              Market for Goods
                           </button>
                           <button 
                              onClick={() => handleP1Select(s.id, 'factor')}
                              className={`px-3 py-1 text-xs rounded border ${p1Answers[s.id] === 'factor' ? 'bg-orange-900 text-orange-200 border-orange-600' : 'bg-vintage-900 text-vintage-500 border-vintage-600'}`}
                           >
                              Market for Factors
                           </button>
                        </div>
                        {p1Answers[s.id] && (
                           <div className="shrink-0">
                              {p1Answers[s.id] === s.type ? <CheckCircle size={16} className="text-green-500"/> : <AlertTriangle size={16} className="text-red-500"/>}
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </div>

            {/* PROBLEM 2: Guns vs Butter PPF */}
            <div className="bg-vintage-900 border border-vintage-600 p-6 rounded shadow-xl">
               <h3 className="font-display text-xl text-vintage-100 mb-4 border-b border-vintage-700 pb-2">2. Hawks, Doves, and The PPF</h3>
               
               <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-4 text-sm text-vintage-300">
                     <p>
                        <strong>(a)</strong> The curve is bowed out because resources (like specialized metal workers) aren't perfectly adaptable.
                        <br/><strong>(b)</strong> Impossible points are outside. Inefficient points are inside.
                        <br/><strong>(c)</strong> Hawks want more guns. Doves want more butter.
                        <br/><strong>(d)</strong> The Peace Dividend: If the neighbor disarms, we can move from Hawk point to Dove point.
                     </p>
                     
                     <div className="bg-vintage-800 p-4 rounded border border-vintage-700">
                        <label className="text-xs uppercase font-bold text-vintage-500 mb-2 block">Political Stance Slider</label>
                        <input 
                           type="range" min="0" max="100" value={hawkDovePosition} 
                           onChange={(e) => setHawkDovePosition(parseInt(e.target.value))}
                           className="w-full h-2 bg-vintage-900 rounded-full appearance-none cursor-pointer accent-vintage-gold"
                        />
                        <div className="flex justify-between text-xs mt-2 font-bold">
                           <span className="text-red-400">Hawk (Guns)</span>
                           <span className="text-green-400">Dove (Butter)</span>
                        </div>
                     </div>
                  </div>

                  {/* SVG Graph */}
                  <div className="w-64 h-64 bg-vintage-800 rounded border border-vintage-700 relative p-6 shrink-0">
                     <div className="absolute left-2 top-1/2 -rotate-90 text-[10px] text-vintage-500 font-bold">GUNS</div>
                     <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-vintage-500 font-bold">BUTTER</div>
                     
                     <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        <line x1="0" y1="100" x2="100" y2="100" stroke="#5d4037" strokeWidth="2" />
                        <line x1="0" y1="0" x2="0" y2="100" stroke="#5d4037" strokeWidth="2" />
                        
                        {/* PPF Curve */}
                        <path d="M 0 0 A 100 100 0 0 1 100 100" fill="none" stroke="#d4af37" strokeWidth="2" />
                        
                        {/* Selected Point */}
                        {/* Maps 0-100 linear slider to arc position */}
                        {/* angle goes from 0 (bottom right) to 90 (top left) */}
                        {/* Hawk = High Guns = Top Left = High Angle */}
                        {/* Dove = High Butter = Bottom Right = Low Angle */}
                        {(() => {
                           // 0 (Hawk) -> 80 deg
                           // 100 (Dove) -> 10 deg
                           const angle = (80 - (hawkDovePosition * 0.7)) * (Math.PI / 180);
                           const x = 100 * Math.cos(angle); // x is butter
                           const y = 100 - (100 * Math.sin(angle)); // y is 100 - guns
                           return (
                              <>
                                 <circle cx={x} cy={y} r="3" fill={hawkDovePosition > 50 ? "#4ade80" : "#f87171"} stroke="#fff" strokeWidth="1"/>
                                 <line x1={x} y1={y} x2={x} y2={100} stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5"/>
                                 <line x1={x} y1={y} x2={0} y2={y} stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5"/>
                              </>
                           );
                        })()}
                     </svg>
                  </div>
               </div>
            </div>

            {/* PROBLEM 3: Environment vs Industry */}
            <div className="bg-vintage-900 border border-vintage-600 p-6 rounded shadow-xl">
               <h3 className="font-display text-xl text-vintage-100 mb-4 border-b border-vintage-700 pb-2">3. Clean Air vs. Industry</h3>
               <p className="text-sm text-vintage-300 mb-4">
                  Society faces a trade-off. We can't have pristine nature AND maximum factory output.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-vintage-800 p-4 rounded border border-vintage-700">
                     <strong className="text-vintage-gold text-xs uppercase block mb-2">Technological Advance</strong>
                     <p className="text-sm text-vintage-300">
                        If engineers invent a smokeless generator, the PPF shifts <strong>outward</strong>. We can produce the same amount of electricity with LESS pollution (or more electricity with same pollution).
                     </p>
                  </div>
                  <div className="bg-vintage-800 p-4 rounded border border-vintage-700">
                     <strong className="text-vintage-gold text-xs uppercase block mb-2">Shape of Curve</strong>
                     <p className="text-sm text-vintage-300">
                        Bowed out. The first units of pollution reduction are cheap (put a filter on a smokestack). The last units are expensive (stop driving cars entirely).
                     </p>
                  </div>
               </div>
            </div>

            {/* PROBLEM 4: Production Calculation */}
            <div className="bg-vintage-200 text-vintage-900 p-6 rounded shadow-xl border-4 border-double border-vintage-800">
               <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2"><Calculator size={20}/> 4. Larry, Moe, and Curly</h3>
               
               <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-vintage-800">
                     <thead>
                        <tr className="bg-vintage-800 text-vintage-100">
                           <th className="p-2 border border-vintage-700">Worker</th>
                           <th className="p-2 border border-vintage-700">Mow Lawn (1 hr)</th>
                           <th className="p-2 border border-vintage-700">Wash Car (1 hr)</th>
                           <th className="p-2 border border-vintage-700">10h Output (Lawns)</th>
                           <th className="p-2 border border-vintage-700">10h Output (Cars)</th>
                        </tr>
                     </thead>
                     <tbody className="font-serif text-vintage-900">
                        <tr>
                           <td className="p-2 border border-vintage-800 font-bold">Larry</td>
                           <td className="p-2 border border-vintage-800 text-center">1</td>
                           <td className="p-2 border border-vintage-800 text-center">1</td>
                           <td className="p-2 border border-vintage-800 text-center">10</td>
                           <td className="p-2 border border-vintage-800 text-center">10</td>
                        </tr>
                        <tr>
                           <td className="p-2 border border-vintage-800 font-bold">Moe</td>
                           <td className="p-2 border border-vintage-800 text-center">1</td>
                           <td className="p-2 border border-vintage-800 text-center">2</td>
                           <td className="p-2 border border-vintage-800 text-center">10</td>
                           <td className="p-2 border border-vintage-800 text-center">20</td>
                        </tr>
                        <tr>
                           <td className="p-2 border border-vintage-800 font-bold">Curly</td>
                           <td className="p-2 border border-vintage-800 text-center">2</td>
                           <td className="p-2 border border-vintage-800 text-center">1</td>
                           <td className="p-2 border border-vintage-800 text-center">20</td>
                           <td className="p-2 border border-vintage-800 text-center">10</td>
                        </tr>
                     </tbody>
                  </table>
               </div>

               <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center bg-white/50 p-2 px-4 rounded border border-vintage-400">
                     <span className="font-bold">A. All Mow Lawns:</span>
                     <span>10 + 10 + 20 = <strong>40 Lawns</strong></span>
                  </div>
                  <div className="flex justify-between items-center bg-white/50 p-2 px-4 rounded border border-vintage-400">
                     <span className="font-bold">B. All Wash Cars:</span>
                     <span>10 + 20 + 10 = <strong>40 Cars</strong></span>
                  </div>
                  <div className="flex justify-between items-center bg-white/50 p-2 px-4 rounded border border-vintage-400">
                     <span className="font-bold">C. Split 50/50:</span>
                     <span>20 Lawns, 20 Cars</span>
                  </div>
                  <div className="flex justify-between items-center bg-vintage-900 text-vintage-100 p-2 px-4 rounded border border-vintage-900 shadow-lg">
                     <span className="font-bold">D. Specialization (Efficient):</span>
                     <span>Larry splits, Moe washes, Curly mows = <strong>25 Lawns, 25 Cars</strong></span>
                  </div>
               </div>
            </div>

            {/* PROBLEM 5: Micro vs Macro */}
            <div className="bg-vintage-900 border border-vintage-600 p-6 rounded shadow-xl">
               <div className="flex justify-between items-center border-b border-vintage-700 pb-2 mb-4">
                  <h3 className="font-display text-xl text-vintage-100">5. Micro vs. Macro Sorter</h3>
                  <div className="text-xs uppercase font-bold text-vintage-gold">Score: {microMacroScore}/5</div>
               </div>
               
               <div className="space-y-3">
                  {P5_SCENARIOS.map((s) => (
                     <div key={s.id} className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-vintage-800/50 p-3 rounded">
                        <p className="text-sm text-vintage-200 flex-1">{s.text}</p>
                        <div className="flex gap-2 shrink-0">
                           <button 
                              onClick={() => handleP5Select(s.id, 'Micro')}
                              disabled={!!mmAnswers[s.id]}
                              className={`px-3 py-1 text-xs rounded border transition-colors flex items-center gap-1 ${mmAnswers[s.id] !== undefined ? (s.type === 'Micro' ? 'bg-green-900 border-green-600 text-green-200' : 'opacity-30') : 'hover:bg-vintage-700 border-vintage-500'}`}
                           >
                              <User size={12}/> Micro
                           </button>
                           <button 
                              onClick={() => handleP5Select(s.id, 'Macro')}
                              disabled={!!mmAnswers[s.id]}
                              className={`px-3 py-1 text-xs rounded border transition-colors flex items-center gap-1 ${mmAnswers[s.id] !== undefined ? (s.type === 'Macro' ? 'bg-green-900 border-green-600 text-green-200' : 'opacity-30') : 'hover:bg-vintage-700 border-vintage-500'}`}
                           >
                              <Globe size={12}/> Macro
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* PROBLEM 6: Positive vs Normative */}
            <div className="bg-vintage-900 border border-vintage-600 p-6 rounded shadow-xl">
               <h3 className="font-display text-xl text-vintage-100 mb-4 border-b border-vintage-700 pb-2">6. Fact vs. Opinion</h3>
               
               <div className="space-y-4">
                  {P6_SCENARIOS.map((s) => (
                     <div key={s.id} className="bg-vintage-800 p-4 rounded border border-vintage-700">
                        <p className="text-vintage-200 text-sm mb-3 font-serif italic">"{s.text}"</p>
                        <div className="flex gap-2">
                           <button 
                              onClick={() => handleP6Select(s.id, 'Positive')}
                              className={`flex-1 py-1 text-xs uppercase tracking-widest rounded transition-colors ${posNormAnswers[s.id] === 'Positive' ? (s.type === 'Positive' ? 'bg-blue-900 text-blue-200 font-bold' : 'bg-red-900 text-red-200') : 'bg-vintage-900 hover:bg-vintage-700'}`}
                           >
                              Positive
                           </button>
                           <button 
                              onClick={() => handleP6Select(s.id, 'Normative')}
                              className={`flex-1 py-1 text-xs uppercase tracking-widest rounded transition-colors ${posNormAnswers[s.id] === 'Normative' ? (s.type === 'Normative' ? 'bg-blue-900 text-blue-200 font-bold' : 'bg-red-900 text-red-200') : 'bg-vintage-900 hover:bg-vintage-700'}`}
                           >
                              Normative
                           </button>
                        </div>
                        {posNormAnswers[s.id] && (
                           <div className="mt-2 text-xs text-vintage-400">
                              {s.type === 'Positive' ? 'Describes how the world IS.' : 'Prescribes how the world OUGHT to be.'}
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </section>

    </div>
  );
};
