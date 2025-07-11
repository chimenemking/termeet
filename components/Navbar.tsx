'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoMdCart } from 'react-icons/io';

const Navbar = () => {
  const [time, setTime] = useState<string>('');
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true); // Indicate client-side rendering
  }, []);

  useEffect(() => {
    if (isClient) {
      const intervalId = setInterval(() => {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
        setTime(formattedTime);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isClient]);

  return (
    <nav className="sticky top-0 z-20 bg-gray-500 py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl flex items-center font-semibold">
        <div className='bg-red-700 text-3xl rounded'>W</div>
        <div className='bg-black text-white text-2xl rounded'>C</div>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center right-20  p-4 border-4 space-x-6">
        <div className="relative ">
          <Link href="/products" className="text-white bg-black p-2 rounded font-bold transition-colors">
            Products
          </Link>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-nude-accent origin-left"
            style={{ originX: 'left' }}
          />
        </div>
        <div className="relative">
          <Link href="/cart" className="flex items-center text-nude-darkest bg-white text-black rounded font-bold  border-white border-2 p-1 transition-colors">
            Cart
            <span><IoMdCart/></span>
          </Link>
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-nude-accent origin-left"
            style={{ originX: 'left' }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-nude-darkest font-body"
        >
          {time}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;