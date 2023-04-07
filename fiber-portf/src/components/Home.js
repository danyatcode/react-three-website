import React, { Suspense, lazy } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

const AboutProject = lazy(() => import('./sections/AboutProject'));
const Intro = lazy(() => import('./sections/Intro'));
const ModelsSection = lazy(() => import('./sections/ModelsSection'));


const Home = () => {
  return (
    <>
      <ParallaxProvider>
        <Suspense fallback={"Loading..."}>
          <Intro />
        </Suspense>
        <Suspense fallback={"Loading About Info..."}>
          <AboutProject />
        </Suspense>
        <Suspense fallback={"Loading 3D Models..."}>
          <ModelsSection />
        </Suspense>
        
      </ParallaxProvider>
    </>
  )
}

export default Home
