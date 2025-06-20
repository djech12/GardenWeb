import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Membership from './components/Membership'
import Calendar from './components/Calendar'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <div className='bg-[#F5F0E6]'>
      <Navbar />
      <Hero />
      <About />
      <Membership />
      <Calendar />
      <Gallery />
    </div>
  )
}

export default App
