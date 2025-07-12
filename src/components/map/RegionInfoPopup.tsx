import React from 'react';
import Link from 'next/link';

interface RegionInfoPopupProps {
  region: {
    name: string;
    speciesCount: number;
    endangeredCount: number;
    thumbnail: string;
    code: string;
  } | null;
  onClose: () => void;
}

const RegionInfoPopup: React.FC<RegionInfoPopupProps> = ({ region, onClose }) => {
  if (!region) {
    return null;
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl z-50 max-w-sm w-full">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
      >
        &times;
      </button>
      <h3 className="text-2xl font-bold mb-2">{region.name}</h3>
      {region.thumbnail && (
        <img src={region.thumbnail} alt={region.name} className="w-full h-32 object-cover rounded-md mb-4" />
      )}
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">{region.speciesCount}</span> species cataloged
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">{region.endangeredCount}</span> endangered species
      </p>
      <Link href={`/trees?region=${region.name}`} className="text-blue-600 hover:underline font-medium">
        See Trees in {region.name}
      </Link>
    </div>
  );
};

export default RegionInfoPopup;
