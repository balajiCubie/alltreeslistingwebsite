import React from 'react';
import TreeCard from '../trees/TreeCard'; // Assuming TreeCard is in ../trees
import Button from '../common/Button';

interface SavedTree {
  id: string;
  name: string;
  scientificName: string;
  imageUrl: string;
  region: string;
  savedDate: string;
}

interface SavedTreesListProps {
  trees: SavedTree[];
  onRemoveTree: (treeId: string) => void;
}

const SavedTreesList: React.FC<SavedTreesListProps> = ({ trees, onRemoveTree }) => {
  if (!trees || trees.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <p className="text-xl text-gray-600">You haven't saved any trees yet.</p>
        <p className="text-gray-500 mt-2">Browse our tree species and click the save icon to add them here!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">My Saved Trees</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trees.map((tree) => (
          <div key={tree.id} className="relative">
            <TreeCard {...tree} />
            <div className="absolute top-2 right-2">
              <Button
                variant="danger"
                size="small"
                onClick={() => onRemoveTree(tree.id)}
                title="Remove from saved"
              >
                &times;
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">Saved on: {tree.savedDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedTreesList;
