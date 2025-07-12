import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'info';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, color = 'primary', className }) => {
  const colorStyles = {
    primary: 'bg-green-100 text-green-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorStyles[color]} ${className || ''}`}
    >
      {children}
    </span>
  );
};

export default Badge;
