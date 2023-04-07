import React from 'react';
import AzumiSection from './heroesSections/AzumiSection';
import YuriSection from './heroesSections/YuriSection';

const AboutProject = () => {

    return (

      <section className='relative about-proj pb-10'>

        <div className='absolute top-0 bottom-auto right-0 left-0 bloom bloom-top bloom-about'></div>
        <div className='absolute bottom-0 top-auto right-0 left-0 bloom h-12 bloom-bottom'></div>

        <div className='container flex flex-col m-auto relative z-10'>

          <div className='flex justify-center'>
            <div className='glitch glitch-title font-bold uppercase relative'>
                <span aria-hidden="true" className='absolute top-0 left-0'>About Project</span>
                  About Project
                <span aria-hidden="true" className='absolute top-0 left-0'>About Project</span>
            </div>
          </div>
          

          <div className='about-description pt-14'>
            <p className='article fade-in'>Forgiven tenshi - name of the anime project that I started few years ago, its about post-apocalyptic world after 3rd world war started at 80s.
              Main character name: Azumi Miura - created in underground lab as universal soldier, she was abducted for experiments at the age of 16, after reincarnation her biological age stopped and you can say she got biological immortality.
            </p>
            <p className='article pb-10 fade-in fade-300'>She is one of the few successful universal soldiers, and in fact she is almost impossible to kill, due to instant regeneration, and the lack of need for food and water, but the price for these abilities was a complete loss of humanity,
              and a doubling of personality, where personalities do not know the existence of one one, and have a completely different character and logic.
            </p>
          </div>            
          <AzumiSection />
          <YuriSection />

        </div>
      </section>
    
  );
};

export default AboutProject;
