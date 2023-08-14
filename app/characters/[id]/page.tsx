/* eslint-disable @next/next/no-img-element */
"use client"

import { useGetCharacterByIdQuery } from '@/redux/services/charactersApi'
import { useParams, usePathname } from 'next/navigation'
import Episodes from "@/components/episode/Episodes"
import React from 'react'

const CharacterById = () => {

    const pathname = usePathname();
    const params = useParams();
    const id = params && parseInt(params.id.toString())
    const { data, isLoading, isError } = useGetCharacterByIdQuery({ id });

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 items-center py-10'>
                <img className='w-[80%]' src={data?.image} alt={data?.name} />
                <div>
                    <h1>{data?.name}</h1>
                    <ul>
                        <li>{data?.status}</li>
                        <li>{data?.species}</li>
                        <li>{data?.gender}</li>
                        <li>{data?.origin.name}</li>
                        <li>{data?.location?.name}</li>
                    </ul>
                    <h2 className='text-center text-[20px] font-semibold my-5'>Episodes</h2>
                    <div className='grid grid-cols-2 pb-[60px]'>
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
