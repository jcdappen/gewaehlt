import React from 'react';

interface AnimatedButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick, children, className = '' }) => (
  <button
    onClick={onClick}
    className={`bg-white hover:bg-gray-100 text-red-900 font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 min-h-[44px] ${className}`}
  >
    {children}
  </button>
);

export default AnimatedButton;