import React from 'react'

const AboutProj = () => {
  return (
    <section className='relative about-proj pb-10'>

         <div className='absolute top-0 bottom-auto right-0 left-0 bloom bloom-top bloom-about'></div>
         <div className='absolute bottom-0 top-auto right-0 left-0 bloom h-12 bloom-bottom'></div>

        <div className='container flex flex-col m-auto relative z-10'>

            <div className='about-title text-center'>About Project</div>
            <div className='about-description pt-14'>
                <p className='article'>Forgiven tenshi - name of the anime project that I started few years ago, its about post-apocalyptic world after 3rd world war started at 80s.
                    Main character name: Azumi Miura - created in underground lab as universal soldier, she was abducted for experiments at the age of 16, after reincarnation her biological age stopped and you can say she got biological immortality.
                </p>
                <p className='article pb-10'>She is one of the few successful universal soldiers, and in fact she is almost impossible to kill, due to instant regeneration, and the lack of need for food and water, but the price for these abilities was a complete loss of humanity, 
                and a doubling of personality, where personalities do not know the existence of one one, and have a completely different character and logic.
                </p>
            </div>

            <div className='flex align-top about-multielem justify-between azumi'>
                <div className='lside w-2/5'>
                    <p className='article pb-10'>
                        The events of the manga take place already in the present times, where all the laboratories have been destroyed, either because of the war, or because of experiments that got out of control, it is not known how many such complexes there were.
                    </p>
                    <p className='article'>
                        And now Azumi's assigned task is to protect the laboratory, but the truth is that everything will change...
                    </p>
                </div>
                <div className='rside relative'>
                    <div className='about-multielem-bloom z-0 absolute w-3/4 h-3/4'></div>
                    <img src={process.env.PUBLIC_URL + "/images/azumi_art.png"} className='azumi-art max-w-full h-auto object-cover mt-14 z-10 relative' alt='azumi'/>
                </div>
            </div>

            <div className='flex align-top about-multielem justify-between mt-44 yuri pb-10'>
                <div className='rside yuri-lside relative'>
                    <div className='about-multielem-bloom z-0 absolute w-3/4 h-3/4'></div>
                    <img src={process.env.PUBLIC_URL + '/images/yuri.png'} className='yuri-art max-w-full h-auto object-cover mt-14 z-10 relative' alt='Yuri' />
                </div>
                <div className='lside w-2/5 yuri-rside'>
                    <p className='article pb-10'>
                        Another character, a former special forces soldier, arrived at the laboratory in search of medicines for the settlement, which was running out of supplies.
                    </p>
                    <p className='article'>
                        Her name is Yuri, and after the defeat of her group by mutants, she was left alone and created a base in the laboratory
                    </p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default AboutProj
