'use client'

import {ReactNode, useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from '@/components/header'
import Footer from '@/components/footer'


const packages = [
    {
        name: 'Basic',
        subtitle: 'become visible',
        description: 'Contains the following Services',
        services: [
            'Maturity Analysis',
            'Platform Assessment',
            'Sales Strategies',
            'Action Advisory',
        ],
        footer: 'best fit for SMEs',
        contactText: 'Contact Sales',
    },
    {
        name: 'Premium',
        subtitle: 'become competitive',
        description: 'All BASIC services as well as...',
        services: [
            'Platform Implementation',
            'Branding Advisory',
            'Customer Analysis',
            'CR-Optimization',
        ],
        footer: 'best fit for SMEs & LEs',
        contactText: 'Contact Sales',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        subtitle: 'become market-leading',
        description: 'All PREMIUM Services as well as...',
        services: [
            'Building a Brand-Image',
            'UX/UI Optimization',
            'Data Driven Analytics',
            'Unique Customization',
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
        answer: 'Yes, we provide ongoing support and maintenance for all our packages. The level of support varies depending on the package you choose, with our Enterprise package offering the most comprehensive ongoing support and customization options.',
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

const BackgroundAnimation = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
            className="absolute -inset-[100%] opacity-30"
            animate={{
                x: ["0%", "-25%"],
                y: ["0%", "-25%"],
            }}
            transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 20,
            }}
        >
            <div className="w-full h-full bg-gradient-to-br from-blue-200 via-pink-200 to-yellow-200 blur-3xl" />
        </motion.div>
    </div>
)

export default function PricingPage() {
    return (
        <div className="relative min-h-screen bg-gray-50 py-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
            <Header />
            <BackgroundAnimation />
            <div className="relative max-w-7xl mx-auto mb-24 mt-24">
                {/* Header */}
                <FadeInWhenVisible>
                    <div className="text-center mb-20">
                        <h1 className="text-6xl font-bold text-gray-900 mb-4">Our Packages</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Choose the package that best suits your needs and goals.
                        </p>
                    </div>
                </FadeInWhenVisible>

                {/* Pricing cards */}
                <div className="grid md:grid-cols-3 gap-12 mb-20">
                    {packages.map((pkg) => (
                        <FadeInWhenVisible key={pkg.name}>
                            <motion.div
                                className={`bg-white rounded-lg overflow-hidden border-2 ${
                                    pkg.highlighted
                                        ? 'border-pink-500 shadow-xl relative'
                                        : 'border-navy-600 shadow-lg'
                                }`}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {pkg.highlighted && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300 opacity-20" />
                                )}
                                <div className="relative p-6">
                                    <h3 className="text-3xl font-semibold mb-2 text-navy-800">{pkg.name}</h3>
                                    <p className="text-lg mb-4 text-gray-600">{pkg.subtitle}</p>
                                    <p className="text-sm mb-6 text-gray-500">{pkg.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {pkg.services.map((service, serviceIndex) => (
                                            <li key={serviceIndex} className="flex items-start">
                                                <Check className="flex-shrink-0 h-5 w-5 text-pink-500 mr-2" />
                                                <span className="text-gray-600">{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white transition-colors duration-300">
                                        {pkg.contactText}
                                    </Button>
                                    <p className="mt-4 text-sm text-gray-500 text-center">{pkg.footer}</p>
                                </div>
                            </motion.div>
                        </FadeInWhenVisible>
                    ))}
                </div>

                {/* FAQ section */}
                <FadeInWhenVisible>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left text-lg">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600">
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