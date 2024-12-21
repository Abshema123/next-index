import Link from 'next/link'
import React from 'react'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]
const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 shadow-lg'>
        <div>
            <span>Socila</span>
        </div>
        <nav>
            <ul className='flex space-x-4'>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
              
            </ul>
        </nav>
        <div>
            <button>
                Login
            </button>
        </div>
    </header>
  )
}

export default Header