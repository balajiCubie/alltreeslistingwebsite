import React from 'react';

interface FilterSelectProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label.toLowerCase().replace(/\s/g, '-')} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <select
        id={label.toLowerCase().replace(/\s/g, '-')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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

export default FilterSelect;
