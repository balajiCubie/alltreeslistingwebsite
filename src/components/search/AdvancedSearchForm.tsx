import React, { useState } from 'react';
import Button from '../common/Button';

interface SearchCriteria {
  keyword: string;
  speciesName: string;
  region: string;
  habitat: string;
  conservationStatus: string;
}

interface AdvancedSearchFormProps {
  onSearch: (criteria: SearchCriteria) => void;
}

const AdvancedSearchForm: React.FC<AdvancedSearchFormProps> = ({ onSearch }) => {
  const [criteria, setCriteria] = useState<SearchCriteria>({
    keyword: '',
    speciesName: '',
    region: '',
    habitat: '',
    conservationStatus: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCriteria((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Advanced Search</h2>

      <div>
        <label htmlFor="keyword" className="block text-gray-700 text-sm font-bold mb-2">
          Keyword
        </label>
        <input
          type="text"
          id="keyword"
          name="keyword"
          value={criteria.keyword}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g., 'tall', 'flowering'"
        />
      </div>

      <div>
        <label htmlFor="speciesName" className="block text-gray-700 text-sm font-bold mb-2">
          Species Name
        </label>
        <input
          type="text"
          id="speciesName"
          name="speciesName"
          value={criteria.speciesName}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g., 'Oak', 'Maple'"
        />
      </div>

      <div>
        <label htmlFor="region" className="block text-gray-700 text-sm font-bold mb-2">
          Region
        </label>
        <input
          type="text"
          id="region"
          name="region"
          value={criteria.region}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g., 'North America', 'Europe'"
        />
      </div>

      <div>
        <label htmlFor="habitat" className="block text-gray-700 text-sm font-bold mb-2">
          Habitat
        </label>
        <input
          type="text"
          id="habitat"
          name="habitat"
          value={criteria.habitat}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g., 'Forest', 'Wetland'"
        />
      </div>

      <div>
        <label htmlFor="conservationStatus" className="block text-gray-700 text-sm font-bold mb-2">
          Conservation Status
        </label>
        <select
          id="conservationStatus"
          name="conservationStatus"
          value={criteria.conservationStatus}
          onChange={handleChange}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Any</option>
          <option value="Least Concern">Least Concern</option>
          <option value="Near Threatened">Near Threatened</option>
          <option value="Vulnerable">Vulnerable</option>
          <option value="Endangered">Endangered</option>
          <option value="Critically Endangered">Critically Endangered</option>
          <option value="Extinct in the Wild">Extinct in the Wild</option>
          <option value="Extinct">Extinct</option>
          <option value="Data Deficient">Data Deficient</option>
          <option value="Not Evaluated">Not Evaluated</option>
        </select>
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Apply Filters
      </Button>
    </form>
  );
};

export default AdvancedSearchForm;
