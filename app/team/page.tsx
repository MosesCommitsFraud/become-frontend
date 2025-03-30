'use client'

import { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { SparklesCore } from '@/components/ui/sparkles'

const teamMembers = [
    {
        name: 'Robin Kühn',
        title: 'Sales Manager',
        email: 'robin.kuehn@become-consulting.de',
        imageSrc: '/robin.jpg',
        isStaticImage: true
    },
    {
        name: 'Anna Kneidl',
        title: 'Project Manager',
        email: 'anna.kneidl@become-consulting.de',
        imageSrc: '/placeholder.svg?height=400&width=300',
        isStaticImage: true
    },
    {
        name: 'Felix Bretz',
        title: 'Enterprise Architect',
        email: 'felix.bretz@become-consulting.de',
        imageSrc: '/felix.jpg',
        isStaticImage: false
    },
    {
        name: 'Moritz Schäfer',
        title: 'Developer',
        email: 'moritz.schaefer@become-consulting.de',
        imageSrc: '/moritz.jpg',
        isStaticImage: false
    },
    {
        name: 'Laura Küchler',
        title: 'Customer Success Partner',
        email: 'laura.kuechler@become-consulting.de',
        imageSrc: '/placeholder.svg?height=400&width=300',
        isStaticImage: true
    },
    {
        name: 'Tim Philipp',
        title: 'Portfolio Manager',
        email: 'tim.philipp@become-consulting.de',
        imageSrc: '/placeholder.svg?height=400&width=300',
        isStaticImage: true
    }
]

export default function TeamPage() {
    const [hoveredMember, setHoveredMember] = useState<number | null>(null)
    const [visibleMembers, setVisibleMembers] = useState<boolean[]>(new Array(teamMembers.length).fill(false))

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleMembers(new Array(teamMembers.length).fill(true))
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
            <Header />
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <div className="max-w-7xl mx-auto w-full">
                {/* Sparkles Header Section */}
                <div className="relative h-64 w-full mb-12 flex flex-col items-center justify-center overflow-hidden">
                    {/* Title with only the gradient underline */}
                    <h1 className="text-6xl font-bold text-center relative z-20">
                        <span className="relative inline-block">
                            Our Team
                        </span>
                    </h1>

                    {/* Single gradient line */}
                    <div className="w-full h-32 relative mt-2">
                        {/* Pink gradient line only - increased width */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-[#ff007a] to-transparent h-[2px] w-96 blur-sm" />
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-[#ff007a] to-transparent h-px w-96" />

                        {/* SparklesCore component - increased horizontal spread */}
                        <div className="absolute inset-0 top-8 w-full">
                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={60}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                                speed={0.5}
                            />
                        </div>

                        {/* Radial Gradient - adjusted for wider area */}
                        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(450px_200px_at_top,transparent_20%,black)]"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden transition-all duration-300 ease-in-out rounded-lg w-[300px] ${
                                visibleMembers[index] ? 'animate-[fadeIn_0.5s_ease-out_forwards]' : 'opacity-0'
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredMember(index)}
                            onMouseLeave={() => setHoveredMember(null)}
                        >
                            {/* Simple img tag approach for all images */}
                            <div className="w-full h-[400px] overflow-hidden rounded-lg">
                                <img
                                    src={member.imageSrc}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div
                                className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6 transition-opacity duration-300 rounded-lg ${
                                    hoveredMember === index ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                                <p className="text-lg mb-2">{member.title}</p>
                                <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center text-sm hover:underline"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    {member.email}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ensure footers are stacked below the content */}
            <div className="mt-12">
                <Footer />
            </div>
        </div>
    )
}