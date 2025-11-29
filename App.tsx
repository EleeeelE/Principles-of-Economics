import React, { useState } from 'react';
import { CURRICULUM } from './constants';
import { Section, Topic, SubTopic, AppState } from './types';
import { LessonView } from './components/LessonView';
import { AIChat } from './components/AIChat';
import { ChevronRight, Book, Activity, Globe, Scale } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>(AppState.HOME);
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [activeTopic, setActiveTopic] = useState<SubTopic | null>(null);

  // -- Navigation Handlers --

  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
    setView(AppState.SECTION);
    window.scrollTo(0, 0);
  };

  const handleTopicClick = (subTopic: SubTopic) => {
    setActiveTopic(subTopic);
    setView(AppState.TOPIC);
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    if (view === AppState.TOPIC) {
      setView(AppState.SECTION);
      setActiveTopic(null);
    } else if (view === AppState.SECTION) {
      setView(AppState.HOME);
      setActiveSection(null);
    }
  };

  // -- Helper Components --

  const getSectionIcon = (id: string) => {
    switch (id) {
      case 'principles': return <Scale size={32} />;
      case 'thinking': return <Activity size={32} />;
      case 'micro': return <Book size={32} />;
      case 'macro': return <Globe size={32} />;
      default: return <Book size={32} />;
    }
  };

  // -- Render Views --

  const renderHome = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-vintage-gold/10 rounded-full blur-3xl"></div>
        <h1 className="relative font-display text-5xl md:text-7xl text-vintage-100 mb-6 tracking-tight">
          Principles <span className="text-vintage-gold font-serif italic">of</span> Economics
        </h1>
        <p className="text-vintage-400 font-body text-lg max-w-2xl mx-auto border-t border-b border-vintage-700/50 py-4">
          Explore the fundamental forces that shape our world through the lens of Gregory Mankiw.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CURRICULUM.map((section) => (
          <div 
            key={section.id}
            onClick={() => handleSectionClick(section)}
            className="group relative h-96 cursor-pointer overflow-hidden rounded-lg shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-vintage-gold/20"
          >
            {/* Background Image with Filter */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 sepia brightness-50 contrast-125"
              style={{ backgroundImage: `url(${section.image})` }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-vintage-900 via-vintage-900/60 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="text-vintage-gold mb-4 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {getSectionIcon(section.id)}
              </div>
              <h2 className="font-display text-3xl text-vintage-100 mb-2 border-l-4 border-vintage-gold pl-4 transition-all duration-300 group-hover:border-vintage-100">
                {section.title}
              </h2>
              <p className="font-body text-vintage-300 text-sm max-w-md opacity-0 transform translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                {section.description}
              </p>
              
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-vintage-500 flex items-center justify-center text-vintage-400 group-hover:bg-vintage-gold group-hover:text-vintage-900 group-hover:border-transparent transition-all duration-300">
                <ChevronRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSection = () => {
    if (!activeSection) return null;

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
        <button 
          onClick={goBack} 
          className="mb-8 flex items-center gap-2 text-vintage-400 hover:text-vintage-gold transition-colors font-display tracking-widest text-sm uppercase"
        >
          <ChevronRight className="rotate-180" size={16} /> Back to Home
        </button>

        <div className="mb-12 border-b border-vintage-700 pb-8">
          <h1 className="font-display text-5xl text-vintage-100 mb-4">{activeSection.title}</h1>
          <p className="font-body text-vintage-300 text-lg italic">{activeSection.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeSection.topics.map((topic) => (
            <div key={topic.id} className="bg-vintage-800 rounded-sm border border-vintage-700 p-6 shadow-lg flex flex-col">
              <h3 className="font-display text-xl text-vintage-gold mb-6 pb-2 border-b border-vintage-700/50">
                {topic.title}
              </h3>
              <ul className="space-y-3 flex-1">
                {topic.subTopics.map((sub) => (
                  <li key={sub.id}>
                    <button
                      onClick={() => handleTopicClick(sub)}
                      className="w-full text-left group flex items-start justify-between p-2 rounded hover:bg-vintage-700 transition-colors"
                    >
                      <span className="text-vintage-300 font-body text-sm group-hover:text-vintage-100 transition-colors">
                        {sub.title}
                      </span>
                      <ChevronRight size={14} className="mt-1 text-vintage-600 group-hover:text-vintage-gold opacity-0 group-hover:opacity-100 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-vintage-900 text-vintage-100 selection:bg-vintage-gold selection:text-vintage-900">
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-noise z-0"></div>
      
      <div className="relative z-10">
        {view === AppState.HOME && renderHome()}
        {view === AppState.SECTION && renderSection()}
        {view === AppState.TOPIC && activeTopic && (
          <LessonView topic={activeTopic} onBack={goBack} />
        )}
      </div>

      <AIChat />
    </div>
  );
};

export default App;
