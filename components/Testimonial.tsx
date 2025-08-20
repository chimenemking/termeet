'use client'
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "After searching for the perfect timepiece for years, I finally found my match with Timeless. The craftsmanship is exceptional, and the attention to detail is remarkable. It's more than a watch; it's a piece of art I'll cherish forever.",
      author: "James Wilson",
      role: "Collector & Enthusiast",
      company: "Chronograph Society"
    },
    {
      id: 2,
      text: "The team at Timeless provided our luxury retail store with exceptional timepieces that our clients adore. Their attention to detail, precision engineering, and classic designs have significantly elevated our product offerings.",
      author: "Sophia Chen",
      role: "Head Buyer",
      company: "Elite Timepieces"
    },
    {
      id: 3,
      text: "As a watchmaker with 25 years of experience, I rarely come across timepieces that truly impress me. Timeless watches have exceeded my expectations with their flawless movements and impeccable finishing. A true testament to horological excellence.",
      author: "Michael Reinhardt",
      role: "Master Watchmaker",
      company: "Precision Horology"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">TESTIMONIALS</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our distinguished clients and partners have to say about our timepieces.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quotation mark - styled like the first reference image */}
              <div className="absolute -top-4 -left-4 w-16 h-16">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-200">
                  <path d="M12.8 32C12.8 21.24 21.24 12.8 32 12.8V0C14.36 0 0 14.36 0 32H12.8V32ZM51.2 32C51.2 21.24 59.64 12.8 70.4 12.8V0C52.76 0 38.4 14.36 38.4 32H51.2V32Z" fill="currentColor"/>
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 relative z-10 italic">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-black">{testimonial.author}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos (optional) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 mb-8">Trusted by prestigious retailers and collectors worldwide</p>
          <div className="flex flex-wrap justify-center gap-10 opacity-60">
            {/* Example brand logos - replace with actual client logos */}
            <div className="h-10 w-32 bg-gray-200 rounded"></div>
            <div className="h-10 w-32 bg-gray-200 rounded"></div>
            <div className="h-10 w-32 bg-gray-200 rounded"></div>
            <div className="h-10 w-32 bg-gray-200 rounded"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;