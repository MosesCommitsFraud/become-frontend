'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from '@/components/text-reveal-card';
import { TextGenerateEffect } from '@/components/text-generate-effect';
import { InfiniteMovingCards } from '@/components/infinite-moving-cards';

// Add required CSS for the infinite cards animation
const AddInfiniteCardStyles = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-50% - 2rem));
        }
      }
      
      .animate-scroll {
        animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return null;
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden flex flex-col">
            {/* Add required styles for infinite cards */}
            <AddInfiniteCardStyles />

            {/* Header Component */}
            <Header />

            {/* Main Content */}
            <div className="flex-grow">
                <div className="container mx-auto px-4 pt-24 pb-20 max-w-7xl">
                    {/* About Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            About <span className="bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] bg-clip-text text-transparent">BECOME</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl">
                            Elevating Lifestyle Brands to New Levels
                        </p>
                    </motion.div>

                    {/* Our Vision - Text Reveal Card */}
                    <div className="mb-24">
                        <TextRevealCard
                            text="Digital transformation"
                            revealText="for lifestyle brands"
                            className="w-full h-40 sm:h-60 rounded-xl border border-white/[0.08]"
                        >
                            <TextRevealCardTitle className="text-xl mb-4">
                                Our Vision
                            </TextRevealCardTitle>
                            <TextRevealCardDescription>
                                Moving lifestyle brands into the digital future with tailored e-commerce solutions.
                            </TextRevealCardDescription>
                        </TextRevealCard>
                    </div>

                    {/* Who We Are - Text Generate */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] bg-clip-text text-transparent">
                            Who We Are
                        </h2>
                        <div className="bg-[#1d1c20] border border-white/[0.08] rounded-xl p-8">
                            <div className="text-white">
                                <TextGenerateEffect
                                    words="BECOME is a dynamic consulting company with a passion for digital and smart commerce solutions focusing on the lifestyle industry. We are on a mission to drive digital transformation and help businesses flourish by establishing a solid eCommerce presence."
                                    className="text-lg mb-8 text-white dark:text-white"
                                    filter={true}
                                    duration={0.7}
                                />
                            </div>
                            <div className="mt-12 text-white">
                                <TextGenerateEffect
                                    words="We understand that the journey to establishing a strong online presence can feel overwhelming, especially for small businesses in the lifestyle industry. Whether it's showcasing your unique products or connecting emotionally with your customers, we comprehend that running your business leaves little time for exploring eCommerce options."
                                    className="text-lg text-white dark:text-white"
                                    filter={true}
                                    duration={0.7}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* What We Believe - Expanded Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] bg-clip-text text-transparent">
                            What We Believe
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[#1d1c20] border border-white/[0.08] rounded-xl p-8 h-full">
                                <h3 className="text-xl font-bold mb-4 text-white">Customer Experience is Key</h3>
                                <p className="text-gray-300 mb-4">
                                    Over 73% of customers consider experience an important factor when purchasing, and 80% prioritize speed and convenience in their shopping journey.
                                </p>
                                <p className="text-gray-300 mb-4">
                                    We believe in creating e-commerce solutions that don&#39;t just sell products but deliver memorable experiences that build lasting customer relationships.
                                </p>
                                <p className="text-gray-300">
                                    The lifestyle industry in particular thrives on emotional connections and exceptional experiences, with research showing a 16% price premium available to brands that deliver superior customer experiences.
                                </p>
                            </div>
                            <div className="bg-[#1d1c20] border border-white/[0.08] rounded-xl p-8 h-full">
                                <h3 className="text-xl font-bold mb-4 text-white">Digital Presence is Essential</h3>
                                <p className="text-gray-300 mb-4">
                                    With global e-commerce representing over 4.1 trillion dollars in revenue and growing at a compound annual rate of 13%, establishing a strong online presence is no longer optional.
                                </p>
                                <p className="text-gray-300 mb-4">
                                    Yet only 25% of SMEs in the EU are actively engaged in e-commerce, revealing a significant opportunity gap that many businesses have yet to bridge.
                                </p>
                                <p className="text-gray-300">
                                    We believe every lifestyle brand deserves the opportunity to thrive in the digital marketplace, regardless of size or starting point, and that doing so is essential for long-term resilience and growth.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-[#1d1c20] border border-white/[0.08] rounded-xl p-8 h-full">
                                <h3 className="text-xl font-bold mb-4 text-white">Personalization Creates Loyalty</h3>
                                <p className="text-gray-300 mb-4">
                                    Modern consumers expect experiences tailored to their preferences and behaviors. In the lifestyle sector, personalization isn&#39;t just appreciated—it&#39;s expected.
                                </p>
                                <p className="text-gray-300">
                                    We believe that building data-driven personalization into your e-commerce strategy isn&#39;t just about conversion optimization—it&#39;s about creating the kind of meaningful brand connection that transforms one-time buyers into lifelong advocates.
                                </p>
                            </div>
                            <div className="bg-[#1d1c20] border border-white/[0.08] rounded-xl p-8 h-full">
                                <h3 className="text-xl font-bold mb-4 text-white">Technology Should Be Accessible</h3>
                                <p className="text-gray-300 mb-4">
                                    Many lifestyle brands hesitate to embrace e-commerce due to perceived complexity, high costs, or technical barriers. This hesitation creates a widening gap between digitally mature businesses and those being left behind.
                                </p>
                                <p className="text-gray-300">
                                    We believe that advanced e-commerce technology should be accessible to all lifestyle brands, not just those with enterprise-level resources. Our approach demystifies the digital transformation process and creates achievable pathways for brands at any stage of development.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Our Approach */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] bg-clip-text text-transparent">
                            Our Approach
                        </h2>
                        <div className="bg-[#1d1c20] border border-white/[0.08] rounded-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ffbf00] to-[#f97636] flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">1</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Understanding</h3>
                                    <p className="text-gray-300">
                                        We begin by establishing a clear understanding of your current status and needs.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#f97636] to-[#ff007a] flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">2</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Strategy</h3>
                                    <p className="text-gray-300">
                                        We create common ground and build a strong foundation for your digital journey.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ff007a] to-[#f97636] flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">3</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Implementation</h3>
                                    <p className="text-gray-300">
                                        We help you execute the plan with clear next steps to unleash your brand&#39;s potential.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Our Promise with InfiniteMovingCards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] bg-clip-text text-transparent">
                            Our Promise
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 text-center">
                            We let you <span className="font-bold text-white">become</span> more than just another online store.
                        </p>

                        <InfiniteMovingCards
                            items={[
                                {
                                    quote: "We help your brand become future-ready with forward-thinking digital solutions.",
                                    name: "BECOME",
                                    title: "future-ready"
                                },
                                {
                                    quote: "Build resilience into your business model with diversified revenue streams.",
                                    name: "BECOME",
                                    title: "resilient"
                                },
                                {
                                    quote: "Transform your unique vision into measurable business success.",
                                    name: "BECOME",
                                    title: "successful"
                                },
                                {
                                    quote: "Stay ahead of the curve with innovative approaches to e-commerce.",
                                    name: "BECOME",
                                    title: "innovative"
                                },
                                {
                                    quote: "Put your customers at the heart of your digital experience design.",
                                    name: "BECOME",
                                    title: "customer-centric"
                                },
                                {
                                    quote: "Increase your brand visibility and reach new audiences online.",
                                    name: "BECOME",
                                    title: "visible"
                                },
                                {
                                    quote: "Stand out in a crowded marketplace with distinctive digital experiences.",
                                    name: "BECOME",
                                    title: "competitive"
                                },
                                {
                                    quote: "Set the standard in your industry with exceptional e-commerce presence.",
                                    name: "BECOME",
                                    title: "market-leading"
                                },
                                {
                                    quote: "Harness the power of data to make informed business decisions.",
                                    name: "BECOME",
                                    title: "data-driven"
                                },
                                {
                                    quote: "Respond quickly to market changes and evolving consumer needs.",
                                    name: "BECOME",
                                    title: "agile"
                                }
                            ]}
                            direction="right"
                            speed="slow"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
}