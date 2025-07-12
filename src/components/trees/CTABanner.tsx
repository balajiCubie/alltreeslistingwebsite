import React from 'react';
import Link from 'next/link';

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="cta-banner bg-green-700 text-white p-6 rounded-lg shadow-md text-center my-8">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-lg mb-4">{description}</p>
      <Link href={buttonLink} className="inline-block bg-white text-green-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200">
        {buttonText}
      </Link>
    </div>
  );
};

export default CTABanner;
