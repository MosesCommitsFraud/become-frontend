'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { usePathname } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { cn } from "@/lib/utils";

// Custom TracingBeam with website's colors
const CustomTracingBeam = ({
                               children,
                               className,
                           }: {
    children: React.ReactNode;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const contentRef = useRef<HTMLDivElement>(null);
    const [svgHeight, setSvgHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setSvgHeight(contentRef.current.offsetHeight);
        }
    }, []);

    const y1 = useSpring(
        useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
        {
            stiffness: 500,
            damping: 90,
        },
    );
    const y2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
        {
            stiffness: 500,
            damping: 90,
        },
    );

    return (
        <motion.div
            ref={ref}
            className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
        >
            <div className="absolute top-3 -left-4 md:-left-20 pointer-events-none">
                <motion.div
                    transition={{
                        duration: 0.2,
                        delay: 0.5,
                    }}
                    animate={{
                        boxShadow:
                            scrollYProgress.get() > 0
                                ? "none"
                                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                    className="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
                >
                    <motion.div
                        transition={{
                            duration: 0.2,
                            delay: 0.5,
                        }}
                        animate={{
                            backgroundColor: scrollYProgress.get() > 0 ? "white" : "#f97636",
                            borderColor: scrollYProgress.get() > 0 ? "white" : "#ff007a",
                        }}
                        className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
                    />
                </motion.div>
                <svg
                    viewBox={`0 0 20 ${svgHeight}`}
                    width="20"
                    height={svgHeight}
                    className="ml-4 block"
                    aria-hidden="true"
                >
                    <motion.path
                        d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                        fill="none"
                        stroke="#9091A0"
                        strokeOpacity="0.16"
                        transition={{
                            duration: 10,
                        }}
                    ></motion.path>
                    <motion.path
                        d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="1.25"
                        className="motion-reduce:hidden"
                        transition={{
                            duration: 10,
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

// Portfolio projects data
const portfolioProjects = [
    {
        title: "E-Commerce Strategy & Implementation",
        description: (
            <>
                <p>
                    We helped Blue Canoby transition from a physical-only store to an omnichannel
                    business with a strategic e-commerce implementation that expanded their market
                    reach beyond their single Ludwigshafen location.
                </p>
                <p>
                    After conducting a comprehensive SWOT analysis and maturity assessment, we determined
                    that while Blue Canoby excelled in customer relationships and product quality, they needed
                    significant improvement in their online presence.
                </p>
                <p>
                    We evaluated multiple e-commerce platforms and recommended Shopify as the optimal
                    solution based on its user-friendliness, design capabilities, and integrated POS
                    features that connected their physical and online stores.
                </p>
            </>
        ),
        badge: "E-Commerce Strategy",
        image: "/api/placeholder/1000/600",
        logo: "/api/placeholder/200/100",
    },
    {
        title: "Brand Development & Customer Analysis",
        description: (
            <>
                <p>
                    Through detailed customer analysis, we identified three primary customer personas for
                    Blue Canoby: individuals seeking relaxation, those looking for pain relief, and wellness
                    enthusiasts interested in natural alternatives.
                </p>
                <p>
                    Our Limbic Type analysis revealed that Blue Canoby's customers strongly valued balance,
                    security, and health. Based on these insights, we developed a brand identity focused on
                    trust, quality, and medical efficacy.
                </p>
                <p>
                    We selected a blue and white color scheme that differentiated them from competitors who
                    typically used green in their branding, reinforcing their positioning as a medically-focused,
                    trustworthy advisor rather than just a retailer.
                </p>
            </>
        ),
        badge: "Brand Strategy",
        image: "/api/placeholder/1000/600",
        logo: "/api/placeholder/200/100",
    },
    {
        title: "Revenue Growth & Optimization",
        description: (
            <>
                <p>
                    We implemented targeted sales optimization strategies to drive revenue growth for
                    Blue Canoby's new e-commerce channel.
                </p>
                <p>
                    Our approach included first-time buyer incentives, guest checkout options to reduce
                    cart abandonment, and strategically designed product bundles (such as CBD oil combined
                    with hemp tea) to increase average order value.
                </p>
                <p>
                    To build customer loyalty, we implemented a subscription model for regular customers
                    and created a VIP program that offered exclusive benefits, establishing a more predictable
                    revenue stream and improving customer lifetime value.
                </p>
            </>
        ),
        badge: "Sales Strategy",
        image: "/api/placeholder/1000/600",
        logo: "/api/placeholder/200/100",
    },
    {
        title: "Multi-Channel Marketing Strategy",
        description: (
            <>
                <p>
                    Recognizing the challenges of marketing CBD products on traditional platforms due to
                    content restrictions, we created a strategic approach that balanced educational content
                    with compliance requirements.
                </p>
                <p>
                    We improved Blue Canoby's social media presence across Instagram and Facebook with a
                    content mix that combined educational material about CBD benefits with lifestyle content
                    that subtly promoted products.
                </p>
                <p>
                    Additionally, we developed an email marketing program with segmented content for different
                    customer personas and implemented a content strategy centered on education and trust-building,
                    including information about product certificates and CBD spectrum options.
                </p>
            </>
        ),
        badge: "Marketing Strategy",
        image: "/api/placeholder/1000/600",
        logo: "/api/placeholder/200/100",
    },
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-black text-white relative">
            <SetupHeaderStyles />
            <Header />

            <div className="pt-24 pb-20 relative">
                <CustomTracingBeam className="px-6 relative z-10 pointer-events-none">
                    <div className="max-w-2xl mx-auto antialiased pt-4 relative pointer-events-auto">
                        {/* Page Header */}
                        <div className="text-center mb-16 relative z-20">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] bg-clip-text text-transparent">
                                Our Work
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Discover how we've helped businesses transform their digital presence and achieve remarkable results.
                            </p>
                        </div>

                        {/* Client Logo Section */}
                        <div className="mb-16 text-center">
                            <h2 className="text-xl font-semibold mb-6 text-gray-200">Trusted By</h2>
                            <div className="flex justify-center items-center space-x-12 mb-12">
                                <div className="w-32 h-16 bg-gray-800 rounded-md flex items-center justify-center">
                                    <Image
                                        src="/api/placeholder/120/60"
                                        alt="Blue Canoby logo"
                                        width={120}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="w-32 h-16 bg-gray-800 rounded-md flex items-center justify-center">
                                    <Image
                                        src="/api/placeholder/120/60"
                                        alt="Client 2 logo"
                                        width={120}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Client Spotlight */}
                        <div className="mb-16 relative z-20">
                            <h2 className="bg-gradient-to-r from-[#ffbf00] to-[#ff007a] text-center rounded-full text-sm w-fit mx-auto px-4 py-1 mb-4">
                                Client Spotlight
                            </h2>
                            <p className={twMerge("text-3xl font-bold mb-6 text-white text-center")}>
                                Blue Canoby: CBD Retail Transformation
                            </p>
                            <div className="flex justify-center mb-10">
                                <Image
                                    src="/api/placeholder/1000/400"
                                    alt="Blue Canoby store"
                                    height="400"
                                    width="1000"
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="prose prose-lg prose-invert mx-auto">
                                <p>
                                    Blue Canoby is a specialized CBD retailer focused on providing high-quality,
                                    legal CBD products with an emphasis on medical benefits and expert consultation.
                                    We helped them transition from a single physical location to a successful
                                    omnichannel business with a strong brand identity.
                                </p>
                                <div className="bg-gray-900 p-6 rounded-lg mt-8 mb-8">
                                    <h3 className="text-xl font-bold mb-4 text-gray-100">Project Highlights</h3>
                                    <ul className="space-y-2">
                                        <li>E-commerce strategy and implementation</li>
                                        <li>Brand development based on customer value analysis</li>
                                        <li>Multi-channel marketing with compliance navigation</li>
                                        <li>Revenue optimization through targeted sales strategies</li>
                                        <li>Integration between physical store and online presence</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Projects */}
                        {portfolioProjects.map((project, index) => (
                            <div key={`project-${index}`} className="mb-16 relative z-20">
                                <h2 className="bg-gradient-to-r from-[#ffbf00] to-[#ff007a] rounded-full text-sm w-fit px-4 py-1 mb-4">
                                    {project.badge}
                                </h2>

                                <p className={twMerge("text-3xl font-bold mb-6 text-white")}>
                                    {project.title}
                                </p>

                                <div className="prose prose-lg prose-invert">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} thumbnail`}
                                        height="600"
                                        width="1000"
                                        className="rounded-lg mb-10 object-cover"
                                    />
                                    {project.description}
                                </div>

                                {/* Divider line between projects */}
                                {index < portfolioProjects.length - 1 && (
                                    <div className="mt-8 mb-12 border-b border-gray-800 pb-12"></div>
                                )}
                            </div>
                        ))}

                        {/* Results Summary */}
                        <div className="mb-16 bg-gray-900 p-8 rounded-xl relative z-20">
                            <h3 className="text-2xl font-bold mb-6 text-center">Key Outcomes</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-800 p-6 rounded-lg text-center">
                                    <p className="text-lg font-bold text-white mb-2">Expanded Market Reach</p>
                                    <p className="text-gray-300">Beyond single physical location</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg text-center">
                                    <p className="text-lg font-bold text-white mb-2">Strengthened Brand Identity</p>
                                    <p className="text-gray-300">Trust-focused differentiation</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg text-center">
                                    <p className="text-lg font-bold text-white mb-2">Improved Customer Retention</p>
                                    <p className="text-gray-300">Through subscription models</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg text-center">
                                    <p className="text-lg font-bold text-white mb-2">Optimized Shipping</p>
                                    <p className="text-gray-300">Better costs and delivery times</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="mb-16 relative z-20">
                            <div className="relative">
                                <div className="absolute -top-6 -left-6 text-6xl text-[#f97636]">"</div>
                                <div className="bg-gray-900 p-8 rounded-lg relative">
                                    <p className="italic text-gray-300 mb-6">
                                        The team at BECOME transformed our business completely. Their strategic approach to e-commerce not only expanded our market reach but also reinforced our brand values of quality and expert consultation. What impressed us most was their deep understanding of our unique challenges with CBD marketing and their creative solutions to overcome them.
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                                        <div>
                                            <p className="font-semibold">Tim Lanninger</p>
                                            <p className="text-sm text-gray-400">Owner, Blue Canoby</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-16 text-center relative z-20">
                            <h3 className="text-2xl font-bold mb-4">Ready to transform your brand?</h3>
                            <p className="mb-6 text-gray-300">Let's create something amazing together.</p>
                            <button className="bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] text-white px-8 py-4 rounded-full hover:opacity-90 transition duration-300 text-lg font-semibold relative z-50">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </CustomTracingBeam>
            </div>

            <Footer />
        </div>
    );
}