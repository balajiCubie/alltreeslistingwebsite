import React from 'react';

interface CompareButtonProps {
  onClick: () => void;
  isCompared: boolean;
}

const CompareButton: React.FC<CompareButtonProps> = ({ onClick, isCompared }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full ${isCompared ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 hover:text-white transition-colors duration-200`}
      title={isCompared ? "Remove from Compare" : "Add to Compare"}
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
      </svg>
    </button>
  );
};

export default CompareButton;
