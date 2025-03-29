'use client';
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-about";

const content = [
    {
        title: "Our Philosophy",
        description:
            "We believe in the power of creativity to transform businesses and elevate brands to new heights. Our approach combines strategic thinking with innovative execution to create impactful digital experiences that resonate with your audience and drive meaningful results.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white font-bold text-2xl">
                PHILOSOPHY
            </div>
        ),
    },
    {
        title: "Our Process",
        description:
            "We follow a collaborative, iterative process that starts with deep discovery and ends with meticulous execution. Every project is unique, but our commitment to excellence remains constant. We work closely with you to ensure that your vision is realized through our strategic implementation.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white font-bold text-2xl">
                PROCESS
            </div>
        ),
    },
    {
        title: "Our Expertise",
        description:
            "Our team brings together specialists across branding, development, design, and marketing, enabling us to deliver comprehensive solutions that address every aspect of your digital presence. We leverage cutting-edge technology and creative thinking to solve complex business challenges.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white font-bold text-2xl">
                EXPERTISE
            </div>
        ),
    },
    {
        title: "Our Impact",
        description:
            "We measure our success through the tangible results we create for our clients. From increased conversion rates to stronger brand recognition, our work delivers meaningful business outcomes. We're passionate about helping lifestyle brands achieve their goals and reach their full potential.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white font-bold text-2xl">
                IMPACT
            </div>
        ),
    },
];

export function StickyScrollAboutDemo() {
    return (
        <div className="w-full">
            <StickyScroll content={content} />
        </div>
    );
}