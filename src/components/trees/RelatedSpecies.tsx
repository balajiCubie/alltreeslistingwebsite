import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface RelatedSpeciesProps {
  species: {
    id: string;
    name: string;
    scientificName: string;
    imageUrl: string;
  }[];
}

const RelatedSpecies: React.FC<RelatedSpeciesProps> = ({ species }) => {
  if (!species || species.length === 0) {
    return <div className="text-center text-gray-500">No related species found.</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Related Species</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {species.map((s) => (
          <Link key={s.id} href={`/trees/${s.id}`} className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-full h-32">
              <Image
                src={s.imageUrl}
                alt={s.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-green-800">{s.name}</h3>
              <p className="text-sm italic text-gray-600">{s.scientificName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedSpecies;
