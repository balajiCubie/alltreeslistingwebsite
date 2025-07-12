import React from 'react';

interface SpeciesHeroProps {
  species: {
    commonName: string;
    scientificName: string;
    family: string;
    genus: string;
    conservationStatus: string;
    coverImage: string;
    regionMapPreview: string;
  };
}

const SpeciesHero: React.FC<SpeciesHeroProps> = ({ species }) => {
  return (
    <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${species.coverImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-8">
        <div className="text-white">
          <h1 className="text-5xl font-bold">{species.commonName}</h1>
          <p className="text-2xl italic">{species.scientificName}</p>
          <p className="text-lg mt-2">Family: {species.family} | Genus: {species.genus}</p>
          <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full mt-2">
            {species.conservationStatus}
          </span>
          {/* Quick region map preview could be an overlay or small image here */}
        </div>
      </div>
    </section>
  );
};

export default SpeciesHero;
