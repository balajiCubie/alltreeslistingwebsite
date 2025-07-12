import React from 'react';

interface MapMarkerProps {
  coordinates: [number, number]; // [latitude, longitude]
  label: string;
  onClick?: () => void;
}

export const MapMarker: React.FC<MapMarkerProps> = ({ coordinates, label, onClick }) => {
  // In a real mapping library, you'd use the coordinates to position the marker.
  // This is a simplified representation.
  return (
    <div
      className="absolute bg-blue-500 text-white text-xs px-2 py-1 rounded-full cursor-pointer hover:bg-blue-600"
      style={{
        // These styles would be dynamically calculated based on map projection
        // For now, just illustrative
        top: `${coordinates[0] * 100}%`,
        left: `${coordinates[1] * 100}%`,
        transform: 'translate(-50%, -50%)',
      }}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
