import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Tafon from '../public/assets/tafon.png'

const Main = () => {
  return (
    <>
    <div className='dark:bg-slate-800'>

       <div className="container mx-auto px-4 py-10 pt-[10%] md:pt-[2%] mt-10 ">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl  dark:text-white">I'm,</h5>
            <h1 className="text-[#31473a] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Tafon Hubert</h1>
            <p className="my-6 text-gray-700 dark:text-slate-400">A professional Full Stack Developer</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link href="/Tafon_Hubert.pdf" target='_blank' download className="shadow-lg font-bold shadow-gray-300 p-4 sm:p-6 hover:scale-105 bg-[#31473a] text-white text-base rounded-lg transition-transform">Download CV</Link>
              <Link href="/#contact" className=" font-bold shadow-lg shadow-gray-300 p-4 sm:p-6 hover:scale-105 bg-[#a7b8ae] text-black text-base rounded-lg transition-transform">Contact Me</Link>
            </div>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src={Tafon} alt="Tafon Hubert" className="w-full h-auto object-cover mx-auto" />
          </div>
        </div>
        
      </div>
    </div>

    </>
  )
}

export default Main