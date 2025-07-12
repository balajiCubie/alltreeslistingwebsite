import React from 'react';
import ForumPost from './ForumPost';
import CommentsList from './CommentsList';
import Button from '../common/Button';

interface ForumThreadProps {
  post: {
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
  };
  comments: {
    id: string;
    author: {
      username: string;
      avatarSrc?: string;
    };
    timestamp: string;
    content: string;
  }[];
  onPostUpvote: (postId: string, newUpvoteCount: number) => void;
  onPostFlag: (postId: string, reason: string) => void;
  onCommentReply: (commentId: string) => void;
  onCommentEdit: (commentId: string) => void;
  onCommentDelete: (commentId: string) => void;
  onAddComment: (content: string) => void;
}

const ForumThread: React.FC<ForumThreadProps> = ({
  post,
  comments,
  onPostUpvote,
  onPostFlag,
  onCommentReply,
  onCommentEdit,
  onCommentDelete,
  onAddComment,
}) => {
  const [newCommentContent, setNewCommentContent] = React.useState('');

  const handleAddComment = () => {
    if (newCommentContent.trim()) {
      onAddComment(newCommentContent);
      setNewCommentContent('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <ForumPost
        id={post.id}
        title={post.title}
        author={post.author}
        timestamp={post.timestamp}
        content={post.content}
        upvotes={post.upvotes}
        commentCount={post.commentCount}
        onUpvote={onPostUpvote}
        onFlag={onPostFlag}
      />

      <div className="mt-8">
        <h3 className="text-xl font-bold text-green-700 mb-4">Comments</h3>
        <div className="mb-6">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            rows={4}
            placeholder="Write your comment here..."
            value={newCommentContent}
            onChange={(e) => setNewCommentContent(e.target.value)}
          ></textarea>
          <div className="flex justify-end mt-2">
            <Button variant="primary" onClick={handleAddComment}>
              Add Comment
            </Button>
          </div>
        </div>
        <CommentsList
          comments={comments}
          onReply={onCommentReply}
          onEdit={onCommentEdit}
          onDelete={onCommentDelete}
        />
      </div>
    </div>
  );
};

export default ForumThread;
