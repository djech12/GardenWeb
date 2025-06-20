import React from 'react'
import { galerie } from "../data"

const Gallery = () => {
  return (
    <div className='bg-[#A86B3A] py-6'>
      <h3 className='font-rubik-distressed text-[#F5F0E6] text-7xl xl:text-8xl uppercase text-center my-20'>Galerie</h3>

      <div className='grid grid-cols-3 grid-rows-3 w-[88%] mx-auto gap-10'>
        {galerie.map( (value) => {
            const {image} = value
            return(
                <img src={image} className='w-full border-8 border-[#f5f0e6]'/>
            )
        })}
      </div>
    </div>
  )
}

export default Gallery
