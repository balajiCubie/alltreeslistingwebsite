import React from 'react';

interface FilterBarProps {
  onFilterChange: (filters: Record<string, string[]>) => void;
  filters: Record<string, string[]>; // Add filters prop
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
  cardSize: string;
  setCardSize: React.Dispatch<React.SetStateAction<string>>;
}

const FilterBar: React.FC<FilterBarProps> = ({
  onFilterChange,
  filters, // Destructure filters
  viewMode,
  setViewMode,
  cardSize,
  setCardSize,
}) => {
  return (
    <div className="space-y-4">
      {/* Example filter select */}
      <div>
        <label htmlFor="family" className="block text-sm font-medium mb-1">Family</label>
        <select id="family" className="w-full border rounded p-2">
          <option>All Families</option>
          <option>Meliaceae</option>
          <option>Fabaceae</option>
          {/* ... */}
        </select>
      </div>

      {/* Example filter select for Region */}
      <div>
        <label htmlFor="region" className="block text-sm font-medium mb-1">Region</label>
        <select
          id="region"
          className="w-full border rounded p-2"
          onChange={(e) => onFilterChange({ ...filters, region: [e.target.value] })} // Assuming 'filters' is available in scope or passed down
        >
          <option value="">All Regions</option>
          <option value="India">India</option>
          <option value="North America">North America</option>
          {/* Add more regions */}
        </select>
      </div>

      {/* Example filter select for Status */}
      <div>
        <label htmlFor="status" className="block text-sm font-medium mb-1">Status</label>
        <select
          id="status"
          className="w-full border rounded p-2"
          onChange={(e) => onFilterChange({ ...filters, status: [e.target.value] })} // Assuming 'filters' is available in scope or passed down
        >
          <option value="">All Statuses</option>
          <option value="Least Concern">Least Concern</option>
          <option value="Endangered">Endangered</option>
          {/* Add more statuses */}
        </select>
      </div>

      {/* View Mode Toggle */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">View Mode</label>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1 rounded-md text-sm ${
              viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1 rounded-md text-sm ${
              viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* Card Size Selector */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Card Size</label>
        <div className="flex space-x-2">
          <button
            onClick={() => setCardSize('small')}
            className={`px-3 py-1 rounded-md text-sm ${
              cardSize === 'small' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Small
          </button>
          <button
            onClick={() => setCardSize('medium')}
            className={`px-3 py-1 rounded-md text-sm ${
              cardSize === 'medium' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Medium
          </button>
          <button
            onClick={() => setCardSize('large')}
            className={`px-3 py-1 rounded-md text-sm ${
              cardSize === 'large' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Large
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
