'use client'

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Component() {


    return (
        <div className="min-h-screen flex flex-col bg-[#0e0e0e] text-white">
            <Header />
            {/* Main Content */}
            <main className="flex-grow py-12 px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-8">Contact Us</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8 lg:col-span-1">
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
                        </div>
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2">Name</label>
                                    <input type="text" id="name" className="w-full bg-[#1c1c1c] p-3 rounded border border-transparent focus:border-white outline-none transition duration-300" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2">Email</label>
                                    <input type="email" id="email" className="w-full bg-[#1c1c1c] p-3 rounded border border-transparent focus:border-white outline-none transition duration-300" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2">Phone</label>
                                    <input type="tel" id="phone" className="w-full bg-[#1c1c1c] p-3 rounded border border-transparent focus:border-white outline-none transition duration-300" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2">Message</label>
                                    <textarea id="message" rows={5} className="w-full bg-[#1c1c1c] p-3 rounded border border-transparent focus:border-white outline-none transition duration-300" required></textarea>
                                </div>
                                <button type="submit" className="bg-white text-black py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}