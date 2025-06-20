import React from 'react'
import Bush from "../assets/keřV.mp4"
import { clenstvi } from '../data'
import Kerik from "../assets/kerik.png"


const Membership = () => {
  return (
    <div id='membership' className='w-full bg-[#A86B3A] py-6'>
      <section>
        <h3 className='font-rubik-distressed text-[#F5F0E6] text-7xl xl:text-8xl uppercase text-center my-20'>Členství</h3>

        <div className='flex flex-row w-[94%] mx-auto justify-around gap-8 flex-wrap'>
          {clenstvi.map( (value) => {
            const {nazev, popis, cena, vyhody} = value
            return (
              <div className="group flex flex-col justify-between bg-[#F5F0E6] relative w-[360px] mb-16 text-center rounded-2xl overflow-hidden hover:scale-[1.05] ease-in-out duration-500">
                <div>
                  <h5 className='font-rubik-distressed text-[#3a9931] uppercase text-5xl py-8'>{nazev}</h5>
                  <p className='px-16 font-inter'>{popis}</p>
                </div>

                <ul className='my-8 mx-auto font-inter justify-self-center text-left'>
                  {vyhody.map((item, index) => (
                    <li key={index} className="w-full text-lg font-bold">
                      <span>{item.emoji}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>

                <p className='text-center w-full text-3xl font-bold text-[#3a9931]'>{cena}</p>
                <br />
                <button className='mx-auto w-[200px] mb-6 bg-[#3a9931] text-[#f5f0e6] border-2 border-transparent py-3 font-bold rounded-xl ease-in-out duration-300 hover:bg-transparent hover:text-[#3a9931] hover:border-[#3a9931]'>CHCI SE PŘIDAT</button>

                <img className='absolute top-[-240px] left-[-270px] h-full rotate-45 group-hover:top-[-260px] group-hover:left-[-290px] duration-500' src={Kerik} alt="" />
                <img className='absolute bottom-[-240px] right-[-270px] rotate-45 h-full scale-x-[-1] group-hover:bottom-[-260px] group-hover:right-[-290px] duration-500' src={Kerik} alt="" />
              </div>
            )
          }) 
          }
        </div>
      </section>
    </div>
  )
}

export default Membership
