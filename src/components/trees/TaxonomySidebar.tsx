import React from 'react';

interface TaxonomySidebarProps {
  className?: string;
}

const TaxonomySidebar: React.FC<TaxonomySidebarProps> = ({ className }) => {
  const taxonomyData = [
    {
      family: 'Fagaceae',
      genera: ['Quercus', 'Fagus', 'Castanea'],
    },
    {
      family: 'Pinaceae',
      genera: ['Pinus', 'Picea', 'Abies'],
    },
    {
      family: 'Rosaceae',
      genera: ['Prunus', 'Malus', 'Pyrus'],
    },
  ];

  return (
    <aside className={`bg-gray-50 p-4 rounded-lg shadow-md ${className}`}>
      <h3 className="text-xl font-semibold mb-4 text-green-700">Browse by Taxonomy</h3>
      <nav>
        <ul>
          {taxonomyData.map((familyItem, index) => (
            <li key={index} className="mb-2">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer py-1 px-2 rounded-md hover:bg-gray-200">
                  <span className="font-medium text-gray-800">{familyItem.family}</span>
                  <svg
                    className="w-4 h-4 transform transition-transform duration-200 group-open:rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </summary>
                <ul className="ml-4 mt-2 border-l border-gray-300 pl-4">
                  {familyItem.genera.map((genus, genIndex) => (
                    <li key={genIndex} className="py-1">
                      <a href="#" className="text-gray-600 hover:text-green-600">
                        {genus}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default TaxonomySidebar;
