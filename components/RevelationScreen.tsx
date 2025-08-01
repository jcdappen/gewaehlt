
import React from 'react';
import { AnswerTraits, PersonalityTrait } from '../types';
import { MAIN_BIBLE_VERSE, TRAIT_VERSES } from '../constants';
import ActionScreen from './ActionScreen';

interface RevelationScreenProps {
  userName: string;
  geminiReason: string;
  answerTraits: AnswerTraits;
}

const determineDominantTrait = (traits: AnswerTraits): PersonalityTrait => {
    const counts: Record<string, number> = {};
    const traitValues = Object.values(traits);
    
    if (traitValues.length === 0) return 'community';

    for (const trait of traitValues) {
        counts[trait] = (counts[trait] || 0) + 1;
    }

    const dominantTrait = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    return dominantTrait as PersonalityTrait;
};


const RevelationScreen: React.FC<RevelationScreenProps> = ({ userName, geminiReason, answerTraits }) => {
    const dominantTrait = determineDominantTrait(answerTraits);
    const specificVerse = TRAIT_VERSES[dominantTrait];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-slate-900 overflow-hidden">
           <div className="absolute inset-0 bg-grid-amber-900/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
            <style>{`
                .bg-grid-amber-900\\/10 {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(252 211 77 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
                }
                @keyframes glow {
                    0% { text-shadow: 0 0 5px #fcd34d, 0 0 10px #fcd34d, 0 0 20px #f59e0b; }
                    100% { text-shadow: 0 0 10px #fcd34d, 0 0 20px #f59e0b, 0 0 40px #d97706; }
                }
                .animate-glow {
                    animation: glow 2s ease-in-out infinite alternate;
                }
            `}</style>
            <div className="relative text-center max-w-3xl mx-auto z-10 animate-fade-in-up">
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white font-serif drop-shadow-lg">
                   <span className="text-amber-300 animate-glow">{userName}</span>,
                </h1>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-amber-300 font-serif drop-shadow-lg mb-8 animate-glow">
                    GOTT HAT DICH GEWÄHLT!
                </h2>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-2xl border border-amber-500/20">
                    <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                        {geminiReason}
                    </p>

                    <div className="space-y-6 text-left">
                        <div className="border-l-4 border-amber-400 pl-4">
                            <p className="italic text-slate-300">"{MAIN_BIBLE_VERSE.text}"</p>
                            <p className="text-right text-amber-400 font-semibold mt-1">{MAIN_BIBLE_VERSE.source}</p>
                        </div>
                         <div className="border-l-4 border-slate-500 pl-4">
                            <p className="italic text-slate-300">"{specificVerse.text}"</p>
                            <p className="text-right text-slate-400 font-semibold mt-1">{specificVerse.source}</p>
                        </div>
                    </div>
                </div>

                <ActionScreen />
            </div>
        </div>
    );
};

export default RevelationScreen;
