import React from 'react';

interface MapMarkerProps {
  lat: number;
  lng: number;
  popupContent?: React.ReactNode;
  onClick?: () => void;
}

const MapMarker: React.FC<MapMarkerProps> = ({ lat, lng, popupContent, onClick }) => {
  // In a real map library integration, this component would likely render
  // a custom marker on the map using the map library's API.
  // For this placeholder, we'll just represent it as a div.
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${lng}%`, top: `${lat}%` }} // These would be calculated based on map projection
      onClick={onClick}
    >
      <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-md cursor-pointer"></div>
      {popupContent && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-white rounded-md shadow-lg text-sm whitespace-nowrap">
          {popupContent}
        </div>
      )}
    </div>
  );
};

export default MapMarker;
