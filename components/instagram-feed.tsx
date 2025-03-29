// components/instagram-feed.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

interface InstagramPost {
    id: string;
    imageUrl: string;
    caption: string;
    likes: number;
    timestamp: string;
    username: string;
}

export default function InstagramFeed() {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real implementation, you would fetch from the Instagram Graph API
        // For demo purposes, we'll use mock data
        const mockPosts: InstagramPost[] = [
            {
                id: '1',
                imageUrl: '/api/placeholder/600/600',
                caption: 'Exploring new design concepts for our latest collection. #design #fashion #lifestyle',
                likes: 254,
                timestamp: '2 hours ago',
                username: 'yourbrand'
            },
            {
                id: '2',
                imageUrl: '/api/placeholder/600/600',
                caption: 'Morning inspiration. Coffee and creativity. #morningroutine #creative',
                likes: 187,
                timestamp: '5 hours ago',
                username: 'yourbrand'
            },
            {
                id: '3',
                imageUrl: '/api/placeholder/600/600',
                caption: 'Behind the scenes at our latest photoshoot. #bts #photoshoot #newcollection',
                likes: 325,
                timestamp: '1 day ago',
                username: 'yourbrand'
            },
            {
                id: '4',
                imageUrl: '/api/placeholder/600/600',
                caption: 'Product spotlight: Our bestselling item this season. #trending #musthave',
                likes: 412,
                timestamp: '2 days ago',
                username: 'yourbrand'
            }
        ];

        // Simulate API loading
        setTimeout(() => {
            setPosts(mockPosts);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <section className="py-16 bg-black relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="flex items-center gap-2">
              <Instagram className="h-8 w-8" />
              Latest on Instagram
            </span>
                    </h2>
                    <a
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full border border-gray-700 text-white hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        Follow Us
                    </a>
                </div>

                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
                        {[1, 2, 3, 4].map((_, index) => (
                            <div key={index} className="aspect-square bg-gray-800 rounded-lg"></div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, staggerChildren: 0.1 }}
                    >
                        {posts.map((post) => (
                            <motion.div
                                key={post.id}
                                className="group relative overflow-hidden rounded-lg aspect-square"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img
                                    src={post.imageUrl}
                                    alt={post.caption}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                    <p className="text-white text-sm line-clamp-2 mb-2">{post.caption}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-white text-xs">{post.timestamp}</span>
                                        <span className="text-white text-xs flex items-center gap-1">
                      ❤️ {post.likes}
                    </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}