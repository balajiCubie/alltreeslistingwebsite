import React from 'react';
import Comment from './Comment';

interface CommentData {
  id: string;
  author: {
    username: string;
    avatarSrc?: string;
  };
  timestamp: string;
  content: string;
}

interface CommentsListProps {
  comments: CommentData[];
  onReply?: (commentId: string) => void;
  onEdit?: (commentId: string) => void;
  onDelete?: (commentId: string) => void;
}

const CommentsList: React.FC<CommentsListProps> = ({
  comments,
  onReply,
  onEdit,
  onDelete,
}) => {
  if (!comments || comments.length === 0) {
    return <div className="text-center text-gray-500 p-4">No comments yet. Be the first to comment!</div>;
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.author}
          timestamp={comment.timestamp}
          content={comment.content}
          onReply={onReply ? () => onReply(comment.id) : undefined}
          onEdit={onEdit ? () => onEdit(comment.id) : undefined}
          onDelete={onDelete ? () => onDelete(comment.id) : undefined}
        />
      ))}
    </div>
  );
};

export default CommentsList;
