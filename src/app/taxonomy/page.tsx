import PageHeader from '../../components/common/PageHeader';
import TaxonomyTreeView from '../../components/taxonomy/TaxonomyTreeView';
import FeaturedFamilies from '../../components/taxonomy/FeaturedFamilies';
import CTABanner from '../../components/common/CTABanner';

import taxonomyData from '../../data/taxonomy.json';

export default function TaxonomyPage() {
  return (
    <main className="container mx-auto py-12">
      <PageHeader
        title="Explore Tree Taxonomy"
        subtitle="Browse the full biological hierarchy of Orders, Families, and Genera for thousands of trees."
      />
      <TaxonomyTreeView data={taxonomyData} />
      <FeaturedFamilies />
      <CTABanner />
    </main>
  );
}
