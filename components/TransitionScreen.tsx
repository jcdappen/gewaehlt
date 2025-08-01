
import React from 'react';

const TransitionScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-center bg-slate-900">
      <div className="animate-pulse">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-300 font-serif animate-fade-in-out">
          Aber weißt du was? Es gibt jemanden, der dich schon längst gewählt hat...
        </h2>
      </div>
       <style>{`
        @keyframes fade-in-out {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-fade-in-out {
            animation: fade-in-out 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TransitionScreen;
