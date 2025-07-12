import Link from 'next/link';

interface FamilyCardProps {
  name: string;
  imageUrl: string;
  shortFact: string;
}

export default function FamilyCard({ name, imageUrl, shortFact }: FamilyCardProps) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{shortFact}</p>
        <Link href={`/trees?family=${name}`} className="text-blue-500 hover:underline">
          Explore {name} Trees
        </Link>
      </div>
    </div>
  );
}
