import React from 'react';

interface NoResultsMessageProps {
  message?: string;
}

const NoResultsMessage: React.FC<NoResultsMessageProps> = ({
  message = "No trees found matching your criteria. Try adjusting your filters.",
}) => {
  return (
    <div className="text-center py-12 text-gray-500">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">No results</h3>
      <p className="mt-1 text-sm text-gray-500">{message}</p>
    </div>
  );
};

export default NoResultsMessage;
