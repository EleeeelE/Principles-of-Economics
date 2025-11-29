
import React, { useEffect, useState } from 'react';
import { SubTopic } from '../types';
import { generateLessonContent } from '../services/gemini';
import { ArrowLeft, BookOpen, Clock, Share2 } from 'lucide-react';
import { TradeOffsLesson } from './TradeOffsLesson';
import { OpportunityCostLesson } from './OpportunityCostLesson';
import { MarginLesson } from './MarginLesson';
import { IncentivesLesson } from './IncentivesLesson';
import { TradeBenefitLesson } from './TradeBenefitLesson';
import { MarketsLesson } from './MarketsLesson';
import { GovtInterventionLesson } from './GovtInterventionLesson';
import { ProductivityLesson } from './ProductivityLesson';
import { InflationLesson } from './InflationLesson';
import { PhillipsCurveLesson } from './PhillipsCurveLesson';
import { QuizLesson } from './QuizLesson';
import { ScienceMethodLesson } from './ScienceMethodLesson';
import { AssumptionsLesson } from './AssumptionsLesson';
import { CircularFlowLesson } from './CircularFlowLesson';
import { PPFModelLesson } from './PPFModelLesson';
import { MicroMacroLesson } from './MicroMacroLesson';
import { PolicyAdviserLesson } from './PolicyAdviserLesson';
import { DisagreementLesson } from './DisagreementLesson';
import { LetsGoLesson } from './LetsGoLesson';
import { TenPrinciplesSummary } from './TenPrinciplesSummary';
import { GraphingLesson } from './GraphingLesson';

