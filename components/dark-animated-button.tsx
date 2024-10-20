'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function GetStartedButton() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Set button text and background colors to always use the dark palette
    const buttonTextColor = 'text-white';
    const buttonBgColor = 'bg-white';
    const arrowColor = 'text-black';
    const borderColor = 'border-gray-600';

    // Set hover color based on menu open state
    const hoverTextColor = menuOpen ? 'text-black' : buttonTextColor;

    return (
        <Link href="/contact">
            <button
                className={`relative flex items-center px-2 py-2 text-lg font-semibold rounded-2xl overflow-hidden border-2 ${borderColor}`}
                style={{ width: '175px', height: '50px', borderWidth: '1px' }}
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
                        <ArrowRight className={`w-10 h-5 ${arrowColor}`} /> {/* Arrow remains white */}
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
