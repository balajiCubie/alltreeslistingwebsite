import React from 'react';

interface ConservationStatusBadgeProps {
  status: 'Least Concern' | 'Near Threatened' | 'Vulnerable' | 'Endangered' | 'Critically Endangered' | 'Extinct in the Wild' | 'Extinct' | 'Data Deficient' | 'Not Evaluated';
}

const ConservationStatusBadge: React.FC<ConservationStatusBadgeProps> = ({ status }) => {
  let badgeColor = 'bg-gray-400'; // Default for 'Not Evaluated' or 'Data Deficient'

  switch (status) {
    case 'Least Concern':
      badgeColor = 'bg-green-500';
      break;
    case 'Near Threatened':
      badgeColor = 'bg-yellow-500';
      break;
    case 'Vulnerable':
      badgeColor = 'bg-orange-500';
      break;
    case 'Endangered':
      badgeColor = 'bg-red-500';
      break;
    case 'Critically Endangered':
      badgeColor = 'bg-red-700';
      break;
    case 'Extinct in the Wild':
    case 'Extinct':
      badgeColor = 'bg-black';
      break;
    default:
      badgeColor = 'bg-gray-400';
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${badgeColor}`}>
      {status}
    </span>
  );
};

export default ConservationStatusBadge;
