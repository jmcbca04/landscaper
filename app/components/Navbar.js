'use client'

import { useState } from 'react'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="bg-base-100 sticky top-0 z-50 shadow-sm">
      <div className="container">
        <div className="navbar min-h-[4rem]">
          {/* Logo */}
          <div className="navbar-start">
            <Link href="/" className="text-xl font-serif font-medium text-primary">
              GreenScape
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-primary hover:text-accent"
                    onClick={handleClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="navbar-end">
            <Link href="#contact" className="btn btn-primary hidden sm:flex">
              Get Started
            </Link>
            <div className="dropdown dropdown-end lg:hidden">
              <button
                className="btn btn-ghost lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        onClick={handleClick}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link 
                      href="#contact" 
                      className="btn btn-primary btn-sm mt-2"
                      onClick={handleClick}
                    >
                      Get Started
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 