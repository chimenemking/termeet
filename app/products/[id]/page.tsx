// pages/products/[id].tsx
'use client'
import { useRouter, useParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product, products } from '@/components/products';

// This is a placeholder for your authentication logic
// const useAuth = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Check if user is authenticated (e.g., from localStorage, cookies, or context)
//     const checkAuth = async () => {
//       // Simulate authentication check
//       const token = localStorage.getItem('authToken');
//       setIsAuthenticated(!!token);
//       setIsLoading(false);
//     };

//     checkAuth();
//   }, []);

//   return { isAuthenticated, isLoading };
// };
const useAuth = () => {
  return { 
    isAuthenticated: true, 
    isLoading: false 
  };
};

const ProductDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
      return;
    }

    // Find the product based on the ID from the URL
    const foundProduct = products.find(p => p.id === Number(id));
    setProduct(foundProduct);
  }, [id, isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-nude-800 mb-4">Product not found</h2>
          <Link 
            href="/products" 
            className="text-nude-600 hover:text-nude-800 transition-colors"
          >
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  // Main component UI
  return (
    <div className="bg-white py-20 min-h-screen">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start px-4">
        {/* Product Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center p-8  rounded-lg "
        >
          <div className="relative w-full h-96">
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
              priority
            />
          </div>
        </motion.div>

        {/* Product Details Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-charcoal mb-4">{product.name}</h1>
          <p className="text-lg font-sans text-nude-600 mb-2">ONE SIZE</p>
          <p className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">${product.price}</p>
          
          {/* Color Swatches */}
          <div className="flex space-x-3 mb-8">
            <span className="w-8 h-8 rounded-full bg-orange-400 border-2 border-white shadow cursor-pointer"></span>
            <span className="w-8 h-8 rounded-full bg-gray-600 border-2 border-white shadow cursor-pointer"></span>
            <span className="w-8 h-8 rounded-full bg-white border-2 border-nude-300 shadow cursor-pointer"></span>
            <span className="w-8 h-8 rounded-full bg-black border-2 border-white shadow cursor-pointer"></span>
          </div>

          <p className="text-base font-sans text-nude-600 leading-relaxed mb-8">{product.description}</p>
          
          {/* Add to Cart Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-charcoal text-white py-4 rounded-lg font-sans font-medium mb-8 hover:bg-nude-800 transition-colors"
          >
            Add to Cart
          </motion.button>
          
          {/* Accordion-like Details Section */}
          <div className="space-y-4">
            <AccordionItem title="Details" content={product.details.join(' • ')} />
            <AccordionItem title="Payments Options" content="Visa, Mastercard, American Express, PayPal" />
            <AccordionItem title="Shipping" content="Free shipping on all orders over $100. Express delivery available." />
            <AccordionItem title="Returns" content="30-day hassle-free returns. Full refund or exchange." />
          </div>
        </motion.div>
      </div>

      {/* "Looking for more?" section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container mx-auto mt-20 px-4"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-serif text-charcoal">You might also like</h2>
          <Link 
            href="/products" 
            className="text-nude-600 hover:text-charcoal transition-colors font-sans"
          >
            View all →
          </Link>
        </div>
        {/* Related products grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.filter(p => p.id !== product.id).slice(0, 4).map(relatedProduct => (
            <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex flex-col items-start cursor-pointer"
              >
                <div className="relative w-full h-60 bg-nude-100 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="font-sans text-charcoal font-medium">{relatedProduct.name}</p>
                <p className="font-sans text-nude-600">${relatedProduct.price}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Improved Accordion Component
const AccordionItem = ({ title, content }: { title: string, content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-nude-200 pb-4">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-sans font-medium text-charcoal">{title}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-xl text-nude-600"
        >
          +
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-sm font-sans text-nude-600 overflow-hidden"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetailsPage;