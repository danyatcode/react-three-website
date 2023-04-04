import React, { useRef } from 'react'

const Header = () => {

  const burgerButton = useRef(null);
  const header = useRef(null);

  const handleClick = () => {
    header.current.classList.toggle("active")
    burgerButton.current.classList.toggle("active")
  }

  return (
    <header ref={header} className='absolute w-full left-0 right-0 z-20 pb-10 pt-2 m-auto px-5'>
      <nav className="flex align-middle gap-x-2 justify-end">
        <ul className='flex align-middle gap-28 mr-20 nav-ul'>
            <li className='nav-link relative'>
                <div className='absolute link-bloom inset-0'></div>
                <button className='about-link uppercase relative cursor-pointer'>About</button>
            </li>
            <li className='nav-link relative'>
                <div className='absolute link-bloom inset-0'></div>
                <button className='service-link uppercase relative cursor-pointer'>service</button>
            </li>
            <li className='nav-link relative'>
                <div className='absolute link-bloom inset-0'></div>
                <button className='contacts-link uppercase relative cursor-pointer'>contacts</button>
            </li>
            <button ref={burgerButton} className='header-menu' onClick={() => handleClick()}>
              <span></span>
            </button>
        </ul>
        
      </nav> 
    </header>
  )
}

export default Header
