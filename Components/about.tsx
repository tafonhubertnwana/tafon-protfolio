import React from 'react'
import Image from 'next/image'
import line from '@/public/assets/line.png'
import computer from '@/public/assets/Computer.jpeg'

const About = () => {
  return (
    <> 
    <div className='dark:bg-slate-800'>
      
        <div id='about' className="container mx-auto h-100 px-4  pt-[6%] ">
            <div className='flex flex-col items-center'>
              <h4 className="flex justify-center items-center text-[#31473a] ">About Me</h4>
              <div className="mt-1 w-24">
                <Image src={line} alt="line" className="w-full h-auto" />
              </div>
            </div>
            <div className='flex items-center py-16'>
              <div className=' m-auto md:grid grid-cols-3 gap-8 '>
                  <div className="col-span-2">
                    <p className="py-2 text-gray-700 dark:text-slate-400">
                    I am a highly skilled full-stack developer with 3 years of experience specializing in the MERN stack. My expertise lies in building robust, scalable, and user-friendly applications using JavaScript for both front-end and back-end development. I am proficient in utilizing frameworks like Next.js for React development, incorporating TypeScript for enhanced type safety, and leveraging styling libraries like Tailwind CSS and Bootstrap for efficient and visually appealing designs. 
                    </p>
                    <p className="py-2 text-gray-700 dark:text-slate-400">
                    I am passionate about staying current with the latest technologies and tackling complex challenges. My analytical mindset and understanding of business processes allow me to create solutions that align with client needs. I am eager to collaborate on innovative projects and contribute to pushing the boundaries of the digital world.
                    </p>
                  
                  </div>
                  <div className='w-full h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={computer} alt='computer' className='rounded-xl '/>
                  </div>
                

              </div>
            </div>
          </div>
      </div>  
    </>
  )
}

export default About