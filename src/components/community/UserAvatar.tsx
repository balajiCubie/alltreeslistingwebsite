import React from 'react';
import Image from 'next/image';

interface UserAvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ src, alt, className }) => {
  return (
    <div className={`relative rounded-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};
