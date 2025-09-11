import React, { useState } from 'react';
import type { AgeGroup, AppState } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import AgeSelectionScreen from './components/AgeSelectionScreen';
import NameInputScreen from './components/NameInputScreen';
import QuestionFlow from './components/QuestionFlow';
import TransitionScreen from './components/TransitionScreen';
import GodsLetterScreen from './components/GodsLetterScreen';
import CallToActionScreen from './components/CallToActionScreen';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [ageGroup, setAgeGroup] = useState<AgeGroup | null>(null);
  const [name, setName] = useState<string>('');

  const handleStart = () => setAppState('age-selection');
  
  const handleAgeSelect = (selectedAge: AgeGroup) => {
    setAgeGroup(selectedAge);
    setAppState('name-input');
  };

  const handleNameSubmit = (submittedName: string) => {
    setName(submittedName);
    setAppState('question-flow');
  };

  const handleQuestionsComplete = () => setAppState('transition');
  const handleTransitionComplete = () => setAppState('letter');

  const handleLetterComplete = async () => {
    try {
      // Fire-and-forget call to the Netlify function to increment the counter.
      // We don't need to wait for the response to proceed.
      // The user experience isn't blocked if this fails.
      await fetch('/.netlify/functions/increment-counter', { method: 'POST' });
    } catch (error) {
      console.error("Failed to increment usage counter:", error);
    }
    setAppState('cta');
  };

  const handleRestart = () => {
    setAgeGroup(null);
    setName('');
    setAppState('welcome');
  };

  const renderContent = () => {
    switch (appState) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStart} />;
      case 'age-selection':
        return <AgeSelectionScreen onSelect={handleAgeSelect} />;
      case 'name-input':
        return <NameInputScreen onSubmit={handleNameSubmit} />;
      case 'question-flow':
        return ageGroup ? <QuestionFlow ageGroup={ageGroup} onComplete={handleQuestionsComplete} /> : null;
      case 'transition':
        return <TransitionScreen onComplete={handleTransitionComplete} />;
      case 'letter':
        return <GodsLetterScreen name={name} onComplete={handleLetterComplete} />;
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
