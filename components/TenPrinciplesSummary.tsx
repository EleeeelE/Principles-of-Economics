
import React, { useState } from 'react';
import { BookOpen, HelpCircle, PenTool, CheckCircle, ChevronDown, ChevronUp, Calculator, DollarSign, AlertTriangle } from 'lucide-react';

export const TenPrinciplesSummary: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [sunkCostDecision, setSunkCostDecision] = useState<string | null>(null);
  const [oppCostInterest, setOppCostInterest] = useState(5); // %
  const [oppCostPrincipal, setOppCostPrincipal] = useState(100); // $

  const KEY_CONCEPTS = [
    { id: 'scarcity', term: 'Scarcity', def: 'The limited nature of society’s resources.' },
    { id: 'economics', term: 'Economics', def: 'The study of how society manages its scarce resources.' },
    { id: 'efficiency', term: 'Efficiency', def: 'The property of society getting the most it can from its scarce resources.' },
    { id: 'equality', term: 'Equality', def: 'The property of distributing economic prosperity uniformly among the members of society.' },
    { id: 'opp_cost', term: 'Opportunity Cost', def: 'Whatever must be given up to obtain some item.' },
    { id: 'rational', term: 'Rational People', def: 'People who systematically and purposefully do the best they can to achieve their objectives.' },
    { id: 'marginal', term: 'Marginal Change', def: 'A small incremental adjustment to a plan of action.' },
    { id: 'incentive', term: 'Incentive', def: 'Something that induces a person to act.' },
    { id: 'market', term: 'Market Economy', def: 'An economy that allocates resources through the decentralized decisions of many firms and households.' },
    { id: 'rights', term: 'Property Rights', def: 'The ability of an individual to own and exercise control over scarce resources.' },
    { id: 'failure', term: 'Market Failure', def: 'A situation in which a market left on its own fails to allocate resources efficiently.' },
    { id: 'externality', term: 'Externality', def: 'The impact of one person’s actions on the well-being of a bystander.' },
    { id: 'power', term: 'Market Power', def: 'The ability of a single economic actor (or small group) to have a substantial influence on market prices.' },
    { id: 'productivity', term: 'Productivity', def: 'The quantity of goods and services produced from each unit of labor input.' },
    { id: 'inflation', term: 'Inflation', def: 'An increase in the overall level of prices in the economy.' },
    { id: 'cycle', term: 'Business Cycle', def: 'Fluctuations in economic activity, such as employment and production.' },
  ];

  const QUESTIONS = [
    { id: 1, q: "Give three examples of important trade-offs that you face in your life.", hint: "Think about how you spend your time (study vs. sleep) or money (coffee vs. savings)." },
    { id: 2, q: "What items would you include to figure out the opportunity cost of a trip to an amusement park?", hint: "Ticket price + Time (what could you earn working?) + Travel cost. Do not count food if you would eat anyway (unless park food is more expensive)." },
    { id: 3, q: "Water is necessary for life. Is the marginal benefit of a glass of water large or small?", hint: "It depends on how thirsty you are! If you have plenty, the marginal benefit is small. If you are in a desert, it is huge." },
    { id: 4, q: "Why should policymakers think about incentives?", hint: "Because policies change the costs/benefits of actions. If you tax windows, people brick them up." },
    { id: 5, q: "Why isn’t trade between two countries like a game in which one country wins and the other loses?", hint: "Trade allows specialization. Both can consume more than they produce alone." },
    { id: 6, q: "What does the “invisible hand” of the marketplace do?", hint: "It guides self-interested buyers and sellers to an outcome that promotes general economic well-being." },
    { id: 7, q: "What are the two main causes of market failure?", hint: "Externalities (pollution) and Market Power (monopoly)." },
    { id: 8, q: "Why is productivity important?", hint: "It is the primary driver of living standards. Income = Output." },
    { id: 9, q: "What is inflation, and what causes it?", hint: "Rising prices. Caused primarily by printing too much money." },
    { id: 10, q: "How are inflation and unemployment related in the short run?", hint: "Inversely. Increasing money supply boosts demand (low unemployment) but raises prices (inflation)." }
  ];

  const PROBLEMS_PART_1 = [
    {
      id: 'p1',
      title: 'Problem 1: Trade-offs',
      content: "Describe trade-offs for: a family buying a car, a Congressman spending on parks, a CEO opening a factory.",
      solution: "Family: Car vs. Vacation/Savings. Congress: Parks vs. Lower Taxes/Defense. CEO: New Factory vs. Dividend/R&D."
    },
    {
      id: 'p2',
      title: 'Problem 2: Vacation Calculation',
      content: "You are deciding whether to take a vacation. Costs: Airfare, Hotel, Foregone Wages. Benefits: Psychological. How do you compare?",
      solution: "You must value the psychological benefit in dollar terms. If Value(Fun) > (Explicit Costs + Implicit/Foregone Wages), then go. Opportunity cost includes the money you didn't earn while away."
    },
    {
      id: 'p3',
      title: 'Problem 3: The Cost of Skiing',
      content: "You plan to spend Saturday working. A friend asks you to ski. What is the cost? What if you planned to study?",
      solution: "If working: Cost = Ski Expenses + Lost Wages. If studying: Cost = Ski Expenses + Value of Study (Future Wages). The opportunity cost changes based on the value of the alternative forgone."
    }
  ];

  const PROBLEMS_PART_2 = [
    {
      id: 'p6',
      title: 'Problem 6: Welfare Reform',
      content: "In 1996, welfare was limited to 2 years. How does this affect incentives? Efficiency vs. Equity?",
      solution: "Incentive: Increases incentive to find a job quickly. Efficiency: May increase labor supply (more output). Equity: May leave some vulnerable people without support."
    },
    {
      id: 'p7',
      title: 'Problem 7: Government Intervention',
      content: "Classify by Equality or Efficiency (and Market Failure type): a. Regulating Cable TV b. Food Vouchers c. Smoking Ban d. Breaking up Standard Oil e. Income Tax f. Drunk Driving Laws.",
      solution: "a. Efficiency (Market Power). b. Equality. c. Efficiency (Externality). d. Efficiency (Market Power). e. Equality. f. Efficiency (Externality)."
    },
    {
      id: 'p8',
      title: 'Problem 8: Efficiency vs. Equality Statements',
      content: "Discuss: a. 'Guaranteed best healthcare for all.' b. 'Guaranteed unemployment benefits until new job found.'",
      solution: "a. Promotes Equality, but reduces Efficiency (costs are high, consumers may overuse services). b. Promotes Equality (security), but reduces Efficiency (reduces incentive to search for work)."
    },
    {
      id: 'p9',
      title: 'Problem 9: Standard of Living',
      content: "Why is your standard of living different from your grandparents?",
      solution: "Productivity. Technological advances and capital accumulation have allowed workers to produce more output per hour, leading to higher real incomes and more variety of goods."
    },
    {
      id: 'p10',
      title: 'Problem 10: Saving & Productivity',
      content: "If Americans save more, banks lend more to businesses for factories. Effect on productivity? Who benefits? Free lunch?",
      solution: "More capital = Higher Productivity = Higher Wages (Workers benefit). Not a free lunch: Society must sacrifice current consumption to save for future growth."
    },
    {
      id: 'p11',
      title: 'Problem 11: The Inflation Tax',
      content: "When the government prints money to pay for war, who is being 'taxed'?",
      solution: "Everyone who holds currency. As money supply rises, price levels rise, so the money in your pocket buys less. It is a tax on cash holders."
    }
  ];

  return (
    <div className="space-y-16 w-full max-w-5xl mx-auto">
      
      {/* SECTION 1: CHAPTER IN A NUTSHELL */}
      <section className="animate-in fade-in slide-in-from-bottom duration-700">
         <div className="flex items-center gap-3 mb-6 text-vintage-gold border-b border-vintage-700/50 pb-2">
            <BookOpen size={24} />
            <h2 className="font-display text-3xl uppercase tracking-wider text-vintage-100">Chapter in a Nutshell</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-vintage-800 p-6 rounded border border-vintage-700 hover:border-vintage-gold transition-colors group">
               <div className="text-4xl text-vintage-700 group-hover:text-vintage-gold mb-4 transition-colors">01</div>
               <h3 className="font-bold text-vintage-100 mb-2 uppercase tracking-wide">Individual Decision Making</h3>
               <p className="text-sm text-vintage-300 leading-relaxed">
                  People face trade-offs. The cost of any action is the opportunity cost. Rational people compare marginal costs and benefits. Incentives matter.
               </p>
            </div>
            <div className="bg-vintage-800 p-6 rounded border border-vintage-700 hover:border-vintage-gold transition-colors group">
               <div className="text-4xl text-vintage-700 group-hover:text-vintage-gold mb-4 transition-colors">02</div>
               <h3 className="font-bold text-vintage-100 mb-2 uppercase tracking-wide">Economic Interactions</h3>
               <p className="text-sm text-vintage-300 leading-relaxed">
                  Trade can make everyone better off. Markets are usually a good way to organize activity. Governments can sometimes improve market outcomes (failure/equity).
               </p>
            </div>
            <div className="bg-vintage-800 p-6 rounded border border-vintage-700 hover:border-vintage-gold transition-colors group">
               <div className="text-4xl text-vintage-700 group-hover:text-vintage-gold mb-4 transition-colors">03</div>
               <h3 className="font-bold text-vintage-100 mb-2 uppercase tracking-wide">The Economy as a Whole</h3>
               <p className="text-sm text-vintage-300 leading-relaxed">
                  Productivity determines living standards. Money growth causes inflation. Society faces a short-run trade-off between inflation and unemployment.
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

         <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {KEY_CONCEPTS.map((concept) => (
               <button
                  key={concept.id}
                  onClick={() => setActiveConcept(activeConcept === concept.id ? null : concept.id)}
                  className={`p-3 rounded text-sm font-bold border transition-all duration-300 text-left relative overflow-hidden
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

         {/* Definition Display Area */}
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

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* --- PROBLEMS 1-3 --- */}
            <div className="lg:col-span-2 space-y-6">
               {PROBLEMS_PART_1.map((p) => (
                  <div key={p.id} className="bg-vintage-800/50 p-8 rounded border border-vintage-700 hover:bg-vintage-800 transition-colors">
                     <h4 className="font-display text-2xl text-vintage-gold mb-4">{p.title}</h4>
                     <p className="text-vintage-200 text-lg leading-relaxed mb-6 font-serif">{p.content}</p>
                     <div className="bg-vintage-900 p-6 rounded text-sm text-vintage-300 font-serif border-l-4 border-vintage-500">
                        <span className="text-vintage-500 uppercase font-bold text-xs tracking-widest block mb-2">Answer Key</span>
                        {p.solution}
                     </div>
                  </div>
               ))}
            </div>

            {/* --- INTERACTIVE PROBLEM 4: Opportunity Cost Calc --- */}
            <div className="bg-vintage-200 text-vintage-900 p-6 rounded shadow-xl border-4 border-double border-vintage-800">
               <div className="flex items-center justify-between mb-4 border-b border-vintage-400 pb-2">
                  <h3 className="font-bold font-display uppercase tracking-widest">Problem 4: The Bet</h3>
                  <DollarSign size={20} />
               </div>
               <p className="font-serif italic mb-6 text-sm">
                  You win ${oppCostPrincipal} in a pool. You can spend it now or save it for a year at {oppCostInterest}% interest. What is the opportunity cost of spending it now?
               </p>
               
               <div className="space-y-4 mb-6">
                  <div>
                     <label className="text-xs font-bold uppercase block mb-1">Principal Amount</label>
                     <input type="range" min="100" max="1000" step="100" value={oppCostPrincipal} onChange={e => setOppCostPrincipal(parseInt(e.target.value))} className="w-full h-2 bg-vintage-300 rounded-lg appearance-none cursor-pointer accent-vintage-900"/>
                     <div className="text-right text-xs">${oppCostPrincipal}</div>
                  </div>
                  <div>
                     <label className="text-xs font-bold uppercase block mb-1">Interest Rate</label>
                     <input type="range" min="1" max="10" step="1" value={oppCostInterest} onChange={e => setOppCostInterest(parseInt(e.target.value))} className="w-full h-2 bg-vintage-300 rounded-lg appearance-none cursor-pointer accent-vintage-900"/>
                     <div className="text-right text-xs">{oppCostInterest}%</div>
                  </div>
               </div>

               <div className="bg-vintage-100 p-4 rounded border border-vintage-300 text-center">
                  <div className="text-xs uppercase text-vintage-500 mb-1">Opportunity Cost</div>
                  <div className="text-3xl font-bold font-display text-red-800">
                     ${(oppCostPrincipal * (1 + oppCostInterest/100)).toFixed(2)}
                  </div>
                  <div className="text-[10px] text-vintage-600 mt-2">
                     (The ${oppCostPrincipal} principal + ${(oppCostPrincipal * oppCostInterest/100).toFixed(2)} forgone interest)
                  </div>
               </div>
            </div>

            {/* --- INTERACTIVE PROBLEM 5: Sunk Cost --- */}
            <div className="bg-vintage-900 border border-vintage-600 p-6 rounded shadow-xl flex flex-col justify-between">
               <div>
                  <div className="flex items-center justify-between mb-4 border-b border-vintage-700 pb-2">
                     <h3 className="font-bold font-display uppercase tracking-widest text-vintage-100">Problem 5: Sunk Costs</h3>
                     <AlertTriangle size={20} className="text-vintage-gold"/>
                  </div>
                  <p className="text-vintage-300 text-sm mb-4">
                     You invested <strong className="text-red-400">$5 million</strong> developing a product. It's not finished. Competitors launched a rival product. Expected sales dropped to <strong>$3 million</strong>. It costs <strong>$1 million</strong> to finish.
                  </p>
                  <p className="text-vintage-100 font-bold mb-6 text-center">
                     Do you finish development?
                  </p>
               </div>

               <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                     <button 
                        onClick={() => setSunkCostDecision('finish')}
                        className={`p-3 rounded border transition-all ${sunkCostDecision === 'finish' ? 'bg-green-900 border-green-500 text-green-100' : 'bg-vintage-800 border-vintage-700 hover:bg-vintage-700'}`}
                     >
                        Yes, Finish
                     </button>
                     <button 
                        onClick={() => setSunkCostDecision('abandon')}
                        className={`p-3 rounded border transition-all ${sunkCostDecision === 'abandon' ? 'bg-red-900 border-red-500 text-red-100' : 'bg-vintage-800 border-vintage-700 hover:bg-vintage-700'}`}
                     >
                        No, Abandon
                     </button>
                  </div>

                  {sunkCostDecision && (
                     <div className="bg-black/30 p-4 rounded text-sm animate-in zoom-in">
                        {sunkCostDecision === 'finish' ? (
                           <div className="text-green-400 flex items-start gap-2">
                              <CheckCircle size={16} className="mt-1 shrink-0" />
                              <div>
                                 <strong>Correct!</strong> The $5m is a SUNK COST. Ignore it.
                                 <br/>Marginal Benefit ($3m) {'>'} Marginal Cost ($1m).
                                 <br/>Profit from finishing = $2m.
                              </div>
                           </div>
                        ) : (
                           <div className="text-red-400">
                              <strong>Incorrect.</strong> You are letting the $5m sunk cost cloud your judgment. You can spend $1m to get $3m back. That is a good deal at the margin!
                           </div>
                        )}
                     </div>
                  )}
               </div>
            </div>

            {/* --- PROBLEMS 6-11 --- */}
            <div className="lg:col-span-2 space-y-6">
               {PROBLEMS_PART_2.map((p) => (
                  <div key={p.id} className="bg-vintage-800/50 p-8 rounded border border-vintage-700 hover:bg-vintage-800 transition-colors">
                     <h4 className="font-display text-2xl text-vintage-gold mb-4">{p.title}</h4>
                     <p className="text-vintage-200 text-lg leading-relaxed mb-6 font-serif">{p.content}</p>
                     <div className="bg-vintage-900 p-6 rounded text-sm text-vintage-300 font-serif border-l-4 border-vintage-500">
                        <span className="text-vintage-500 uppercase font-bold text-xs tracking-widest block mb-2">Answer Key</span>
                        {p.solution}
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </section>

    </div>
  );
};
