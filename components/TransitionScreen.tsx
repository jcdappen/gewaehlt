
import React, { useEffect } from 'react';

interface TransitionScreenProps {
  onComplete: () => void;
}

const TransitionScreen: React.FC<TransitionScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000); // 4 second delay

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 text-white animate-fade-in-slow">
      <p className="text-2xl md:text-3xl font-light max-w-2xl">
        Aber weißt du was? Es gibt jemanden, der dich schon längst gewählt hat...
      </p>
    </div>
  );
};

export default TransitionScreen;
