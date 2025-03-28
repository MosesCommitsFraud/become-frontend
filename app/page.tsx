// app/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Database, Layout, TrendingUp, BarChart3, PenTool, Share2, Smartphone } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { GlowingEffect } from '@/components/ui/glowing-effect';

// GridItem component for the card layout
interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <motion.li
            className={`min-h-[14rem] list-none ${area}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="relative h-full rounded-2xl border border-gray-800 p-2 md:rounded-3xl md:p-3 hover:border-gray-700 transition-colors duration-300">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 bg-black bg-opacity-80 md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-700 p-2 bg-gradient-to-br from-[#ffbf00] via-[#f97636] to-[#ff007a] bg-opacity-20">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl leading-tight font-semibold md:text-2xl text-balance text-white">
                                {title}
                            </h3>
                            <p className="font-sans text-sm md:text-base text-gray-300">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.li>
    );
};

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

        let lastTime = 0;
        let animationFrameId: number;

        const handleResize = () => {
            const scale = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * scale;
            canvas.height = window.innerHeight * scale;
            ctx.scale(scale, scale);
        };

        handleResize();

        const waves = Array.from({ length: 8 }, (_, i) => ({
            y: canvas.height * ((i + 1) / 10),
            length: 0.003,
            amplitude: 20 + Math.random() * 5,
            speed: 0.0003 + Math.random() * 0.0001,
            offset: Math.random() * Math.PI * 2,
        }));

        const gradientColors = ['#ffbf00', '#f97636', '#ff007a'];

        const animate = (time: number) => {
            if (time - lastTime < 1000 / 30) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }
            lastTime = time;

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

                const gradient = ctx.createLinearGradient(
                    gradientPosition,
                    0,
                    canvas.width / window.devicePixelRatio + gradientPosition,
                    canvas.height / window.devicePixelRatio
                );
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

    const cardsData = [
        {
            icon: <ShoppingCart className="h-4 w-4 text-white" />,
            title: 'E-Commerce Strategy',
            description: 'Maximizing revenue growth through feasible sales strategies based on maturity evaluations and data-driven insights.',
            area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        },
        {
            icon: <Database className="h-4 w-4 text-white" />,
            title: 'PaaS Analysis & Setup',
            description: 'Tailored platforms for businesses of any size, choosing scalable solutions with growth in mind.',
            area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        },
        {
            icon: <Layout className="h-4 w-4 text-white" />,
            title: 'UX Optimization',
            description: 'Establishing brand image through design adjustments and consistent visual perception.',
            area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        },
        {
            icon: <TrendingUp className="h-4 w-4 text-white" />,
            title: 'Lifestyle Marketing',
            description: 'Creating clear, actionable marketing strategies tied to your brand\'s image and long-term goals.',
            area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        },
        {
            icon: <BarChart3 className="h-4 w-4 text-white" />,
            title: 'Data Analytics',
            description: 'Transform customer interactions into actionable insights that drive growth and enhance customer loyalty.',
            area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/13]"
        },
        {
            icon: <PenTool className="h-4 w-4 text-white" />,
            title: 'Brand Identity',
            description: 'Develop a cohesive visual language that resonates with your target audience and sets you apart from competitors.',
            area: "md:[grid-area:3/7/4/13] xl:[grid-area:3/1/4/5]"
        },
        {
            icon: <Share2 className="h-4 w-4 text-white" />,
            title: 'Social Media Strategy',
            description: 'Build meaningful connections with your audience through targeted content and engagement strategies.',
            area: "md:[grid-area:4/1/5/7] xl:[grid-area:3/5/4/9]"
        },
        {
            icon: <Smartphone className="h-4 w-4 text-white" />,
            title: 'Mobile Optimization',
            description: 'Create seamless mobile experiences that keep your customers engaged wherever they are.',
            area: "md:[grid-area:4/7/5/13] xl:[grid-area:3/9/4/13]"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-black relative overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-white"/>
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
                <div className="max-w-6xl mx-auto px-4 lg:px-0">
                    <div className="grid grid-cols-1 text-left">
                        <div className="relative h-8 overflow-hidden mb-6 text-md text-white uppercase tracking-widest mt-24">
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

                        <motion.h1
                            className="text-4xl md:text-6xl font-extralight text-white mb-6 text-left"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1.5, ease: "easeOut"}}
                        >
                            <span>Our goal is to </span>

                            <span className="relative inline-block">
                                <span className="relative z-10">give your lifestyle brand</span>
                                <motion.span
                                    className="absolute left-0 w-full h-[140%] top-[-20%] bg-[#ff007a] -skew-x-12 z-0"
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

            {/* Grid Layout with GlowingEffect Cards */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.ul
                        className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-4 lg:gap-6 xl:max-h-[52rem] xl:grid-rows-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, staggerChildren: 0.2 }}
                    >
                        {cardsData.map((card, index) => (
                            <GridItem
                                key={index}
                                area={card.area}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </motion.ul>
                </div>
            </section>
            <Footer/>
        </div>
    );
}