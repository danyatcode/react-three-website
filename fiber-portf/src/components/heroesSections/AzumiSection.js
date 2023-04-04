import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import useWindowSize from '../utils/useWindowSize'

const AzumiSection = () => {

  const { isMobile } = useWindowSize()

  return (
    <div className='flex align-top about-multielem justify-between azumi'>
        <div className='lside w-2/5'>
            <p className='article pb-10 fade-in'>
                The events of the manga take place already in the present times, where all the laboratories have been destroyed, either because of the war, or because of experiments that got out of control, it is not known how many such complexes there were.
            </p>
            <p className='article fade-in fade-300'>
                And now Azumi's assigned task is to protect the laboratory, but the truth is that everything will change...
            </p>
        </div>

        <div className='rside relative'>
            <div className='about-multielem-bloom z-0 absolute w-3/4 h-3/4'></div>
            <Parallax
            style={{zIndex: "10"}}
            translateY={isMobile? [-15, 5]: [-30, 30]}
            >
            <img loading="lazy" src={process.env.PUBLIC_URL + "/images/azumi_art.webp"} className='azumi-art z-10 relative object-cover' alt='azumi'/>
            </Parallax>
            <img className='absolute horns z-0 inset-0 h-full object-cover aspect-square fade-600 fade-in' src={process.env.PUBLIC_URL + '/images/thorns2.webp'} alt='#'/>
        </div>
                
    </div>
  )
}

export default AzumiSection
