import { trees } from "../data/trees";
import TreeCard from "../components/TreeCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">All Trees Listing</h1>
      <p className="text-lg text-center mb-12">
        Your authoritative database for every tree species worldwide.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {trees.map((tree) => (
          <TreeCard key={tree.id} tree={tree} />
        ))}
      </div>
    </div>
  );
}
