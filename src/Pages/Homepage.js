import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar/NavBar'
import LandingImage from '../Components/HomepageSections/LandingImage'
import WhoWeAre from '../Components/HomepageSections/WhoWeAre'

function Homepage() {

  return (
    <>
      <NavBar />

      <div className="sections">
        <LandingImage/>
        <WhoWeAre/>
      </div>
      
      <Footer/>
    </>
  )
}

export default Homepage