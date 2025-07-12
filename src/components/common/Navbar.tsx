import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          All Trees
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/trees" className="hover:text-gray-200">
              Trees
            </Link>
          </li>
          <li>
            <Link href="/map" className="hover:text-gray-200">
              Map
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-200">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
