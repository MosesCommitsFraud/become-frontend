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

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const waves = Array.from({ length: 13 }, (_, i) => ({
      y: canvas.height * ((i + 1) / 14),
      length: 0.002,
      amplitude: 15 + Math.random() * 5,
      speed: 0.0002 + Math.random() * 0.0001,
      offset: Math.random() * Math.PI * 2,
    }));

    const gradientColors = ['#ffbf00', '#f97636', '#ff007a'];

    let animationFrameId: number;

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);

        for (let x = 0; x < canvas.width; x += 2) {
          const dx = x * wave.length;
          let dy = Math.sin(dx + time * wave.speed + wave.offset) * wave.amplitude;

          // Add a secondary wave for more complex movement
          dy += Math.sin(dx * 2 + time * wave.speed * 1.5) * wave.amplitude * 0.5;

          ctx.lineTo(x, wave.y + dy);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradientColors.forEach((color, i) => {
          gradient.addColorStop(i / (gradientColors.length - 1), color);
        });

        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.05; // Make the waves very subtle
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      waves.forEach((wave, index) => {
        wave.y = canvas.height * ((index + 1) / 6);
      });
    };

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
          <div style={{width: '200px', height: 'auto'}}> {/* Set desired width */}
            <Image
                src={logo}
                alt="Logo"
                layout="responsive"
                width={2200}  // Original width of the image
                height={800}  // Original height of the image
            />
          </div>
          <nav>
            <ul className="flex space-x-4">
              {['Home', 'Mission', 'Team', 'Impressum', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-gray-800 relative group">
                      {item}
                      <span
                          className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                  </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="relative z-10 flex-grow flex items-center justify-center px-4">
          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 text-center">
              Elevate Your Lifestyle Brand To A New Level
            </h1>
            <div className="mt-8 flex justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] text-white font-semibold rounded-full hover:shadow-lg transition-shadow duration-300">
                Get Started
              </button>
            </div>
          </div>
        </main>

        <footer className="relative z-10 p-4 text-center text-gray-600">
          <p>&copy; 2024 BECOME Consulting. All rights reserved.</p>
        </footer>
      </div>
  );
}
