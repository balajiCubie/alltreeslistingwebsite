import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src="/treelistinglogo.png" // Website logo
        alt="All Trees Listing Logo"
        width={50}
        height={50}
        className="h-12 w-auto"
      />
    </div>
  );
};
