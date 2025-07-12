import React from 'react'; // Minor change to trigger recompile
import Image from 'next/image';
import AuthorBio from './AuthorBio';

interface BlogPostContentProps {
  title: string;
  author: {
    name: string;
    bio: string;
    avatarSrc?: string;
  };
  date: string;
  contentHtml: string; // HTML string of the blog post content
  imageUrl?: string;
  imageAlt?: string;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({
  title,
  author,
  date,
  contentHtml,
  imageUrl,
  imageAlt,
}) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-4">{title}</h1>
      <p className="text-gray-600 text-sm mb-6">
        By <span className="font-semibold">{author.name}</span> on {date}
      </p>

      {imageUrl && (
        <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
          <Image src={imageUrl} alt={imageAlt || title} fill />
        </div>
      )}

      <div
        className="prose prose-green max-w-none text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <hr className="my-8 border-gray-200" />

      <AuthorBio name={author.name} bio={author.bio} avatarSrc={author.avatarSrc} />
    </article>
  );
};

export default BlogPostContent;
