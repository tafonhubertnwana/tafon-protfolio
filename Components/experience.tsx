import React from 'react'
import line from '@/public/assets/line.png'
import Image from 'next/image'
import { FaLaptopCode, FaCode, FaBuilding } from 'react-icons/fa' // Importing icons from FontAwesome


const Experience = () => {
  return (
    <>
    <div id='experience'>
      <div className=" dark:bg-slate-800">
        <div className='container mx-auto h-100 px-4 pt-[6%] '>

          <div className="flex flex-col items-center mb-8">
            <h4 className="text-[#31473a] text-lg sm:text-xl md:text-2xl lg:text-3xl">Experience</h4>
            <div className="mt-1 w-24">
              <Image src={line} alt="line" className="w-full h-auto" />
            </div>
          </div>

          <div >
            <div className=" ">
            
              
              <div className="flex flex-col">
                {/* Experience Item 1 */}
                <div className="grid md:grid-cols-5 gap-8 pb-3">
                   <div className="relative col-span-3 md:col-span-2 lg:col-span-2 flex">
                    <div className="w-10 h-10 flex items-center justify-center p-50 rounded-full bg-gray-300 mt-3">
                      <FaLaptopCode className="text-gray-700 text-[25px]" />
                    </div>
                    <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-[80%] h-1 bg-gray-400"></div>
                    </div>
                  <div className=" col-span-3 md:col-span-3 lg:p-4">
                    <h2 className="text-xl font-bold mb-1 dark:text-white">Full Stack Developer</h2>
                    <p className="text-gray-600 dark:text-white">Codecademy, USA</p>
                    <p className="text-gray-600 dark:text-slate-400">2022</p>
                    <p className='dark:text-slate-400'>I worked remotely as a frontend developer for a company called PerfuseCC, which is located in Texas. My role was to develop the frontend of an e-learning platform.</p>
                  </div>
                </div>

                {/* Experience Item 2 */}
                <div className="relative grid  md:grid-cols-5 gap-8 py-6">
                  <div className="relative col-span-3 md:col-span-2 lg:col-span-2 flex">
                    <div className="w-10 h-10 flex items-center justify-center p-50 rounded-full bg-gray-300 mt-3">
                      <FaCode className="text-gray-700 text-[25px]" />
                    </div>
                    <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-[80%] h-1 bg-gray-400"></div>
                    </div>
                  <div className=" col-span-3 md:col-span-3 lg:p-4">
                    <h2 className="text-xl font-bold mb-1 dark:text-white">Frontend Developer (Remote)</h2>
                    <p className="text-gray-600 dark:text-white">ProfuseCC, Texas</p>
                    <p className="text-gray-600 dark:text-slate-400">2022</p>
                    <p className='dark:text-slate-400'>I worked remotely as a frontend developer for a company called PerfuseCC, which is located in Texas. My role was to develop the frontend of an e-learning platform.</p>
                  </div>
                </div>

                {/* Experience Item 3 */}
                <div className="relative grid md:grid-cols-5 gap-8 py-6">
                  <div className="relative col-span-3 md:col-span-2 lg:col-span-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 mt-3">
                      <FaBuilding className="text-gray-700 text-[25px]" />
                    </div>
                    <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-[80%] h-1 bg-gray-400"></div>
                  </div>
                  <div className="col-span-3 md:col-span-3 lg:p-4">
                    <h2 className="text-xl font-bold mb-1 dark:text-white">Software Developer (On-site)</h2>
                    <p className="text-gray-600 dark:text-white">OVA Consulting, Douala</p>
                    <p className="text-gray-600 dark:text-slate-400">2024</p>
                    <p className="dark:text-slate-400">Worked as a software developer at Ova Consulting, contributing to the development of an e-commerce platform. Responsible for working on-site at the company.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Experience
