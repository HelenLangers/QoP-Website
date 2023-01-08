import React from 'react'
import '../Homepage/Homepage.css'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'

function Homepage() {

  return (
    <>
      <NavBar />

      <section className='landing-image'>
        <h1 className='homepage-header'>Queens of Pain CC</h1>
      </section>

      <Footer/>
    </>
  )
}

export default Homepage