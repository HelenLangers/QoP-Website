import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar/NavBar'
import LandingImage from '../Components/HomepageSections/LandingImage'
import WhoWeAre from '../Components/HomepageSections/WhoWeAre'
import WhatWeDo from '../Components/HomepageSections/WhatWeDo'

function Homepage() {

  return (
    <div className='app'>
      <NavBar />

      <div className="sections">
        <LandingImage/>
        <WhoWeAre/>
        <WhatWeDo/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Homepage