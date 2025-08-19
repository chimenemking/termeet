'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const ClockAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-white py-20 px-4 md:px-0">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-display font-semibold text-nude-dark mb-10"
        >
          Our Craft
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl font-display font-medium text-nude-dark mb-4 text-left">
              Precision & Detail
            </h3>
            <p className="text-lg font-body font-light text-nude-medium text-left">
              Each watch is assembled with meticulous attention to detail. We focus on the subtle nuances that make a timepiece truly exceptional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2"
          >
            <Image
              src="/images/watch-8.jpg" // Replace with your image path
              alt="Watch Detail"
              width={500}
              height={350}
              quality={100}
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src="/images/watch-6.jpg" // Replace with your image path
              alt="Watch Design"
              width={500}
              height={350}
              className="rounded-lg shadow-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-display font-medium text-nude-dark mb-4 text-left">
              Minimalist Design
            </h3>
            <p className="text-lg font-body font-light text-nude-medium text-left">
              Our designs embody simplicity and elegance. We believe in creating watches that stand the test of time, both in style and quality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClockAbout;