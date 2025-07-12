import React from 'react';

interface TagProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ children, onClick, className }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 ${
        onClick ? 'cursor-pointer hover:bg-gray-300' : ''
      } ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Tag;
