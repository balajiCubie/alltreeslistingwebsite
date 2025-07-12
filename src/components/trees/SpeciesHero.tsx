import React from 'react';
import Image from 'next/image';

interface SpeciesHeroProps {
  name: string;
  scientificName: string;
  imageUrl: string;
  description: string;
}

const SpeciesHero: React.FC<SpeciesHeroProps> = ({
  name,
  scientificName,
  imageUrl,
  description,
}) => {
  return (
    <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-2">{name}</h1>
          <p className="text-2xl italic mb-4">{scientificName}</p>
          <p className="text-lg max-w-2xl mx-auto">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeciesHero;
