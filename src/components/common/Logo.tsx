import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16',
  };

  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]}`}>
      <Image
        src="/images/oak.jpg" // Assuming you have a logo image here
        alt="All Trees Listing Logo"
        width={size === 'small' ? 32 : size === 'medium' ? 48 : 64}
        height={size === 'small' ? 32 : size === 'medium' ? 48 : 64}
        className="rounded-full"
      />
    </div>
  );
};

export default Logo;
