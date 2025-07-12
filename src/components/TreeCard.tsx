import Image from "next/image";

interface TreeCardProps {
  tree: {
    id: string;
    name: string;
    scientificName: string;
    description: string;
    imageUrl: string;
    type: string;
    habitat: string;
    conservationStatus: string;
    medicinalUses: string;
  };
}

export default function TreeCard({ tree }: TreeCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={tree.imageUrl}
        alt={tree.name}
        width={300}
        height={200}
        className="rounded-md mb-4 object-cover w-full h-48"
      />
      <h2 className="text-xl font-semibold mb-2">{tree.name}</h2>
      <p className="text-gray-600 italic mb-2">{tree.scientificName}</p>
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{tree.description}</p>
      <div className="text-xs text-gray-500">
        <p><strong>Type:</strong> {tree.type}</p>
        <p><strong>Habitat:</strong> {tree.habitat}</p>
        <p><strong>Conservation:</strong> {tree.conservationStatus}</p>
      </div>
    </div>
  );
}
