import React from 'react';

interface FavoritesButtonProps {
  isFavorited: boolean;
  onClick: () => void;
}

const FavoritesButton: React.FC<FavoritesButtonProps> = ({ isFavorited, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full ${isFavorited ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-red-600 hover:text-white transition-colors duration-200`}
      title={isFavorited ? "Remove from Favorites" : "Add to Favorites"}
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    </button>
  );
};

export default FavoritesButton;
