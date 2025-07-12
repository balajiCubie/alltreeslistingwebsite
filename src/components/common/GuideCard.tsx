import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GuideCardProps {
  title: string;
  image: string;
  excerpt: string;
  slug: string; // Unique identifier for the guide
  readTime?: string; // e.g., "5 min read"
}

export const GuideCard: React.FC<GuideCardProps> = ({ title, image, excerpt, slug, readTime }) => {
  return (
    <Link href={`/guides/${slug}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="lazyload"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-2">{excerpt}</p>
        {readTime && (
          <p className="text-gray-500 text-sm font-medium">{readTime}</p>
        )}
      </div>
    </Link>
  );
};
