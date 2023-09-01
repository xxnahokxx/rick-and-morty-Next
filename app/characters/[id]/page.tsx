/* eslint-disable @next/next/no-img-element */
"use client"

import { Character, useGetCharacterByIdQuery } from '@/redux/services/charactersApi'
import { useParams, usePathname } from 'next/navigation'
import Episodes from "@/components/episode/Episodes"
import React from 'react'

const CharacterById = () => {

    const pathname = usePathname();
    const params = useParams();
    const id = params && parseInt(params.id.toString())
    let { data, isLoading, isError } = useGetCharacterByIdQuery({ id });
    data = data as Character
    return (
        <div className='container mx-auto'>
            <div className='grid justify-center lg:grid-cols-2  py-10'>
                <div>
                    <h1 className='text-center lg:mx-auto mb-4 text-2xl font-semibold bg-slate-900 rounded py-2 mx-3'>{data?.name}</h1>
                    <img className='lg:w-[80%] mx-auto rounded-2xl' src={data?.image} alt={data?.name} />
                    <ul className='flex flex-col items-center py-8 bg-slate-900 rounded-2xl m-3'>
                        <li><span className='font-semibold'>Status:  </span>{data?.status}</li>
                        <li><span className='font-semibold'>Species:  </span>{data?.species}</li>
                        <li><span className='font-semibold'>Gender:  </span>{data?.gender}</li>
                        <li><span className='font-semibold'>Origin:  </span>{data?.origin.name}</li>
                        <li><span className='font-semibold'>Location:  </span>{data?.location?.name}</li>
                    </ul>

                </div>
                <div className='bg-slate-900 rounded-2xl mx-3 px-4'>
                    <h2 className='text-center text-[20px] font-semibold my-5'>Episodes</h2>
                    <div className='grid lg:grid-cols-2 pb-[60px]'>
                        {data?.episode?.map((el, index) => {
                            const cap = el.split("/").at(-1)
                            if (cap) return <Episodes id={parseInt(cap)} key={index}></Episodes>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterById
