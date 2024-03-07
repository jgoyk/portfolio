"use client"
import Image from 'next/image'
import { useState } from 'react';
import { HiOutlineHome } from "react-icons/hi";
import { ImLinkedin, ImGithub, ImMail, ImProfile } from "react-icons/im";

export default function Home() {
  const [slide, setSlide] = useState(0);
  function handleLeftClick() {
    setSlide(slide => slide+2)
  }
  function handleRightClick() {
    setSlide(slide => slide-2)
  }
  function handleHomeClick() {
    setSlide(slide => slide=0)
  }
  return (
    <main className="min-h-screen bg-[url('../public/bg1.jpg')] bg-center bg-cover">
      <div className="m-0 overflow-hidden max-w-500 grid grid-cols-3 justify-between" >
        
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
                <div className="text-black text-2xl font-medium p-4 hover:scale-110 hover:text-blue-900" onClick={handleLeftClick}>
                  About Me
                </div>
                <div className="text-black text-2xl font-medium p-4 hover:scale-110 hover:text-blue-900 " onClick={handleRightClick}>
                  Projects
                </div>
              </div>
              <div className="flex flex-row">
                <a href="https://github.com/jgoyk">
                  <ImGithub className="text-black text-2xl mx-2 hover:scale-110"/>
                </a>
                <a href="mailto:joshua@goykhman.com">
                  <ImMail className="text-black text-2xl mx-2 hover:scale-110"/>
                </a>
                <a href="">
                  <ImProfile className="text-black text-2xl mx-2 hover:scale-110"/>
                </a>
                <a href="https://www.linkedin.com/in/josh-goykhman">
                  <ImLinkedin className="text-black text-2xl mx-2 hover:scale-110"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="transition whitespace-nowrap ease-in w-screen relative left-[800%] duration-300" style={{ transform: `translate3d(${(slide) * 100}%, 0, 0)` }}>
          <div className="flex flex-col justify-start items-center min-w-screen overflow-hidden relative left-[-100%]">
            <div className="py-5 flex flex-row justify-between w-full">
            <div className="p-5">
              </div>
              <div className="transition-transform text-black text-5xl font-semibold grow text-center">
                Projects
              </div>
              <HiOutlineHome className="h-10 w-10 text-black mr-5 hover:scale-110 hover:text-blue-900" onClick={handleHomeClick}/>
            </div>
            
            <div className="flex flex-row ">
              <div className="grid grid-cols-2 grid-flow-row gap-10">
                <div className="flex flex-col">
                  <div className="text-black text-2xl font-medium text-center">
                    Senior Support Extension
                  </div>
                  <Image
                    className="relative rounded-md border-double border-4 p-4 border-black m-4 bg-white bg-opacity-30 "
                    src="/icon.png"
                    alt="Senior Support Icon"
                    width={300}
                    height={37}
                    priority
                  />
                </div>
                <div className="flex flex-col hover:scale-105">
                  <div className="text-black text-2xl font-medium text-center">
                    Workout Tracker
                  </div>
                  <Image
                    className="relative rounded-md border-double border-4 py-3 border-black m-4 bg-white bg-opacity-30 min-h-[80%]"
                    src="/icon2.png"
                    alt="Josh Goykhman in a Suit"
                    width={300}
                    height={37}
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-black text-2xl font-medium text-center">
                    Project 1
                  </div>
                  <Image
                    className="relative rounded-md border-double border-4 p-4 border-black m-4 bg-white bg-opacity-30"
                    src="/josh.png"
                    alt="Josh Goykhman in a Suit"
                    width={300}
                    height={37}
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-black text-2xl font-medium text-center">
                    Project 1
                  </div>
                  <Image
                    className="relative rounded-md border-double border-4 p-4 border-black m-4 bg-white bg-opacity-30"
                    src="/josh.png"
                    alt="Josh Goykhman in a Suit"
                    width={300}
                    height={37}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="transition whitespace-nowrap ease-in w-screen relative left-[-500%] duration-300" style={{ transform: `translate3d(${(slide) * 100}%, 0, 0)` }}>
          <div className="flex flex-col justify-start items-center min-w-screen overflow-hidden relative left-[-100%]">
            <div className="py-5 flex flex-row justify-between w-full">
            <div className="p-5">
              </div>
              <div className="transition-transform text-black text-5xl font-semibold grow text-center">
                Who am I?
              </div>
              <HiOutlineHome className="h-10 w-10 text-black mr-5 hover:scale-110 hover:text-blue-900" onClick={handleHomeClick}/>
            </div>
            
            <div className="flex flex-row ">
              <div className="text-black text-2xl font-medium p-4">
                Hi! I am Josh. I am a 18 year old first year student at Rutgers University. I intend to double-major in Computer Science and Statistics. Outside of school, I enjoy baking, playing basketball, and working out. 
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
