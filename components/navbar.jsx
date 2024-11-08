'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ['Home', 'Shorten', 'About', 'Contact'];

  return (
    <nav className='h-16 bg-green-700 flex justify-between items-center px-3 text-white relative z-10'>
      {/* Logo with SVG Icon */}
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <span className='flex items-center'>
            {/* SVG Logo */}
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-white'
            >
              <path d='M12 2L2 12h10v10l10-10H12V2z' fill='currentColor' />
            </svg>
            <span className='font-bold text-xl ml-2'>SwiftURL</span>
          </span>
        </Link>
      </div>

      {/* Menu Icon for Mobile */}
      <div className='md:hidden' onClick={toggleMenu}>
        {menuOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        )}
      </div>

      {/* Links */}
      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col absolute top-16 left-0 w-full bg-green-700 text-center md:flex md:flex-row md:items-center md:static md:w-auto md:gap-6`}
      >
        {navLinks.map((text, index) => {
          const linkPath = `/${text.toLowerCase().replace(' ', '')}`;
          const isActive =
            pathname === linkPath || (pathname === '/' && text === 'Home');

          return (
            <li key={index} className='py-2 md:py-0 md:px-2'>
              <Link href={linkPath}>
                <span
                  onClick={() => setMenuOpen(false)}
                  className={`relative pb-1 ${
                    isActive
                      ? 'text-green-300 after:w-full'
                      : 'hover:text-green-300'
                  } transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white ${
                    isActive ? 'after:w-full' : 'after:w-0'
                  } hover:after:w-full after:transition-all after:duration-300`}
                >
                  {text}
                </span>
              </Link>
            </li>
          );
        })}

        {/* Buttons */}
        <li className='flex flex-col md:flex-row gap-3 py-2 md:py-0 md:items-center'>
          <Link href='/shorten' className='w-full md:w-auto'>
            <span
              onClick={() => setMenuOpen(false)}
              className='inline-block bg-green-500 rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-green-600 transition-colors w-full'
            >
              Try Now
            </span>
          </Link>
          <Link href='/github' target='_blank' className='w-full md:w-auto'>
            <span
              onClick={() => setMenuOpen(false)}
              className='inline-block bg-green-500 rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-green-600 transition-colors w-full'
            >
              GitHub
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
