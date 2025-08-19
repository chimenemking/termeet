import React from 'react';

// Define the Benefit component first as a standard React component
interface BenefitProps {
  title: string;
  description: string;
  delay: number; // This prop is now unused but kept for future use
}

const Benefit: React.FC<BenefitProps> = ({ title, description }) => {
  return (
    <div className="py-2 border-b border-nude-light">
      <h3 className="text-xl font-body font-semibold text-nude-darkest mb-2">{title}</h3>
      <p className="font-body text-nude-medium">{description}</p>
    </div>
  );
};

// Now define the main component
const MoreAbout = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <div className="text-left">
          <h2 className="text-5xl font-display font-semibold  mb-8">
            Why choose our timepieces?
          </h2>
          <button className="inline-flex items-center bg-white  border rounded-full px-6 py-3 font-medium hover:bg-gray-900 hover:text-gray-100 transition-colors ease-in-out duration-500 ">
            ABOUT US
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 gap-6">
          <Benefit
            title="Exceptional Craftsmanship"
            description="Our watches are meticulously crafted using high-quality materials and traditional techniques, ensuring lasting beauty and precision."
            delay={0.2}
          />
          <Benefit
            title="Minimalist and Timeless Design"
            description="We believe in understated elegance. Our designs transcend fleeting trends, offering enduring style for every occasion."
            delay={0.4}
          />
          <Benefit
            title="Commitment to Quality"
            description="From the movement to the strap, every component is selected for its quality and durability, providing a timepiece you can rely on."
            delay={0.6}
          />
          <Benefit
            title="Dedicated Customer Support"
            description="We are committed to providing exceptional service. Our team is here to assist you with any inquiries and ensure a seamless experience."
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;