import React from 'react';

interface SortSelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

const SortSelect: React.FC<SortSelectProps> = ({ options, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
        Sort By:
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;
