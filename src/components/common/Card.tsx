import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bg-white rounded shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-[5px] ${className}`} 
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
