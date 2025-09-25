import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default function Layout({ children }) {
  return (
    <div className='rr-app-shell'>
      <Header />
      <main className='rr-main rr-container'>{children}</main>
      <Footer />
    </div>
  )
}
