import React, { useState, useEffect } from 'react';

interface TransitionScreenProps {
  onComplete: () => void;
}

const TransitionScreen: React.FC<TransitionScreenProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // FIX: Changed NodeJS.Timeout to ReturnType<typeof setTimeout> for browser compatibility.
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setStep(1), 500));
    timers.push(setTimeout(() => setStep(2), 2500));
    timers.push(setTimeout(onComplete, 5000));
    
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center text-white min-h-[300px]">
      <p className={`text-2xl text-gray-200 transition-opacity duration-1000 ${step >= 1 ? 'opacity-80' : 'opacity-0'}`}>
        Aber weißt du was? Es gibt jemanden, der sagt...
      </p>
      <h1 className={`text-5xl md:text-6xl font-bold mt-4 text-white drop-shadow-lg transition-all duration-1000 ease-in-out ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        ICH HABE DICH GEWÄHLT!
      </h1>
    </div>
  );
};

export default TransitionScreen;