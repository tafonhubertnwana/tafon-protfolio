import React from 'react'
import Image from 'next/image'
import commerce from '@/public/assets/e-best.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import { FaLongArrowAltLeft } from "react-icons/fa";

const Commerce = () => {
  return (
    <div>
      
      <div className="w-full ">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={commerce} alt='commerce'  />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 ">
            <h2 className='py-2 dark:text-white'>E-Best Commerce</h2>
            <h5 className='dark:text-white'>HTML / CSS / javascript  </h5>
          </div>

        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p className='py-2 dark:text-white'>Project</p>
            <h4 className='dark:text-white'>Overview</h4>
            <p className='py-4 dark:text-slate-400'>
            Welcome to your ultimate fashion haven! This e-commerce website is your go-to destination for stylish and affordable dresses, shoes, and accessories for both men and women.
            </p>
            <button className='px-8 py-2 mt-4 mr-8 bg-[#31473a] font-bold  text-white'><Link href='https://e-best-shopping.netlify.app/'>Demo</Link> </button>
            <button className='px-8 py-2 mt-4 bg-[#a7b8ae] font-bold'><Link href='https://github.com/tafonhubertnwana/E-com'>Code</Link></button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className="p-2">
              <p className="text-center font-bold pb-2 dark:text-white">
                Technologies
              </p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex item-center dark:text-slate-400">
                  <RiRadioButtonFill className='pr-1' />HTML
                </p>

                <p className="text-gray-600 py-2 flex item-center dark:text-slate-400">
                  <RiRadioButtonFill className='pr-1' />CSS
                </p>
                <p className="text-gray-600 py-2 flex item-center dark:text-slate-400">
                  <RiRadioButtonFill className='pr-1' />JavaSCript
                </p>

                
              </div>
            </div>
          </div>
          <div>
            <Link href='/#project'>
              <p className='underline  flex dark:text-white '> <FaLongArrowAltLeft className='pr-1 self-center' />
              Back</p>
            </Link>
          </div>
        </div>
      </div>
   
    </div>
  )
}

export default Commerce