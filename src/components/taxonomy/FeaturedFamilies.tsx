import FamilyCard from './FamilyCard';

const featuredFamiliesData = [
  {
    name: 'Meliaceae',
    imageUrl: '/images/oak.jpg', // Placeholder image
    shortFact: 'Known for their valuable timber and medicinal properties.',
  },
  {
    name: 'Fabaceae',
    imageUrl: '/images/oak.jpg', // Placeholder image
    shortFact: 'The legume family, diverse in form and ecological roles.',
  },
  {
    name: 'Rosaceae',
    imageUrl: '/images/oak.jpg', // Placeholder image
    shortFact: 'Includes many economically important fruit and ornamental plants.',
  },
];

export default function FeaturedFamilies() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Families</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredFamiliesData.map((family) => (
          <FamilyCard
            key={family.name}
            name={family.name}
            imageUrl={family.imageUrl}
            shortFact={family.shortFact}
          />
        ))}
      </div>
    </section>
  );
}
