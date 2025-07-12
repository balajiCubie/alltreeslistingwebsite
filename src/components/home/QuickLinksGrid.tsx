import React from 'react';
import { Card } from '../common/Card';
import Link from 'next/link';

interface QuickLink {
  title: string;
  icon?: React.ReactNode;
  href: string;
}

interface QuickLinksGridProps {
  links: QuickLink[];
}

export const QuickLinksGrid: React.FC<QuickLinksGridProps> = ({ links }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Quick Browse by Taxonomy / Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {links.map((link, index) => (
            <Card
              key={index}
              title={link.title}
              icon={link.icon}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
