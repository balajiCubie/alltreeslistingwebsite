import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostCardProps {
  id: string;
  title: string;
  imageUrl: string;
  excerpt: string;
  author: string;
  date: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  id,
  title,
  imageUrl,
  excerpt,
  author,
  date,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${id}`}>
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
          <p className="text-gray-700 text-sm mb-3">{excerpt}</p>
          <div className="flex justify-between items-center text-gray-600 text-xs">
            <span>By {author}</span>
            <span>{date}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
