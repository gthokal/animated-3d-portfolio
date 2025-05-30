import React from 'react'
import Hero from './sections/Hero'

const App = () => {
  return (
    <>
      <video
        className="back-vid"
        loop
        autoPlay
        muted
        playsInline
      >
        <source src="/images/galaxy.mp4" type="video/mp4" />
      </video>
      <Hero />
    </>
  )
}

export default App