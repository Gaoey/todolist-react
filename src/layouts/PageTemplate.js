import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

export default function PageTemplate({ children }) {
  return (
    <div
      className="container">
      <Header />
      <div className='page-container'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
