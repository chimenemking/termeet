'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const ClockHero = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Two-column grid layout */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Watch image */}
        <div className="relative">
          <Image 
            src={'/images/watch-7.jpg'} 
            alt="Luxury watch showcase" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent"></div>
        </div>
        
        {/* Right side - Dark background */}
        <div className="bg-gray-800 hidden lg:block"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Spacer for image side on desktop */}
          <div className="hidden lg:block"></div>
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4"
            >
              Timeless
            </motion.h1>
            
            <motion.h1
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-200 mb-6"
            >
              Elegance
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-gray-300 font-light mb-8 leading-relaxed"
            >
              Specially crafted watches that blend minimalist design with unparalleled precision.
            </motion.p>
            
            {/* Live time display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mb-8"
            >
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Your Time Is Precious</p>
              <div className="text-3xl md:text-4xl text-white font-light">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </motion.div>
            
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-6 py-3 rounded-full text-base font-medium transition-colors shadow-lg"
              >
                Explore Collection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white px-6 py-3 rounded-full text-base font-medium transition-colors"
              >
                Custom Order
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ClockHero;