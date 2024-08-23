import React from 'react'
import Image from 'next/image'
import quiz from '@/public/assets/e-quiz.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import { FaLongArrowAltLeft } from "react-icons/fa";


const Quiz = () => {
  return (
    <div>
      <div>
      <div>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
          <Image src={quiz} alt='quiz' className='absolute z-1' layout='fill' objectFit='cover' />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
            <h2 className='py-2'>e-Quiz Game</h2>
            <h5>HTML / CSS / JavaScript  </h5>
          </div>

        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p className='py-2'>Project</p>
            <h4>Overview</h4>
            <p className='py-4'>
            Get ready to put your brain to the test with this interactive quiz game! Whether youre a trivia enthusiast or just looking for a fun way to learn, this project offers an engaging experience.
            </p>
            <button className='px-8 py-2 mt-4 mr-8 bg-[#31473a] font-bold text-white'><Link href='https://e-quiz-game.netlify.app/'>Demo</Link> </button>
            <button className='px-8 py-2 mt-4 bg-[#a7b8ae] font-bold'><Link href='https://github.com/tafonhubertnwana/quiz-game'>Code</Link></button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className="p-2">
              <p className="text-center font-bold pb-2">
                Technologies
              </p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex item-center">
                  <RiRadioButtonFill className='pr-1' />HTML
                </p>

                <p className="text-gray-600 py-2 flex item-center">
                  <RiRadioButtonFill className='pr-1' />CSS
                </p>
                <p className="text-gray-600 py-2 flex item-center">
                  <RiRadioButtonFill className='pr-1' />JavaSCript
                </p>
                
                
              </div>
            </div>
          </div>
          <div>
            <Link href='/#project'>
              <p className='underline  flex'> <FaLongArrowAltLeft className='pr-1 self-center' />
Back</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Quiz