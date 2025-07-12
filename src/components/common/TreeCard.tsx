import React from 'react';
import Image from 'next/image';

interface TreeCardProps {
  name: string;
  image: string;
  region: string;
  status: string; // e.g., "Endangered", "Native", "Common"
}

export const TreeCard: React.FC<TreeCardProps> = ({ name, image, region, status }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="lazyload"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">Region: {region}</p>
        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mt-2 ${
          status === 'Endangered' ? 'bg-red-200 text-red-800' :
          status === 'Native' ? 'bg-green-200 text-green-800' :
          'bg-gray-200 text-gray-800'
        }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
