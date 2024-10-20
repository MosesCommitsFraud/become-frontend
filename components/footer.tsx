// components/CombinedFooter.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import { Separator } from "@/components/ui/separator";
import { Youtube, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import CoolButton from '@/components/dark-animated-button';

export default function CombinedFooter() {
    const [isSticky, setIsSticky] = useState(true);
    const [footerTop, setFooterTop] = useState(0);
    const footerRef = useRef<HTMLDivElement>(null);
    const fixedFooterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Store the initial top offset of the static footer
        const updateFooterTop = () => {
            setFooterTop(footerRef.current?.offsetTop ?? 0);
        };

        updateFooterTop();
        window.addEventListener('resize', updateFooterTop);

        const handleScroll = () => {
            const footerTopPosition = footerRef.current?.getBoundingClientRect().top ?? 0;
            const fixedFooterHeight = fixedFooterRef.current?.offsetHeight ?? 0;

            // Stop 12px above the static footer
            if (footerTopPosition <= window.innerHeight - fixedFooterHeight - 12) {
                setIsSticky(false); // Change to absolute positioning
            } else {
                setIsSticky(true); // Keep it fixed
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateFooterTop);
        };
    }, []);

    return (
        <>
            {/* Wrapper Div for the Fixed Footer */}
            <div
                ref={fixedFooterRef}
                className={`transition-all duration-100 ease-in-out w-10/12 max-w-screen mx-auto ${
                    isSticky ? 'fixed bottom-5 left-0 right-0' : 'absolute left-0 right-0'
                }`}
                style={{
                    top: isSticky ? 'auto' : `${footerTop - 50}px`, // Smooth stop before hitting the footer
                    zIndex: 20,
                    transform: isSticky ? 'translateY(0)' : 'translateY(-32px)', // Apply a transform for smoother stop
                    transition: 'top 0.5s ease-in-out, transform 0.5s ease-in-out', // Smooth transition
                }}
            >
                {/* First Footer: Fixed Footer */}
                <div
                    className="w-full bg-[#262626] bg-opacity-80 backdrop-blur-sm text-white p-2 flex justify-between items-center rounded-xl shadow-lg"
                >
                    {/* Left Side: Logo and Spacer */}
                    <div className="flex items-center space-x-4">
                        <Link href="#home">
                            <div className="flex items-center justify-center w-12 h-12 ml-4 cursor-pointer">
                                <Image src={logo2} alt="Logo" layout="responsive" width={2200} height={800} />
                            </div>
                        </Link>

                        <Separator orientation="vertical" className="h-4 bg-gray-400" />

                        <div className="flex space-x-2">
                            <Link href="#privacy"
                                  className="relative z-20 bg-gray-800 p-1.5 w-8 h-8 mr-2 flex items-center justify-center rounded-md transition-colors duration-300 hover:bg-[#ff007a]">
                                <svg className="text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 2a10 10 0 00-3.12 19.475c.494.09.674-.214.674-.476v-1.846c-2.746.598-3.333-1.323-3.333-1.323-.449-1.146-1.095-1.452-1.095-1.452-.897-.61.067-.598.067-.598 1.003.07 1.53 1.06 1.53 1.06.882 1.52 2.316 1.074 2.88.821.09-.64.346-1.073.63-1.32-2.192-.25-4.49-1.094-4.49-4.873 0-1.08.39-1.963 1.03-2.654-.105-.253-.447-1.27.097-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.17c.85.004 1.705.113 2.505.33 1.91-1.295 2.75-1.025 2.75-1.025.544 1.38.202 2.397.1 2.65.643.69 1.03 1.573 1.03 2.653 0 3.79-2.303 4.62-4.497 4.864.355.31.674.92.674 1.854v2.74c0 .264.18.568.68.474A10 10 0 0012 2z" />
                                </svg>
                            </Link>

                            <Link href="#terms"
                                  className="relative z-20 bg-gray-800 p-1.5 w-8 h-8 flex items-center justify-center rounded-md transition-colors duration-300 hover:bg-[#ff007a]">
                                <svg className="text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Menu Links and Contact Us */}
                    <nav className="flex items-center space-x-8">
                        <Link href="/" className="text-white hover:text-gray-300 transition transform hover:translate-y-1 hover:bg-opacity-90">Home</Link>
                        <Link href="/about" className="text-white hover:text-gray-300 transition transform hover:translate-y-1 hover:bg-opacity-90">About</Link>
                        <Link href="#portfolio" className="text-white hover:text-gray-300 transition transform hover:translate-y-1 hover:bg-opacity-90">Portfolio</Link>
                        <Link href="#blog" className="text-white hover:text-gray-300 transition transform hover:translate-y-1 hover:bg-opacity-90">Blog</Link>

                        <Link href="/contact">
                            <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 bg-gradient-to-r from-red-600 to-red-600 hover:from-white hover:to-white hover:text-black">
                                Contact Us
                            </button>
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Second Footer: Static Footer */}
            <footer ref={footerRef} className="bg-black text-white py-12 px-4 md:px-6 mt-24">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-start mb-4">
                                <Image src={logo3} alt="Logo" width={100} height={25} className="mr-4" />
                            </div>
                            <p className="mb-6 max-w-md">
                                Our goal is to give your lifestyle brand the representation it deserves by establishing the newest technologies digital commerce has to offer.
                            </p>
                            <div className="flex space-x-4">
                                <CoolButton />
                                <Link href="#" className="text-white px-4 py-2 rounded-full text-sm font-medium border border-white inline-flex items-center justify-center mt-1.5" style={{ width: '120px', height: '40px' }}>
                                    Our Portfolio
                                </Link>
                            </div>
                        </div>

                        <div className="lg:pl-8">
                            <h3 className="text-lg font-semibold mb-4">EXPLORE</h3>
                            <ul className="space-y-2">
                                {['Home', 'Home 2', 'Home 3', 'Team', 'Pricing'].map((item) => (
                                    <li key={item}><Link href="#" className="text-white hover:text-gray-300 transition transform hover:translate-y-0.5 hover:bg-opacity-90">{item}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:pl-8">
                            <h3 className="text-lg font-semibold mb-4">MORE PAGES</h3>
                            <ul className="space-y-2">
                                {['Work', 'Work 2', 'Work 3', 'Contact', 'Contact 2'].map((item) => (
                                    <li key={item}><Link href="#" className="text-white hover:text-gray-300 transition transform hover:translate-y-0.5 hover:bg-opacity-90">{item}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:pl-8">
                            <h3 className="text-lg font-semibold mb-4">ABOUT</h3>
                            <ul className="space-y-2">
                                {['About', 'About 2', 'About 3', 'Blog'].map((item) => (
                                    <li key={item}><Link href="#" className="text-white hover:text-gray-300 transition transform hover:translate-y-0.5 hover:bg-opacity-90">{item}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-gray-400">
                            Copyright © Design & Developed by Moritz Schäfer | Powered by Vercel
                        </div>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link href="#" className="text-white hover:text-gray-300 transition transform hover:translate-y-0.5 hover:bg-opacity-90">
                                <Youtube size={20} />
                                <span className="sr-only">YouTube</span>
                            </Link>
                            <Link href="#" className="text-white hover:text-gray-300 transition transform hover:translate-y-0.5 hover:bg-opacity-90">
                                <Instagram size={20} />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-white hover:text-gray-300 transition transform hover:translate-y-0.5 hover:bg-opacity-90">
                                <Facebook size={20} />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-white hover:text-gray-300 transition transform hover:translate-y-0.5 hover:bg-opacity-90">
                                <Twitter size={20} />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-white hover:text-gray-300 transition transform hover:translate-y-0.5 hover:bg-opacity-90">
                                <Linkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
