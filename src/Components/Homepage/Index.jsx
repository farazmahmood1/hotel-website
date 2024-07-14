import React from 'react'
import Hero from './Hero'
import About from './About'
import VideoSection from './VideoSection'
import BestDeal from './BestDeal'
import BestProperties from './BestProperties'
import ContactUs from './ContactUs'

const Index = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <VideoSection/>
        <BestDeal/>
        <BestProperties/>
        <ContactUs/>
    </div>
  )
}

export default Index