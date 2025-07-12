import React from 'react';
import Button from '../common/Button';

interface FilterSidebarProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  children,
  isOpen,
  onClose,
  onApplyFilters,
  onClearFilters,
}) => {
  const sidebarClasses = `fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
  `;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onClose}
        ></div>
      )}
      <div className={sidebarClasses}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-green-700">Filters</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
            &times;
          </button>
        </div>
        <div className="p-4 flex-grow overflow-y-auto">
          {children}
        </div>
        <div className="p-4 border-t flex justify-between">
          <Button variant="secondary" onClick={onClearFilters}>
            Clear All
          </Button>
          <Button variant="primary" onClick={onApplyFilters}>
            Apply Filters
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
