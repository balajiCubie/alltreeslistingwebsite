import SpeciesHero from '@/components/species/SpeciesHero';
import SpeciesQuickFacts from '@/components/species/SpeciesQuickFacts';
import TreeImageGallery from '@/components/species/TreeImageGallery';
import SpeciesDescription from '@/components/species/SpeciesDescription';
import SpeciesDistributionMap from '@/components/species/SpeciesDistributionMap';
import TaxonomyTree from '@/components/species/TaxonomyTree';
import RelatedSpecies from '@/components/species/RelatedSpecies';
import DownloadsSection from '@/components/species/DownloadsSection';
import ContributionForm from '@/components/species/ContributionForm';

// Placeholder for data fetching - replace with actual data fetching logic
async function getSpeciesData(slug: string) {
  // In a real application, you would fetch data from an API or database
  // For now, return mock data
  return {
    id: slug,
    commonName: 'Azadirachta indica',
    scientificName: 'Neem',
    family: 'Meliaceae',
    genus: 'Azadirachta',
    conservationStatus: 'Least Concern',
    coverImage: '/images/oak.jpg', // Placeholder image
    regionMapPreview: '/images/globe.svg', // Placeholder image
    botanicalName: 'Azadirachta indica A. Juss.',
    synonyms: ['Melia azadirachta L.'],
    localNames: ['Neem (English)', 'Nim (Hindi)', 'Margosa (Tamil)'],
    order: 'Sapindales',
    nativeRange: 'Indian subcontinent, parts of Southeast Asia',
    climateZone: 'Tropical and subtropical regions',
    uses: 'Medicinal, Pesticide, Timber, Cosmetics',
    description: 'Azadirachta indica, commonly known as Neem, Nimtree, or Indian Lilac, is a tree in the mahogany family Meliaceae. It is one of two species in the genus Azadirachta, and is native to the Indian subcontinent and parts of Southeast Asia. It is typically grown in tropical and semi-tropical regions.',
    growthConditions: 'Prefers well-drained soil, full sun, and warm climates. Drought-tolerant once established.',
    conservationNotes: 'Widely cultivated, not currently threatened. Important for traditional medicine and agroforestry.',
    images: [
      { src: '/images/oak.jpg', alt: 'Neem leaves', caption: 'Leaves of Neem tree', attribution: 'John Doe' },
      { src: '/images/oak.jpg', alt: 'Neem bark', caption: 'Bark of Neem tree', attribution: 'Jane Smith' },
    ],
    region: 'Asia',
    taxonomy: {
      order: { name: 'Sapindales', slug: 'sapindales' },
      family: { name: 'Meliaceae', slug: 'meliaceae' },
      genus: { name: 'Azadirachta', slug: 'azadirachta' },
      species: { name: 'Azadirachta indica', slug: 'azadirachta-indica' },
    },
    relatedSpecies: [
      { id: '1', commonName: 'Mahogany', slug: 'mahogany', thumbnail: '/images/oak.jpg' },
      { id: '2', commonName: 'Chinaberry', slug: 'chinaberry', thumbnail: '/images/oak.jpg' },
    ],
    resources: [
      { name: 'Neem Fact Sheet (PDF)', url: '/docs/neem-fact-sheet.pdf', type: 'download' as const },
      { name: 'IUCN Red List', url: 'https://www.iucnredlist.org/', type: 'external' as const },
    ],
  };
}

// For `generateStaticParams` in App Router for SSG
export async function generateStaticParams() {
  // In a real application, fetch all possible slugs
  // For now, return a few example slugs
  return [
    { slug: 'azadirachta-indica' },
    { slug: 'bauhinia-purpurea' },
    { slug: 'acacia-nilotica' },
  ];
}

// For `generateMetadata` in App Router for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const species = await getSpeciesData(params.slug); // Fetch data for metadata
  return {
    title: `${species.commonName} (${species.scientificName}) - Tree Species Encyclopedia`,
    description: species.description,
    openGraph: {
      images: [species.coverImage],
    },
  };
}

export default async function SpeciesPage({ params }: { params: { slug: string } }) {
  const species = await getSpeciesData(params.slug);

  if (!species) {
    // Handle case where species data is not found
    return <div>Species not found</div>;
  }

  return (
    <main className="container mx-auto py-8">
      <SpeciesHero species={species} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2 space-y-8">
          <SpeciesDescription species={species} />
          <TreeImageGallery images={species.images} />
          <SpeciesDistributionMap region={species.region} />
          <DownloadsSection resources={species.resources} />
        </div>
        <div className="space-y-8">
          <SpeciesQuickFacts facts={species} />
          <TaxonomyTree taxonomy={species.taxonomy} />
          <RelatedSpecies related={species.relatedSpecies} />
          <ContributionForm speciesId={species.id} />
        </div>
      </div>
    </main>
  );
}
