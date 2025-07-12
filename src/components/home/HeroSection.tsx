import React from 'react';
import { SearchBar } from '../common/SearchBar';
import { Button } from '../common/Button';
import { Logo } from '../common/Logo';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        {/* Placeholder for background image/video */}
        <img
          src="/images/oak.jpg" // Example image, replace with actual hero image
          alt="Lush forest background"
          className="w-full h-full object-cover lazyload"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for contrast */}
      </div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
        <Logo className="mb-4 mx-auto" /> {/* Optional watermark logo */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Discover Every Tree On Earth
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Search, learn, and protect 10,000+ tree species.
        </p>
        <div className="mb-8">
          <SearchBar placeholder="Search for a tree species..." />
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" size="large">
            Browse All Trees
          </Button>
          <Button variant="secondary" size="large">
            Start Identifying Trees
          </Button>
        </div>
      </div>
    </section>
  );
};
