import React from 'react';

const MapLegend: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-8">
      <h3 className="text-lg font-semibold mb-4">Map Legend</h3>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 bg-[#4CAF50] rounded-sm mr-2"></div>
        <span>Region with tree data</span>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-6 h-6 bg-[#EEE] rounded-sm mr-2"></div>
        <span>Region without tree data</span>
      </div>
      {/* Add more legend items or toggle controls here */}
      <p className="text-sm text-gray-600">
        Darker shades could indicate more species (future enhancement).
      </p>
    </div>
  );
};

export default MapLegend;
