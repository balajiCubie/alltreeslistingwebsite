import React from 'react';

interface TreeCardPlaceholderProps {
  count?: number;
}

const TreeCardPlaceholder: React.FC<TreeCardPlaceholderProps> = ({ count = 4 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-gray-200 rounded-lg shadow-sm animate-pulse" style={{ height: '250px' }}>
          <div className="w-full h-40 bg-gray-300 rounded-t-lg"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TreeCardPlaceholder;
