import React from 'react'
import Navbar from '../component/Navbar.jsx'
import Hero from '../component/Hero.jsx'
import About from '../component/About.jsx'
import Services from '../component/Services.jsx'
import Projects from '../component/Projects.jsx'
import TeamTech from '../component/TeamTech.jsx'
import Achievements from '../component/Achievements.jsx'

function Home() {
  return (
    <div className='m-0 p-0'>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <TeamTech />
      <Achievements />
      <About />
    </div>
  )
}

export default Home