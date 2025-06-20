import React from 'react'
import Garden2 from "../assets/garden2.jpg"
import { ReactTyped } from "react-typed"
import Ker from "../assets/keř.jpg"
import CircleType from 'circletype';
import { useEffect, useRef } from 'react'
import Logo from "../assets/zelenyKruh_sm.jpg"

const Hero = () => {
  const ref = useRef(null);

  useEffect(() => {
    new CircleType(ref.current).radius(600);
  }, []);


  return (
    <div id="hero" className='mt-[104px] scroll-mt-[188px]'>
        <div className='md:hidden flex flex-col justify-center relative text-center h-[calc(100vh-104px)] overflow-hidden bg-black'>
          <img className='absolute max-h-screen scale-[145%] opacity-30' src={Garden2} alt="" />
          <h4 className='text-[#F5F0E6] uppercase text-2xl mb-16'>První komunitní zahrada v Pardubicích</h4>
          <ReactTyped className='font-rubik-distressed text-[#3A9931] z-20 text-7xl mb-52' 
                        strings={["PĚSTUJ" ,"SDÍLEJ", "UŽÍVEJ"]} 
                        typeSpeed={80} backSpeed={120}
                        loop
            />

            <div class="absolute bottom-10 w-[100%]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                  class="size-12 text-[#3a9931] mx-auto animate-bounce">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
            </div>
        </div>

        <div className='hidden md:flex relative flex-col justify-around text-center h-[calc(100vh-108px)] overflow-hidden bg-black'>
          <img className='absolute max-h-screen scale-[172%] opacity-30' src={Ker} alt="" />
          <h1 ref={ref} className='font-rubik-distressed md:text-7xl text-[#F5F0E6] z-10 px-6 py-3 rounded-full inline-block tracking-normal'>ZELENÝ KRUH</h1>
          <img className='rounded-full translate-y-[-30%] size-46 z-10 mx-auto spin' src={Logo} alt="" />
          <h4 className='text-[#F5F0E6] uppercase text-2xl translate-y-[-400%]'>První komunitní zahrada v Pardubicích</h4>
          <div class="absolute bottom-10 w-[100%]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                  class="size-12 text-[#3a9931] mx-auto animate-bounce">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
          </div>
        </div>

        
    </div>
  )
}

export default Hero
