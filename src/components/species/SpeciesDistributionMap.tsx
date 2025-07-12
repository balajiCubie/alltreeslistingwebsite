import React from 'react';

interface SpeciesDistributionMapProps {
  region: string; // This could be more complex, e.g., an array of coordinates or region IDs
}

const SpeciesDistributionMap: React.FC<SpeciesDistributionMapProps> = ({ region }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Distribution Map</h2>
      <div className="h-64 bg-gray-200 flex items-center justify-center rounded-md text-gray-600">
        <p>Interactive map or static distribution overlay for: {region}</p>
        {/* Placeholder for map component */}
      </div>
      <p className="mt-2 text-sm text-gray-500">Native regions highlighted.</p>
      {/* Possibly links to region pages */}
    </section>
  );
};

export default SpeciesDistributionMap;
