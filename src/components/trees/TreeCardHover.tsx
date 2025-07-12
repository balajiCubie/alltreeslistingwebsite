import React from 'react';
import { Tree } from '../../types/tree';

interface TreeCardHoverProps {
  tree: Tree;
}

const TreeCardHover: React.FC<TreeCardHoverProps> = ({ tree }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 rounded-lg flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h4 className="text-xl font-bold mb-2">{tree.commonName}</h4>
      {tree.quickFacts && (
        <div className="text-sm mb-2">
          {tree.quickFacts.height && <p>Height: {tree.quickFacts.height}</p>}
          {tree.quickFacts.lifespan && <p>Lifespan: {tree.quickFacts.lifespan}</p>}
        </div>
      )}
      <p className="text-sm">{tree.shortDescription}</p>
    </div>
  );
};

export default TreeCardHover;
