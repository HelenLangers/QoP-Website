import React from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import '../FAQs/FAQ.css'
import {FAQItems} from './FAQ-Items'

const FAQs = () => {
  return (
    <>
      <NavBar/>

      <section className='faq-page'>
        <h1 className='page-header'>Frequently Asked Questions</h1>
        <div className='faq-card-container'>
        {FAQItems.map((item) => {
          return (
            <div className='faq-card' key={item.id}>
              <h3 className='card-title'>{item.question}</h3>
              <p className='card-text'>{item.answer}</p>
            </div>
          )
        })}
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default FAQs