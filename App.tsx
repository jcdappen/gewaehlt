
import React, { useState, useEffect } from 'react';
import { AppScreen, Answers, AnswerTraits, PersonalityTrait } from './types';
import { QUESTIONS } from './constants';
import { generatePersonalizedReason } from './services/geminiService';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import TransitionScreen from './components/TransitionScreen';
import RevelationScreen from './components/RevelationScreen';

const App: React.FC = () => {
  const [screen, setScreen] = useState<AppScreen>(AppScreen.Welcome);
  const [userName, setUserName] = useState<string>('');
  const [answers, setAnswers] = useState<Answers>({});
  const [answerTraits, setAnswerTraits] = useState<AnswerTraits>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [geminiReason, setGeminiReason] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFading, setIsFading] = useState<boolean>(false);

  const switchScreen = (newScreen: AppScreen) => {
    setIsFading(true);
    setTimeout(() => {
        setScreen(newScreen);
        setIsFading(false);
    }, 500);
  };

  const handleStart = (name: string) => {
    setUserName(name);
    switchScreen(AppScreen.Question);
  };

  const handleAnswer = (questionId: string, answerText: string, trait: PersonalityTrait) => {
    const newAnswers = { ...answers, [QUESTIONS[currentQuestionIndex].category]: answerText };
    const newAnswerTraits = { ...answerTraits, [questionId]: trait };
    
    setAnswers(newAnswers);
    setAnswerTraits(newAnswerTraits);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setIsFading(true);
      setTimeout(() => {
          setCurrentQuestionIndex(prev => prev + 1);
          setIsFading(false);
      }, 500);
    } else {
      setIsLoading(true);
      switchScreen(AppScreen.Transition);
    }
  };

  useEffect(() => {
    if (screen === AppScreen.Transition && isLoading) {
      const fetchReason = async () => {
        const reason = await generatePersonalizedReason(userName, answers);
        setGeminiReason(reason);
        setIsLoading(false);
        // Add a delay to let the user read the transition message
        setTimeout(() => {
            switchScreen(AppScreen.Revelation);
        }, 3000);
      };

      fetchReason();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, isLoading]);

  const renderScreen = () => {
    switch (screen) {
      case AppScreen.Welcome:
        return <WelcomeScreen onStart={handleStart} />;
      case AppScreen.Question:
        return (
          <QuestionScreen
            question={QUESTIONS[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        );
      case AppScreen.Transition:
        return <TransitionScreen />;
      case AppScreen.Revelation:
        return (
          <RevelationScreen
            userName={userName}
            geminiReason={geminiReason}
            answerTraits={answerTraits}
          />
        );
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <div className={`transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        <style>{`
          @keyframes fade-in-up {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
              animation: fade-in-up 0.8s ease-out forwards;
          }
        `}</style>
      {renderScreen()}
    </div>
  );
};

export default App;
