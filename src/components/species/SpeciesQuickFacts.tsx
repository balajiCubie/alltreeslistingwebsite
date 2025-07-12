import React from 'react';

interface SpeciesQuickFactsProps {
  facts: {
    botanicalName: string;
    synonyms: string[];
    localNames: string[];
    family: string;
    genus: string;
    order: string;
    nativeRange: string;
    climateZone: string;
    uses: string;
  };
}

const SpeciesQuickFacts: React.FC<SpeciesQuickFactsProps> = ({ facts }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
      <ul className="space-y-2">
        <li><strong>Botanical Name:</strong> {facts.botanicalName}</li>
        {facts.synonyms && facts.synonyms.length > 0 && (
          <li><strong>Synonyms:</strong> {facts.synonyms.join(', ')}</li>
        )}
        {facts.localNames && facts.localNames.length > 0 && (
          <li><strong>Local/Common Names:</strong> {facts.localNames.join(', ')}</li>
        )}
        <li><strong>Family:</strong> {facts.family}</li>
        <li><strong>Genus:</strong> {facts.genus}</li>
        <li><strong>Order:</strong> {facts.order}</li>
        <li><strong>Native Range:</strong> {facts.nativeRange}</li>
        <li><strong>Climate Zone:</strong> {facts.climateZone}</li>
        {facts.uses && (
          <li><strong>Uses:</strong> {facts.uses}</li>
        )}
      </ul>
    </section>
  );
};

export default SpeciesQuickFacts;
