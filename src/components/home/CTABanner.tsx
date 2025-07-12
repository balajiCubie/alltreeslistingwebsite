import React from 'react';
import { Button } from '../common/Button';
import Link from 'next/link';

interface CTABannerProps {
  headline: string;
  buttonText: string;
  buttonLink: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({ headline, buttonText, buttonLink }) => {
  return (
    <section className="bg-green-600 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{headline}</h2>
        <Link href={buttonLink} passHref>
          <Button variant="secondary" size="large">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};
