import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='container flex flex-col justify-center md:items-start p-4  mx-auto h-screen md:h-[500px] bg-slate-400 landing'>
        <h1 className='font-bold text-[30px] text-white shadow-text'>Welcome to my Rick and Morty page</h1>
        <p className=' font-medium leading-9 text-white shadow-text'>On this page you will find all your favorite characters from this famous animated series...</p>
        <Link href={"/characters"}>
        <button className='button-green'>Characters</button>
        </Link>
      </div>
      <div className='container mx-auto mt-20'>
        <h2 className='mb-7 font-bold text-[25px]'>Synopsis</h2>
        <p>The series follows the misadventures of alcoholic scientist Rick and his overly nervous grandson Morty, who split their time between domestic family life and intergalactic travel. Often finding themselves in a heap of trouble that more often than not created through their own actions, these two will get themselves out of trouble in the most entertaining way! This extremely clever show will blow your mind as well as all other parallel realities of your mind!</p>
      </div>
      <div className='container mx-auto mt-20'>
        <h2 className='mb-7 font-bold text-[25px]'>Protagonists</h2>
        <div>
          <ul>
            <li>Rick Sánchez</li>
            <li>Morty Smith</li>
            <li>Jerry Smith</li>
            <li>Summer Smith</li>
            <li>Beth Smith</li>
          </ul>
        </div>
      </div>
    </>
  )
}
