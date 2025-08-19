'use client'

// components/ProductSection.tsx
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
    exit: { opacity: 0, y: -50 },
  };

  return (
    <section className="bg-nude-light py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-black text-center mb-10">
          Our Collection
        </h2>

        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 rounded font-body text-nude-medium ${
                selectedCategory === category ? "bg-black text-white" : "hover:bg-nude-medium hover:text-gray-800"
              } transition-colors`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={productVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl  mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg  mb-4">
                    ${product.price}
                  </p>
                  <p className="text-sm  mb-4">
                    {product.description}
                  </p>
                  <div className="list-disc list-inside text-sm  ">
                    {product.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <button className="bg-white text-black font-semibold py-2 px-6 rounded border border-black transition-colors duration-300 hover:bg-black hover:text-white">
                      Buy Now
                    </button>
                    <button className="bg-black text-white font-semibold py-2 px-6 rounded border border-black transition-colors duration-300 hover:bg-white hover:text-black">
                      Add to Cart
                    </button>
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