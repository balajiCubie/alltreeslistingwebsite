import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">All Trees Listing</h1>
        <nav>
          {/* Navigation links will go here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
