import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tree } from '../../types/tree';

interface PopularSpeciesCarouselProps {
  trees: Tree[];
}

const PopularSpeciesCarousel: React.FC<PopularSpeciesCarouselProps> = ({ trees }) => {
  if (trees.length === 0) {
    return null;
  }

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Species</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {trees.map((tree) => (
          <Link href={`/trees/${tree.slug}`} key={tree.slug} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src={tree.imageUrl}
              alt={tree.commonName}
              width={256} // w-64 is 256px
              height={144} // Aspect ratio for a nice card image
              className="w-full h-36 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{tree.commonName}</h3>
              <p className="text-sm italic text-gray-600">{tree.scientificName}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularSpeciesCarousel;
