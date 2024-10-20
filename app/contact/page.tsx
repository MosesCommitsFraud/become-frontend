'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Footer2 from '@/components/footer2'

export default function Component() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const mailtoLink = `mailto:contact@become-consulting.de?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`
        window.location.href = mailtoLink
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#0e0e0e] text-white">
            <Header />
            <motion.main
                className="flex-grow py-12 px-6 lg:px-12"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-6xl mx-auto pt-24 mb-32">
                    <motion.h1 className="text-4xl lg:text-6xl font-bold mb-8" variants={itemVariants}>
                        Contact Us
                    </motion.h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <motion.div className="space-y-8 lg:col-span-1" variants={itemVariants}>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                                <p>Fill out the form and our team will get back to you within 24 hours.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Email</h3>
                                <p>hello@aries.com</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                                <p>+1 (555) 000-0000</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Office</h3>
                                <p>123 Sample St, Sydney NSW 2000 AU</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                <p>Saturday - Sunday: Closed</p>
                            </div>
                        </motion.div>
                        <motion.div className="lg:col-span-2" variants={itemVariants}>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#1c1c1c] p-3 rounded border border-transparent focus:border-white outline-none transition duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#1c1c1c] p-3 rounded border border-transparent focus:border-white outline-none transition duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#1c1c1c] p-3 rounded border border-transparent focus:border-white outline-none transition duration-300"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className="w-full bg-[#1c1c1c] p-3 rounded border border-transparent focus:border-white outline-none transition duration-300"
                                        required
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="bg-white text-black py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </motion.main>
            <Footer />
            <Footer2 />
        </div>
    )
}