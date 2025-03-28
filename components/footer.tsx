// components/footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import logo3 from './logo3.png';
import CoolButton from '@/components/dark-animated-button';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export default function CombinedFooter() {
    return (
        <footer className="bg-black text-white py-12 px-4 md:px-6 mt-24">
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
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="a"
                                className="bg-black text-white flex items-center space-x-2"
                                onClick={() => window.location.href = '#'}
                            >
                                <span>Our Portfolio</span>
                            </HoverBorderGradient>
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

                <div
                    className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm text-gray-400">
                        Disclaimer: This is not a real company, but a student project designed to emulate the
                        operations of a business for educational purposes only.<br/>
                        Any references to products, services, or business practices are fictional and intended
                        solely for learning and academic evaluation.
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="https://www.instagram.com/become.consulting?igsh=MWxsYjJqenByeWRqeA=="
                              className="text-white hover:text-gray-300 transition transform hover:translate-y-0.5 hover:bg-opacity-90">
                            <Instagram size={20}/>
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="https://www.linkedin.com/company/become-ecommerce-consulting"
                              className="text-white hover:text-gray-300 transition transform hover:translate-y-0.5 hover:bg-opacity-90">
                            <Linkedin size={20}/>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}