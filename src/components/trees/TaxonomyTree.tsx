import React from 'react';

interface TaxonomyNode {
  label: string;
  value: string;
  children?: TaxonomyNode[];
}

interface TaxonomyTreeProps {
  data: TaxonomyNode[];
}

const TaxonomyTree: React.FC<TaxonomyTreeProps> = ({ data }) => {
  const renderNode = (node: TaxonomyNode) => (
    <li key={node.value} className="mb-1">
      <span className="font-semibold text-green-800">{node.label}:</span>{' '}
      <span className="text-gray-700">{node.value}</span>
      {node.children && node.children.length > 0 && (
        <ul className="ml-4 mt-1">
          {node.children.map(renderNode)}
        </ul>
      )}
    </li>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Taxonomy</h2>
      <ul className="list-none p-0">
        {data.map(renderNode)}
      </ul>
    </div>
  );
};

export default TaxonomyTree;
