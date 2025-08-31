import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import GlassCard from './GlassCard';
import AnimatedButton from './AnimatedButton';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <AnimatedContainer>
      <GlassCard>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
          Wer hat dich schon mal gewählt?
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Entdecke eine Wahrheit, die dein Leben verändert
        </p>
        <AnimatedButton onClick={onStart}>
          Starten
        </AnimatedButton>
      </GlassCard>
    </AnimatedContainer>
  );
};

export default WelcomeScreen;