import React from 'react';
import { TreeCard } from '../common/TreeCard';
import { Button } from '../common/Button';

interface FeaturedSpeciesProps {
  species: Array<{
    name: string;
    image: string;
    region: string;
    status: string;
  }>;
}

export const FeaturedSpecies: React.FC<FeaturedSpeciesProps> = ({ species }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Species</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {species.map((tree, index) => (
            <TreeCard key={index} {...tree} />
          ))}
        </div>
        <div className="text-center">
          <Button variant="primary" size="large">
            See All Trees
          </Button>
        </div>
      </div>
    </section>
  );
};
