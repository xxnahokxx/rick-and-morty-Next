"use client"
import Link from 'next/link'
import ImageNext from 'next/image'
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import RickSanchez from "@/img/Rick Sanchez.png"
import MortySmith from "@/img/Morty Smith.png"
import { useState } from 'react';
import { useGetCharactersQuery } from '@/redux/services/charactersApi';
import Footer from '@/components/footer/Footer';

export default function Home() {

  const ids = [1, 2, 3, 4, 5];
  const { data, isError, isLoading } = useGetCharactersQuery({ page: 1, name: "" });

  const principalCharacters = ids.map(id => data?.results.find(el => el.id === id))
  return (
    <>
      <div className='container flex flex-col md:justify-end md:items-start p-4 mx-auto  md:h-[500px] bg-slate-400 landing'>
        <h1 className='font-bold text-[30px] text-white shadow-text'>Welcome to my Rick and Morty page</h1>
        <p className=' font-medium leading-9 text-white shadow-text'>On this page you will find all your favorite characters from this famous animated series...</p>
        <Link href={"/characters"} className=''>
          <Button className='button-green'>Characters</Button>
        </Link>
      </div>
      <div className='container mx-auto mt-20'>

        <div className='lg:flex  [&>img]:xl:h-[350px] items-center flex-col xl:flex-row'>
          <ImageNext src={MortySmith} alt="Rick" />
          <div>
            <h2 className='mb-7 font-bold text-[25px] text-center'>Synopsis</h2>

            <p className='text-center w-[90%] xl:w-[100%] mx-auto'>The series follows the misadventures of alcoholic scientist Rick and his overly nervous grandson Morty, who split their time between domestic family life and intergalactic travel. Often finding themselves in a heap of trouble that more often than not created through their own actions, these two will get themselves out of trouble in the most entertaining way! This extremely clever show will blow your mind as well as all other parallel realities of your mind!</p>
          </div>
          <ImageNext src={RickSanchez} alt="Rick" />
        </div>

      </div>
      <div className='container mx-auto my-20'>
        <h2 className='mb-7 font-bold text-[25px] text-center'>Protagonists</h2>
        <div className='flex flex-wrap justify-center gap-10 px-10 '>
          {principalCharacters && principalCharacters?.map(el => el !== undefined && <Card
            isFooterBlurred
            radius="lg"
            className="border-none self-center"
            key={el.id}
          >
            <Image
              removeWrapper
              alt={el.name}
              className="z-0 w-full h-full object-cover"
              height={200}
              src={el.image}
              width={200}
            />
            <Link className='absolute top-1 right-1' href={`/characters/${el.id}`}>
              <Button className=" text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                Detail
              </Button>
            </Link>
            <CardFooter className="justify-center  before:bg-white/10 border-white/50 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="font-bold shadow-text text-white">{el.name}</p>
            </CardFooter>
          </Card>)}

        </div>
      </div>
        <Footer/>
    </>
  )
}
