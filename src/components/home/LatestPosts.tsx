import React from 'react';
import { BlogPostCard } from '../common/BlogPostCard';
import { Button } from '../common/Button';

interface BlogPost {
  title: string;
  image: string;
  excerpt: string;
  slug: string;
  author?: string;
  date?: string;
}

interface LatestPostsProps {
  posts: BlogPost[];
}

export const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Blog / News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
        <div className="text-center">
          <Button variant="primary" size="large">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};
