'use client'

import {ReactNode, useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from '@/components/header'
import Footer from '@/components/footer'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { usePathname } from 'next/navigation'

const packages = [
    {
        name: 'BASIC',
        subtitle: 'become visible',
        description: 'Containing the following services',
        services: [
            'Maturity Analysis',
            'Customer Analysis',
            'Action Advisory',
        ],
        footer: 'best fit for SMEs',
        contactText: 'Contact Sales',
    },
    {
        name: 'PREMIUM',
        subtitle: 'become competitive',
        description: 'All BASIC services as well as',
        services: [
            'Platform Assessment',
            'Branding Advisory',
            'Sales Strategy Development',
        ],
        footer: 'best fit for SMEs & LEs',
        contactText: 'Contact Sales',
        highlighted: true,
    },
    {
        name: 'ULTIMATE',
        subtitle: 'become market-leading',
        description: 'All BASIC and PREMIUM services as well as',
        services: [
            'Platform Implementation',
            'Building a Brand Image',
            'CR-Optimization',
            'Sales Strategy Realization',
        ],
        footer: 'best fit for LEs',
        contactText: 'Contact Sales',
    },
]

const faqs = [
    {
        question: 'What industries do you specialize in?',
        answer: 'We specialize in a wide range of industries including technology, finance, healthcare, retail, and manufacturing. Our team has extensive experience working with businesses of all sizes across various sectors.',
    },
    {
        question: 'How long does it typically take to see results?',
        answer: 'The timeline for seeing results can vary depending on the package and specific services. Generally, clients start seeing initial improvements within 1-3 months, with more significant results becoming apparent over 6-12 months.',
    },
    {
        question: 'Can I customize the services within a package?',
        answer: 'While our packages are designed to provide comprehensive solutions, we understand that each business has unique needs. We offer some flexibility to customize services within each package. Please contact our sales team to discuss your specific requirements.',
    },
    {
        question: 'Do you offer ongoing support after implementation?',
        answer: 'Yes, we provide ongoing support and maintenance for all our packages. The level of support varies depending on the package you choose, with our Ultimate package offering the most comprehensive ongoing support and customization options.',
    },
]

interface FadeInWhenVisibleProps {
    children: ReactNode
}

function FadeInWhenVisible({ children }: FadeInWhenVisibleProps) {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
            }}
        >
            {children}
        </motion.div>
    )
}

// Add min-height to ULTIMATE package to ensure all boxes have the same height
const getMinHeight = (pkgName: string) => {
    if (pkgName === 'ULTIMATE') {
        return 'min-h-[24rem]'; // Adjust this value as needed
    }
    return '';
};

function SetupHeaderStyles() {
    const pathname = usePathname();

    useEffect(() => {
        // Add '/packages' to the dark paths in the header component
        const style = document.createElement('style');
        style.innerHTML = `
            /* Override header styles for packages page */
            body[data-route="/packages"] header a { color: white !important; }
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

export default function PricingPage() {
    return (
        <div className="relative min-h-screen bg-black text-white py-20 px-6 sm:px-10 lg:px-16 overflow-hidden dark">
            <SetupHeaderStyles />
            <Header />
            <div className="relative max-w-7xl mx-auto mb-20 mt-24 pb-20">
                {/* Header */}
                <FadeInWhenVisible>
                    <div className="text-center mb-20">
                        <div className="bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] bg-clip-text text-transparent inline-block">
                            <h1 className="text-6xl font-bold mb-4">Our Packages</h1>
                        </div>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Choose the package that best suits your needs and goals.
                        </p>
                    </div>
                </FadeInWhenVisible>

                {/* Pricing cards */}
                <div className="grid md:grid-cols-3 gap-10 mb-20 relative">
                    {packages.map((pkg) => (
                        <FadeInWhenVisible key={pkg.name}>
                            <div className="relative h-full">
                                <motion.div
                                    className={`relative bg-black backdrop-blur-sm rounded-lg overflow-hidden border-2 h-full ${
                                        pkg.highlighted
                                            ? 'border-[#f97636]'
                                            : 'border-white/70'
                                    } ${getMinHeight(pkg.name)}`}
                                    whileHover={{ scale: 1.03, boxShadow: pkg.highlighted ? '0 0 30px rgba(249,118,54,0.2)' : '0 0 30px rgba(255,255,255,0.1)' }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="absolute inset-0 bg-black z-0"></div>
                                    <GlowingEffect
                                        blur={0}
                                        borderWidth={3}
                                        spread={80}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                    />
                                    <div className="relative p-8 z-10 flex flex-col h-full">
                                        <h3 className="text-3xl font-bold mb-2 text-center text-white">{pkg.name}</h3>
                                        <p className="text-lg mb-4 text-center text-gray-300">{pkg.subtitle}</p>
                                        <p className="text-sm mb-6 text-center text-gray-400">{pkg.description}</p>
                                        <ul className="space-y-4 mb-8 flex-grow">{/* Added flex-grow to push button to bottom */}
                                            {pkg.services.map((service, serviceIndex) => (
                                                <li key={serviceIndex} className="flex items-start">
                                                    <span className="flex-shrink-0 h-6 w-6 bg-gradient-to-br from-[#ff007a] to-[#f97636] rounded-full flex items-center justify-center mr-3 mt-0.5">
                                                        <Check className="h-4 w-4 text-white" />
                                                    </span>
                                                    <span className="text-gray-200">{service}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className="w-full bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] hover:opacity-90 text-white transition-colors duration-300 border-0 shadow-lg shadow-[#f97636]/20 mt-auto">{/* Added mt-auto */}
                                            {pkg.contactText}
                                        </Button>
                                        <p className="mt-4 text-sm text-gray-400 text-center">{pkg.footer}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>

                {/* FAQ section */}
                <FadeInWhenVisible>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                                    <AccordionTrigger className="text-left text-lg text-white">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-300">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </FadeInWhenVisible>
            </div>
            <Footer />
        </div>
    )
}