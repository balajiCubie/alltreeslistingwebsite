import React from 'react';
import Image from 'next/image';

interface UserAvatarProps {
  src?: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ src, alt, size = 'medium', className }) => {
  const sizeClasses = {
    small: 'h-8 w-8 text-sm',
    medium: 'h-12 w-12 text-base',
    large: 'h-16 w-16 text-lg',
  };

  const initial = alt ? alt.charAt(0).toUpperCase() : '?';

  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-gray-300 text-gray-800 font-semibold overflow-hidden ${sizeClasses[size]} ${className || ''}`}
    >
      {src ? (
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      ) : (
        <span>{initial}</span>
      )}
    </div>
  );
};

export default UserAvatar;
