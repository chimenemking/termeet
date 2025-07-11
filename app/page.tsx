import About from '@/components/About'
import Hero from '@/components/Hero'
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
        <ProductSection/>
    </div>
  )
}

export default Clockpage