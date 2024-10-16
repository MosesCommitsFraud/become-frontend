'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from './Logo.png';

export default function LandingPageComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const waves = Array.from({ length: 7 }, (_, i) => ({
      y: canvas.height * ((i + 1) / 8),
      length: 0.005,  // Adjust wave length for smoother curves
      amplitude: 10 + Math.random() * 10, // Lower amplitude for smoother appearance on mobile
      speed: 0.0002 + Math.random() * 0.0001,
      offset: Math.random() * Math.PI * 2,
    }));

    const gradientColors = ['#ffbf00', '#f97636', '#ff007a'];

    let animationFrameId: number;

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y / window.devicePixelRatio);

        for (let x = 0; x < canvas.width / window.devicePixelRatio; x += 4) {
          const dx = x * wave.length;
          let dy = Math.sin(dx + time * wave.speed + wave.offset) * wave.amplitude;

          // Add a secondary wave for more complex movement
          dy += Math.sin(dx * 1.5 + time * wave.speed * 0.8) * wave.amplitude * 0.4;

          ctx.lineTo(x, wave.y / window.devicePixelRatio + dy);
        }

        ctx.lineTo(canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
        ctx.lineTo(0, canvas.height / window.devicePixelRatio);
        ctx.closePath();

        // Improved gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width / window.devicePixelRatio, 0);
        gradientColors.forEach((color, i) => {
          gradient.addColorStop(i / (gradientColors.length - 1), color);
        });

        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.1; // Increased visibility for the gradient
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
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        <header className="relative z-10 p-4 flex justify-between items-center">
          <div className="w-32 md:w-48 h-auto"> {/* Adjust logo size */}
            <Image
                src={logo}
                alt="Logo"
                layout="responsive"
                width={2200}
                height={800}
            />
          </div>
          <nav className="hidden md:flex space-x-4">
            <ul className="flex space-x-4">
              {['Home', 'Mission', 'Team', 'Impressum', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-gray-800 relative group">
                      {item}
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                  </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="relative z-10 flex-grow flex items-center justify-center px-4">
          <div className="bg-white bg-opacity-80 p-4 md:p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">
              Elevate Your Lifestyle Brand To A New Level
            </h1>
            <div className="mt-4 md:mt-8 flex justify-center">
              <button className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] text-white font-semibold rounded-full hover:shadow-lg transition-shadow duration-300 text-sm md:text-base">
                Get Started
              </button>
            </div>
          </div>
        </main>

        <footer className="relative z-10 p-4 text-center text-gray-600">
          <p className="text-xs md:text-sm">&copy; 2024 BECOME Consulting. All rights reserved.</p>
        </footer>
      </div>
  );
}
