import React from 'react';
import Button from '../common/Button';

interface PlantingEntry {
  id: string;
  treeName: string;
  scientificName: string;
  plantingDate: string;
  location: string; // e.g., "Lat: 34.05, Lng: -118.25" or "My Backyard"
  notes?: string;
}

interface PlantingLogListProps {
  logEntries: PlantingEntry[];
  onEditEntry: (entryId: string) => void;
  onDeleteEntry: (entryId: string) => void;
  onAddEntry: () => void;
}

const PlantingLogList: React.FC<PlantingLogListProps> = ({
  logEntries,
  onEditEntry,
  onDeleteEntry,
  onAddEntry,
}) => {
  if (!logEntries || logEntries.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <p className="text-xl text-gray-600 mb-4">Your planting log is empty.</p>
        <Button variant="primary" onClick={onAddEntry}>
          Add First Entry
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-green-700">My Planting Log</h2>
        <Button variant="primary" onClick={onAddEntry}>
          Add New Entry
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Tree Name</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Scientific Name</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Planting Date</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Location</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Notes</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {logEntries.map((entry) => (
              <tr key={entry.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b text-gray-800">{entry.treeName}</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">{entry.scientificName}</td>
                <td className="py-2 px-4 border-b text-gray-600">{entry.plantingDate}</td>
                <td className="py-2 px-4 border-b text-gray-600">{entry.location}</td>
                <td className="py-2 px-4 border-b text-gray-600">{entry.notes || '-'}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2">
                    <Button variant="secondary" size="small" onClick={() => onEditEntry(entry.id)}>
                      Edit
                    </Button>
                    <Button variant="danger" size="small" onClick={() => onDeleteEntry(entry.id)}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlantingLogList;
