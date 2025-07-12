import React from 'react';
import { UserAvatar } from '../community/UserAvatar';

interface LeaderboardItemProps {
  rank: number;
  username: string;
  contributions: number;
  avatarUrl?: string;
}

export const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ rank, username, contributions, avatarUrl }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm mb-3">
      <span className="text-lg font-bold text-green-700 mr-4 w-8 text-center">{rank}.</span>
      {avatarUrl && <UserAvatar src={avatarUrl} alt={username} className="w-10 h-10 rounded-full mr-4" />}
      <div className="flex-grow">
        <p className="font-semibold text-gray-800">{username}</p>
        <p className="text-sm text-gray-600">{contributions} Contributions</p>
      </div>
    </div>
  );
};
