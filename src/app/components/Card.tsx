import React from 'react';

interface CardProps {
  text: string;
  icon: any;  // Tipo "any" pode ser trocado para um tipo mais específico, como React.ReactNode, dependendo do ícone.
}

const Card: React.FC<CardProps> = ({ text, icon }) => {
  return (
    <div className='w-[400px] h-[50px] border border-yellow bg-vermelho flex items-center justify-center p-2 smm:h-[60px]  smm:w-[300px]'>
      <img src={icon} alt="Icon" className='w-6 h-6 mr-4' /> 
      <span>{text}</span>
    </div>
  );
};

export default Card;
