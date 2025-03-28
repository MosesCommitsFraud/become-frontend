'use client';
import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
    // Only include the second part of each phrase for animation
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
        <div className="h-8 overflow-hidden mb-6 text-md uppercase tracking-widest mt-24">
            <span className="text-white uppercase tracking-widest">become </span>
            <FlipWords
                words={phrases}
                duration={5000}
                className="text-white tracking-widest"
            />
        </div>
    );
}