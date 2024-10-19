// app/LandingPageComponent.tsx
'use client';

import {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function LandingPageComponent() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

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
        }, 5000);

        return () => clearInterval(interval);
    }, [phrases.length]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const handleResize = () => {
            const scale = window.devicePixelRatio || 1;

            canvas.width = window.innerWidth * scale;
            canvas.height = window.innerHeight * scale;
            ctx.scale(scale, scale);
        };

        handleResize();

        const waves = Array.from({length: 8}, (_, i) => ({
            y: canvas.height * ((i + 1) / 10),
            length: 0.003,
            amplitude: 20 + Math.random() * 5,
            speed: 0.0003 + Math.random() * 0.0001,
            offset: Math.random() * Math.PI * 2,
        }));

        const gradientColors = ['#ffbf00', '#f97636', '#ff007a'];

        let animationFrameId: number;

        const animate = (time: number) => {
            ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

            const gradientPosition = Math.sin(time * 0.0001) * canvas.width;

            waves.forEach((wave) => {
                ctx.beginPath();
                ctx.moveTo(0, wave.y / window.devicePixelRatio);

                for (let x = 0; x < canvas.width / window.devicePixelRatio; x += 3) {
                    const dx = x * wave.length;
                    let dy = Math.sin(dx + time * wave.speed + wave.offset) * wave.amplitude;

                    dy += Math.sin(dx * 1.5 + time * wave.speed * 0.8) * wave.amplitude * 0.5;

                    ctx.lineTo(x, wave.y / window.devicePixelRatio + dy);
                }

                ctx.lineTo(canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
                ctx.lineTo(0, canvas.height / window.devicePixelRatio);
                ctx.closePath();

                const gradient = ctx.createLinearGradient(gradientPosition, 0, canvas.width / window.devicePixelRatio + gradientPosition, canvas.height / window.devicePixelRatio);
                gradientColors.forEach((color, i) => {
                    gradient.addColorStop(i / (gradientColors.length - 1), color);
                });

                ctx.fillStyle = gradient;
                ctx.globalAlpha = 0.2;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate(0);

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 relative overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-0"/>
            <Header/>

            {/* Main content area with enough padding to avoid overlap */}
            <main className="relative z-10 flex-grow flex items-center justify-center" style={{minHeight: '100vh'}}>
                <div className="text-center relative">
                    <div className="relative inline-block">
                        <h1 className="relative z-10 text-8xl md:text-8xl font-bold text-black home-hero-heading">
                            ELEVATE YOUR LIFESTYLE BRAND
                        </h1>
                        <div className="absolute inset-0 z-0 blur-2xl bg-white opacity-50 rounded-lg"></div>
                    </div>
                    <div className="mt-4 md:mt-8 flex justify-center">
                        <button
                            className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] text-white font-semibold rounded-full hover:shadow-lg transition-shadow duration-300 text-sm md:text-base"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </main>
            <section className="py-20 bg-black relative z-10">
                <div className="max-w-6xl mx-auto px-4 lg:px-0"> {/* Ensures alignment with common container */}

                    {/* Shared grid layout for rotating phrases and text */}
                    <div className="grid grid-cols-1 text-left">

                        {/* Rotating Phrases */}
                        <div className="relative h-8 overflow-hidden mb-6 text-md text-white uppercase tracking-widest">
                            {phrases.map((phrase, index) => (
                                <motion.span
                                    key={index}
                                    className="absolute h-8"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{
                                        opacity: index === currentPhraseIndex ? 1 : 0,
                                        y: index === currentPhraseIndex ? 0 : 20
                                    }}
                                    transition={{duration: 1.5, ease: 'easeOut'}}
                                    style={{display: index === currentPhraseIndex ? 'block' : 'none'}}
                                >
                                    {phrase}
                                </motion.span>
                            ))}
                        </div>

                        {/* Main Text */}
                        <motion.h1
                            className="text-4xl md:text-6xl font-extralight text-white mb-6 text-left" // Left-align text with common container
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1.5, ease: "easeOut"}}
                        >
                            <span>Our goal is to </span>

                            <span className="relative inline-block">
                    <span className="relative z-10">give your lifestyle brand</span>
                    <motion.span
                        className="absolute left-0 w-full h-[140%] top-[-20%] bg-[#ff007a] -skew-x-12 z-0" // Adjusted highlight height
                        initial={{scaleX: 0, originX: 0}}
                        animate={{scaleX: 1}}
                        transition={{delay: 0.5, duration: 1, ease: "easeInOut"}}
                    />
                </span>

                            <span className="block mt-4">the representation it deserves by  </span>
                            <span className="block mt-4">establishing the newest technologies digital </span>
                            <span className="block mt-4">commerce has to offer.</span>
                        </motion.h1>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
