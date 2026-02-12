import React from 'react'

import Section1 from './components/Section1'
import Navbar from './components/Navbar'
import Section2 from './components/Section2'
import Footer from './components/Footer'
import Contact from './components/Contact'

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