import React from 'react'

import Section1 from './components/section1'
import Navbar from './components/navbar'
import Section2 from './components/Section2'
import Footer from './components/Footer'
import Contact from './components/contact'

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Section1 />
      </div>
      <div>
        <Section2 />
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