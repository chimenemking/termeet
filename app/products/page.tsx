'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import WatchCarouselBanner from '@/components/Banner';

// Mock product data
const products = [
  {
    id: 1,
    name: "Classic Heritage",
    price: 1250,
    category: "Classic",
    description: "Swiss automatic movement, sapphire crystal glass, genuine leather strap.",
    image: "/images/watch-1.jpg",
    details: ["42mm case", "Water resistant", "Swiss movement"]
  },
  {
    id: 2,
    name: "Modern Chronograph",
    price: 1450,
    category: "Modern",
    description: "Contemporary chronograph with precision timing functions and ceramic bezel.",
    image: "/images/watch-2.jpg",
    details: ["44mm case", "Chronograph", "Ceramic bezel"]
  },
  {
    id: 3,
    name: "Vintage Explorer",
    price: 980,
    category: "Vintage",
    description: "Inspired by mid-century designs with domed crystal and elegant numerals.",
    image: "/images/watch-3.jpg",
    details: ["38mm case", "Hand-wound", "Vintage style"]
  },
  {
    id: 4,
    name: "Diver Professional",
    price: 1650,
    category: "Sports",
    description: "Built for underwater exploration with 300m water resistance.",
    image: "/images/watch-4.jpg",
    details: ["300m water resistance", "Luminous markers", "Rotating bezel"]
  },
  {
    id: 5,
    name: "Minimalist Classic",
    price: 1100,
    category: "Classic",
    description: "Ultra-thin design with minimalist dial and premium leather strap.",
    image: "/images/watch-5.jpg",
    details: ["40mm case", "Ultra-thin", "Minimalist dial"]
  },
  {
    id: 6,
    name: "Automatic Elite",
    price: 1950,
    category: "Modern",
    description: "Premium automatic movement with exhibition case back and power reserve.",
    image: "/images/watch-6.jpg",
    details: ["Exhibition case back", "Power reserve", "Premium movement"]
  }
];

const categories = ["All", "Classic", "Modern", "Vintage", "Sports"];

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let result = products;
    
    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Sort products
    if (sortOption === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortOption === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, sortOption]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light mb-4"
          >
            Our Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl"
          >
            Discover our meticulously crafted timepieces, where precision engineering meets timeless design.
          </motion.p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Search and sort */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Search watches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8 text-gray-600">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
        </div>

        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-64 bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-black text-white text-xs py-1 px-2 rounded">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-light">${product.price}</span>
                      <div className="flex gap-1">
                        {product.details.map((detail, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-white text-black border border-black py-2 px-4 rounded-lg hover:bg-black hover:text-white transition-colors">
                        Details
                      </button>
                      <button className="flex-1 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      <WatchCarouselBanner/>
    </div>
  );
};

export default ProductPage;