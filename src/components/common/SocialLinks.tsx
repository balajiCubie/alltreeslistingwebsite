import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Assuming react-icons is installed

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  const socialLinks: SocialLink[] = [
    { name: 'Facebook', href: 'https://facebook.com/alltreeslisting', icon: <FaFacebook /> },
    { name: 'Twitter', href: 'https://twitter.com/alltreeslisting', icon: <FaTwitter /> },
    { name: 'Instagram', href: 'https://instagram.com/alltreeslisting', icon: <FaInstagram /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/alltreeslisting', icon: <FaLinkedin /> },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link) => (
        <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl">
          {link.icon}
          <span className="sr-only">{link.name}</span>
        </Link>
      ))}
    </div>
  );
};
