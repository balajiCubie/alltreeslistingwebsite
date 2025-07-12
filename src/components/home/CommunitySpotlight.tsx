import React from 'react';
import { LeaderboardItem } from '../common/LeaderboardItem';
import { Button } from '../common/Button';
import Image from 'next/image';

interface Contributor {
  rank: number;
  username: string;
  contributions: number;
  avatarUrl?: string;
}

interface CommunitySpotlightProps {
  totalContributors: number;
  leaderboard: Contributor[];
  userStories: Array<{
    id: string;
    name: string;
    story: string;
    imageUrl: string;
  }>;
}

export const CommunitySpotlight: React.FC<CommunitySpotlightProps> = ({
  totalContributors,
  leaderboard,
  userStories,
}) => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Community Spotlight</h2>

        <div className="text-center mb-8">
          <p className="text-2xl font-semibold text-green-800">{totalContributors.toLocaleString()}+ Contributors</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Leaderboard Section */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-center">Top Contributors</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {leaderboard.map((contributor) => (
                <LeaderboardItem key={contributor.rank} {...contributor} />
              ))}
            </div>
          </div>

          {/* User Stories Section */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-center">Stories from Our Community</h3>
            <div className="space-y-8">
              {userStories.map((story) => (
                <div key={story.id} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <Image
                    src={story.imageUrl}
                    alt={story.name}
                    width={80}
                    height={80}
                    objectFit="cover"
                    className="rounded-full mr-6 flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-lg mb-2">{story.name}</p>
                    <p className="text-gray-700 italic">"{story.story}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="large">
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
};
