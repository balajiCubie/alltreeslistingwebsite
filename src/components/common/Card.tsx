import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  icon?: React.ReactNode; // For iconography
  description?: string;
  href?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ title, icon, description, href, onClick }) => {
  const content = (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 h-full">
      {icon && <div className="text-4xl text-green-600 mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-gray-700 text-sm">{description}</p>}
    </div>
  );

  if (href) {
    return <Link href={href} className="block">{content}</Link>;
  }

  return (
    <div onClick={onClick} className="cursor-pointer">
      {content}
    </div>
  );
};
