'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../public/assets/logo.png';
import Link from 'next/link';
import { AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { LiaTimesSolid } from 'react-icons/lia';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const pathname = usePathname(); // Use usePathname instead of useRouter

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (
      pathname === '/quiz' ||
      pathname === '/best' ||
      pathname === '/mobile' ||
      pathname === '/portfolio'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        style={{ backgroundColor: navBg }}
        className={`fixed top-0 w-full h-20 ${shadow ? 'shadow-xl' : ''} z-[100] `}
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16  dark:bg-slate-800">
          <div>
            <Link href="/">
              <Image src={logo} alt="Logo" width={150} height={60} />
            </Link>
          </div>
          <div>
            <div className="hidden md:flex">
              <ul style={{ color: linkColor }} className="md:flex items-center dark:text-white">
                <Link href="/">
                  <li className="mx-5 uppercase hover:font-bold">Home</li>
                </Link>
                <Link href="/#techStack">
                  <li className="mx-5 uppercase hover:font-bold">Tech Stack</li>
                </Link>
                <Link href="/#about">
                  <li className="mx-5 uppercase hover:font-bold">About</li>
                </Link>
                <Link href="/#project">
                  <li className="mx-5 uppercase hover:font-bold">Project</li>
                </Link>
                <Link href="/#experience">
                  <li className="mx-5 uppercase hover:font-bold">Experience</li>
                </Link>
              </ul>
              <Link href="/#contact">
                <button className="uppercase mx-5 p-5 bg-[#31473a] text-white">Contact</button>
              </Link>
            </div>
            <div style={{ color: linkColor }} onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={30} />
            </div>
          </div>
        </div>
        <div
          className={`${
            nav ? 'fixed left-0 top-0 h-screen w-full bg-black/30 md:hidden dark:bg-slate-800' : ''
          }`}
        >
          <div
            className={`${
              nav
                ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white px-8 py-1 ease-in duration-500 dark:bg-slate-800'
                : 'md:hidden fixed left-[-100%] top-0 py-5 ease-in duration-500 dark:bg-slate-800'
            }`}
          >
            <div className="flex w-full justify-between border-b">
              <Image src={logo} alt="logo" width={90} height={50} />
              <div
                onClick={handleNav}
                className="self-center rounded-full cursor-pointer dark:bg-slate-400 shadow-gray-300 p-3 shadow-lg"
              >
                <LiaTimesSolid size={14} />
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase dark:text-white">
                <Link href="/">
                  <li className="py-4 text-sm" onClick={() => setNav(false)}>Home</li>
                </Link>
                <Link href="/#techStack">
                  <li className="py-4 text-sm" onClick={() => setNav(false)}>Tech Stack</li>
                </Link>
                <Link href="/#about">
                  <li className="py-4 text-sm" onClick={() => setNav(false)}>About</li>
                </Link>
                <Link href="/#project">
                  <li className="py-4 text-sm" onClick={() => setNav(false)}>Project</li>
                </Link>
                <Link href="/#experience">
                  <li className="py-4 text-sm" onClick={() => setNav(false)}>Experience</li>
                </Link>
              </ul>
            </div>
            <div className="pt-40">
              <ul className="flex justify-between items-center py-4">
                <Link href="https://www.linkedin.com/in/tafon-n-hubert/" target="_blank">
                  <li className="hover:scale-110 ease-in duration-300 rounded-full cursor-pointer dark:bg-slate-400 shadow-gray-300 p-6 shadow-lg">
                    <FaLinkedin className="text-blue-500" />
                  </li>
                </Link>
                <Link href="https://github.com/tafonhubertnwana" target="_blank">
                  <li className="hover:scale-110 ease-in duration-300 rounded-full cursor-pointer dark:bg-slate-400 shadow-gray-300 p-6 shadow-lg">
                    <FaGithub />
                  </li>
                </Link>
                <Link href="mailto:tafonsoftwarespecialist@gmail.com" target="_blank">
                  <li className="rounded-full cursor-pointer shadow-gray-300 p-6 shadow-lg">
                    <AiOutlineMail />
                  </li>
                </Link>
                <Link href="/" target="_blank">
                  <li className="hover:scale-110 ease-in duration-300 rounded-full cursor-pointer dark:bg-slate-400 shadow-gray-300 p-6 shadow-lg">
                    <BsFillPersonLinesFill />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
