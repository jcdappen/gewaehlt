
import React, { useState } from 'react';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-slate-900 to-gray-800">
      <div className="max-w-xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-300 mb-4 font-serif">
          Entdecke, wer dich wirklich gewählt hat.
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8">
          Manchmal fühlen wir uns von der Welt übersehen. Doch es gibt eine Wahl, die alles verändert. Beantworte ein paar Fragen und beginne eine unerwartete Reise.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dein Vorname"
            className="w-full sm:w-auto flex-grow px-6 py-3 text-lg bg-slate-800 border-2 border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none transition duration-300 text-white"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 text-lg font-bold text-slate-900 bg-amber-400 rounded-lg hover:bg-amber-300 transition-transform duration-300 transform hover:scale-105 disabled:bg-slate-500 disabled:cursor-not-allowed"
            disabled={!name.trim()}
          >
            Reise starten
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeScreen;
