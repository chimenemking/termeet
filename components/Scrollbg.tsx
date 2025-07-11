'use client'
import type { NextPage } from 'next';
import Hero from '../components/Hero';
import About from '../components/About';
import { motion, useScroll, useTransform } from 'framer-motion';
import ClockWheel from '../components/ClockWheel';

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();

  const rotateWheel1 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const rotateWheel2 = useTransform(scrollYProgress, [0, 1], [0, 540]);
  const rotateWheel3 = useTransform(scrollYProgress, [0, 1], [0, -720]);
  const rotateWheel4 = useTransform(scrollYProgress, [0, 1], [0, 270]);
  const rotateWheel5 = useTransform(scrollYProgress, [0, 1], [0, -450]);

  return (
    <div className="relative">
      {/* Background Wheels */}
      <motion.div
        style={{ rotate: rotateWheel1 }}
        className="absolute top-1/4 left-1/4 w-48 h-48 opacity-20"
      >
        <ClockWheel size={192} teeth={16} color="#D1C9BE" />
      </motion.div>

      <motion.div
        style={{ rotate: rotateWheel2 }}
        className="absolute top-1/2 right-1/4 w-64 h-64 opacity-20"
      >
        <ClockWheel size={256} teeth={24} color="#BFA899" />
      </motion.div>

      <motion.div
        style={{ rotate: rotateWheel3 }}
        className="absolute bottom-1/4 left-1/3 w-32 h-32 opacity-20"
      >
        <ClockWheel size={128} teeth={12} color="#E8E4D9" />
      </motion.div>

      <motion.div
        style={{ rotate: rotateWheel4 }}
        className="absolute top-1/8 right-1/8 w-36 h-36 opacity-20"
      >
        <ClockWheel size={144} teeth={18} color="#C0B0A0" />
      </motion.div>

      <motion.div
        style={{ rotate: rotateWheel5 }}
        className="absolute bottom-1/8 right-1/3 w-56 h-56 opacity-20"
      >
        <ClockWheel size={224} teeth={20} color="#A9998A" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default Home;