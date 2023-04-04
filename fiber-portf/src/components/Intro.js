import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import useWindowSize from './utils/useWindowSize'

const Intro = () => {

  const { isMobile } = useWindowSize()

  return (
    <section className="relative h-screen intro-section w-full m-auto mt-6">
      <Parallax
        translateY={isMobile? [-10, 10]: [-30, 30]}
        className='relative max-h-auto max-w-full inset-0 h-full w-full object-cover z-0'
        >
                  
      <img loading='lazy' src={process.env.PUBLIC_URL + '/images/Page_arts.webp'} className='intro-image absolute max-h-auto max-w-full inset-0 h-full w-full object-cover' alt='img'></img>
     <div className='intro-inner flex flex-col align-middle gap-x-5 mx-20 relative z-10'>
        <div className='rose'>
            <img src={process.env.PUBLIC_URL + "/images/Rose_logo.webp"} className='object-cover max-h-auto max-w-full' alt='rose'></img>
        </div>
        <div className='intro-inner-title flex flex-col ml-5'>
            <span>Portfolio page</span>
            <span>Works by Shnivalzer</span>
        </div>
        <div className='intro-inner-title flex flex-col ml-5 mt-10'>
            <span>2D\3D works for</span>
            <span>Forgiven Tenshi world</span>
        </div>
     </div>
     </Parallax>
     <div className=' absolute top-0 bottom-auto right-0 left-0 bloom h-12 bloom-top'></div>
    <div className=' absolute bottom-0 top-auto right-0 left-0 bloom h-12 bloom-bottom'></div>
    </section>
  )
}

export default Intro
