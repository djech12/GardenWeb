import React from 'react'
import Img1 from "../assets/about1.jpg"
import Img2 from "../assets/about2.jpg"

const About = () => {
  return (
    <div id='about' className='bg-[#f5f0e6] scroll-mt-[188px]'>
      <div>
        <h2 className='font-rubik-distressed text-[#3A9931] text-5xl lg:text-6xl xl:text-8xl uppercase text-center my-16 xl:my-20'>O projektu</h2>
        <div className='lg:flex lg:flex-row lg:mx-auto lg:gap-16 lg:w-[94%] lg:items-center'>
            <p className='font-inter mx-6 lg:mx-0 text-lg lg:text-[20px] xl:text-3xl'>
                <span className='font-rubik-distressed text-[#3a9931] text-3xl lg:text-4xl uppercase'>Zelený kruh</span> je komunitní zahrada, která vznikla z potřeby místních obyvatel vytvořit místo pro
                setkávání, pěstování a odpočinek uprostřed městského ruchu. Na jaře roku 2022 jsme společně
                proměnili zanedbaný pozemek v živý prostor plný zeleně, záhonů a sdílených zážitků. 
                Zahrada je otevřená všem – ať už chceš pěstovat vlastní zeleninu, trávit čas venku s dětmi,
                nebo se zapojit do komunitních akcí. Díky pravidelné péči našich členů se místo proměnilo
                ve funkční a přátelské prostředí,
                kde je vítán každý, kdo má chuť být součástí něčeho smysluplného.
            </p>
            <img className='w-[94%] lg:w-full mx-auto my-6 rounded-md lg:size-[500px] xl:size-[750px]' src={Img1} alt="" />
        </div>
        <div className='lg:flex lg:flex-row-reverse lg:mx-auto lg:gap-16 lg:w-[94%] lg:items-center'>
            <p className='font-inter mx-6 lg:mx-0 text-lg lg:text-[20px] xl:text-3xl'>Na ploše přes 800 m² najdeš nejen klasické záhonky, ale i bylinkovou spirálu, kompost, prostor pro děti,
               altán pro společná setkání nebo letní workshopy. Společně pořádáme sezónní akce, jako je jarní výsadba,
               letní sklizeň nebo podzimní sousedský piknik. Důraz klademe na udržitelnost, sdílení zkušeností a přirozené 
               mezilidské vztahy.Zelený kruh není jen o zahradničení – je to živý organismus, který roste spolu s lidmi,
               kteří se na něm podílejí.
            </p>
            <img className='w-[94%] mx-auto my-6 rounded-md lg:size-[500px] xl:size-[750px]' src={Img2} alt="" />
        </div>

        <h5 className='font-rubik-distressed text-[#3a9931] translate-y-8 mx-2 py-10 uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:py-16 xl:py-20 text-center'>
            "Živá zahrada - živé vztahy"
        </h5>
      </div>
    </div>
  )
}

export default About
