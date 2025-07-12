import React from 'react';
import Link from 'next/link';

interface RelatedLink {
  label: string;
  href: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
  title?: string;
}

const RelatedLinks: React.FC<RelatedLinksProps> = ({ links, title = "Related Links" }) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className="related-links bg-gray-50 p-4 rounded-lg shadow-sm my-8">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-blue-600 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedLinks;
