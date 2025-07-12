import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="text-gray-600 text-sm my-4" aria-label="breadcrumbs">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
