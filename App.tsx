import React, { useState } from 'react';
import type { AgeGroup, AppState } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import AgeSelectionScreen from './components/AgeSelectionScreen';
import QuestionFlow from './components/QuestionFlow';
import TransitionScreen from './components/TransitionScreen';
import GodsLetterScreen from './components/GodsLetterScreen';
import CallToActionScreen from './components/CallToActionScreen';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [ageGroup, setAgeGroup] = useState<AgeGroup | null>(null);

  const handleStart = () => setAppState('age-selection');
  
  const handleAgeSelect = (selectedAge: AgeGroup) => {
    setAgeGroup(selectedAge);
    setAppState('question-flow');
  };

  const handleQuestionsComplete = () => setAppState('transition');
  const handleTransitionComplete = () => setAppState('letter');
  const handleLetterComplete = () => setAppState('cta');

  const handleRestart = () => {
    setAgeGroup(null);
    setAppState('welcome');
  };

  const renderContent = () => {
    switch (appState) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStart} />;
      case 'age-selection':
        return <AgeSelectionScreen onSelect={handleAgeSelect} />;
      case 'question-flow':
        return ageGroup ? <QuestionFlow ageGroup={ageGroup} onComplete={handleQuestionsComplete} /> : null;
      case 'transition':
        return <TransitionScreen onComplete={handleTransitionComplete} />;
      case 'letter':
        return <GodsLetterScreen onComplete={handleLetterComplete} />;
      case 'cta':
        return <CallToActionScreen onRestart={handleRestart} />;
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4">
      <main className="z-10 w-full max-w-lg mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;