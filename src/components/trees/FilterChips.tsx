import React from 'react';

interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

const FilterChip: React.FC<FilterChipProps> = ({ label, onRemove }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
      {label}
      <button
        type="button"
        className="ml-2 -mr-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-green-600 hover:bg-green-200 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
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

interface FilterChipsProps {
  activeFilters?: { label: string; value: string; type: string }[];
  onRemoveFilter?: (filter: { label: string; value: string; type: string }) => void;
}

const FilterChips: React.FC<FilterChipsProps> = ({ activeFilters = [], onRemoveFilter }) => {
  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {activeFilters.map((filter) => (
        <FilterChip
          key={`${filter.type}-${filter.value}`}
          label={`${filter.label}: ${filter.value}`}
          onRemove={() => onRemoveFilter && onRemoveFilter(filter)}
        />
      ))}
    </div>
  );
};

export default FilterChips;
