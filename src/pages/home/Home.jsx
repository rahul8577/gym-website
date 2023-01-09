import React from 'react'
import MainHeader from '../../components/MainHeader'
import './home.css'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonial from '../../components/Testimonial'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FAQs/>
      <Testimonial/>
    </div>
  )
}

export default Home