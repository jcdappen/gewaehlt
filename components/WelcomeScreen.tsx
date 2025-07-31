
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
    <div className="flex flex-col items-center justify-center h-full text-center p-8 text-white animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
        Treffe deine Wahl
      </h1>
      <p className="text-xl md:text-2xl font-light mb-12">
        Entdecke, wer dich wirklich gewählt hat
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col items-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Wie ist dein Name?"
          className="w-full px-6 py-4 mb-6 text-center text-lg bg-white/20 placeholder-white/70 rounded-full border-2 border-transparent focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition duration-300"
          required
        />
        <button
          type="submit"
          className="px-12 py-4 bg-white text-slate-900 font-bold text-lg rounded-full transform hover:scale-105 transition-transform duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!name.trim()}
        >
          Starten
        </button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
