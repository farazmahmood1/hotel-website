import React from 'react'
import Hero from './Hero'
import About from './About'
import VideoSection from './VideoSection'
import BestDeal from './BestDeal'
import BestProperties from './BestProperties'
import ContactUs from './ContactUs'
import WhyUs from './WhyUs'
import Reviews from './Reviews'

const Index = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <WhyUs/>
        <VideoSection/>
        {/* <BestDeal/> */}
        {/* <BestProperties/> */}
        <Reviews/>
        <ContactUs/>
    </div>
  )
}

export default Index