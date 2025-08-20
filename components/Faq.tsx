// components/FAQSection.js
'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What materials are used in your watches?",
      answer: "Our timepieces are crafted from 316L surgical-grade stainless steel, sapphire crystal glass, and genuine Italian leather. Each component is selected for its durability, aesthetic appeal, and comfort."
    },
    {
      question: "How accurate are your watch movements?",
      answer: "We use Swiss-made automatic movements that are certified chronometers, ensuring accuracy within -4/+6 seconds per day. Each movement is tested for 15 days and comes with a 5-year international warranty."
    },
    {
      question: "What is your warranty policy?",
      answer: "All our watches come with a 5-year international warranty that covers manufacturing defects. The warranty includes free servicing within the first three years and covers movement repairs or replacements as needed."
    },
    {
      question: "How do I maintain my luxury watch?",
      answer: "We recommend servicing your timepiece every 3-5 years. Avoid exposing it to extreme temperatures, strong magnetic fields, or chemicals. For automatic watches, we suggest wearing them regularly to maintain power reserve."
    },
    {
      question: "Can I customize my watch?",
      answer: "Yes, we offer bespoke customization services. You can select different dial colors, strap materials, and even engravings. Custom orders require 4-6 weeks for delivery and are subject to a 30% customization fee."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn watches with original packaging and documents. Returns are free of charge, and refunds are processed within 5 business days after we receive and inspect the returned item."
    }
  ];

  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-nude-100 to-nude-200 overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-nude-300 opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif font-light text-charcoal mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <motion.p 
          className="text-nude-600 text-center mb-12 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Need more answers? Reach out to our concierge team or schedule a call with our founder.
        </motion.p>

        <div className="space-y-4 mb-12">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-nude-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center font-sans text-charcoal hover:bg-nude-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium pr-4">{item.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl text-nude-600 flex-shrink-0"
                >
                  {activeIndex === index ? '−' : '+'}
                </motion.span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 font-sans text-nude-600">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-white text-black rounded-lg p-8 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="font-bold text-2xl mb-4">Still have questions?</h3>
          <p className="mb-6 font-sans text-nude-200">Our team would be delighted to assist you.</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black border py-3 px-8 rounded-full transition-colors duration-200 ease-in-out"
          >
            Contact TC support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;