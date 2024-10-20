'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Footer2 from '@/components/footer2'

export default function AboutPage() {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    const phrases = [
        "become future-ready",
        "become resilient",
        "become successful",
        "become multi-generational",
        "become innovative",
        "become customer-centric",
        "become competitive",
        "become visible",
        "become data-driven",
        "become agile",
        "become insight-powered",
        "become influential",
        "become market-leading",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) =>
                prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Display each phrase for 4 seconds

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, [phrases.length]);

    return (
        <div className="min-h-screen bg-gray-400 text-white overflow-hidden flex flex-col">
            {/* Header Component */}
            <Header />

            {/* Main Content */}
            <div className="flex-grow flex items-center mt-64 mb-48">
                <div className="container mx-auto px-4">
                    <div className="relative h-8 overflow-hidden mb-4 text-sm uppercase tracking-widest">
                        {phrases.map((phrase, index) => (
                            <motion.span
                                key={index}
                                className="absolute h-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: index === currentPhraseIndex ? 1 : 0, y: index === currentPhraseIndex ? 0 : 20 }}
                                transition={{ duration: 1.5, ease: 'easeOut' }} // Animation duration is now 1 second
                                style={{ display: index === currentPhraseIndex ? 'block' : 'none' }}
                            >
                                {phrase}
                            </motion.span>
                        ))}
                    </div>
                    <div className="max-w-3xl">
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }} // Header animation speed adjusted
                        >
                            <span>We are a </span>
                            <span className="relative inline-block">
                                <span className="relative z-10">creative</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-full bg-yellow-400 -skew-x-12 z-0"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }} // Background animation adjusted
                                />
                            </span>
                            <span> agency.</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-300 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                        >
                            We craft digital experiences that inspire and connect.
                        </motion.p>
                        <motion.div
                            className="text-lg text-gray-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                        >
                            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                            <p>
                                We believe in the power of creativity to transform businesses and touch lives.
                                Our mission is to deliver innovative digital solutions that make a lasting impact.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer Component */}
            <Footer />
            <Footer2 />
        </div>
    );
}
