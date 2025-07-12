import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const Link: React.FC<LinkProps> = ({ href, children, className, external = false }) => {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`text-green-600 hover:underline ${className || ''}`}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={`text-green-600 hover:underline ${className || ''}`}>
      {children}
    </NextLink>
  );
};

export default Link;
