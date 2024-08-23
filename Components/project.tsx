import React from 'react'
import Image from 'next/image'
import best from '@/public/assets/e-best.png'
import mobile from '@/public/assets/ht-mobile.png'
import quiz from '@/public/assets/e-quiz.png'
import portfolio from '@/public/assets/portfolio.png'
import Link from 'next/link'
import line from '@/public/assets/line.png'
import ProjectItem from './projectItems'




const Project = () => {

  return (
    <>   
    <div className='dark:bg-slate-800'>

      <div id='project' className="container mx-auto h-100 px-4 pt-[6%]">
        <div className=''>
          <div className="flex flex-col items-center">
            <h4 className="flex justify-center items-center text-[#31473a] text-lg sm:text-xl md:text-2xl lg:text-3xl">Project</h4>
            <div className="mt-1 w-24">
                <Image src={line} alt="line" className="w-full h-auto" />
            </div>

            <h4 className=' dark:text-white py-4 text-center'>What I've Built</h4>
          </div>
            <div className="grid md:grid-cols-2  gap-8">
              <ProjectItem
                title='Portfolio'
                backgroundImg={portfolio}
                projectUrl='/portfolio'
                type='React'
              />
              <ProjectItem
                title='HT Mobile Commerce'
                backgroundImg={mobile}
                projectUrl='/mobile'
                type='react'
              />
              <ProjectItem
                title='E-Quiz Game'
                backgroundImg={quiz}
                projectUrl='/quiz'
                type='Vanilla JavaScript'
              />
              <ProjectItem
                title='e-best commerce'
                backgroundImg={best}
                projectUrl='/best'
                type='Vanilla JavaScript'
              />
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Project