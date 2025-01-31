import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

export default function HeroSecton() {
  return (
    <div className='text-white h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className='p-4 relative z-10 w-full text-center '>
            <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text'>Master the Art of Music</h1>
            <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit Dolorum. nam expedita, dolorem illo, reiciendis iure nesciunt quis qui sint vitae nostrum! Culpa odio error dolorem sequi dicta quos totam.</p>
            <div className='mt-4'>
            <Link  href={'/courses'}>
            <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
         Explore Course
      </Button>
      </Link>
            </div>
        </div>
    </div>
  )
}
