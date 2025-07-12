import React from 'react';
import Link from 'next/link';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTABanner: React.FC<CTABannerProps> = ({
  title = "Contribute to Our Tree Database!",
  subtitle = "Help us grow by submitting new tree species or improving existing data.",
  buttonText = "Submit a Tree",
  buttonLink = "/contribute",
}) => {
  return (
    <section className="bg-green-100 text-green-800 p-8 rounded-lg text-center my-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-6">{subtitle}</p>
      <Link href={buttonLink} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
        {buttonText}
      </Link>
    </section>
  );
};

export default CTABanner;
