import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => (
  <div 
    className={`bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 rounded-2xl p-6 md:p-8 text-center text-white ${className}`}
  >
    {children}
  </div>
);

export default GlassCard;