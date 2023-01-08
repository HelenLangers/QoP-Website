import React from 'react'
import './Homepage.css'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar/NavBar'

function Homepage() {

  return (
    <div className='app'>
      <NavBar />

      <section className='landing-image'>
        {/* <img src={landingBackground} alt="" className='landing-image'/> */}
        <h1 className='homepage-header'>Queens of Pain CC</h1>
      </section>

      <Footer/>
    </div>
  )
}

export default Homepage