import About from '@/components/About'
import Hero from '@/components/Hero'
import MoreAbout from '@/components/More'
import Navbar from '@/components/Navbar'
import ProductSection from '@/components/ProductSection'
import React from 'react'

type Props = {}

const Clockpage = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Hero/>
         <About/>
         <MoreAbout/>
        <ProductSection/>
    </div>
  )
}

export default Clockpage