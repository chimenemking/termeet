'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const WatchCarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      stat: "43.3 Million",
      title: "People appreciate timeless craftsmanship",
      description: "Our watches are crafted with precision and attention to detail that stands the test of time. Each timepiece represents hours of meticulous work by master watchmakers dedicated to their art.",
      cta: "Explore Craftsmanship",
      image: "/images/watch-1.jpg",
      bgColor: "bg-black"
    },
    {
      stat: "98%",
      title: "Customer satisfaction rate",
      description: "Our clients consistently rate their experience as exceptional. From the initial selection process to after-sales service, we prioritize excellence at every touchpoint.",
      cta: "Read Testimonials",
      image: "/images/watch-2.jpg",
      bgColor: "bg-gray-900"
    },
    {
      stat: "125 Years",
      title: "Of heritage and innovation",
      description: "Since 1898, we've blended traditional watchmaking techniques with cutting-edge technology to create timepieces that honor the past while embracing the future.",
      cta: "Our History",
      image: "/images/watch-3.jpg",
      bgColor: "bg-gray-800"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className={`absolute inset-0 ${slides[currentSlide].bgColor} flex items-center justify-center`}
          >
            <div className="absolute inset-0">
              <Image
                src={slides[currentSlide].image}
                alt="Luxury watch"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h3 className="text-5xl md:text-6xl font-light mb-4">
              {slides[currentSlide].stat}
            </h3>
            <h4 className="text-xl md:text-2xl font-semibold mb-4">
              {slides[currentSlide].title}
            </h4>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {slides[currentSlide].description}
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              {slides[currentSlide].cta}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full border-white/10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full border-white/10"></div>
    </section>
  );
};

export default WatchCarouselBanner;