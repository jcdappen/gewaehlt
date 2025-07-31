import React from 'react';
import { Question, Option } from '../types';

interface QuestionScreenProps {
  questionData: Question;
  onAnswer: (questionId: string, answerId: string) => void;
  progress: number;
}

const QuestionCard: React.FC<{ option: Option, onClick: () => void }> = ({ option, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white/10 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105 transform"
  >
    <img src={option.image} alt={option.text} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-white text-center">{option.text}</h3>
    </div>
  </div>
);

const QuestionScreen: React.FC<QuestionScreenProps> = ({ questionData, onAnswer, progress }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 animate-fade-in">
      <div 
        role="progressbar" 
        aria-valuenow={progress} 
        aria-valuemin={0} 
        aria-valuemax={100} 
        aria-label={`Fortschritt: ${Math.round(progress)}%`}
        className="w-full bg-white/20 rounded-full h-2.5 mb-8"
      >
        <div className="bg-amber-400 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10 font-serif">
        {questionData.question}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {questionData.options.map(option => (
          <QuestionCard 
            key={option.id}
            option={option}
            onClick={() => onAnswer(questionData.id, option.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen;