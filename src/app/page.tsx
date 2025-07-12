import { HeroSection } from '../components/home/HeroSection';
import { FeaturedSpecies } from '../components/home/FeaturedSpecies';
import { InteractiveMap } from '../components/home/InteractiveMap';
import { QuickLinksGrid } from '../components/home/QuickLinksGrid';
import { CommunitySpotlight } from '../components/home/CommunitySpotlight';
import { GuidesShowcase } from '../components/home/GuidesShowcase';
import { LatestPosts } from '../components/home/LatestPosts';
import { ImpactSection } from '../components/home/ImpactSection';
import { CTABanner } from '../components/home/CTABanner';

export default function Home() {
  const featuredSpeciesData = [
    { name: 'Oak Tree', image: '/images/oak.jpg', region: 'North America', status: 'Common' },
    { name: 'Maple Tree', image: '/images/maple.jpg', region: 'North America', status: 'Common' },
    { name: 'Cherry Blossom', image: '/images/cherry.jpg', region: 'Asia', status: 'Native' },
  ];

  const regionsData: { id: string; name: string; speciesCount: number; coordinates: [number, number]; }[] = [
    { id: 'na', name: 'North America', speciesCount: 1200, coordinates: [0.5, 0.2] },
    { id: 'eu', name: 'Europe', speciesCount: 800, coordinates: [0.4, 0.5] },
    { id: 'as', name: 'Asia', speciesCount: 2500, coordinates: [0.6, 0.8] },
  ];

  const quickLinks = [
    { title: 'Family', href: '/family', icon: '🌿' },
    { title: 'Genus', href: '/genus', icon: '🌳' },
    { title: 'Native Trees', href: '/native', icon: '🏡' },
    { title: 'Medicinal Trees', href: '/medicinal', icon: '💊' },
    { title: 'Endangered Trees', href: '/endangered', icon: '🚨' },
    { title: 'Region-based Filters', href: '/regions', icon: '🗺️' },
  ];

  const communityLeaderboard = [
    { rank: 1, username: 'TreeLover123', contributions: 1500, avatarUrl: '/images/user1.jpg' },
    { rank: 2, username: 'GreenThumb', contributions: 1200, avatarUrl: '/images/user2.jpg' },
    { rank: 3, username: 'ForestExplorer', contributions: 900, avatarUrl: '/images/user3.jpg' },
  ];

  const communityUserStories = [
    { id: '1', name: 'Alice Johnson', story: 'Finding rare species has never been easier!', imageUrl: '/images/story1.jpg' },
    { id: '2', name: 'Bob Williams', story: 'The community here is so supportive and knowledgeable.', imageUrl: '/images/story2.jpg' },
  ];

  const guidesData = [
    { title: 'How to Plant a Tree', image: '/images/guide1.jpg', excerpt: 'A step-by-step guide to planting trees successfully.', slug: 'how-to-plant', readTime: '10 min read' },
    { title: 'Identify Trees by Leaves', image: '/images/guide2.jpg', excerpt: 'Learn to identify common trees using their leaf characteristics.', slug: 'identify-by-leaves', readTime: '8 min read' },
  ];

  const latestPostsData = [
    { title: 'The Importance of Urban Forests', image: '/images/blog1.jpg', excerpt: 'Discover why urban trees are vital for city ecosystems.', slug: 'urban-forests', author: 'Jane Doe', date: 'July 1, 2025' },
    { title: 'Top 10 Most Resilient Trees', image: '/images/blog2.jpg', excerpt: 'Explore trees that thrive in challenging environments.', slug: 'resilient-trees', author: 'John Smith', date: 'June 25, 2025' },
  ];

  const impactPartners = [
    { name: 'Green Earth NGO', logo: '/images/partner1.png' },
    { name: 'Forestry Alliance', logo: '/images/partner2.png' },
    { name: 'Nature Conservancy', logo: '/images/partner3.png' },
  ];

  return (
    <>
      <HeroSection />
      <FeaturedSpecies species={featuredSpeciesData} />
      <InteractiveMap regionsData={regionsData} />
      <QuickLinksGrid links={quickLinks} />
      <CommunitySpotlight
        totalContributors={5000}
        leaderboard={communityLeaderboard}
        userStories={communityUserStories}
      />
      <GuidesShowcase guides={guidesData} />
      <LatestPosts posts={latestPostsData} />
      <ImpactSection
        treesListed={10000}
        treesPlanted={50000}
        endangeredSpeciesSaved={150}
        partners={impactPartners}
      />
      <CTABanner
        headline="Join thousands of tree lovers — start exploring today!"
        buttonText="Sign Up Free"
        buttonLink="/signup"
      />
      {/* Footer is now handled by layout.tsx, remove from here */}
      {/* <Footer /> */}
    </>
  );
}
