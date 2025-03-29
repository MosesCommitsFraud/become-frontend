'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { usePathname } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { cn } from "@/lib/utils";

// Import images directly
import blueCanobyLogo from '@/public/bluecanoby.png';
import frankeLogo from '@/public/frankelogobgremoved.png';
import discussImage from '@/public/discuss.JPG';
import groupImage from '@/public/group.JPG';
import pic1Image from '@/public/pic1.png';
import pic2Image from '@/public/pic2.png';

// Custom TracingBeam with website's colors
const CustomTracingBeam = ({
                               children,
                               className,
                           }: {
    children: React.ReactNode;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [svgHeight, setSvgHeight] = useState(0);

    // Set up the scroll tracking
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Create smooth animations with useSpring
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Update SVG height whenever content changes
    useEffect(() => {
        const updateHeight = () => {
            if (contentRef.current) {
                const newHeight = contentRef.current.offsetHeight;
                setSvgHeight(newHeight);
            }
        };

        // Initial update
        updateHeight();

        // Set up a resize observer to update height when window resizes
        const resizeObserver = new ResizeObserver(updateHeight);
        if (contentRef.current) {
            resizeObserver.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) {
                resizeObserver.unobserve(contentRef.current);
            }
        };
    }, []);

    // Transform values for gradient animation
    const y1 = useTransform(smoothProgress, [0, 0.8], [50, svgHeight]);
    const y2 = useTransform(smoothProgress, [0, 1], [50, svgHeight - 200]);

    // Dynamic indicator style
    const indicatorBackgroundColor = useTransform(
        smoothProgress,
        [0, 0.1],
        ["#f97636", "white"]
    );
    const indicatorBorderColor = useTransform(
        smoothProgress,
        [0, 0.1],
        ["#ff007a", "white"]
    );
    const indicatorBoxShadow = useTransform(
        smoothProgress,
        [0, 0.1],
        ["rgba(0, 0, 0, 0.24) 0px 3px 8px", "none"]
    );

    return (
        <motion.div
            ref={ref}
            className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
        >
            <div className="absolute top-3 -left-4 md:-left-20 pointer-events-none">
                <motion.div
                    className="border-neutral-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border"
                    style={{
                        boxShadow: indicatorBoxShadow
                    }}
                >
                    <motion.div
                        className="h-2 w-2 rounded-full border"
                        style={{
                            backgroundColor: indicatorBackgroundColor,
                            borderColor: indicatorBorderColor
                        }}
                    />
                </motion.div>
                <svg
                    viewBox={`0 0 20 ${svgHeight || 1000}`}
                    width="20"
                    height={svgHeight || 1000}
                    className="ml-4 block"
                    aria-hidden="true"
                >
                    <motion.path
                        d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                        fill="none"
                        stroke="#9091A0"
                        strokeOpacity="0.16"
                        transition={{
                            duration: 0.1,
                        }}
                    ></motion.path>
                    <motion.path
                        d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="1.25"
                        className="motion-reduce:hidden"
                        transition={{
                            duration: 0.1,
                        }}
                    ></motion.path>
                    <defs>
                        <motion.linearGradient
                            id="gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            x2="0"
                            y1={y1}
                            y2={y2}
                        >
                            <stop stopColor="#ffbf00" stopOpacity="0"></stop>
                            <stop stopColor="#ffbf00"></stop>
                            <stop offset="0.325" stopColor="#f97636"></stop>
                            <stop offset="1" stopColor="#ff007a" stopOpacity="0"></stop>
                        </motion.linearGradient>
                    </defs>
                </svg>
            </div>
            <div ref={contentRef}>{children}</div>
        </motion.div>
    );
};

// Header dark mode setup
function SetupHeaderStyles() {
    const pathname = usePathname();

    useEffect(() => {
        // Add style override to ensure header text is white on portfolio page
        const style = document.createElement('style');
        style.innerHTML = `
      /* Override header styles for portfolio page */
      body[data-route="/portfolio"] header a { color: white !important; }
    `;
        document.head.appendChild(style);
        document.body.setAttribute('data-route', pathname);

        return () => {
            document.head.removeChild(style);
            document.body.removeAttribute('data-route');
        };
    }, [pathname]);

    return null;
}

