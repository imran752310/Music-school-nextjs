"use client"
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = [
    {
      quote: "The only way to do great work is to love what you do.",
      name: "Steve Jobs",
      title: "Founder of Apple"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      name: "Henry David Thoreau",
      title: "Philosopher"
    },
    {
      quote: "Do not be embarrassed by your failures, learn from them and start again.",
      name: "Richard Branson",
      title: "Founder of Virgin Group"
    }
  ];
  

const TestimonialCards = () => {
  return (
    <div>
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className='text-white text-3xl font-bold text-center mb-8 z-10'>Hear Our Harmony: Voices of Sucess</h2>
            <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
                <div className='w-full max-w-6xl'>
                <InfiniteMovingCards
        items={Testimonials}
        direction="right"
        speed="slow"
      />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards