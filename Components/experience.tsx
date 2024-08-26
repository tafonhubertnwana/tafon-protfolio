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
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2022</time>
                  <div className="text-lg font-black">Full Stack Developer</div>
                  <div className="text-sm text-gray-600">Codecademy, USA</div>
                  I worked remotely as a frontend developer for a company called PerfuseCC, which is located in Texas. My role was to develop the frontend of an e-learning platform.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">2022</time>
                  <div className="text-lg font-black">Frontend Developer (Remote)</div>
                  <div className="text-sm text-gray-600">PerfuseCC, Tx-USA</div>
                  I worked remotely as a frontend developer for a company called PerfuseCC, which is located in Texas. My role was to develop the frontend of an e-learning platform.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2024</time>
                  <div className="text-lg font-black">Software Developer (On-site)</div>
                  <div className="text-sm text-gray-600">Ova Consulting, Douala</div>
                  Worked as a software developer at Ova Consulting, contributing to the development of an e-commerce platform. Responsible for working on-site at the company.
                </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Experience
