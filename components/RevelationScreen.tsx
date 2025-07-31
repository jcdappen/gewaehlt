import React, { useState } from 'react';
import { Answer } from '../types';
import { ShareIcon, PrayerIcon } from './icons';

interface RevelationScreenProps {
  name: string;
  message: string;
  answers: Answer[];
}

const getDynamicVerse = (answers: Answer[]): { verse: string; text: string } | null => {
  if (answers.some(a => a.questionId === 'superpower' && a.answerId === 'healing') || answers.some(a => a.questionId === 'lifestyle' && a.answerId === 'family')) {
    return { verse: '1. Petrus 2,9', text: 'Ihr aber seid ein auserwähltes Geschlecht, eine königliche Priesterschaft, ein heiliges Volk...' };
  }
  if (answers.some(a => a.questionId === 'lifestyle' && a.answerId === 'artist')) {
    return { verse: 'Psalm 139,14', text: 'Ich danke dir dafür, dass ich wunderbar gemacht bin; wunderbar sind deine Werke; das erkennt meine Seele.' };
  }
  if (answers.some(a => a.questionId === 'job' && a.answerId === 'startup') || answers.some(a => a.questionId === 'lifestyle' && a.answerId === 'adventurer')) {
    return { verse: 'Jeremia 29,11', text: 'Denn ich weiß wohl, was ich für Gedanken über euch habe, spricht der HERR: Gedanken des Friedens und nicht des Leides, dass ich euch gebe Zukunft und Hoffnung.' };
  }
  return null;
};

const RevelationScreen: React.FC<RevelationScreenProps> = ({ name, message, answers }) => {
  const [isPrayerModalOpen, setIsPrayerModalOpen] = useState(false);
  const dynamicVerse = getDynamicVerse(answers);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Gott hat mich gewählt!',
        text: `Ich habe gerade eine coole Entdeckung gemacht! Finde heraus, warum Gott dich gewählt hat:`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Teilen wird von deinem Browser nicht unterstützt.');
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-full p-4 md:p-8 animate-fade-in-slow">
          <div className="relative max-w-3xl w-full bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-white/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-400 rounded-full blur-3xl opacity-70"></div>
              
              <h1 className="font-black text-4xl md:text-6xl text-center text-amber-300 mb-4 tracking-tighter drop-shadow-lg font-serif">
                  GOTT HAT DICH GEWÄHLT!
              </h1>
              <h2 className="text-2xl md:text-3xl text-center text-white mb-8">
                  {name}, Gott hat DICH gewählt!
              </h2>
              
              <div className="text-center bg-white/10 p-6 rounded-xl mb-8" aria-live="polite" aria-atomic="true">
                  <p className="text-lg md:text-xl text-amber-100 leading-relaxed">{message}</p>
              </div>
              
              <div className="space-y-6 text-center border-t border-white/20 pt-8">
                  <div className="italic">
                      <p className="text-md text-white/90">"Nicht ihr habt mich erwählt, sondern ich habe euch erwählt und bestimmt, dass ihr hingeht und Frucht bringt und eure Frucht bleibt."</p>
                      <p className="font-semibold text-amber-300 mt-1">Johannes 15,16</p>
                  </div>
                  {dynamicVerse && (
                      <div className="italic bg-white/5 p-4 rounded-lg">
                          <p className="text-md text-white/90">"{dynamicVerse.text}"</p>
                          <p className="font-semibold text-amber-300 mt-1">{dynamicVerse.verse}</p>
                      </div>
                  )}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a href="https://www.google.com/search?q=christliche+Gemeinde+in+meiner+Nähe" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 bg-amber-400 text-slate-900 font-bold rounded-full text-center transition hover:bg-amber-300">
                      Mehr erfahren
                  </a>
                  <button onClick={handleShare} className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white/20 text-white font-bold rounded-full text-center transition hover:bg-white/30">
                      <ShareIcon className="w-5 h-5" /> Teilen
                  </button>
                   <button onClick={() => setIsPrayerModalOpen(true)} className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white/20 text-white font-bold rounded-full text-center transition hover:bg-white/30">
                      <PrayerIcon className="w-5 h-5" /> Gebet
                  </button>
              </div>
          </div>
      </div>
      {isPrayerModalOpen && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setIsPrayerModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="prayer-title"
        >
          <div 
            className="relative max-w-lg w-full bg-slate-800 rounded-2xl p-8 text-white shadow-2xl border border-white/20"
            onClick={e => e.stopPropagation()}
          >
            <h3 id="prayer-title" className="text-2xl font-bold text-amber-300 mb-4 font-serif">Ein Gebet für dich</h3>
            <p className="mb-6 leading-relaxed">
              Lieber Gott, danke, dass du mich gewählt hast. Danke, dass du einen Plan für mein Leben hast. Hilf mir, dich besser kennenzulernen und den Weg zu gehen, den du für mich vorbereitet hast. Amen.
            </p>
            <button 
              onClick={() => setIsPrayerModalOpen(false)}
              className="w-full px-6 py-3 bg-amber-400 text-slate-900 font-bold rounded-full text-center transition hover:bg-amber-300"
              aria-label="Gebetsfenster schließen"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RevelationScreen;