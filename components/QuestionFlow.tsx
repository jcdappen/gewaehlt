import React, { useState } from 'react';
import type { AgeGroup } from '../types';
import { questionsByAge, ANSWER_OPTIONS } from '../constants';
import AnimatedContainer from './AnimatedContainer';
import GlassCard from './GlassCard';
import ProgressBar from './ProgressBar';

interface QuestionFlowProps {
  ageGroup: AgeGroup;
  onComplete: () => void;
}

const QuestionFlow: React.FC<QuestionFlowProps> = ({ ageGroup, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const questions = questionsByAge[ageGroup];
  const currentQuestion = questions[currentIndex];

  const handleAnswer = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  return (
    <AnimatedContainer className="w-full">
      <GlassCard>
        <ProgressBar current={currentIndex + 1} total={questions.length} />
        <div key={currentIndex} className="animate-[fadeIn_0.5s_ease-in-out]">
            <h2 className="text-2xl font-semibold mb-8 min-h-[100px] flex items-center justify-center text-white">
                {currentQuestion.question}
            </h2>
            <div className="flex flex-col space-y-3">
            {ANSWER_OPTIONS.map((option, index) => (
                <button
                key={index}
                onClick={handleAnswer}
                className="bg-white/10 border border-white/20 rounded-xl py-3 px-5 text-white font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 min-h-[44px]"
                >
                {option}
                </button>
            ))}
            </div>
        </div>
      </GlassCard>
    </AnimatedContainer>
  );
};

export default QuestionFlow;