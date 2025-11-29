
import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, PenTool } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Economics is best defined as the study of",
    options: [
      { key: 'a', text: "how society manages its scarce resources." },
      { key: 'b', text: "how to run a business most profitably." },
      { key: 'c', text: "how to predict inflation, unemployment, and stock prices." },
      { key: 'd', text: "how the government can protect people from unchecked self-interest." }
    ],
    correctAnswer: 'a',
    explanation: "Scarcity is the fundamental problem of economics. Society has limited resources and therefore cannot produce all the goods and services people wish to have."
  },
  {
    id: 2,
    text: "Your opportunity cost of going to a movie is",
    options: [
      { key: 'a', text: "the price of the ticket." },
      { key: 'b', text: "the price of the ticket plus the cost of any soda and popcorn you buy at the theater." },
      { key: 'c', text: "the total cash expenditure needed to go to the movie plus the value of your time." },
      { key: 'd', text: "zero, as long as you enjoy the movie and consider it a worthwhile use of time and money." }
    ],
    correctAnswer: 'c',
    explanation: "Opportunity cost includes both explicit costs (money spent) and implicit costs (the value of time you could have used doing something else)."
  },
  {
    id: 3,
    text: "A marginal change is one that",
    options: [
      { key: 'a', text: "is not important for public policy." },
      { key: 'b', text: "incrementally alters an existing plan." },
      { key: 'c', text: "makes an outcome inefficient." },
      { key: 'd', text: "does not influence incentives." }
    ],
    correctAnswer: 'b',
    explanation: "Marginal changes are small, incremental adjustments to a plan of action. Rational people make decisions by comparing marginal benefits and marginal costs."
  },
  {
    id: 4,
    text: "Because people respond to incentives,",
    options: [
      { key: 'a', text: "policymakers can alter outcomes by changing punishments or rewards." },
      { key: 'b', text: "policies can have unintended consequences." },
      { key: 'c', text: "society faces a trade-off between efficiency and equality." },
      { key: 'd', text: "All of the above are correct." }
    ],
    correctAnswer: 'd',
    explanation: "Incentives are crucial. Policymakers use them (a), but if they fail to anticipate how behavior changes, it leads to unintended consequences (b). Trade-offs often involve incentives (c)."
  }
];

