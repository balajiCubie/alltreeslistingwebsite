import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tree } from '../../types/tree';

interface TreeCardProps {
  tree: Tree;
}

const TreeCard: React.FC<TreeCardProps> = ({ tree }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
      <Link href={`/trees/${tree.slug}`}>
        <Image
          src={tree.imageUrl || '/treelistinglogo.png'} // Fallback image if none provided
          alt={tree.commonName}
          width={300} // Adjust as needed
          height={160} // Adjust as needed, h-40 is 160px
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{tree.commonName}</h3>
          <p className="text-sm italic">{tree.scientificName}</p>
          <span className="text-xs text-green-600">{tree.status}</span>
        </div>
      </Link>
    </div>
  );
};

export default TreeCard;
