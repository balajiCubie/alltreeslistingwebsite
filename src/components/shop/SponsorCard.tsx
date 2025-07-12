import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';

interface SponsorCardProps {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  websiteUrl: string;
  onSponsorClick?: (sponsorId: string) => void;
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  id,
  name,
  logoUrl,
  description,
  websiteUrl,
  onSponsorClick,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src={logoUrl}
          alt={`${name} logo`}
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
      <h3 className="text-xl font-semibold text-green-800 mb-2">{name}</h3>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      <Button variant="primary" onClick={() => onSponsorClick && onSponsorClick(id)}>
        Visit Website
      </Button>
    </div>
  );
};

export default SponsorCard;
