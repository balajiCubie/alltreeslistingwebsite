import React from 'react';
import UserAvatar from './UserAvatar';
import Button from '../common/Button';

interface CommentProps {
  author: {
    username: string;
    avatarSrc?: string;
  };
  timestamp: string;
  content: string;
  onReply?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const Comment: React.FC<CommentProps> = ({
  author,
  timestamp,
  content,
  onReply,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
      <div className="flex items-center mb-2">
        <UserAvatar src={author.avatarSrc} alt={author.username} size="small" />
        <div className="ml-3">
          <p className="font-semibold text-gray-800">{author.username}</p>
          <p className="text-xs text-gray-500">{timestamp}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-3">{content}</p>
      <div className="flex space-x-2 text-sm">
        {onReply && (
          <Button variant="outline" size="small" onClick={onReply}>
            Reply
          </Button>
        )}
        {onEdit && (
          <Button variant="outline" size="small" onClick={onEdit}>
            Edit
          </Button>
        )}
        {onDelete && (
          <Button variant="danger" size="small" onClick={onDelete}>
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};

export default Comment;
