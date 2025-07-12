import React from 'react';

interface TreesPageLayoutProps {
  children: React.ReactNode;
}

const TreesPageLayout: React.FC<TreesPageLayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      {children}
    </div>
  );
};

export default TreesPageLayout;
