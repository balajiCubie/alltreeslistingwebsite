import React from 'react';
import TreeCard from '../trees/TreeCard'; // Assuming TreeCard is in ../trees

interface SearchResult {
  id: string;
  name: string;
  scientificName: string;
  imageUrl: string;
  region: string;
  // Add other relevant search result fields
}

interface SearchResultsProps {
  results: SearchResult[];
  query?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, query }) => {
  if (!results || results.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <p className="text-xl text-gray-600">
          No results found {query && `for "${query}"`}.
        </p>
        <p className="text-gray-500 mt-2">Try adjusting your search terms or filters.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {query && (
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Search Results for "{query}" ({results.length})
        </h2>
      )}
      {!query && (
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Search Results ({results.length})
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.map((result) => (
          <TreeCard key={result.id} {...result} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
