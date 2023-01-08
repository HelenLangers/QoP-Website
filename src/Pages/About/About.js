import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import '../About/About.css'
import AboutImage from '../../Assets/Images/about-image.jpg'

const About = () => {
  return (
    <>
      <NavBar/>
      <div className='about-page'>
        <h2>About</h2>

        <div className='about-block'>
          <div className='image-container'>
            <img src={AboutImage} alt="Queens of Pain CC" className='image'/>
          </div>

          <div className='about-explainer'>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna vehicula, vehicula arcu in, accumsan odio. Mauris ac diam euismod, suscipit leo id, vehicula nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tempus, orci tincidunt tempus rhoncus, risus risus congue lorem, et rutrum leo urna ut nulla. Praesent a est vel ante pharetra consectetur. Aliquam vel placerat dolor, nec tincidunt est. In ornare urna vitae velit finibus placerat. Etiam lectus ante, molestie in urna ac, consectetur efficitur lectus. Proin aliquet blandit libero vel pellentesque. Pellentesque dapibus mi ipsum, ac placerat felis pretium eget. Cras id purus id tellus vestibulum mollis. </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About