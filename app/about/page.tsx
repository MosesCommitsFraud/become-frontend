'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function AboutPage() {
    const controls = useAnimationControls()

    useEffect(() => {
        const animateText = async () => {
            // Cycle through the phrases
            for (let i = 0; i < phrases.length; i++) {
                await controls.start({ y: `-${i * 100}%` })
                await new Promise(resolve => setTimeout(resolve, 2000)) // Wait 2 seconds for each phrase
            }
            controls.start({ y: '0%' }) // Reset back to the first phrase
        }

        animateText()
        const interval = setInterval(animateText, 24000) // Adjust the interval timing to fit the number of phrases
        return () => clearInterval(interval)
    }, [controls])

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
        "become market-leading"
    ];

    return (
        <div className="min-h-screen bg-gray-400 text-white overflow-hidden flex flex-col">
            {/* Header Component */}
            <Header />

            {/* Main Content */}
            <div className="flex-grow flex items-center">
                <div className="container mx-auto px-4">
                    <div className="relative h-8 overflow-hidden mb-4 text-sm uppercase tracking-widest">
                        <motion.div
                            animate={controls}
                            transition={{ duration: 0.5 }}
                            className="absolute left-0 flex flex-col items-start"
                            style={{ height: `${phrases.length * 100}%` }} // Adjust the height based on the number of phrases
                        >
                            {phrases.map((phrase, index) => (
                                <span key={index} className="h-8">{phrase}</span>
                            ))}
                        </motion.div>
                    </div>
                    <div className="max-w-3xl">
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span>We are a </span>
                            <span className="relative inline-block">
                                <span className="relative z-10">creative</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-full bg-yellow-400 -skew-x-12 z-0"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                                />
                            </span>
                            <span> agency.</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-300 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            We craft digital experiences that inspire and connect.
                        </motion.p>
                        <motion.div
                            className="text-lg text-gray-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
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
        </div>
    )
}
