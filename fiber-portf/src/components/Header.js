import React, { useRef } from 'react'

const Header = () => {

  const burgerButton = useRef(null);
  const header = useRef(null);

  const handleClick = () => {
    header.current.classList.toggle("active")
    burgerButton.current.classList.toggle("active")
  }

  const handleNavigate = (elClass) => {
    const element = document.getElementsByClassName(elClass);
    console.log(element);
    const elementPos = element[0].getBoundingClientRect().top;
    console.log(elementPos)
    window.scrollTo({
      top: elementPos,
      behavior: "smooth"
    })
  }
  return (
    <header ref={header} className='absolute w-full left-0 right-0 z-20 pb-10 pt-2 m-auto px-5'>
      <nav className="flex align-middle gap-x-2 justify-end">
        <ul className='flex align-middle gap-28 mr-20 nav-ul'>
            <li className='nav-link relative'>
                <div className='absolute link-bloom inset-0'></div>
                <button className='about-link uppercase relative cursor-pointer'
                onClick={() => handleNavigate("about-proj")}
                >
                  <div className='button-anime absolute'></div>
                  <div className='button-ellips ellipse-one absolute'></div>
                  <div className='button-ellips ellipse-two absolute'></div>
                  <span>About</span> 
                </button>
            </li>
            <li className='nav-link relative'>
                <div className='absolute link-bloom inset-0'></div>
                <button className='service-link uppercase relative cursor-pointer'>
                  <div className='button-anime absolute'></div>
                  <div className='button-ellips ellipse-one absolute'></div>
                  <div className='button-ellips ellipse-two absolute'></div>
                  <span>service</span>
                  </button>
            </li>
            <li className='nav-link relative'>
                <div className='absolute link-bloom inset-0'></div>
                <button className='contacts-link uppercase relative cursor-pointer'>
                <div className='button-anime absolute'></div>
                  <div className='button-ellips ellipse-one absolute'></div>
                  <div className='button-ellips ellipse-two absolute'></div>
                  <span>contacts</span>
                </button>
            </li>
            <button ref={burgerButton} className='header-menu' onClick={() => handleClick()} title='Menu'>
              <span className="block absolute bg-white"></span>
            </button>
        </ul>
        
      </nav> 
    </header>
  )
}

export default Header
