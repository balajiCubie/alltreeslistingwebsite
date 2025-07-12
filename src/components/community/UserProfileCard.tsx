import React from 'react';
import UserAvatar from './UserAvatar';
import Button from '../common/Button';

interface UserProfileCardProps {
  username: string;
  avatarSrc?: string;
  bio?: string;
  memberSince: string;
  totalContributions: number;
  onEditProfile?: () => void;
  onMessageUser?: () => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  username,
  avatarSrc,
  bio,
  memberSince,
  totalContributions,
  onEditProfile,
  onMessageUser,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="mb-4">
        <UserAvatar src={avatarSrc} alt={username} size="large" />
      </div>
      <h2 className="text-2xl font-bold text-green-800 mb-2">{username}</h2>
      {bio && <p className="text-gray-700 mb-4 italic">{bio}</p>}
      <div className="text-gray-600 text-sm mb-4">
        <p>Member Since: {memberSince}</p>
        <p>Total Contributions: {totalContributions}</p>
      </div>
      <div className="flex justify-center space-x-4">
        {onEditProfile && (
          <Button variant="primary" onClick={onEditProfile}>
            Edit Profile
          </Button>
        )}
        {onMessageUser && (
          <Button variant="secondary" onClick={onMessageUser}>
            Message
          </Button>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;
