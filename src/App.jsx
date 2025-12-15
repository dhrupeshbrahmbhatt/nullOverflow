import React from 'react'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './pages/Services.jsx'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
