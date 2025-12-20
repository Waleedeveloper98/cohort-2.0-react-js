import React from 'react'
import AboutHeader from './AboutHeader'
import AboutCard1 from './AboutCard1'
import AboutCard2 from './AboutCard2'
import AboutCard3 from './AboutCard3'
import AboutStats from './AboutStats'

const About = () => {
  return (
    <div className='about'>
        <AboutHeader />
        <div className="cards">
            <AboutCard1 />
            <AboutCard2 />
            <AboutCard3 />
        </div>
        <AboutStats />
    </div>
  )
}

export default About