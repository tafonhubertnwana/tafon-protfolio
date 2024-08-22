import React from 'react';
import Image from 'next/image';
import html from '@/public/assets/html.png'
import css from '@/public/assets/css.png'
import javascript from '@/public/assets/javascript.png'
import react from '@/public/assets/react.png'
import redux from '@/public/assets/redux.png'
import nextjs from '@/public/assets/nextjs.png'
import typescript from '@/public/assets/typescript (2).png'
import tailwind from '@/public/assets/tailwind.png'
import bootstrap from '@/public/assets/bootstrap.png'
import nodejs from '@/public/assets/nodejs.png'
import express from '@/public/assets/express.png'
import github from '@/public/assets/github.png'
import aws from '@/public/assets/aws.png'
import line from '@/public/assets/line.png'


const technologies = [
  { name: 'HTML', icon: html },
  { name: 'CSS3', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'React.js', icon: react },
  { name: 'React.js', icon: redux },
  { name: 'React.js', icon: nextjs },
  { name: 'React.js', icon: typescript },
  { name: 'React.js', icon: tailwind },
  { name: 'React.js', icon: bootstrap },
  { name: 'React.js', icon: nodejs },
  { name: 'React.js', icon: express },
  { name: 'React.js', icon: github },
  { name: 'React.js', icon: aws },
];

const TechStack = () => {
  return (
    <>
      <div  className=' dark:bg-slate-800'>
        <div id='techStack' className='container mx-auto h-100 px-4 pt-[6%]'>
          <div className='w-[100%] md:w-[50%] mx-auto'>
          <div className="flex flex-col items-center">
            <h4 className="flex justify-center items-center text-[#31473a]">My Tech Stack</h4>
            <div className="mt-1 w-24 ">
              <Image src={line} alt="line" className="w-full h-auto" />
            </div>
          </div>
            <div className='text-center mt-5 dark:text-slate-400'>
              <p>Bringing your digital ideas to life with expertise in web development, creating efficient, dynamic, and user-friendly solutions</p>
            </div>
          </div>
          <div>
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-12 ">
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                {technologies.map((tech) => (
                  <div className="flex flex-col py-4 items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:text-slate-300">
                    <div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center'>
                      <Image src={tech.icon} alt={tech.name} className='max-full max-h-full' />
                    </div>
                    <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-center">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default TechStack
