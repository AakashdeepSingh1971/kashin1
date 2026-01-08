'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', exact: true },
    { name: 'About', href: '/about', exact: false },
    { name: 'Our Services', href: '/services', exact: false },
  ];

  const isActive = (link: { href: string; exact: boolean }) => {
    if (link.exact) {
      return pathname === link.href;
    }
    return pathname.startsWith(link.href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-kashin-cream/95 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl tracking-[0.3em] text-kashin-brown hover:scale-105 transition-transform duration-300"
          >
            KASHIN
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm tracking-wide transition-all duration-300 py-1 group
                    ${active
                      ? 'text-kashin-brown font-medium'
                      : 'text-kashin-brown/70 hover:text-kashin-brown'
                    }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-kashin-brown transition-all duration-300 ease-out
                      ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </Link>
              );
            })}

            <Link
              href="/#contact"
              className="bg-kashin-taupe text-kashin-cream px-6 py-2.5 rounded-full text-sm font-medium
                hover:bg-kashin-brown hover:scale-105 hover:shadow-lg
                active:scale-95 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-kashin-brown p-2 hover:bg-kashin-brown/10 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''
                }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="py-6 border-t border-kashin-brown/10">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const active = isActive(link);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-base py-3 px-4 rounded-lg transition-all duration-200
                      ${active
                        ? 'text-kashin-brown font-medium bg-kashin-brown/10'
                        : 'text-kashin-brown/70 hover:text-kashin-brown hover:bg-kashin-brown/5'
                      }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                      transform: isMenuOpen
                        ? 'translateX(0)'
                        : 'translateX(-10px)',
                      opacity: isMenuOpen ? 1 : 0,
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                href="/#contact"
                className="bg-kashin-taupe text-kashin-cream px-6 py-3 rounded-full text-sm font-medium text-center mt-4
                  hover:bg-kashin-brown active:scale-95 transition-all duration-200"
                style={{
                  transitionDelay: isMenuOpen
                    ? `${navLinks.length * 50}ms`
                    : '0ms',
                  transform: isMenuOpen
                    ? 'translateY(0)'
                    : 'translateY(10px)',
                  opacity: isMenuOpen ? 1 : 0,
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header
