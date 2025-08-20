'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { categories, products } from './products';

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const productVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <section className="bg-nude-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-semibold text-charcoal text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Best Sellers
        </motion.h2>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 ${
                selectedCategory === category 
                  ? "bg-black text-white shadow-md" 
                  : "bg-white text-black border border-black  hover:shadow-sm"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={productVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden  hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative h-72 bg-nude-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-charcoal text-white text-xs py-1 px-3 rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-medium text-charcoal mb-4">
                    ${product.price}
                  </p>
                  <p className="text-sm text-nude-600 mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="text-xs text-nude-500 mb-5 flex flex-wrap gap-2">
                    {product.details.slice(0, 2).map((detail, index) => (
                      <span key={index} className="bg-nude-100 px-2 py-1 rounded">
                        {detail}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-white text-charcoal font-medium py-2.5 px-4 rounded-lg border border-nude-300 transition-colors duration-300 hover:bg-nude-50"
                    >
                      View Details
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-black text-white font-medium py-2.5 px-4 rounded-lg border border-black transition-colors duration-300 hover:opacity-90"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;