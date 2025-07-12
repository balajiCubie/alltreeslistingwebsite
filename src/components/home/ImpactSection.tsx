import React from 'react';
import { Button } from '../common/Button';
import Image from 'next/image';

interface Partner {
  name: string;
  logo: string;
}

interface ImpactSectionProps {
  treesListed: number;
  treesPlanted: number;
  endangeredSpeciesSaved: number;
  partners: Partner[];
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({
  treesListed,
  treesPlanted,
  endangeredSpeciesSaved,
  partners,
}) => {
  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Impact & Partners</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-green-800 rounded-lg shadow-md">
            <p className="text-5xl font-bold mb-2">{treesListed.toLocaleString()}</p>
            <p className="text-lg">Trees Listed</p>
          </div>
          <div className="p-6 bg-green-800 rounded-lg shadow-md">
            <p className="text-5xl font-bold mb-2">{treesPlanted.toLocaleString()}</p>
            <p className="text-lg">Trees Planted</p>
          </div>
          <div className="p-6 bg-green-800 rounded-lg shadow-md">
            <p className="text-5xl font-bold mb-2">{endangeredSpeciesSaved.toLocaleString()}</p>
            <p className="text-lg">Endangered Species Saved</p>
          </div>
        </div>

        <h3 className="text-3xl font-semibold mb-8">Our Valued Partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {partners.map((partner, index) => (
            <div key={index} className="w-32 h-16 relative">
              <Image
                src={partner.logo}
                alt={partner.name}
                layout="fill"
                objectFit="contain"
                className="grayscale opacity-75 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="secondary" size="large">
            Sponsor a Tree
          </Button>
          <Button variant="ghost" size="large">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
};
