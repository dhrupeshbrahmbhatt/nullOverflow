import React from 'react'
import Navbar from '../component/Navbar.jsx'
import Hero from '../component/Hero.jsx'
import About from '../component/About.jsx'
import Services from '../component/Services.jsx'

function Home() {
  return (
    <div className='m-0 p-0'>
      <Navbar />
      <Hero />
      <Services />
      <About />
    </div>
  )
}

export default Home