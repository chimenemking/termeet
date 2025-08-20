'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoMdCart } from 'react-icons/io';

const Navbar = () => {
  

  return (
    <nav className="sticky container max-w-[100rem] mx-auto top-0 z-20 bg-white shadow-xl py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl flex items-center font-semibold">
        <div className='bg-red-700 text-3xl rounded'>T</div>
        <div className='bg-black text-white text-2xl rounded'>C</div>
      </Link>

      <div className="flex items-center space-x-6 p-2 rounded-3xl">
        {/* Products link */}
        <div className="relative group">
          <Link href="/products" className=" text-shadow-dark transition-colors">
            Products
          </Link>
        </div>
                {/* Blog link */}
        <div className="relative group">
          <Link href="/blog" className="text-nude-darkest transition-colors">
            Blog
          </Link>
          
        </div>

         {/* Login/Signup button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/login" className="px-6 py-2 rounded-full bg-gray-800 text-white  shadow-md">
            Login
          </Link>
        </motion.div>

        </div>
    </nav>
  );
};

export default Navbar;