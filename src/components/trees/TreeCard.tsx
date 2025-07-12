import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TreeCardProps {
  id: string;
  name: string;
  scientificName: string;
  imageUrl: string;
  region: string;
}

const TreeCard: React.FC<TreeCardProps> = ({
  id,
  name,
  scientificName,
  imageUrl,
  region,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/trees/${id}`}>
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-green-800 mb-1">{name}</h3>
          <p className="text-gray-600 italic text-sm mb-2">{scientificName}</p>
          <p className="text-gray-700 text-sm">Region: {region}</p>
        </div>
      </Link>
    </div>
  );
};

export default TreeCard;
