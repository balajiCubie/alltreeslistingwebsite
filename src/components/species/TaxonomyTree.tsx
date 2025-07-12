import React from 'react';
import Link from 'next/link';

interface TaxonomyProps {
  order: { name: string; slug: string };
  family: { name: string; slug: string };
  genus: { name: string; slug: string };
  species: { name: string; slug: string };
}

interface TaxonomyTreeProps {
  taxonomy: TaxonomyProps;
}

const TaxonomyTree: React.FC<TaxonomyTreeProps> = ({ taxonomy }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Taxonomy Tree</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <strong>Order:</strong>{' '}
            <Link href={`/order/${taxonomy.order.slug}`} className="text-blue-600 hover:underline">
              {taxonomy.order.name}
            </Link>
          </li>
          <li>
            <strong>Family:</strong>{' '}
            <Link href={`/family/${taxonomy.family.slug}`} className="text-blue-600 hover:underline">
              {taxonomy.family.name}
            </Link>
          </li>
          <li>
            <strong>Genus:</strong>{' '}
            <Link href={`/genus/${taxonomy.genus.slug}`} className="text-blue-600 hover:underline">
              {taxonomy.genus.name}
            </Link>
          </li>
          <li>
            <strong>Species:</strong>{' '}
            <Link href={`/trees/${taxonomy.species.slug}`} className="text-blue-600 hover:underline">
              {taxonomy.species.name}
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default TaxonomyTree;
