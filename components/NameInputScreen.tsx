import React, { useState } from 'react';
import AnimatedContainer from './AnimatedContainer';
import GlassCard from './GlassCard';

interface NameInputScreenProps {
  onSubmit: (name: string) => void;
}

const NameInputScreen: React.FC<NameInputScreenProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <AnimatedContainer>
      <GlassCard>
        <h2 className="text-3xl font-bold mb-8 text-white">Wie ist dein Name?</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dein Vorname"
            aria-label="Dein Vorname"
            className="w-full bg-white/20 border border-white/30 rounded-xl py-3 px-5 text-white text-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            autoFocus
          />
          <button
            type="submit"
            disabled={!name.trim()}
            className="bg-white hover:bg-gray-100 text-red-900 font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            Weiter
          </button>
        </form>
      </GlassCard>
    </AnimatedContainer>
  );
};

export default NameInputScreen;
