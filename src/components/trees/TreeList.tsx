import React from 'react';
import TreeCard from './TreeCard';

interface Tree {
  id: string;
  name: string;
  scientificName: string;
  imageUrl: string;
  region: string;
}

interface TreeListProps {
  trees: Tree[];
}

const TreeList: React.FC<TreeListProps> = ({ trees }) => {
  if (!trees || trees.length === 0) {
    return <p className="text-center text-gray-600">No trees found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {trees.map((tree) => (
        <TreeCard key={tree.id} {...tree} />
      ))}
    </div>
  );
};

export default TreeList;
