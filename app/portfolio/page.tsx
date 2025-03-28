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
        title: "E-Commerce Replatforming",
        description: (
            <>
                <p>
                    We helped a luxury lifestyle brand transition from their legacy
                    e-commerce platform to a modern, scalable solution that increased
                    their conversion rate by 32% and reduced page load times by 65%.
                </p>
                <p>
                    The brand was struggling with an outdated platform that couldn&#39;t
                    handle their growing product catalog and was providing a subpar
                    mobile experience. Our team conducted a thorough analysis of their
                    needs and recommended a headless commerce approach using Next.js
                    for the frontend and a modern API-first commerce platform for the backend.
                </p>
                <p>
                    We implemented a custom design system that maintained the brand&#39;s
                    luxurious aesthetic while significantly improving the user experience.
                    The new platform included advanced filtering, personalization features,
                    and seamless integration with their inventory management system.
                </p>
            </>
        ),
        badge: "E-Commerce",
        image: "/api/placeholder/1000/600",
    },
    {
        title: "Social Media Strategy Overhaul",
        description: (
            <>
                <p>
                    A premium accessories brand was struggling to stand out on social media
                    despite having high-quality products. We developed and executed a comprehensive
                    social media strategy that increased engagement by 78% and drove a 45%
                    increase in traffic from social channels.
                </p>
                <p>
                    Our approach involved creating a consistent visual language across all
                    platforms, developing a content calendar that balanced product showcases
                    with lifestyle content, and implementing targeted ad campaigns to reach
                    new audiences.
                </p>
                <p>
                    We also established partnerships with micro-influencers in the fashion
                    and lifestyle space, resulting in authentic endorsements that resonated
                    with the brand&#39;s target demographic.
                </p>
            </>
        ),
        badge: "Marketing",
        image: "/api/placeholder/1000/600",
    },
    {
        title: "Brand Identity Refresh",
        description: (
            <>
                <p>
                    We collaborated with a wellness brand to refresh their visual identity
                    while maintaining the equity they had built over a decade in business.
                    The result was a modern, cohesive brand system that could flex across
                    digital and physical touchpoints.
                </p>
                <p>
                    The process began with stakeholder interviews and market research to
                    identify what aspects of the brand needed to be preserved and what could
                    evolve. We created a new logo that maintained recognizable elements while
                    introducing a cleaner, more contemporary aesthetic.
                </p>
                <p>
                    The refreshed identity included a new color palette, typography system,
                    and photography style that better communicated the brand&#39;s premium
                    positioning and commitment to quality.
                </p>
            </>
        ),
        badge: "Branding",
        image: "/api/placeholder/1000/600",
    },
    {
        title: "Analytics Implementation",
        description: (
            <>
                <p>
                    A multi-brand retailer was making decisions based on incomplete data.
                    We implemented a comprehensive analytics solution that provided actionable
                    insights and led to a 28% increase in average order value.
                </p>
                <p>
                    Our team began by auditing their existing analytics setup and identifying
                    gaps in data collection. We then implemented a robust tracking framework
                    that captured key customer behaviors across their website and mobile app.
                </p>
                <p>
                    We created custom dashboards that visualized critical metrics and set up
                    automated reporting to keep stakeholders informed. The solution included
                    advanced features like cohort analysis and customer lifetime value modeling.
                </p>
            </>
        ),
        badge: "Analytics",
        image: "/api/placeholder/1000/600",
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
                                See how we&#39;ve helped lifestyle brands transform their digital presence and achieve remarkable results.
                            </p>
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

                                {/* Call to action button after each project */}
                                {index < portfolioProjects.length - 1 && (
                                    <div className="mt-8 mb-12 border-b border-gray-800 pb-12">
                                        <button className="bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-300 relative z-50">
                                            View Case Study
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Contact CTA */}
                        <div className="mt-16 text-center relative z-20">
                            <h3 className="text-2xl font-bold mb-4">Ready to transform your brand?</h3>
                            <p className="mb-6 text-gray-300">Let&#39;s create something amazing together.</p>
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