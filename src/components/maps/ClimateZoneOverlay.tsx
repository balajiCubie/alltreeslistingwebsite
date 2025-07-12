import React from 'react';

interface ClimateZone {
  id: string;
  name: string;
  color: string; // e.g., '#FF0000' or 'rgba(255,0,0,0.5)'
  description: string;
}

interface ClimateZoneOverlayProps {
  zones: ClimateZone[];
  onZoneClick?: (zoneId: string) => void;
}

const ClimateZoneOverlay: React.FC<ClimateZoneOverlayProps> = ({ zones, onZoneClick }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* This component would typically render SVG paths or other graphical elements
          on top of a map component to represent climate zones.
          For this example, we'll just show a legend. */}
      <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md pointer-events-auto">
        <h3 className="font-semibold mb-2">Climate Zones</h3>
        <ul>
          {zones.map((zone) => (
            <li key={zone.id} className="flex items-center mb-1 cursor-pointer" onClick={() => onZoneClick && onZoneClick(zone.id)}>
              <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: zone.color }}></span>
              {zone.name}
            </li>
          ))}
        </ul>
      </div>
      {/* You would render the actual zone shapes here, perhaps using an SVG overlay */}
    </div>
  );
};

export default ClimateZoneOverlay;
