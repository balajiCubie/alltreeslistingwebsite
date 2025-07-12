'use client';

import React from 'react';
import { RegionMap } from '../maps/RegionMap';
import { MapMarker } from '../maps/MapMarker';
import { Button } from '../common/Button';

interface InteractiveMapProps {
  regionsData: Array<{
    id: string;
    name: string;
    speciesCount: number;
    coordinates: [number, number];
  }>;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ regionsData }) => {
  const handleRegionClick = (regionId: string) => {
    console.log(`Clicked on region: ${regionId}`);
    // In a real app, you'd navigate or filter data based on the region
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Explore Trees by Region</h2>
        <div className="relative mb-8">
          <RegionMap regions={regionsData} onRegionClick={handleRegionClick} />
          {/* Example of using MapMarker, you'd dynamically generate these */}
          {regionsData.map(region => (
            <MapMarker
              key={region.id}
              coordinates={region.coordinates}
              label={`${region.name} (${region.speciesCount})`}
              onClick={() => handleRegionClick(region.id)}
            />
          ))}
        </div>
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="secondary">Filter by Climate Zone</Button>
          <Button variant="secondary">Filter by Status</Button>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Note: On mobile, a region dropdown might be used instead of the interactive map for better usability.
          </p>
        </div>
      </div>
    </section>
  );
};
