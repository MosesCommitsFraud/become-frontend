// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import the usePathname hook
import Image from 'next/image';
import Link from 'next/link';
import logo from './Logo.png';
import logo3 from './logo3.png';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkBackground, setIsDarkBackground] = useState(false);

    const pathname = usePathname(); // Get the current path

    // Function to determine if the background is dark
    const checkBackgroundColor = () => {
        const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
        const rgb = backgroundColor.match(/\d+/g)?.map(Number); // Extract RGB values

        if (rgb) {
            const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
            setIsDarkBackground(luminance < 0.5); // Dark background if luminance is below 0.5
        }
    };

    useEffect(() => {
        // Check the background color initially
        checkBackgroundColor();

        // Add an event listener to monitor changes in background color or resize
        window.addEventListener('resize', checkBackgroundColor);

        return () => window.removeEventListener('resize', checkBackgroundColor);
    }, []);

    return (
        <header className="relative z-10 p-4 flex justify-between items-center">
            <div className="w-32 md:w-48 h-auto"> {/* Adjust logo size */}
                <Image
                    src={pathname === '/' ? logo : isDarkBackground ? logo3 : logo}
                    alt="Logo"
                    layout="responsive"
                    width={2200}
                    height={800}
                />
            </div>

            {/* Hamburger Menu Icon for Mobile */}
            <div className="md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`focus:outline-none ${isDarkBackground ? 'text-white' : 'text-gray-800'}`}
                >
                    {/* Hamburger Icon */}
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Navigation Menu for larger screens */}
            <nav className="hidden md:flex space-x-4">
                <ul className="flex space-x-4">
                    {['Home', 'Mission', 'Team', 'Impressum', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link href={`#${item.toLowerCase()}`} className={`relative group ${isDarkBackground ? 'text-white' : 'text-gray-800'}`}>
                                {item}
                                <span
                                    className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                ></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navigation Dropdown */}
            {menuOpen && (
                <nav className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 md:hidden">
                    <ul className="flex flex-col space-y-4">
                        {['Home', 'Mission', 'Team', 'Impressum', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link href={`#${item.toLowerCase()}`} className={`block ${isDarkBackground ? 'text-white' : 'text-gray-800'}`} onClick={() => setMenuOpen(false)}>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
