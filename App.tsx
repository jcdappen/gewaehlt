
import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import TransitionScreen from './components/TransitionScreen';
import RevelationScreen from './components/RevelationScreen';
import Spinner from './components/Spinner';
import { QUESTIONS } from './constants';
import { getPersonalizedMessage } from './services/geminiService';
import { Answer } from './types';

enum AppState {
  Welcome,
  Answering,
  Transition,
  Loading,
  Revelation,
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.Welcome);
  const [name, setName] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [personalizedMessage, setPersonalizedMessage] = useState<string>('');

  const handleStart = (userName: string) => {
    setName(userName);
    setAppState(AppState.Answering);
  };

  const handleAnswer = (questionId: string, answerId: string) => {
    const newAnswers = [...answers, { questionId, answerId }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setAppState(AppState.Transition);
    }
  };

  const handleTransitionComplete = async () => {
    setAppState(AppState.Loading);
    const message = await getPersonalizedMessage(name, answers);
    setPersonalizedMessage(message);
    setAppState(AppState.Revelation);
  };

  const renderContent = () => {
    switch (appState) {
      case AppState.Welcome:
        return <WelcomeScreen onStart={handleStart} />;
      case AppState.Answering:
        const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;
        return (
          <QuestionScreen
            questionData={QUESTIONS[currentQuestionIndex]}
            onAnswer={handleAnswer}
            progress={progress}
          />
        );
      case AppState.Transition:
        return <TransitionScreen onComplete={handleTransitionComplete} />;
      case AppState.Loading:
        return <Spinner />;
      case AppState.Revelation:
        return <RevelationScreen name={name} message={personalizedMessage} answers={answers} />;
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 min-h-screen flex items-center justify-center transition-colors duration-1000">
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        
        @keyframes fade-in-slow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-slow { animation: fade-in-slow 1.5s ease-in forwards; }
      `}</style>
      {renderContent()}
    </main>
  );
};

export default App;
