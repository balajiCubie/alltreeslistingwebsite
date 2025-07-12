import React from 'react';

interface PropagationMethod {
  method: string;
  description: string;
}

interface PropagationMethodsProps {
  methods: PropagationMethod[];
}

const PropagationMethods: React.FC<PropagationMethodsProps> = ({ methods }) => {
  if (!methods || methods.length === 0) {
    return <div className="text-center text-gray-500">No propagation methods listed.</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Propagation Methods</h2>
      <ul className="list-disc pl-5 space-y-3">
        {methods.map((item, index) => (
          <li key={index}>
            <span className="font-semibold text-green-800">{item.method}:</span>{' '}
            <span className="text-gray-700">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropagationMethods;
