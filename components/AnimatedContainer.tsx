import React, { useState, useEffect } from 'react';

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedContainer;
