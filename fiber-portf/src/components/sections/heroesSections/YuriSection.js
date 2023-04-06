import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import useWindowSize from '../../utils/useWindowSize'

const YuriSection = () => {

    const { isMobile } = useWindowSize()

  return (
    <div className='flex align-top about-multielem justify-between mt-44 yuri pb-10'>
        <div className='rside yuri-lside relative'>
            <div className='about-multielem-bloom z-0 absolute w-3/4 h-3/4'></div>
            
            <Parallax
                translateY={isMobile? [-20, 5]: [-20, 10]}
                className='w-full h-full'
            >
                <div className='relative horns-parallax h-full w-full'>
                    {!isMobile && <img className='absolute horns z-0 inset-0 h-full object-cover aspect-square fade-600 fade-in' src={process.env.PUBLIC_URL + '/images/thorns2.webp'} alt='#'/>}
                    <img src={process.env.PUBLIC_URL + '/images/yuri.webp'} loading="lazy" className='yuri-art max-w-full h-auto object-cover z-10 relative' alt='Yuri' />
                </div>
            </Parallax>
        </div>
        <div className='lside w-2/5 yuri-rside'>
            <p className='article pb-10 fade-in'>
                Another character, a former special forces soldier, arrived at the laboratory in search of medicines for the settlement, which was running out of supplies.
            </p>
            <p className='article fade-in fade-300'>
                Her name is Yuri, and after the defeat of her group by mutants, she was left alone and created a base in the laboratory
            </p>
        </div>
    </div>
  )
}

export default YuriSection
