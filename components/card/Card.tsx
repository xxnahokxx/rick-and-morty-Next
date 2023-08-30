"use client"
/* eslint-disable @next/next/no-img-element */
import { Character } from '@/redux/services/charactersApi'
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Link } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { Favorite, useDeleteFavoritesMutation, useGetFavoritesQuery } from '@/redux/services/favoritesApi';



const CardComponent = ({ id, name, status, species, gender, origin, image, userId }: Character) => {

    const color = "#ff0000"
    const router = useRouter();
    const { data, error, isLoading, isFetching } = useGetFavoritesQuery("");
    const [deleteFavorites] = useDeleteFavoritesMutation();
    const favorites = useGetFavoritesQuery("");
    // let char: Favorite | undefined = undefined
    const char = data?.find(el => Number(el.id) === id && userId === el.userId)
    const handleClick = async () => {
        const info = { id, userId }

        if (userId && !char) {
            const res = await fetch("api/favorite", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info)
            })
            const { msg } = await res.json()

        } else if (char) {
            await deleteFavorites({ id: char._id })
        } else if (!userId) {
            router.push("/sign-in")
        }

        favorites.refetch()

    }

    return (
        <Card isFooterBlurred className="card transition-all duration-300 relative hover:transform hover:scale-[1.01] h-[400px]">
            <CardHeader className="absolute z-10 top-2 pl-4 justify-between items-start">
                <div>
                    <h4 className="text-white/90 font-medium text-xl shadow-text">{name}</h4>
                    <p className="text-tiny text-white/60 uppercase font-bold shadow-text">{gender}</p>
                </div>
                <div>
                    <button onClick={handleClick}>
                        {char ?
                            <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill={color} d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Z" />
                            </svg>
                            :
                            <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill={color} d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Zm0-2.7q2.4-2.15 3.95-3.688t2.45-2.674q.9-1.138 1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.688T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025q.9 1.137 2.45 2.675T12 18.3Zm0-6.825Z" />
                            </svg>
                        }
                    </button>
                </div>
            </CardHeader>
            <Image
                removeWrapper
                alt={name}
                className="z-0 w-full h-full object-cover"
                src={image}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 banner transition-all duration-500 opacity-0">
                <div className="flex flex-grow gap-2 items-center ">
                    <img
                        alt="Breathing app icon"
                        className="rounded-full w-10 h-11 bg-black"
                        src={image}
                    />
                    <div className="flex flex-col">
                        <p className="text-tiny text-white/60 shadow-text">{status}</p>
                        <p className="text-tiny text-white/60 shadow-text">#{id}</p>
                    </div>
                </div>
                <Link href={`/characters/${id}`}>
                    <Button radius="full" className='banner' size="sm">Detail</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default CardComponent
