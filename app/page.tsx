import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-300">
      <Image
        className="relative rounded-full border-dotted border-2 border-black m-4"
        src="/josh.png"
        alt="Josh Goykhman in a Suit"
        width={300}
        height={37}
        priority
      />
      <div className="text-black text-5xl font-semibold">
        JOSH GOYKHMAN
      </div>
    </main>
  )
}
