import About from '@/components/About'
import FAQSection from '@/components/Faq'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import MoreAbout from '@/components/More'
import Navbar from '@/components/Navbar'
import ProductSection from '@/components/ProductSection'
import React from 'react'

type Props = {}

const Clockpage = (props: Props) => {
  return (
    <div>
        {/* <Navbar/> */}
        <Hero/>
         <About/>
         <MoreAbout/>
        <ProductSection/>
        <FAQSection/>
        {/* <Footer/> */}
    </div>
  )
}

export default Clockpage