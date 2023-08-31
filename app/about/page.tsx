"use client"
import React from 'react'
import portal from "@/img/portal.gif"
import clerk from "@/img/clerk.png"
import next from "@/img/next.svg"
import tailwind from "@/img/tailwind.svg"
import mongo from "@/img/MongoDB_Logo.svg"
import Image from 'next/image'

const About = () => {
  return (
    <div className=' mx-auto relative border border-transparent h-[calc(100vh-4rem)]'>
      <Image src={portal} className='lg:absolute -z-10 mx-auto rounded xl:w-[calc(100vw-50rem)] lg:left-[50%] transform lg:translate-x-[-50%] lg:translate-y-[-50%] lg:top-[50%] ' alt='about' ></Image>
      <div className='bg-black/30 border border-transparent z-30 w-full xl:w-[calc(100vw-50rem)] mx-auto pb-20 lg:absolute lg:top-[50%] lg:left-[50%] transform lg:translate-x-[-50%] lg:translate-y-[-50%]'>
        <h1 className='mx-auto text-center mt-8 text-3xl font-semibold shadow-text'>About me</h1>
        <p className='text-center w-[70%] mx-auto mt-8 shadow-text'>
          On this page, my intention is to solidify my knowledge in Next.js, practicing the ecosystem that is generated when using it together with Redux Toolkit and NoSQL databases such as MongoDB. With this 2.0 version, my intention is to take advantage of the Rick and Morty API as much as possible, which unfortunately was not fully utilized before.  </p>
        <p className='text-center w-[70%] mx-auto mt-8 shadow-text'>
          Using the technologies learned during the group project stage at Henry, a page is synthesized that allows us to log in to store our favorite characters. It also displays a list of registered episodes and seasons from the API. In the characters section, it shows us cards with more than 800 characters from the series.
        </p>

        <div className='flex flex-col items-center mt-10'>
          <h2 className='text-xl font-semibold mb-7 shadow-text'>Technologies</h2>
          <div className='flex flex-wrap justify-center  gap-x-10 gap-y-3  bg-white/25 px-4 py-2 rounded'>
            <Image src={clerk} alt='clerk' title='Clerk' className='w-8'></Image>
            <Image src={next} alt='Next.js' title='Next.js' className='w-20'></Image>
            <Image src={tailwind} alt='Tailwind' title='Tailwind' className='w-8'></Image>
            <Image src={mongo} alt='MongoDB' title='MongoDB' className='w-20'></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
