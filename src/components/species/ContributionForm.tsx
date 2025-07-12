import React from 'react';

interface ContributionFormProps {
  speciesId: string;
}

const ContributionForm: React.FC<ContributionFormProps> = ({ speciesId }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contribute & Feedback</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium mb-2">Submit your photo</h3>
          <p className="text-gray-600">Help us expand our visual database by submitting high-quality photos of this species.</p>
          <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            Upload Photo
          </button>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Suggest edits</h3>
          <p className="text-gray-600">Found an error or have additional information? Suggest edits to improve our data accuracy.</p>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Suggest Edits
          </button>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Add observation</h3>
          <p className="text-gray-600">Share your observations about this species in its natural habitat.</p>
          <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
            Add Observation
          </button>
        </div>
        {/* You might integrate a full form or link to a separate page for each contribution type */}
      </div>
    </section>
  );
};

export default ContributionForm;
