import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar/NavBar'
import LandingImage from '../Components/LandingImage'

function Homepage() {

  return (
    <>
      <NavBar />

      <div className="sections">
        <LandingImage/>
      </div>
      
      <Footer/>
    </>
  )
}

export default Homepage