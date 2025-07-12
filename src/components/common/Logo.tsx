import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src="/next.svg" // Replace with your actual logo path
        alt="All Trees Listing Logo"
        width={150}
        height={50}
        className="h-12 w-auto"
      />
    </div>
  );
};
