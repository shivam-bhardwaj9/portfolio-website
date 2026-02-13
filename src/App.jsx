import React from 'react'

import Section1 from './components/Section1'
import Navbar from './components/Navbar'
import Section2 from './components/Section2'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects '

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Section1 />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Section2 />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div >


  )
}

export default App