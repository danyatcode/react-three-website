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
        <div className='models-section-title text-center'>3D Models</div>

        {
        ModelsData.map((model, i) => model.id % 2 !== 0?
        <div className="flex items-center justify-center flex-col">
          <Parallax
           translateY={isMobile? [-10, 10]: [-30, 30]}
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
                    translateY={isMobile? [-7, 7]: [-20, 20]}
                    >
                  <Link to={"/react-three-website/models/"+ model.id}><img loading="lazy" className='models-preview' src={model.image} alt={model.name}/></Link>
                  </Parallax>
              </div>
            </div>
        </div>
        
        :
          <div className="flex items-center justify-center flex-col">
            <Parallax
              translateY={isMobile? [-10, 10]: [-30, 30]}
              style={{zIndex: "50"}}
            >
            <div className={`model-title ${model.name}-title`}><span>{model.name}</span><div className='model-title-bloom'></div></div>
            </Parallax>
          <div key={i} className='models-multielem flex py-10 justify-between'>
              <div className={`models-multielem-right w-3/6 relative models models-${model.name} `}>
                  <div className=''></div>
                  <Parallax
                    translateY={isMobile? [-7, 7]: [-20, 20]}
                    >
                  <Link to={"/react-three-website/models/"+ model.id}><img loading="lazy" className='models-preview' src={model.image} alt={model.name}/></Link>
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
