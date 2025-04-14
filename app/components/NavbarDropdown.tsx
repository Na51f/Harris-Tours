'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  name: string;
  path: string;
}

interface NavbarDropdownProps {
  label: string;
  items: NavItem[];
}

export default function NavbarDropdown({ label, items }: NavbarDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1 hover:text-secondary transition-colors"
        onMouseEnter={() => setIsOpen(true)}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      <div 
        className={`absolute top-full mt-2 py-2 w-48 bg-neutral rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
