'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function GetStartedButton() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkBackground, setIsDarkBackground] = useState(false);

    const pathname = usePathname();

    // Map paths to background color configurations
    const backgroundColorMap: { [key: string]: string } = {
        '/': 'light',  // Home page
        '/mission': 'dark', // Example, can be dark
        '/team': 'dark',  // Example, can be dark
        '/contact': 'dark',  // Example, can be dark
        '/impressum': 'light',  // Example, can be light
    };

    useEffect(() => {
        // Manually set background color based on the route, same as in the header
        const backgroundType = backgroundColorMap[pathname as keyof typeof backgroundColorMap] || 'light'; // Default to light if not specified

        if (backgroundType === 'dark') {
            setIsDarkBackground(true);
        } else {
            setIsDarkBackground(false);
        }
    }, [pathname]);

    // Set button text and background colors dynamically
    const isLandingPage = pathname === '/';
    const buttonTextColor = isLandingPage ? 'text-black' : isDarkBackground ? 'text-white' : 'text-black';
    const buttonBgColor = isLandingPage ? 'bg-black' : isDarkBackground ? 'bg-white' : 'bg-black';
    const arrowColor = isLandingPage ? 'text-white' : isDarkBackground ? 'text-black' : 'text-white';

    // Set hover color based on background and menu open state
    const hoverTextColor = menuOpen ? (isDarkBackground ? 'text-black' : 'text-white') : buttonTextColor;

    return (
        <Link href="/contact">
            <button
                className={`relative flex items-center px-2 py-2 text-lg font-semibold rounded-2xl overflow-hidden border-2 ${
                    isLandingPage ? 'border-black' : isDarkBackground ? 'border-gray-600' : 'border-black'
                }`}
                style={{ width: '175px', height: '50px', borderWidth: '1px' }} // Smaller border
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
                aria-label="Get Started"
            >
                <motion.div
                    className={`absolute flex items-center rounded-xl ${buttonBgColor} text-white`}
                    initial={{ width: '38px' }}
                    animate={{
                        width: menuOpen ? 'calc(100% - 16px)' : '38px',
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex items-center justify-center w-9 h-9">
                        <ArrowRight className={`w-10 h-5 ${arrowColor}`} /> {/* Arrow changes color */}
                    </div>
                </motion.div>
                <AnimatePresence mode="wait">
                    {menuOpen ? (
                        <motion.div
                            key="hover-text"
                            className={`relative z-10 ml-12 mr-4 flex-grow text-center ${hoverTextColor}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="font-extralight text-base">Get Started</span>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="default-text"
                            className={`relative z-10 ml-12 mr-4 flex-grow text-center ${buttonTextColor}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="font-extralight text-base">Get Started</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </Link>
    );
}
