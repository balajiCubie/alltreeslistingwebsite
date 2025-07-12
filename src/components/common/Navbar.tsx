'use client'

import Link from 'next/link'
import { Logo } from './Logo'
import NavLink from './NavLink'
import { SearchBar } from './SearchBar'
import UserMenu from './UserMenu'
import MobileMenu from './MobileMenu'
import { useState } from 'react'

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <NavLink href="/trees">Trees</NavLink>
          <NavLink href="/map">Map</NavLink>
          <NavLink href="/taxonomy">Taxonomy</NavLink>
          <NavLink href="/guides">Guides</NavLink>
          <NavLink href="/community">Community</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/shop">Shop</NavLink>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <SearchBar />
          <Link href="/donate" className="px-3 py-1 bg-green-600 text-white rounded">Donate</Link>
          <UserMenu />
          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && <MobileMenu onClose={() => setIsMobileOpen(false)} />}
    </header>
  )
}
