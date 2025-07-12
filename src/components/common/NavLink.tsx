import Link from 'next/link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="text-gray-600 hover:text-green-700 transition-colors">
      {children}
    </Link>
  )
}
