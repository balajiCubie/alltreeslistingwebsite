import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostCardProps {
  title: string;
  image: string;
  excerpt: string;
  slug: string; // Unique identifier for the blog post
  author?: string;
  date?: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, image, excerpt, slug, author, date }) => {
  return (
    <Link href={`/blog/${slug}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
        {author && date && (
          <p className="text-gray-500 text-sm mb-2">By {author} on {date}</p>
        )}
        <p className="text-gray-700 text-base">{excerpt}</p>
      </div>
    </Link>
  );
};
