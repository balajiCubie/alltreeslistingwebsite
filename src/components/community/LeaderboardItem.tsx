import React from 'react';
import UserAvatar from './UserAvatar';

interface LeaderboardItemProps {
  rank: number;
  username: string;
  avatarSrc?: string;
  score: number;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ rank, username, avatarSrc, score }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-sm p-4 mb-3">
      <span className="text-xl font-bold text-green-700 w-10 text-center">{rank}.</span>
      <UserAvatar src={avatarSrc} alt={username} size="small" className="ml-2" />
      <span className="ml-4 text-lg font-semibold text-gray-800 flex-grow">{username}</span>
      <span className="text-xl font-bold text-green-600">{score} pts</span>
    </div>
  );
};

export default LeaderboardItem;
