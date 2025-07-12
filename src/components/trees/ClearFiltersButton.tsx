import React from 'react';

interface ClearFiltersButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const ClearFiltersButton: React.FC<ClearFiltersButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300 ${
        disabled
          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
          : 'bg-red-500 hover:bg-red-600 text-white'
      }`}
    >
      Clear Filters
    </button>
  );
};

export default ClearFiltersButton;
