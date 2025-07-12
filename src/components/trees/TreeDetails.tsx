import React from 'react';
import Image from 'next/image';

interface TreeDetailsProps {
  name: string;
  scientificName: string;
  description: string;
  imageUrl: string;
  habitat: string;
  conservationStatus: string;
  // Add more details as needed
}

const TreeDetails: React.FC<TreeDetailsProps> = ({
  name,
  scientificName,
  description,
  imageUrl,
  habitat,
  conservationStatus,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="relative w-full h-64 mb-6">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-bold text-green-800 mb-2">{name}</h1>
      <p className="text-xl italic text-gray-600 mb-4">{scientificName}</p>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">Habitat</h2>
          <p className="text-gray-700">{habitat}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">Conservation Status</h2>
          <p className="text-gray-700">{conservationStatus}</p>
        </div>
      </div>

      {/* Add more sections for other details like propagation, related species, etc. */}
    </div>
  );
};

export default TreeDetails;
