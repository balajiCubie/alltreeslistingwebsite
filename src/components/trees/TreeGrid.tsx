import React from 'react';
import TreeCard from "./TreeCard";
import { Tree } from '../../types/tree'; // Assuming you have a Tree type defined

interface TreeGridProps {
  trees: Tree[];
}

const TreeGrid: React.FC<TreeGridProps> = ({ trees }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {trees.map((tree) => (
        <TreeCard key={tree.slug} tree={tree} />
      ))}
    </div>
  );
};

export default TreeGrid;
