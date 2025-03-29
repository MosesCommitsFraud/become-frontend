'use client';
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
                                 content,
                                 contentClassName,
                             }: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // More precise breakpoints for better section alignment
        if (latest <= 0.22) {
            setActiveCard(0);
        } else if (latest <= 0.48) {
            setActiveCard(1);
        } else if (latest <= 0.75) {
            setActiveCard(2);
        } else if (latest <= 0.98) { // Cap at 0.98 to avoid scrolling past
            setActiveCard(3);
        }
    });

    // Using your brand colors
    const backgroundColors = [
        "#000000", // black
        "#000000", // black
        "#000000", // black
        "#000000", // black
    ];

    const linearGradients = [
        "linear-gradient(to bottom right, #ffbf00, #f97636)",
        "linear-gradient(to bottom right, #f97636, #ff007a)",
        "linear-gradient(to bottom right, #ffbf00, #ff007a)",
        "linear-gradient(to bottom right, #ff007a, #f97636)",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    // Scroll to top when component mounts
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = 0;
        }
    }, []);

    return (
        <>
            {/* CSS to hide scrollbar */}
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            <motion.div
                animate={{
                    backgroundColor: backgroundColors[activeCard % backgroundColors.length],
                }}
                className="relative flex h-[80vh] justify-center space-x-10 overflow-y-auto rounded-md p-10 hide-scrollbar"
                ref={ref}
            >
                <div className="div relative flex items-start px-4">
                    <div className="max-w-3xl">
                        {/* Top padding to align first content with the box */}
                        <div className="h-[25vh]"></div>

                        {content.map((item, index) => (
                            <div
                                key={item.title + index}
                                className={`min-h-[50vh] flex flex-col ${index < content.length - 1 ? 'mb-20' : 'mb-0'}`}
                            >
                                <motion.h2
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.3,
                                    }}
                                    className="text-4xl font-bold text-white"
                                >
                                    {item.title}
                                </motion.h2>
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.3,
                                    }}
                                    className="text-xl mt-10 max-w-xl text-gray-300"
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                        ))}

                        {/* Smaller bottom padding to prevent scrolling too far */}
                        <div className="h-[25vh]"></div>
                    </div>
                </div>
                <div
                    style={{ background: backgroundGradient }}
                    className={cn(
                        "sticky top-[25vh] hidden h-80 w-96 overflow-hidden rounded-md lg:block",
                        contentClassName,
                    )}
                >
                    {content[activeCard].content ?? null}
                </div>
            </motion.div>
        </>
    );
};