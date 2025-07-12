import React from 'react';

interface RegionMapFilterProps {
  selectedRegion: string | null;
  onSelectRegion: (region: string | null) => void;
}

const RegionMapFilter: React.FC<RegionMapFilterProps> = ({ selectedRegion, onSelectRegion }) => {
  // This is a placeholder for a more complex map component
  // In a real application, you'd integrate a library like Leaflet or Mapbox here
  const regions = ['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Oceania'];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">Filter by Region</h3>
      <div className="grid grid-cols-2 gap-2">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onSelectRegion(selectedRegion === region ? null : region)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300 ${
              selectedRegion === region
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {region}
          </button>
        ))}
      </div>
      {selectedRegion && (
        <button
          onClick={() => onSelectRegion(null)}
          className="mt-4 px-4 py-2 rounded-md text-sm font-medium bg-red-500 hover:bg-red-600 text-white transition duration-300"
        >
          Clear Region Filter
        </button>
      )}
    </div>
  );
};

export default RegionMapFilter;