export const QuizLesson: React.FC = () => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIdx];

  const handleOptionClick = (key: string) => {
    if (isAnswered) return;
    setSelectedOption(key);
  };

  const checkAnswer = () => {
    if (!selectedOption) return;
    
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIdx < QUESTIONS.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const percentage = (score / QUESTIONS.length) * 100;
    let grade = '';
    let comment = '';
    
    if (percentage === 100) { grade = 'A+'; comment = 'Exemplary Economist!'; }
    else if (percentage >= 75) { grade = 'B'; comment = 'Solid Comprehension.'; }
    else if (percentage >= 50) { grade = 'C'; comment = 'Needs Review.'; }
    else { grade = 'F'; comment = 'Consult the Textbook.'; }

    return (
      <div className="w-full max-w-3xl mx-auto animate-in zoom-in duration-500">
        <div className="bg-vintage-200 text-vintage-900 rounded-sm shadow-2xl overflow-hidden border-8 border-double border-vintage-900 relative">
           <div className="absolute inset-0 bg-paper-texture opacity-50 pointer-events-none"></div>
           
           <div className="p-12 flex flex-col items-center text-center relative z-10">
              <Award size={64} className="text-vintage-800 mb-6" />
              <h2 className="font-display text-4xl mb-2">Examination Results</h2>
              <p className="font-serif italic text-vintage-600 mb-8">Department of Economics</p>
              
              <div className="w-48 h-48 rounded-full border-4 border-vintage-900 flex flex-col items-center justify-center bg-vintage-300 shadow-inner mb-8">
                 <span className="font-display text-6xl font-bold text-vintage-900">{grade}</span>
                 <span className="font-serif text-sm text-vintage-700 mt-1">{score} / {QUESTIONS.length} Correct</span>
              </div>

              <p className="text-2xl font-display text-vintage-800 mb-8">"{comment}"</p>

              <button 
                onClick={restartQuiz}
                className="flex items-center gap-2 px-8 py-3 bg-vintage-900 text-vintage-100 hover:bg-vintage-800 transition-colors rounded-sm font-display uppercase tracking-widest text-sm"
              >
                <RotateCcw size={16} /> Retake Exam
              </button>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Quiz Container - Styled like a test paper */}
      <div className="bg-[#fdfbf7] text-vintage-900 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-vintage-300 relative overflow-hidden min-h-[600px] flex flex-col">
        {/* Texture */}
        <div className="absolute inset-0 bg-paper-texture opacity-40 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-900/10 via-red-900/20 to-red-900/10 border-b border-red-900/20"></div>

        {/* Header */}
        <div className="p-8 border-b-2 border-vintage-900/10 flex justify-between items-start relative z-10">
           <div>
             <h2 className="font-display text-3xl text-vintage-900">Pop Quiz: Decision Making</h2>
             <p className="font-serif italic text-vintage-500 mt-1">Please select the most accurate response.</p>
           </div>
           <div className="text-right">
              <div className="font-display text-4xl text-vintage-200 font-bold select-none absolute top-4 right-8 opacity-20 rotate-12">
                 Q{currentQuestionIdx + 1}
              </div>
              <div className="text-sm font-bold tracking-widest uppercase text-vintage-400 border border-vintage-300 px-3 py-1 rounded-full">
                 Question {currentQuestionIdx + 1} of {QUESTIONS.length}
              </div>
           </div>
        </div>

        {/* Question Body */}
        <div className="p-8 sm:p-12 flex-1 relative z-10">
           <h3 className="font-serif text-2xl leading-relaxed mb-10 text-vintage-900 font-medium">
             {currentQuestion.id}. {currentQuestion.text}
           </h3>

           <div className="space-y-4">
             {currentQuestion.options.map((option) => {
               let optionStyle = "border-vintage-300 hover:bg-vintage-900/5 hover:border-vintage-500 text-vintage-700";
               
               if (isAnswered) {
                 if (option.key === currentQuestion.correctAnswer) {
                   optionStyle = "bg-green-100 border-green-600 text-green-900 shadow-md";
                 } else if (option.key === selectedOption) {
                   optionStyle = "bg-red-50 border-red-400 text-red-900 opacity-70";
                 } else {
                   optionStyle = "opacity-50 border-vintage-200";
                 }
               } else if (selectedOption === option.key) {
                 optionStyle = "bg-vintage-900 text-vintage-100 border-vintage-900 shadow-lg transform scale-[1.01]";
               }

               return (
                 <button
                   key={option.key}
                   onClick={() => handleOptionClick(option.key)}
                   disabled={isAnswered}
                   className={`w-full text-left p-5 rounded border-2 transition-all duration-300 flex items-start gap-4 group ${optionStyle}`}
                 >
                   <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 font-display font-bold text-sm transition-colors
                      ${selectedOption === option.key && !isAnswered ? 'border-vintage-100' : 'border-current'}
                   `}>
                      {option.key.toUpperCase()}
                   </div>
                   <span className="font-serif text-lg pt-0.5">{option.text}</span>
                   
                   {isAnswered && option.key === currentQuestion.correctAnswer && (
                     <CheckCircle2 className="ml-auto text-green-600 shrink-0" />
                   )}
                   {isAnswered && selectedOption === option.key && option.key !== currentQuestion.correctAnswer && (
                     <XCircle className="ml-auto text-red-500 shrink-0" />
                   )}
                 </button>
               );
             })}
           </div>
        </div>

        {/* Footer / Controls */}
        <div className="p-8 bg-vintage-100/50 border-t border-vintage-900/10 flex justify-between items-center relative z-10">
           {isAnswered ? (
             <div className="flex-1 mr-8 animate-in slide-in-from-bottom duration-500">
                <div className="flex items-start gap-3">
                   <div className="bg-vintage-900/10 p-2 rounded-full">
                      <PenTool size={16} className="text-vintage-800" />
                   </div>
                   <div>
                     <span className="block text-xs font-bold uppercase tracking-widest text-vintage-500 mb-1">Professor's Note</span>
                     <p className="text-vintage-800 font-serif italic text-sm leading-relaxed">
                       {currentQuestion.explanation}
                     </p>
                   </div>
                </div>
             </div>
           ) : (
             <div className="text-vintage-400 text-sm italic font-serif">Select an option to proceed...</div>
           )}

           <button
             onClick={isAnswered ? nextQuestion : checkAnswer}
             disabled={!selectedOption && !isAnswered}
             className={`px-8 py-4 rounded-sm font-display uppercase tracking-widest text-sm flex items-center gap-2 transition-all duration-300 shadow-xl
               ${!selectedOption && !isAnswered 
                 ? 'bg-vintage-300 text-vintage-400 cursor-not-allowed' 
                 : 'bg-vintage-900 text-vintage-gold hover:bg-vintage-800 hover:scale-105'
               }
             `}
           >
             {isAnswered 
               ? (currentQuestionIdx < QUESTIONS.length - 1 ? "Next Question" : "Finish Exam") 
               : "Submit Answer"
             }
             <ArrowRight size={16} />
           </button>
        </div>

      </div>
    </div>
  );
};
