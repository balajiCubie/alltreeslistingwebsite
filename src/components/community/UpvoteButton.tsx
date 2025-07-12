import React, { useState } from 'react';
import Button from '../common/Button';

interface UpvoteButtonProps {
  initialUpvotes: number;
  onUpvote: (newUpvoteCount: number) => void;
  isUpvotedByUser?: boolean;
}

const UpvoteButton: React.FC<UpvoteButtonProps> = ({
  initialUpvotes,
  onUpvote,
  isUpvotedByUser = false,
}) => {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [isUpvoted, setIsUpvoted] = useState(isUpvotedByUser);

  const handleClick = () => {
    let newUpvotes = upvotes;
    if (isUpvoted) {
      newUpvotes -= 1;
    } else {
      newUpvotes += 1;
    }
    setUpvotes(newUpvotes);
    setIsUpvoted(!isUpvoted);
    onUpvote(newUpvotes);
  };

  return (
    <Button
      onClick={handleClick}
      variant={isUpvoted ? 'primary' : 'secondary'}
      size="small"
      className="flex items-center space-x-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
      <span>{upvotes}</span>
    </Button>
  );
};

export default UpvoteButton;
