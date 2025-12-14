import React from 'react'
import Home from './Pages/Home.jsx'
import Projects from './Pages/Projects.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
