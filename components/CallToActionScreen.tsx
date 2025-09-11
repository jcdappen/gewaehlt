import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import GlassCard from './GlassCard';
import ShareButtons from './ShareButtons';

interface CallToActionScreenProps {
  onRestart: () => void;
}

const CallToActionScreen: React.FC<CallToActionScreenProps> = ({ onRestart }) => {
  return (
    <AnimatedContainer>
      <GlassCard>
        <h2 className="text-3xl font-bold mb-6 text-white">Wie geht es weiter?</h2>
        <div className="flex flex-col space-y-4 mb-8">
          <a 
            href="https://www.gemeinde-konkordia.de/gewaehlt#start" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full block bg-white hover:bg-gray-100 text-red-900 text-center font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 min-h-[44px]"
          >
            Möchtest du mehr erfahren?
          </a>
          <a 
            href="https://www.gemeinde-konkordia.de" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full block bg-white/10 border border-white/20 text-white text-center font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 min-h-[44px]"
          >
            Kontakt zur Gemeinde Konkordia
          </a>
        </div>
        <div className="mb-6">
          <p className="text-gray-200 mb-4">Teile diese Erfahrung:</p>
          <ShareButtons />
        </div>
        <button
          onClick={onRestart}
          className="text-gray-300 hover:text-white transition-colors font-semibold"
        >
          Nochmal starten
        </button>
      </GlassCard>
    </AnimatedContainer>
  );
};

export default CallToActionScreen;