import React from 'react'
import Intro from './Intro'
import About from './About'
import Work from './Work'
import Contact from './Contact'

const Main = () => {
  return (
    <main className="col-12 col-sm-9">
    <div className="pad-container">
        <Intro />
        <About />
        <Work />
        <Contact />
    </div>
    </main>
  )
}

export default Main