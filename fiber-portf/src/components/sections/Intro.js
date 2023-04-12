import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import useWindowSize from '../utils/useWindowSize'
import GlitchedWriter, {wait} from 'glitched-writer'

function animate(){
  const Writer = new GlitchedWriter('#glitch_this', { letterize: true });
    
    Writer.options.extend({
      html: true,
      interval: [20, 24],
      fps: 15
    })
    return (async  ()=> {
      await Writer.write("Portfolio Page");
      
      await wait(1500);
      await Writer.write("Works by Shnivalzer");

      await wait(1500);

      await Writer.write("2D and 3D works for");

      await wait(1500);
      await Writer.write("Forgiven Tenshi world");
    })();
    
  }
  

const Intro = () => {
  animate();
  const { isMobile } = useWindowSize()


  return (
    <section className="relative h-screen intro-section w-full m-auto mt-6">
      <Parallax
        translateY={[-30, 30]}
        className='relative max-h-auto max-w-full inset-0 h-full w-full object-cover z-0'
        >           
      <img src={process.env.PUBLIC_URL + `/images/${isMobile? "Page_arts_mobile.webp":"Page_arts.webp"}`} className='intro-image absolute max-h-auto max-w-full inset-0 h-full w-full object-cover' alt='img'></img>
      <div className='intro-inner flex flex-col align-middle gap-x-5 mx-20 relative z-10'>
        <div className='rose'>
            <img src={process.env.PUBLIC_URL + "/images/Rose_logo.webp"} className='object-cover max-h-auto max-w-full' alt='rose'></img>
        </div>
        <div className='intro-inner-title flex flex-col ml-5 relative mt-20'>
          <div className='absolute overlay inset-0'></div>
          <div className="text glitch_this" id="glitch_this">Welcome </div>
        </div>
     </div>
     </Parallax>
     <div className=' absolute top-0 bottom-auto right-0 left-0 bloom h-12 bloom-top'></div>
    <div className=' absolute bottom-0 top-auto right-0 left-0 bloom h-12 bloom-bottom'></div>
    </section>
  )
}

export default Intro
