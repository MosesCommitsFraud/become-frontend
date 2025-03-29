'use client'

import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { FlipWords } from '@/components/ui/flip-words';
import { StickyScrollAboutDemo } from '@/components/sticky-scroll-about-demo';

export default function AboutPage() {
    // For FlipWords component
    const phrases = [
        "future-ready",
        "resilient",
        "successful",
        "multi-generational",
        "innovative",
        "customer-centric",
        "competitive",
        "visible",
        "data-driven",
        "agile",
        "insight-powered",
        "influential",
        "market-leading",
    ];

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden flex flex-col">
            {/* Header Component */}
            <Header />

            {/* Main Content */}
            <div className="flex-grow">
                <div className="container mx-auto px-4 pt-24 max-w-7xl">
                    {/* FlipWords Component for "become" phrases */}
                    <div className="h-8 overflow-hidden mb-6 text-md uppercase tracking-widest">
                        <span className="text-white uppercase tracking-widest">become </span>
                        <FlipWords
                            words={phrases}
                            duration={5000}
                            className="text-white tracking-widest"
                        />
                    </div>

                    {/* Sticky Scroll Component */}
                    <div className="mb-6">
                        <StickyScrollAboutDemo />
                    </div>
                </div>
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
}