interface LessonViewProps {
  topic: SubTopic;
  onBack: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({ topic, onBack }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Check if this topic uses a custom component
  const customLessons = [
    'tradeoffs', 
    'opportunity_cost', 
    'margin', 
    'incentives',
    'trade_benefit',
    'markets',
    'govt',
    'productivity',
    'inflation',
    'phillips',
    'quiz_decisions',
    'sci_method',
    'assumptions',
    'models',
    'circular_flow',
    'ppf_model',
    'micro_macro',
    'tech_economists',
    'positive_normative',
    'washington',
    'advice_ignored',
    'diff_judgments',
    'diff_values',
    'perception_reality',
    'ticket_resale',
    'chapter_summary',
    'principles_review',
    'graphing_appendix'
  ];
  const isCustomLesson = customLessons.includes(topic.id);

  useEffect(() => {
    // If it's a custom lesson, we don't need to fetch AI content
    if (isCustomLesson) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    const fetchContent = async () => {
      setLoading(true);
      const text = await generateLessonContent(topic.query);
      if (isMounted) {
        setContent(text);
        setLoading(false);
      }
    };
    fetchContent();
    return () => { isMounted = false; };
  }, [topic, isCustomLesson]);

  // Simple formatter to handle basic markdown-like structure for the demo
  const formatContent = (text: string) => {
    return text.split('\n').map((line, idx) => {
      if (line.startsWith('## ')) {
        return <h2 key={idx} className="font-display text-2xl text-vintage-gold mt-8 mb-4 border-b border-vintage-600 pb-2">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={idx} className="font-display text-xl text-vintage-200 mt-6 mb-3">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('- ')) {
        return <li key={idx} className="ml-6 mb-2 list-disc text-vintage-300 pl-2 marker:text-vintage-gold">{line.replace('- ', '')}</li>;
      }
      if (line.trim() === '') {
        return <br key={idx} />;
      }
      // Simple bold parser
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} className="mb-4 text-vintage-200 leading-relaxed text-lg font-body">
          {parts.map((part, i) => 
            part.startsWith('**') && part.endsWith('**') ? 
            <strong key={i} className="text-vintage-100 font-bold">{part.slice(2, -2)}</strong> : 
            part
          )}
        </p>
      );
    });
  };

  const renderContent = () => {
    switch (topic.id) {
      // Principles
      case 'tradeoffs': return <TradeOffsLesson />;
      case 'opportunity_cost': return <OpportunityCostLesson />;
      case 'margin': return <MarginLesson />;
      case 'incentives': return <IncentivesLesson />;
      case 'trade_benefit': return <TradeBenefitLesson />;
      case 'markets': return <MarketsLesson />;
      case 'govt': return <GovtInterventionLesson />;
      case 'productivity': return <ProductivityLesson />;
      case 'inflation': return <InflationLesson />;
      case 'phillips': return <PhillipsCurveLesson />;
      case 'quiz_decisions': return <QuizLesson />;
      case 'principles_review': return <TenPrinciplesSummary />;
      
      // Economist as Scientist
      case 'sci_method': return <ScienceMethodLesson />;
      case 'assumptions': return <AssumptionsLesson />;
      case 'models': return <AssumptionsLesson />; // Reusing AssumptionsLesson as it covers models
      case 'circular_flow': return <CircularFlowLesson />;
      case 'ppf_model': return <PPFModelLesson />;
      case 'micro_macro': return <MicroMacroLesson />;
      
      // Economist as Policy Adviser (Section 2-2)
      case 'tech_economists':
      case 'positive_normative':
      case 'washington':
      case 'advice_ignored':
        return <PolicyAdviserLesson defaultSection={topic.id} />;

      // Why Economists Disagree (Section 2-3)
      case 'diff_judgments':
      case 'diff_values':
      case 'perception_reality':
      case 'ticket_resale':
        return <DisagreementLesson defaultSection={topic.id} />;

      // Conclusion (Section 2-4)
      case 'chapter_summary': return <LetsGoLesson />;
      case 'graphing_appendix': return <GraphingLesson />;

      default:
        return (
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-p:font-body prose-li:font-body prose-strong:text-vintage-gold">
            {formatContent(content)}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-vintage-900 text-vintage-100 flex flex-col items-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Navigation Bar */}
      <div className="w-full max-w-7xl flex justify-between items-center mb-8">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-vintage-400 hover:text-vintage-gold transition-colors"
        >
          <div className="p-2 rounded-full border border-vintage-600 group-hover:border-vintage-gold transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span className="font-display tracking-widest text-sm uppercase">Back to Course</span>
        </button>
        
        <div className="flex gap-4">
          <button className="text-vintage-400 hover:text-vintage-gold transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      {/* Main Content Card */}
      <article className="w-full max-w-7xl bg-vintage-800 rounded-sm shadow-2xl overflow-hidden border border-vintage-700 relative">
        {/* Decorative Top Border */}
        <div className="h-2 bg-gradient-to-r from-vintage-700 via-vintage-gold to-vintage-700 opacity-70"></div>
        
        {/* Header Section */}
        <div className="bg-vintage-900/50 p-8 sm:p-12 border-b border-vintage-700 relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             
             <div className="relative z-10">
                <div className="flex items-center gap-3 text-vintage-gold mb-4">
                  <BookOpen size={18} />
                  <span className="font-display text-sm tracking-widest uppercase">Lesson</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-vintage-100 leading-tight mb-6">
                  {topic.title}
                </h1>
                <div className="flex items-center gap-6 text-vintage-400 font-serif italic text-sm">
                  <span className="flex items-center gap-2"><Clock size={16}/> {isCustomLesson ? 'Interactive' : '5 min read'}</span>
                  <span>•</span>
                  <span>Principles of Economics</span>
                </div>
             </div>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 bg-[#231a15]"> 
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-6">
               <div className="relative w-16 h-16">
                  <div className="absolute inset-0 border-4 border-vintage-700 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-vintage-gold rounded-full border-t-transparent animate-spin"></div>
               </div>
               <p className="font-display text-vintage-400 animate-pulse">Consulting the Professor...</p>
            </div>
          ) : (
            renderContent()
          )}
        </div>

        {/* Footer */}
        <div className="bg-vintage-900 p-8 text-center border-t border-vintage-700">
           <p className="text-vintage-500 font-serif italic">"Economics is a study of mankind in the ordinary business of life."</p>
           <p className="text-vintage-600 text-xs mt-2 uppercase tracking-widest">- Alfred Marshall</p>
        </div>
      </article>
    </div>
  );
};
