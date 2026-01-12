import React from 'react';

export const Gunungan: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 150" className={className} fill="currentColor">
    <path d="M50 5 C 20 50, 5 80, 5 145 L 95 145 C 95 80, 80 50, 50 5 Z" fillOpacity="0.1" />
    <path d="M50 10 C 30 50, 15 80, 15 140 L 85 140 C 85 80, 70 50, 50 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
    {/* Stylized tree inside */}
    <path d="M50 140 L 50 40" stroke="currentColor" strokeWidth="0.5" />
    <path d="M50 60 L 30 80 M 50 60 L 70 80" stroke="currentColor" strokeWidth="0.5" />
    <path d="M50 90 L 25 110 M 50 90 L 75 110" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

export const BatikPattern: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${className}`} 
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5E3C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}
  />
);

export const CornerFloral: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right', className?: string }> = ({ position, className }) => {
  const rotation = {
    'top-left': 'rotate(0)',
    'top-right': 'rotate(90deg)',
    'bottom-right': 'rotate(180deg)',
    'bottom-left': 'rotate(270deg)',
  };

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`absolute w-32 h-32 pointer-events-none text-java-gold/40 ${className}`} 
      style={{ 
        [position.split('-')[0]]: 0, 
        [position.split('-')[1]]: 0, 
        transform: rotation[position] 
      }}
    >
      <path d="M0 0 C 50 0, 80 20, 100 100 L 90 100 C 70 30, 40 10, 0 10 Z" fill="currentColor" />
      <circle cx="20" cy="20" r="5" fill="currentColor" className="animate-pulse" />
      <circle cx="40" cy="15" r="3" fill="currentColor" />
      <circle cx="15" cy="40" r="3" fill="currentColor" />
    </svg>
  );
};

export const PetalParticle: React.FC<{ delay: number, left: string }> = ({ delay, left }) => (
  <div 
    className="absolute top-[-10px] w-3 h-3 bg-anime-pink/60 rounded-full blur-[1px] animate-[float_8s_ease-in-out_infinite]"
    style={{ 
      left, 
      animationDelay: `${delay}s`,
      animationDuration: `${5 + Math.random() * 5}s`
    }}
  />
);