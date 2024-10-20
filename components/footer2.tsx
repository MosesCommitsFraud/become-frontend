'use client'

import Link from 'next/link'
import { Youtube, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'
import CoolButton from '@/components/animated-button'
import logo3 from './logo3.png'
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-4 md:px-6 mb-24 mt-14">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-start mb-4 mt-8">
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

                    <div className="lg:pl-8 mt-8">
                        <h3 className="text-lg font-semibold mb-4">EXPLORE</h3>
                        <ul className="space-y-2">
                            {['Home', 'Home 2', 'Home 3', 'Team', 'Pricing'].map((item) => (
                                <li key={item}><Link href="#" className="text-white hover:text-gray-300 transition transform hover:translate-y-0.5 hover:bg-opacity-90">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:pl-8 mt-8">
                        <h3 className="text-lg font-semibold mb-4">MORE PAGES</h3>
                        <ul className="space-y-2">
                            {['Work', 'Work 2', 'Work 3', 'Contact', 'Contact 2'].map((item) => (
                                <li key={item}><Link href="#" className="text-white hover:text-gray-300 transition transform hover:translate-y-0.5 hover:bg-opacity-90">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:pl-8 mt-8">
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
    )
}