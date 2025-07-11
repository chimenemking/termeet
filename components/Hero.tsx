'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ClockProps {
  size?: number;
  hourColor?: string;
  minuteColor?: string;
  secondColor?: string;
  markerColor?: string;
  backgroundColor?: string;
}

const ClockHero: React.FC<ClockProps> = ( {
  size = 200,
  hourColor = 'blue-600', // Tailwind color classes
  minuteColor = 'gray-600',
  secondColor = 'red-600',
  markerColor = 'gray-800',
  backgroundColor = 'gray-100',
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hour = time.getHours() % 12;
  const minute = time.getMinutes();
  const second = time.getSeconds();

  const hourRotation = (hour + minute / 60) * 30;
  const minuteRotation = minute * 6;
  const secondRotation = second * 6;

  return (
    <section className="relative  min-h-screen flex flex-col justify-center items-center text-center py-20">
      

    {/* background color layering test */}
   
  
  <div className="absolute inset-0 h-screen grid md:grid-cols-2 grid-rows-2">
    <div className="bg-black"></div>
    <div className="bg-gray-600"></div>
  <div className='relative '>
  <Image className='' src={'/images/watch-7.jpg'} alt={''} layout='fill' objectFit='cover' quality={100}></Image>
  </div>
  <div className="bg-black"></div>
  </div>
 


      {/* Content */}
      <motion.div className="relative z-10  p-2 ">
        <motion.div className='flex items-center gap-4 mb-20'>
        <motion.h1
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl font-display text-white "
        >
          Timeless
        </motion.h1>
        
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl font-display  text-black "
        >
           Elegance
        </motion.h1>
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl  text-white max-w-2xl mb-10"
        >
          Discover meticulously crafted watches that blend minimalist design with unparalleled precision.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative  border-2  text-white rounded-md px-4 py-2 inline cursor-pointer text-4xl before:bg-black hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
          Explore Collection
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ClockHero;