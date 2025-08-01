
import React from 'react';
import { Question, PersonalityTrait, QuestionOption } from '../types';
import ProgressBar from './ProgressBar';

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (questionId: string, answerText: string, trait: PersonalityTrait) => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({ question, questionNumber, totalQuestions, onAnswer }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 pt-16 sm:p-8 bg-slate-900">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-8 px-4">
            <p className="text-amber-400 font-bold mb-2 text-center">{question.category}</p>
            <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-6 font-serif">
                {question.questionText}
            </h2>
            <ProgressBar current={questionNumber} total={totalQuestions} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {question.options.map((option: QuestionOption) => (
            <button
              key={option.text}
              onClick={() => onAnswer(question.id, option.text, option.trait)}
              className="group relative block w-full aspect-[4/5] rounded-xl overflow-hidden text-white focus:outline-none focus:ring-4 focus:ring-amber-400 focus:ring-opacity-75"
            >
              <img
                src={option.image}
                alt={option.text}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <h3 className="text-lg md:text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-amber-300">{option.text}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
