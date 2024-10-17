'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from './Logo.png';
import logo2 from './logo2.png';
import { Separator } from "@/components/ui/separator"


export default function LandingPageComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
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

    const waves = Array.from({ length: 8 }, (_, i) => ({
      y: canvas.height * ((i + 1) / 10),
      length: 0.003,
      amplitude: 20 + Math.random() * 5,
      speed: 0.0003 + Math.random() * 0.0001,
      offset: Math.random() * Math.PI * 2,
    }));

    const gradientColors = ['#ffbf00', '#f97636', '#ff007a'];

    let animationFrameId: number;

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      const gradientPosition = Math.sin(time * 0.0001) * canvas.width; // Moves gradient over time

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y / window.devicePixelRatio);

        for (let x = 0; x < canvas.width / window.devicePixelRatio; x += 3) {
          const dx = x * wave.length;
          let dy = Math.sin(dx + time * wave.speed + wave.offset) * wave.amplitude;

          // Add a secondary wave for more complex movement
          dy += Math.sin(dx * 1.5 + time * wave.speed * 0.8) * wave.amplitude * 0.5;

          ctx.lineTo(x, wave.y / window.devicePixelRatio + dy);
        }

        ctx.lineTo(canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
        ctx.lineTo(0, canvas.height / window.devicePixelRatio);
        ctx.closePath();

        // Moving gradient creation logic
        const gradient = ctx.createLinearGradient(gradientPosition, 0, canvas.width / window.devicePixelRatio + gradientPosition, canvas.height / window.devicePixelRatio);
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

  return (
      <div className="min-h-screen flex flex-col bg-gray-50 relative overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 z-0"/>

        {/* Header */}
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

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-800 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Menu for larger screens */}
          <nav className="hidden md:flex space-x-4">
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

          {/* Mobile Navigation Dropdown */}
          {menuOpen && (
              <nav className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 md:hidden">
                <ul className="flex flex-col space-y-4">
                  {['Home', 'Mission', 'Team', 'Impressum', 'Contact'].map((item) => (
                      <li key={item}>
                        <Link href={`#${item.toLowerCase()}`} className="text-gray-800 block"
                              onClick={() => setMenuOpen(false)}>
                          {item}
                        </Link>
                      </li>
                  ))}
                </ul>
              </nav>
          )}
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex-grow flex items-center justify-center">
          <div className="text-center -mt-12 relative"> {/* Moved slightly above the center and made relative */}
            <div className="relative inline-block">
              <h1 className="relative z-10 text-8xl md:text-8xl font-bold text-black home-hero-heading">
                ELEVATE YOUR LIFESTYLE BRAND
              </h1>
              <div className="absolute inset-0 z-0 blur-2xl bg-white opacity-50 rounded-lg"></div>
              {/* Blurred background */}
            </div>
            <div className="mt-4 md:mt-8 flex justify-center">
              <button
                  className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#ffbf00] via-[#f97636] to-[#ff007a] text-white font-semibold rounded-full hover:shadow-lg transition-shadow duration-300 text-sm md:text-base">
                Get Started
              </button>
            </div>
          </div>
        </main>

        {/* Footer Navigation Bar (Fixed at Bottom) */}
        <footer
            className="relative z-10 fixed bottom-5 left-0 right-0 w-10/12 mx-auto bg-black bg-opacity-60 backdrop-blur-md text-white p-2 flex justify-between items-center rounded-xl shadow-lg">
          {/* Left Side: Logo and Spacer */}
          <div className="flex items-center space-x-4">
            {/* Clickable Logo */}
            <Link href="#home"> {/* Wrapped the logo in a Link */}
              <div className="flex items-center justify-center w-12 h-12 ml-4 cursor-pointer">
                <Image src={logo2} alt="Logo" layout="responsive" width={2200} height={800}/>
              </div>
            </Link>

            {/* Separator between logo and links */}
            <Separator orientation="vertical" className="h-4 bg-gray-400"/>

            {/* Spacer */}
            <div className="flex space-x-2">
              {/* Privacy Button */}
              <Link href="#privacy"
                    className="relative z-20 bg-gray-800 p-1.5 w-8 h-8 mr-2 flex items-center justify-center rounded-md transition-colors duration-300 hover:bg-[#ff007a] hover:transition-colors">
                <svg className="text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 2a10 10 0 00-3.12 19.475c.494.09.674-.214.674-.476v-1.846c-2.746.598-3.333-1.323-3.333-1.323-.449-1.146-1.095-1.452-1.095-1.452-.897-.61.067-.598.067-.598 1.003.07 1.53 1.06 1.53 1.06.882 1.52 2.316 1.074 2.88.821.09-.64.346-1.073.63-1.32-2.192-.25-4.49-1.094-4.49-4.873 0-1.08.39-1.963 1.03-2.654-.105-.253-.447-1.27.097-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.17c.85.004 1.705.113 2.505.33 1.91-1.295 2.75-1.025 2.75-1.025.544 1.38.202 2.397.1 2.65.643.69 1.03 1.573 1.03 2.653 0 3.79-2.303 4.62-4.497 4.864.355.31.674.92.674 1.854v2.74c0 .264.18.568.68.474A10 10 0 0012 2z"/>
                </svg>
              </Link>

              {/* Terms Button */}
              <Link href="#terms"
                    className="relative z-20 bg-gray-800 p-1.5 w-8 h-8 flex items-center justify-center rounded-md transition-colors duration-300 hover:bg-[#ff007a] hover:transition-colors">
                <svg className="text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side: Menu Links and Contact Us */}
          <nav className="flex items-center space-x-8">
            <Link href="#home"
                  className="text-white hover:text-gray-300 transition transform hover:translate-y-1 hover:bg-opacity-90">Home</Link>
            <Link href="#about"
                  className="text-white hover:text-gray-300 transition transform hover:translate-y-1 hover:bg-opacity-90">About</Link>
            <Link href="#portfolio"
                  className="text-white hover:text-gray-300 transition transform hover:translate-y-1 hover:bg-opacity-90">Portfolio</Link>
            <Link href="#blog"
                  className="text-white hover:text-gray-300 transition transform hover:translate-y-1 hover:bg-opacity-90">Blog</Link>

            {/* Contact Us Button with Gradient Shift from Left to Right */}
            <Link href="#contact">
              <button
                  className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 bg-gradient-to-r from-red-600 to-red-600 hover:from-white hover:to-white hover:text-black">
                Contact Us
              </button>
            </Link>
          </nav>
        </footer>
      </div>
  );
}
