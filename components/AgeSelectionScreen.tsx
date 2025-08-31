import React from 'react';
import type { AgeGroup } from '../types';
import AnimatedContainer from './AnimatedContainer';
import GlassCard from './GlassCard';

interface AgeSelectionScreenProps {
  onSelect: (ageGroup: AgeGroup) => void;
}

const AgeSelectionScreen: React.FC<AgeSelectionScreenProps> = ({ onSelect }) => {
  const ageGroups: { label: string; value: AgeGroup }[] = [
    { label: "Unter 20 Jahren", value: 'under20' },
    { label: "20-30 Jahre", value: '20-30' },
    { label: "Über 30 Jahre", value: 'over30' },
  ];

  return (
    <AnimatedContainer>
      <GlassCard>
        <h2 className="text-3xl font-bold mb-8 text-white">Wie alt bist du?</h2>
        <div className="flex flex-col space-y-4">
          {ageGroups.map((group) => (
            <button
              key={group.value}
              onClick={() => onSelect(group.value)}
              className="bg-white/10 border border-white/20 rounded-xl py-4 px-6 text-white text-lg font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105 min-h-[44px]"
            >
              {group.label}
            </button>
          ))}
        </div>
      </GlassCard>
    </AnimatedContainer>
  );
};

export default AgeSelectionScreen;