"use client"
import Image from 'next/image'
import { useState } from 'react';
import { HiOutlineHome } from "react-icons/hi";

export default function Home() {
  const [slide, setSlide] = useState(0);
  function handleClick() {
    setSlide(slide => slide+2)
  }
  function handleHomeClick() {
    setSlide(slide => slide=0)
  }
  return (
    <main className="min-h-screen bg-[url('../public/bg1.jpg')] bg-center bg-cover">
      <div className="m-0 overflow-hidden max-w-500 grid grid-cols-2" >
        <div className="transition whitespace-nowrap ease-in w-screen duration-300" style={{ transform: `translate3d(${(slide) * 100}%, 0, 0)` }}>
          <div className="flex flex-col justify-center items-center min-w-screen overflow-hidden min-h-screen ">
            <div className="flex flex-col justify-center items-center bg-gray-500 bg-opacity-40 rounded-3xl w-fit p-12">
              <Image
                className="relative rounded-full border-dotted border-2 border-black m-4 bg-white bg-opacity-30 "
                src="/josh.png"
                alt="Josh Goykhman in a Suit"
                width={300}
                height={37}
                priority
              />
              <div className="transition-transform text-black text-5xl font-semibold">
                <div className="">JOSH GOYKHMAN</div>
              </div>
              <div className="flex flex-row ">
                <div className="text-black text-2xl font-medium p-4 hover:scale-110 hover:text-blue-900" onClick={handleClick}>
                  About Me
                </div>
                <div className="text-black text-2xl font-medium p-4 hover:scale-110 hover:text-blue-900">
                  Resume
                </div>
                <div className="text-black text-2xl font-medium p-4 hover:scale-110 hover:text-blue-900">
                  Projects
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="transition whitespace-nowrap ease-in w-screen relative left-[-300%] duration-300" style={{ transform: `translate3d(${(slide) * 100}%, 0, 0)` }}>
          <div className="flex flex-col justify-start items-center min-w-screen overflow-hidden relative left-[-100%]">
            <div className="py-5 flex flex-row justify-between w-full">
            <div className="p-5">
              </div>
              <div className="transition-transform text-black text-5xl font-semibold grow text-center">
                Who am I?
              </div>
              <HiOutlineHome className="h-6 w-6 text-black mr-5 hover:scale-110 hover:text-blue-900" onClick={handleHomeClick}/>
            </div>
            
            <div className="flex flex-row ">
              <div className="text-black text-2xl font-medium p-4">
                18 Year Old at Rutgers University intending to major in Statistics and Computer Science, Class of 2027
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
