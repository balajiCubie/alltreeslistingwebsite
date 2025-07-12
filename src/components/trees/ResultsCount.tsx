import React from 'react';

interface ResultsCountProps {
  count: number;
  total: number;
}

const ResultsCount: React.FC<ResultsCountProps> = ({ count, total }) => {
  return (
    <div className="text-gray-600 text-sm mb-4">
      Showing <span className="font-semibold">{count}</span> of <span className="font-semibold">{total}</span> trees
    </div>
  );
};

export default ResultsCount;
