import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Assuming Next.js router for active link styling

interface UserDashboardSidebarProps {
  username: string;
  avatarSrc?: string;
}

const UserDashboardSidebar: React.FC<UserDashboardSidebarProps> = ({ username, avatarSrc }) => {
  const router = useRouter();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Saved Trees', href: '/dashboard/saved-trees' },
    { name: 'Planting Log', href: '/dashboard/planting-log' },
    { name: 'Notifications', href: '/dashboard/notifications' },
    { name: 'API Keys', href: '/dashboard/api-keys' },
    { name: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <aside className="w-64 bg-white shadow-md p-6 rounded-lg">
      <div className="text-center mb-6">
        {/* Assuming UserAvatar component exists */}
        {/* <UserAvatar src={avatarSrc} alt={username} size="large" /> */}
        <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-700 mb-2">
          {username.charAt(0).toUpperCase()}
        </div>
        <h3 className="text-xl font-semibold text-green-800">{username}</h3>
      </div>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-2 px-3 rounded-md transition-colors duration-200
                  ${router.pathname === item.href ? 'bg-green-100 text-green-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'}
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default UserDashboardSidebar;
