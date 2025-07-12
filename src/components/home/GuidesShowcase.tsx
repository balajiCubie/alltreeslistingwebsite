import React from 'react';
import { GuideCard } from '../common/GuideCard';
import { Button } from '../common/Button';

interface Guide {
  title: string;
  image: string;
  excerpt: string;
  slug: string;
  readTime?: string;
}

interface GuidesShowcaseProps {
  guides: Guide[];
}

export const GuidesShowcase: React.FC<GuidesShowcaseProps> = ({ guides }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Educational Resources & Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {guides.map((guide, index) => (
            <GuideCard key={index} {...guide} />
          ))}
        </div>
        <div className="text-center">
          <Button variant="primary" size="large">
            View All Guides
          </Button>
        </div>
      </div>
    </section>
  );
};
