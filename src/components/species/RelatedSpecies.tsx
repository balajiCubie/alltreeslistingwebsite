import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface RelatedSpeciesProps {
  related: {
    id: string;
    commonName: string;
    slug: string;
    thumbnail: string;
  }[];
}

const RelatedSpecies: React.FC<RelatedSpeciesProps> = ({ related }) => {
  if (!related || related.length === 0) {
    return null;
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Related Species</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((species) => (
          <Link key={species.id} href={`/trees/${species.slug}`} className="block">
            <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors">
              <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                <Image
                  src={species.thumbnail}
                  alt={species.commonName}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <span className="text-lg font-medium">{species.commonName}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedSpecies;
