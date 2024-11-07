'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className='h-16 bg-green-700 flex justify-between items-center px-3 text-white relative z-10'>
      {/* Logo */}
      <div className='logo font-bold text-xl'>
        <Link href='/'>URL Shortener</Link>
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
        {['Home', 'About', 'Shorten', 'Contact Us'].map((text, index) => (
          <li key={index} className='py-2 md:py-0 md:px-2'>
            <Link href={`/${text.toLowerCase().replace(' ', '')}`}>
              <span
                onClick={() => setMenuOpen(false)}
                className='relative hover:text-green-300 transition-all duration-300 pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300'
              >
                {text}
              </span>
            </Link>
          </li>
        ))}
        {/* Buttons */}
        <li className='flex flex-col md:flex-row gap-3 py-2 md:py-0 md:items-center'>
          <Link href='/shorten'>
            <button
              onClick={() => setMenuOpen(false)}
              className='bg-green-500 rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-green-600 transition-colors w-full md:w-auto'
            >
              Try Now
            </button>
          </Link>
          <Link href='/github'>
            <button
              onClick={() => setMenuOpen(false)}
              className='bg-green-500 rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-green-600 transition-colors w-full md:w-auto'
            >
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
