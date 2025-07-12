import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MapContextType {
  mapInstance: any | null; // Replace 'any' with your actual map instance type (e.g., L.Map for Leaflet)
  setMapInstance: (instance: any) => void;
  // Add other map-related state or functions here
}

const MapContext = createContext<MapContextType | undefined>(undefined);

interface MapProviderProps {
  children: ReactNode;
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [mapInstance, setMapInstance] = useState<any | null>(null);

  const value = {
    mapInstance,
    setMapInstance,
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

export const useMap = () => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error('useMap must be used within a MapProvider');
  }
  return context;
};
