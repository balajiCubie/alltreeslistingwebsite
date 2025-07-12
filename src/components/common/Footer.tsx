// components/common/Footer.tsx

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-green-50 border-t border-green-200 text-green-900">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & Mission */}
        <div>
          <h2 className="text-xl font-bold">🌳 All Trees Listing</h2>
          <p className="mt-2 text-sm">
            Discover, protect, and plant every tree on Earth.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/trees">All Trees</Link></li>
            <li><Link href="/taxonomy">Taxonomy</Link></li>
            <li><Link href="/map">Map</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Credits & Legal */}
        <div className="text-sm">
          <p>© {new Date().getFullYear()} All Trees Listing</p>
          <p className="mt-1">Built with ❤️ using Next.js</p>
          <div className="mt-4 flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
