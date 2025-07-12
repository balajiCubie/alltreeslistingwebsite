import React from 'react';

interface RegionMapProps {
  regionName: string;
  mapImageUrl: string; // URL to an image of the map for the region
  description?: string;
}

const RegionMap: React.FC<RegionMapProps> = ({ regionName, mapImageUrl, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Distribution in {regionName}</h2>
      <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
        {/* In a real application, this would be an interactive map component (e.g., Leaflet, Google Maps) */}
        {/* For now, we'll use a static image */}
        <img src={mapImageUrl} alt={`Map of ${regionName}`} className="w-full h-full object-cover" />
      </div>
      {description && <p className="text-gray-700">{description}</p>}
    </div>
  );
};

export default RegionMap;
