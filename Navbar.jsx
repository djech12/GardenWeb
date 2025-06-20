import {React, useState, useEffect} from 'react'
import Logo from "../assets/zelenyKruh_sm.jpg"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const [activeSection, setActiveSection] = useState('hero')


    const handleNav = () => {
        setNav(!nav)
    }

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <div className='fixed w-full top-0 z-50 bg-[#3A9931]'>
      <div className='max-w-[1240px] flex flex-row justify-between mx-auto py-5 px-5 items-center'>

        <div className='md:hidden flex flex-row items-center gap-6'>
            <h1 className='font-rubik-distressed text-3xl'>ZELENÝ KRUH</h1>
            <img className='size-16 rounded-full' src={Logo} alt="/" />
        </div>

        <div onClick={handleNav} className='text-xl md:hidden hover:cursor-pointer'>
            {!nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40} />}
        </div>
        
        <ul className='hidden md:flex flex-row w-full mx-auto justify-around my-5'>
            <li onClick={() => scrollTo('hero')} className='text-lg translate-y-1 font-menu-li uppercase text-left cursor-pointer hover:text-[#f5f0e6] ease-in-out duration-300'>Úvod</li>
            <li onClick={() => scrollTo('about')} className='text-lg translate-y-1 font-menu-li uppercase text-left cursor-pointer hover:text-[#f5f0e6] ease-in-out duration-300'>O projektu</li>
            <li onClick={() => scrollTo('membership')} className='text-lg translate-y-1 font-menu-li uppercase text-left cursor-pointer hover:text-[#f5f0e6] ease-in-out duration-300'>Členství</li>
            <li className='text-lg translate-y-1 font-menu-li uppercase text-left cursor-pointer hover:text-[#f5f0e6] ease-in-out duration-300'>Kalendář</li>
            <li className='text-lg translate-y-1 font-menu-li uppercase text-left cursor-pointer hover:text-[#f5f0e6] ease-in-out duration-300'>Galerie</li>
            <li className='text-lg translate-y-1 font-menu-li uppercase text-left cursor-pointer hover:text-[#f5f0e6] ease-in-out duration-300'>Kontakt</li>
        </ul>

         <ul className={!nav ? 'md:hidden flex-col fixed top-24 right-0 bg-[#3a9931] w-full text-center border-t-4 border-[#F5F0E6] ease-in-out duration-300 z-10' : 'z-10 fixed right-[-100%] top-24 ease-in-out duration-300 border-t-4 border-[#A86B3A]'}>
            <li onClick={() => scrollTo('hero')} className='text-xl py-2 mt-4 font-menu-li uppercase text-left pl-4 cursor-pointer hover:text-[#f5f0e6] ease-in-out duration-300'>Úvod</li>
            <li onClick={() => scrollTo('about')} className='text-xl py-2 font-menu-li uppercase text-left pl-4 cursor-pointer hover:text-[#f5f0e6] ease-in-out duration-300'>O projektu</li>
            <li onClick={() => scrollTo('membership')} className='text-xl py-2 font-menu-li uppercase text-left pl-4 cursor-pointer hover:text-[#f5f0e6] ease-in-out duration-300'>Členství</li>
            <li className='text-xl py-2 font-menu-li uppercase text-left pl-4 cursor-pointer hover:text-[#f5f0e6] ease-in-out duration-300'>Kalendář</li>
            <li className='text-xl py-2 font-menu-li uppercase text-left pl-4 cursor-pointer hover:text-[#f5f0e6] ease-in-out duration-300'>Galerie</li>
            <li className='text-xl py-2 font-menu-li uppercase text-left pl-4 cursor-pointer hover:text-[#f5f0e6] ease-in-out duration-300'>Kontakt</li>
        </ul>
        

      </div>
    </div>
  )
}

export default Navbar
