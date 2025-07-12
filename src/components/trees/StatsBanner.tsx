import React from 'react';

interface StatsBannerProps {
  totalSpecies: number;
  regionsCovered: number;
  conservationEfforts: number;
}

const StatsBanner: React.FC<StatsBannerProps> = ({ totalSpecies, regionsCovered, conservationEfforts }) => {
  return (
    <div className="bg-blue-100 text-blue-800 p-8 rounded-lg text-center my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-4xl font-bold">{totalSpecies.toLocaleString()}</h3>
        <p className="text-lg">Species Listed</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold">{regionsCovered}</h3>
        <p className="text-lg">Regions Covered</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold">{conservationEfforts.toLocaleString()}</h3>
        <p className="text-lg">Conservation Efforts</p>
      </div>
    </div>
  );
};

export default StatsBanner;
