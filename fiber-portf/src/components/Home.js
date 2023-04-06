import React from 'react'
import AboutProject from './sections/AboutProject'
import Intro from './sections/Intro'
import ModelsSection from './sections/ModelsSection'
import { ParallaxProvider } from 'react-scroll-parallax'

const Home = () => {
  return (
    <>
      <ParallaxProvider>
        <Intro />
        <AboutProject />
        <ModelsSection />
      </ParallaxProvider>
    </>
  )
}

export default Home
