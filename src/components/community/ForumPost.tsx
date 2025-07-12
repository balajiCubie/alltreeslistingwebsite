import React from 'react';
import UserAvatar from './UserAvatar';
import Link from 'next/link';
import UpvoteButton from './UpvoteButton';
import FlagButton from './FlagButton';

interface ForumPostProps {
  id: string;
  title: string;
  author: {
    username: string;
    avatarSrc?: string;
  };
  timestamp: string;
  content: string;
  upvotes: number;
  commentCount: number;
  onUpvote: (postId: string, newUpvoteCount: number) => void;
  onFlag: (postId: string, reason: string) => void;
}

const ForumPost: React.FC<ForumPostProps> = ({
  id,
  title,
  author,
  timestamp,
  content,
  upvotes,
  commentCount,
  onUpvote,
  onFlag,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center mb-4">
        <UserAvatar src={author.avatarSrc} alt={author.username} size="medium" />
        <div className="ml-4">
          <Link href={`/forum/posts/${id}`} className="text-2xl font-bold text-green-800 hover:underline">
            {title}
          </Link>
          <p className="text-gray-600 text-sm">
            Posted by <span className="font-semibold">{author.username}</span> on {timestamp}
          </p>
        </div>
      </div>
      <div className="prose max-w-none mb-4">
        <p>{content}</p>
      </div>
      <div className="flex items-center space-x-4 text-gray-600 text-sm">
        <UpvoteButton initialUpvotes={upvotes} onUpvote={(count) => onUpvote(id, count)} />
        <span>{commentCount} Comments</span>
        <FlagButton itemId={id} onFlag={(reason) => onFlag(id, reason)} />
      </div>
    </div>
  );
};

export default ForumPost;
