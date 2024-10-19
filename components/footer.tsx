// components/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo2 from './logo2.png';
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer
            className="z-10 fixed bottom-5 left-0 right-0 w-10/12 mx-auto bg-black bg-opacity-60 backdrop-blur-sm text-white p-2 flex justify-between items-center rounded-xl shadow-lg">
            {/* Left Side: Logo and Spacer */}
            <div className="flex items-center space-x-4">
                {/* Clickable Logo */}
                <Link href="#home"> {/* Wrapped the logo in a Link */}
                    <div className="flex items-center justify-center w-12 h-12 ml-4 cursor-pointer">
                        <Image src={logo2} alt="Logo" layout="responsive" width={2200} height={800}/>
                    </div>
                </Link>

                {/* Separator between logo and links */}
                <Separator orientation="vertical" className="h-4 bg-gray-400"/>

                {/* Spacer */}
                <div className="flex space-x-2">
                    {/* Privacy Button */}
                    <Link href="#privacy"
                          className="relative z-20 bg-gray-800 p-1.5 w-8 h-8 mr-2 flex items-center justify-center rounded-md transition-colors duration-300 hover:bg-[#ff007a] hover:transition-colors">
                        <svg className="text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 2a10 10 0 00-3.12 19.475c.494.09.674-.214.674-.476v-1.846c-2.746.598-3.333-1.323-3.333-1.323-.449-1.146-1.095-1.452-1.095-1.452-.897-.61.067-.598.067-.598 1.003.07 1.53 1.06 1.53 1.06.882 1.52 2.316 1.074 2.88.821.09-.64.346-1.073.63-1.32-2.192-.25-4.49-1.094-4.49-4.873 0-1.08.39-1.963 1.03-2.654-.105-.253-.447-1.27.097-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.17c.85.004 1.705.113 2.505.33 1.91-1.295 2.75-1.025 2.75-1.025.544 1.38.202 2.397.1 2.65.643.69 1.03 1.573 1.03 2.653 0 3.79-2.303 4.62-4.497 4.864.355.31.674.92.674 1.854v2.74c0 .264.18.568.68.474A10 10 0 0012 2z"/>
                        </svg>
                    </Link>

                    {/* Terms Button */}
                    <Link href="#terms"
                          className="relative z-20 bg-gray-800 p-1.5 w-8 h-8 flex items-center justify-center rounded-md transition-colors duration-300 hover:bg-[#ff007a] hover:transition-colors">
                        <svg className="text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Right Side: Menu Links and Contact Us */}
            <nav className="flex items-center space-x-8">
                <Link href="/"
                      className="text-white hover:text-gray-300 transition transform hover:translate-y-1 hover:bg-opacity-90">Home</Link>
                <Link href="/about"
                      className="text-white hover:text-gray-300 transition transform hover:translate-y-1 hover:bg-opacity-90">About</Link>
                <Link href="#portfolio"
                      className="text-white hover:text-gray-300 transition transform hover:translate-y-1 hover:bg-opacity-90">Portfolio</Link>
                <Link href="#blog"
                      className="text-white hover:text-gray-300 transition transform hover:translate-y-1 hover:bg-opacity-90">Blog</Link>

                {/* Contact Us Button with Gradient Shift from Left to Right */}
                <Link href="/contact">
                    <button
                        className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 bg-gradient-to-r from-red-600 to-red-600 hover:from-white hover:to-white hover:text-black">
                        Contact Us
                    </button>
                </Link>
            </nav>
        </footer>
    );
}
