'use client'

import { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Footer2 from '@/components/footer2'

const teamMembers = [
    {
        name: 'John Doe',
        title: 'CEO & Founder',
        email: 'john@example.com',
        image: '/placeholder.svg?height=400&width=300'
    },
    {
        name: 'Jane Smith',
        title: 'Creative Director',
        email: 'jane@example.com',
        image: '/placeholder.svg?height=400&width=300'
    },
    {
        name: 'Mike Johnson',
        title: 'Lead Developer',
        email: 'mike@example.com',
        image: '/placeholder.svg?height=400&width=300'
    },
    {
        name: 'Emily Brown',
        title: 'UX Designer',
        email: 'emily@example.com',
        image: '/placeholder.svg?height=400&width=300'
    },
    {
        name: 'Chris Lee',
        title: 'Marketing Specialist',
        email: 'chris@example.com',
        image: '/placeholder.svg?height=400&width=300'
    },
    {
        name: 'Sarah Taylor',
        title: 'Project Manager',
        email: 'sarah@example.com',
        image: '/placeholder.svg?height=400&width=300'
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

        <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <Header />
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 mt-24">Our Team</h1>
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
                            <div className="w-full h-[400px] bg-gray-300 flex items-center justify-center text-black font-bold text-lg rounded-lg">
                                300x400
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
            <Footer />
            <Footer2 />
        </div>
    )
}