// We're no longer using the portfolio projects array as we've switched to detailed case studies

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <SetupHeaderStyles />
            <Header />

            <main className="flex-grow">
                <div className="pt-24 pb-20">
                    <CustomTracingBeam className="px-6">
                        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                            {/* Page Header */}
                            <div className="text-center mb-12 relative z-20">
                                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] bg-clip-text text-transparent">
                                    Our Work
                                </h1>
                                <p className="text-xl text-gray-300">
                                    Transforming businesses with strategic digital solutions.
                                </p>
                            </div>

                            {/* Client Logo Section - Simplified */}
                            <div className="mb-12 text-center">
                                <h2 className="text-xl font-semibold mb-6 text-gray-200">Trusted By</h2>
                                <div className="flex justify-center items-center space-x-12">
                                    <div className="w-48 h-48 bg-gray-300 rounded-lg flex items-center justify-center p-4">
                                        <Image
                                            src={blueCanobyLogo}
                                            alt="Blue Canoby logo"
                                            width={180}
                                            height={180}
                                            className="object-contain max-h-full"
                                        />
                                    </div>
                                    <div className="w-48 h-48 bg-gray-300 rounded-lg flex items-center justify-center p-4">
                                        <Image
                                            src={frankeLogo}
                                            alt="Franke logo"
                                            width={180}
                                            height={180}
                                            className="object-contain max-h-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Blue Canoby */}
                            <div className="mb-16 relative z-20">
                                <h2 className="text-3xl font-bold mb-6 text-white">
                                    Blue Canoby
                                </h2>

                                {/* First image below title */}
                                <Image
                                    src={discussImage}
                                    alt="Blue Canoby storefront"
                                    height={800}
                                    width={1200}
                                    className="rounded-lg object-cover w-full h-auto mb-8"
                                />

                                <p className="text-gray-300 text-lg mb-8">
                                    Blue Canoby is a specialized CBD retailer focused on providing high-quality products with an emphasis on medical benefits. We helped them transition from a single physical location to an omnichannel business with a distinctive brand identity that differentiates them in the market.
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-4 text-white">What We Did</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                        <div className="bg-gray-800 p-6 rounded-lg">
                                            <h4 className="font-bold text-white mb-3">E-Commerce Strategy</h4>
                                            <p className="text-gray-300">
                                                Implemented Shopify with custom integration for physical and online inventory management, expanding market reach beyond their Ludwigshafen location.
                                            </p>
                                        </div>
                                        <div className="bg-gray-800 p-6 rounded-lg">
                                            <h4 className="font-bold text-white mb-3">Brand Development</h4>
                                            <p className="text-gray-300">
                                                Created a medical-focused brand identity with blue/white color scheme, differentiating them from competitors who typically used green in their branding.
                                            </p>
                                        </div>
                                        <div className="bg-gray-800 p-6 rounded-lg">
                                            <h4 className="font-bold text-white mb-3">Marketing Strategy</h4>
                                            <p className="text-gray-300">
                                                Balanced educational content with compliance requirements across social media channels, with content focused on building trust and showcasing expertise.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Second image above Key Outcomes */}
                                <Image
                                    src={groupImage}
                                    alt="Blue Canoby products"
                                    height={800}
                                    width={1200}
                                    className="rounded-lg object-cover w-full h-auto mb-8"
                                />

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-4 text-white">Key Outcomes</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="bg-gray-900 p-6 rounded-lg">
                                            <p className="text-gray-300 font-medium text-lg">Expanded market reach beyond single physical location</p>
                                        </div>
                                        <div className="bg-gray-900 p-6 rounded-lg">
                                            <p className="text-gray-300 font-medium text-lg">Strengthened brand identity with trust-focused differentiation</p>
                                        </div>
                                        <div className="bg-gray-900 p-6 rounded-lg">
                                            <p className="text-gray-300 font-medium text-lg">Improved customer retention through subscription models</p>
                                        </div>
                                        <div className="bg-gray-900 p-6 rounded-lg">
                                            <p className="text-gray-300 font-medium text-lg">Optimized shipping costs and delivery times</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-900 p-8 rounded-lg mb-8">
                                    <p className="italic text-gray-300 text-lg mb-4">
                                        &quot;The team at BECOME transformed our business completely. Their strategic approach expanded our market reach while reinforcing our brand values of quality and expert consultation.&quot;
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                                        <div>
                                            <p className="font-semibold text-white">Tim Lanninger</p>
                                            <p className="text-gray-400">Owner, Blue Canoby</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b border-gray-800 my-12"></div>
                            </div>

                            {/* Blumen-Café-Franke */}
                            <div className="mb-16 relative z-20">
                                <h2 className="text-3xl font-bold mb-6 text-white">
                                    Blumen-Café-Franke
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <Image
                                        src={pic1Image}
                                        alt="Blumen-Café-Franke shop interior"
                                        height={800}
                                        width={1200}
                                        className="rounded-lg object-cover w-full h-auto"
                                    />
                                    <Image
                                        src={pic2Image}
                                        alt="Floral arrangement by Blumen-Café-Franke"
                                        height={800}
                                        width={1200}
                                        className="rounded-lg object-cover w-full h-auto"
                                    />
                                </div>

                                <p className="text-gray-300 text-lg mb-8">
                                    Blumen-Café-Franke combines a florist shop with a café experience in Rieschweiler. As a family business focused on events and weddings, they needed a stronger online presence to showcase their creativity and establish connections with event venues and hotels.
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-4 text-white">What We Did</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                        <div className="bg-gray-800 p-6 rounded-lg">
                                            <h4 className="font-bold text-white mb-3">Web Presence</h4>
                                            <p className="text-gray-300">
                                                Created a beautiful, easy-to-manage website with integrated Instagram feed that automatically refreshes with their latest work, making content management effortless.
                                            </p>
                                        </div>
                                        <div className="bg-gray-800 p-6 rounded-lg">
                                            <h4 className="font-bold text-white mb-3">Visual Identity</h4>
                                            <p className="text-gray-300">
                                                Designed a cohesive visual system using natural greens combined with warm brown tones that reflect both the floristry aspect and the welcoming café environment.
                                            </p>
                                        </div>
                                        <div className="bg-gray-800 p-6 rounded-lg">
                                            <h4 className="font-bold text-white mb-3">Social Strategy</h4>
                                            <p className="text-gray-300">
                                                Implemented a professional Instagram business profile with custom Canva templates they can easily use to maintain a consistent, beautiful feed.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-4 text-white">Key Outcomes</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="bg-gray-900 p-6 rounded-lg">
                                            <p className="text-gray-300 font-medium text-lg">Increased visibility through professional online presence</p>
                                        </div>
                                        <div className="bg-gray-900 p-6 rounded-lg">
                                            <p className="text-gray-300 font-medium text-lg">New partnerships with wedding venues and hotels</p>
                                        </div>
                                        <div className="bg-gray-900 p-6 rounded-lg">
                                            <p className="text-gray-300 font-medium text-lg">Cohesive brand identity across all touchpoints</p>
                                        </div>
                                        <div className="bg-gray-900 p-6 rounded-lg">
                                            <p className="text-gray-300 font-medium text-lg">Time-saving content strategy with reusable templates</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-900 p-8 rounded-lg mb-8">
                                    <p className="italic text-gray-300 text-lg mb-4">
                                        &quot;BECOME helped us create a professional online presence that truly represents our brand. The templates they created save us time while ensuring our social media looks consistently beautiful. Now we can focus on creating arrangements instead of updating content.&quot;
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                                        <div>
                                            <p className="font-semibold text-white">Michael Franke</p>
                                            <p className="text-gray-400">Owner, Blumen-Café-Franke</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact CTA - Concise */}
                            <div className="mt-16 mb-12 text-center relative z-20">
                                <h3 className="text-2xl font-bold mb-4">Ready to transform your brand?</h3>
                                <Link href="/contact">
                                    <button className="bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] text-white px-8 py-4 rounded-full hover:opacity-90 transition duration-300 text-lg font-semibold">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </CustomTracingBeam>
                </div>
            </main>

            <Footer />
        </div>
    );
}