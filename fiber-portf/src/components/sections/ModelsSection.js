import React from 'react';
import { Link } from 'react-router-dom';
import ModelsData from "../ModelsData";
import { Parallax } from 'react-scroll-parallax';
import useWindowSize from '../utils/useWindowSize';

const ModelsSection = () => {
  
  const { isMobile } = useWindowSize();

  return (
    <div className='models-section relative'>
      <div className='absolute top-0 bottom-auto right-0 left-0 bloom bloom-top bloom-about'></div>
      <div className=' absolute bottom-0 top-auto right-0 left-0 bloom h-12 bloom-bottom'></div>

      <div className='container flex flex-col relative z-10 m-auto pb-5 pt-5 items-center'>
          <div className='flex justify-center'>
            <div className='glitch glitch-title font-bold uppercase relative'>
                <span aria-hidden="true" className='absolute top-0 left-0'>3D Models</span>
                3D Models
                <span aria-hidden="true" className='absolute top-0 left-0'>3D Models</span>
            </div>
          </div>

        {
        ModelsData.map((model, i) => model.id % 2 !== 0?
        <div key={i} className="flex items-center justify-center flex-col">
          <Parallax
           translateY={isMobile? [0, 0]: [-30, 30]}
            style={{zIndex: "50"}}
          >
            <div className={`model-title ${model.name}-title`}><span>{model.name}</span><div className='model-title-bloom'></div></div>
          </Parallax>
          <div key={i} className='models-multielem flex py-10 justify-between'>
              <div className='models-multielem-lefts w-5/12 '>
                  <div className='article fade-in'>
                      {model.description}
                  </div>
              </div>
              <div className={`models-multielem-right w-3/6 relative models models-${model.name}`}>
                  <div className=''></div>
                  <Parallax
                    translateY={isMobile? [0, 0]: [5, -20]}
                    >
                  <Link to={"models/"+ model.id}>
                    <div className='hint'>{isMobile? "Tap ": "Click "}to see preview</div>
                    <img loading="lazy" className='models-preview' src={model.image} alt={model.name}/>
                  </Link>
                  </Parallax>
              </div>
            </div>
        </div>
        
        :
          <div key={i} className="flex items-center justify-center flex-col">
            <Parallax
              translateY={isMobile? [0, 0]: [-30, 30]}
              style={{zIndex: "50"}}
            >
            <div className={`model-title ${model.name}-title`}><span>{model.name}</span><div className='model-title-bloom'></div></div>
            </Parallax>
          <div key={i} className='models-multielem flex py-10 justify-between'>
              <div className={`models-multielem-right w-3/6 relative models models-${model.name} `}>
                  <div className=''></div>
                  <Parallax
                    translateY={isMobile? [0, 0]: [20, -20]}
                    >
                  <Link to={"models/"+ model.id}>
                    <img loading="lazy" className='models-preview' src={model.image} alt={model.name}/>
                    <div className='hint'>{isMobile? "Tap ": "Click "}to see preview</div>
                    </Link>
                  </Parallax>
              </div>
              <div className='models-multielem-lefts w-5/12'>
                  <div className='article fade-in'>
                    {model.description}
                  </div>
              </div>
          </div>
          </div>
        )
        }

      </div>
    </div>
  )
}

export default ModelsSection
