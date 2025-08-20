// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


const linkItems = [
    { href:'/about' , label: 'About Us'},
    { href:'/products' , label: 'Products'},
    { href:'/blog' , label: 'Blog'},
    { href:'/faq' , label: 'FAQ'},
]


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-center px-4 md:px-0">
        {/* Left Section: Call to Action */}
        <div className="col-span-2 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-6xl font-display font-semibold mb-6 py-4">
            Crafting elegance.
          </h2>
          <p className="text-lg font-body text-nude-light mb-8">
            Let's build something beautiful together.
          </p>
          <div
          >
            <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-full font-body hover:bg-white  hover:text-gray-800 transition-colors">
              Contact us
            </Link>
          </div>
        </div>

        {/* Right Section: Links and Copyright */}
        <div className="">
          <div className="flex flex-col md:items-end space-y-4 font-body text-lg mb-10">
            {linkItems.map((item,linkkey) => (
              
                <Link href={item.href} key={linkkey} className="hover:underline transition-colors  ease-in-out duration-500 hover:text-gray-300">
                  {item.label}
                </Link>
            
            ))}
          </div>
          <p className="text-sm font-body text-nude-light text-center md:text-right">
            © 2024—2025 Watch Co.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;