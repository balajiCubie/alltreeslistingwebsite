import React from 'react';

interface ClimateZoneFilterProps {
  selectedZone: string;
  onZoneChange: (zone: string) => void;
  zones: { value: string; label: string }[];
}

const ClimateZoneFilter: React.FC<ClimateZoneFilterProps> = ({ selectedZone, onZoneChange, zones }) => {
  return (
    <div className="climate-zone-filter p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Filter by Climate Zone</h3>
      <select
        value={selectedZone}
        onChange={(e) => onZoneChange(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      >
        <option value="">All Zones</option>
        {zones.map((zone) => (
          <option key={zone.value} value={zone.value}>
            {zone.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ClimateZoneFilter;
