// components/Contact.js
'use client'
import React, { useState } from 'react';
import { GrMail } from 'react-icons/gr';
import { FaPhoneVolume, FaLocationDot } from 'react-icons/fa6';
import Link from 'next/link';
import line from '@/public/assets/line.png';
import Image from 'next/image';
import contact from '@/public/assets/contact.jpeg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { sendEmail } from './sendEmail';

const Contact = () => {

  const [name , setName] = useState("")
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState("")
  
  

  return (
    <>
    <div className='dark:bg-slate-800'>
   
      <div id='contact' className="container mx-auto h-100 px-4 pt-[6%]">
        <div className="flex flex-col items-center">
          <h4 className="flex justify-center items-center text-[#31473a] text-lg sm:text-xl md:text-2xl lg:text-3xl">Contact </h4>
          <div className="mt-1 w-24">
            <Image src={line} alt="line" className="w-full h-auto" />
          </div>
        </div>

        <div className="">
          <h5 className='py-4 dark:text-white'>Get in Touch</h5>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl dark:bg-slate-500  p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <Image src={contact} alt='contact' className='rounded-xl hover:scale-105 ease-in duration-300 w-full'/>
                </div>
                <div>
                  <h4 className='py-2 text-[#31473a] dark:text-white'>Tafon Hubert</h4>
                  <p className='font-bold dark:text-white'>Full Stack Developer</p>
                  <p className='py-4 dark:text-slate-400'>I am available for freelance or full-time positions. Contact me and let's talk.</p>
                </div>
                <div>
                  <h4 className='uppercase pt-8 text-[#31473a]'>Connect With Me</h4>
                  <ul className='flex justify-between items-center py-4'>
                    <Link href='https://www.linkedin.com/in/tafon-n-hubert/' target='_blank'>
                      <li className='hover:scale-110 ease-in duration-300 rounded-full cursor-pointer dark:bg-slate-200  shadow-gray-300 p-6 shadow-lg'>
                        <FaLinkedin className='text-blue-500'/>
                      </li>
                    </Link>
                    <Link href='https://github.com/tafonhubertnwana' target='_blank'>
                      <li className='hover:scale-110 ease-in duration-300 rounded-full cursor-pointer dark:bg-slate-200  shadow-gray-300 p-6 shadow-lg'>
                        <FaGithub />
                      </li>
                    </Link>
                    <Link href='https://github.com/tafonhubertnwana' target='_blank'>
                      <li className='rounded-full cursor-pointer shadow-gray-300 p-6 dark:bg-slate-200 shadow-lg'>
                        <AiOutlineMail />
                      </li>
                    </Link>
                    <Link href='/' target='_blank'>
                      <li className='hover:scale-110 ease-in duration-300 rounded-full cursor-pointer dark:bg-slate-200  shadow-gray-300 p-6 shadow-lg'>
                        <BsFillPersonLinesFill />
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            {/* Right side */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl  dark:bg-slate-500 lg:p-4">
              <div className="p-4">
                <form  action={ async (formData) => {
                  await sendEmail(formData)
                }}>
                  <div className="flex flex-col py-2">
                    <label htmlFor="name" className="uppercase text-sm py-2 dark:text-white">Name</label>
                    <input
                      type="text"
                      name="senderName"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="email" className="uppercase text-sm py-2 dark:text-white">Email</label>
                    <input
                      type="email"
                      name="senderEmail"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="message" className="uppercase text-sm py-2 dark:text-white">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      className='border-2 rounded-lg p-3 border-gray-300'
                      rows={10}
                      required
                    />
                  </div>
                  <button type='submit' className='bg-slate-600 dark:bg-slate-100  rounded-xl w-full p-4 mt-4 text-gray-100 font-bold' 
                    
                 >Send Message</button>
                </form>
                
              </div>
            </div>
          </div>
          <div className='flex justify-center '>
            <Link className='hover:scale-110 ease-in dark:bg-slate-500 mt-10 duration-300 rounded-full cursor-pointer shadow-gray-300  dark:shadow-gray-700 p-4 shadow-lg' href='/'>
              <div><HiOutlineChevronDoubleUp size={30} className='m-auto text-[#31473a] dark:text-white'/></div>
            </Link>
          </div>
          <div>
            <p className='text-start text-gray-500 mt-10 text-sm dark:text-white'>© 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
