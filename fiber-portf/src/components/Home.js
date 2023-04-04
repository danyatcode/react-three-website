import React from 'react'
import AboutProject from './AboutProject'
import Intro from './Intro'
import ModelsSection from './canvas/ModelsSection'
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
