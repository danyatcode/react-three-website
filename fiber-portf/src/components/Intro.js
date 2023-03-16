import React from 'react'

const Intro = () => {
  return (
    <section className="relative h-screen intro-section w-full m-auto mt-6">
     <div className=' absolute top-0 bottom-auto right-0 left-0 bloom h-12 bloom-top'></div>
      <img src={process.env.PUBLIC_URL + '/images/Page_arts.png'} className='intro-image absolute max-h-auto max-w-full inset-0 h-full w-full object-cover' alt='img'></img>
     <div className=' absolute bottom-0 top-auto right-0 left-0 bloom h-12 bloom-bottom'></div>
     <div className='intro-inner flex flex-col align-middle gap-x-5 mx-20 relative z-10'>
        <div className='rose'>
            <img src={process.env.PUBLIC_URL + "/images/Rose_logo.png"} className='object-cover max-h-auto max-w-full' alt='rose'></img>
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
    </section>
  )
}

export default Intro
