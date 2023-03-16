import React from 'react'
import Azumi from './canvas/Azumi'

const ModelsSection = () => {
  return (
    <div className='models-section relative'>

      <div className='absolute top-0 bottom-auto right-0 left-0 bloom bloom-top bloom-about'></div>
      <div className=' absolute bottom-0 top-auto right-0 left-0 bloom h-12 bloom-bottom'></div>

      <div className='container flex flex-col relative z-10 m-auto pb-5 pt-5'>
        <div className='models-section-title text-center'>3D Models</div>
        <div className='models-multielem flex'>
            <div className='models-multielem-lefts w-2/5'>
                <div className='article'>
                    One of the 3D models is Azumi in experimental armor, which increases already high combat capabilities, and is essentially an exoskeleton with hinged composite plates and power from a compact nuclear reactor
                </div>
            </div>
            <div className='models-multielem-right w-3/5 relative'>
                <div className=''></div>
                <Azumi />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModelsSection
