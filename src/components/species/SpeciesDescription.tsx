import React from 'react';

interface SpeciesDescriptionProps {
  species: {
    description: string;
    growthConditions: string;
    uses: string;
    conservationNotes: string;
  };
}

const SpeciesDescription: React.FC<SpeciesDescriptionProps> = ({ species }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Description & Details</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium mb-2">Botanical Description</h3>
          <p>{species.description}</p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Growth Conditions</h3>
          <p>{species.growthConditions}</p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Uses</h3>
          <p>{species.uses}</p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Conservation Notes</h3>
          <p>{species.conservationNotes}</p>
        </div>
      </div>
    </section>
  );
};

export default SpeciesDescription;
