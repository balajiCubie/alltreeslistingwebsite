import React from 'react';

interface TreeCardActionsProps {
  treeSlug: string;
  onFavorite: (slug: string) => void;
  onCompare: (slug: string) => void;
  onShare: (slug: string) => void;
}

const TreeCardActions: React.FC<TreeCardActionsProps> = ({ treeSlug, onFavorite, onCompare, onShare }) => {
  return (
    <div className="flex justify-around p-2 bg-gray-100 border-t rounded-b-lg">
      <button onClick={() => onFavorite(treeSlug)} className="text-gray-600 hover:text-red-500 transition">
        Favorite
      </button>
      <button onClick={() => onCompare(treeSlug)} className="text-gray-600 hover:text-blue-500 transition">
        Compare
      </button>
      <button onClick={() => onShare(treeSlug)} className="text-gray-600 hover:text-green-500 transition">
        Share
      </button>
    </div>
  );
};

export default TreeCardActions;
