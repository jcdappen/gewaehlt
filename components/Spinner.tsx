
import React from 'react';

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500"></div>
      <p className="text-white text-lg font-medium">Deine persönliche Nachricht wird erstellt...</p>
    </div>
  );
};

export default Spinner;
