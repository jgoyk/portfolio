"use client"
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [slide, setSlide] = useState(0);
  function handleClick() {
    setSlide(slide => slide+1)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-400">
      <div className="m-0 overflow-hidden max-w-500" >
        <div className="transition whitespace-nowrap ease-in" style={{ transform: `translate3d(${-slide * 100}%, 0, 0)` }}>
          <div className="flex flex-col justify-center items-center min-w-xl overflow-hidden mx-80">
            <Image
              className="relative rounded-full border-dotted border-2 border-black m-4"
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
          <div className="flex flex-col justify-center items-center min-w-xl overflow-hidden">
            <Image
              className="relative rounded-full border-dotted border-2 border-black m-4"
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
    </main>
  )
}
