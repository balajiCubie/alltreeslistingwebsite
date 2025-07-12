import React from 'react';
import Link from 'next/link';
import { NewsletterSignup } from './NewsletterSignup'; // Assuming this component exists
import { SocialLinks } from './SocialLinks'; // Assuming this component exists

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <Link href={link.href} className="hover:underline">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer: React.FC = () => {
  const aboutLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Mission', href: '/mission' },
    { label: 'Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
  ];

  const resourcesLinks = [
    { label: 'Guides', href: '/guides' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <FooterSection title="About" links={aboutLinks} />

        {/* Resources Section */}
        <FooterSection title="Resources" links={resourcesLinks} />

        {/* Legal Section */}
        <FooterSection title="Legal" links={legalLinks} />

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <NewsletterSignup />
          <SocialLinks className="mt-6" />
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} All Trees Listing. All rights reserved.
      </div>
    </footer>
  );
};
