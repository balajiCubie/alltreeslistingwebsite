import React from 'react';

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
  hasMore: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, isLoading, hasMore }) => {
  if (!hasMore) {
    return null;
  }

  return (
    <div className="load-more-button flex justify-center py-4">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {isLoading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

export default LoadMoreButton;
