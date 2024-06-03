import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Hero2 from './Components/Hero2'
import Hero3 from './Components/Hero3'
import Hero4 from './Components/Hero4'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Hero2/>
        <Hero3/>
        <Hero4/>
        <Footer/>
      </div>
    </>
  )
}

export default App