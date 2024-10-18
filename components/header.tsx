'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import logo from './Logo.png';
import logo3 from './logo3.png';
import CoolButton from '@/components/animated-button';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkBackground, setIsDarkBackground] = useState(false);

    const pathname = usePathname();

    const checkBackgroundColor = () => {
        const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
        const rgb = backgroundColor.match(/\d+/g)?.map(Number);

        if (rgb) {
            const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
            setIsDarkBackground(luminance < 0.5);
        }
    };

    useEffect(() => {
        checkBackgroundColor();
        window.addEventListener('resize', checkBackgroundColor);

        return () => window.removeEventListener('resize', checkBackgroundColor);
    }, [pathname]);

    return (
        <header className="relative z-10 flex justify-between items-center p-4" style={{ paddingLeft: '175px', paddingRight: '175px' }}> {/* 3cm padding on both sides */}
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
                {/* Logo on the left */}
                <div className="w-32 md:w-48 h-auto">
                    <Image
                        src={pathname === '/' ? logo : isDarkBackground ? logo3 : logo}
                        alt="Logo"
                        layout="responsive"
                        width={2200}
                        height={800}
                    />
                </div>

                {/* Navigation links next to the logo */}
                <nav className="hidden md:flex space-x-6">
                    {['Home', 'Mission', 'Team', 'Impressum', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                            className={`relative group ${pathname === '/' ? 'text-black' : (isDarkBackground ? 'text-white' : 'text-gray-800')}`}
                        >
                            {item}
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* What's New, Packages, and Get Started buttons on the right */}
            <div className="flex items-center space-x-8">
                <Link
                    href="/whats-new"
                    className={`text-gray-800 ${pathname === '/' ? 'text-black' : (isDarkBackground ? 'text-white' : 'text-gray-800')} hover:text-gray-500 transition transform hover:translate-y-0.5 hover:bg-opacity-90`}
                >
                    What&#39;s New
                </Link>
                <Link
                    href="/packages"
                    className={`text-gray-800 ${pathname === '/' ? 'text-black' : (isDarkBackground ? 'text-white' : 'text-gray-800')} hover:text-gray-500 transition transform hover:translate-y-0.5 hover:bg-opacity-90`}
                >
                    Packages
                </Link>

                {/* Updated Get Started button */}
                <CoolButton />
                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`focus:outline-none ${isDarkBackground && pathname !== '/' ? 'text-white' : 'text-black'}`}
                    >
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
            </div>

            {/* Mobile Navigation Dropdown */}
            {menuOpen && (
                <nav className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 md:hidden">
                    <ul className="flex flex-col space-y-4">
                        {['Home', 'Mission', 'Team', 'Impressum', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link
                                    href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                                    className={`block ${pathname === '/' ? 'text-black' : (isDarkBackground ? 'text-white' : 'text-gray-800')}`}
                                    onClick={() => setMenuOpen(false)}
                                >
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
