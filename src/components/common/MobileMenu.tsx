import Link from 'next/link'
import NavLink from './NavLink'
import { SearchBar } from './SearchBar'

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
      <button onClick={onClose} className="mb-4">Close</button>
      <nav className="flex flex-col space-y-4">
        <NavLink href="/trees">Trees</NavLink>
        <NavLink href="/map">Map</NavLink>
        <NavLink href="/taxonomy">Taxonomy</NavLink>
        <NavLink href="/guides">Guides</NavLink>
        <NavLink href="/community">Community</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/shop">Shop</NavLink>
        <Link href="/donate" className="px-3 py-1 bg-green-600 text-white rounded">Donate</Link>
        <SearchBar />
      </nav>
    </div>
  )
}
