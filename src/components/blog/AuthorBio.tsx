import React from 'react'; // Added comment to trigger recompile
import UserAvatar from '../community/UserAvatar'; // Assuming UserAvatar is in ../community

interface AuthorBioProps {
  name: string;
  bio: string;
  avatarSrc?: string;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ name, bio, avatarSrc }) => {
  return (
    <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
      <UserAvatar src={avatarSrc} alt={name} size="medium" />
      <div>
        <h3 className="text-lg font-semibold text-green-800">{name}</h3>
        <p className="text-gray-700 text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default AuthorBio;
