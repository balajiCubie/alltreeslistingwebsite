import React from 'react';

interface FilterTagProps {
  label: string;
  onRemove: () => void;
}

const FilterTag: React.FC<FilterTagProps> = ({ label, onRemove }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
      {label}
      <button
        type="button"
        className="ml-2 -mr-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-green-600 hover:bg-green-200 focus:outline-none focus:bg-green-200"
        onClick={onRemove}
      >
        <span className="sr-only">Remove filter {label}</span>
        <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </span>
  );
};

export default FilterTag;
