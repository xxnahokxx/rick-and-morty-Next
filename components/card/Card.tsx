/* eslint-disable @next/next/no-img-element */
import { Character } from '@/redux/services/charactersApi'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Link } from "@nextui-org/react";



const CardComponent = ({ id, name, status, species, gender, origin, image }: Character) => {



    return (
        <Card isFooterBlurred className="card transition-all duration-300 relative hover:transform hover:scale-[1.01] h-[400px]">
            <CardHeader className="absolute z-10 top-2 pl-4 flex-col items-start">
                <h4 className="text-white/90 font-medium text-xl shadow-text">{name}</h4>
                <p className="text-tiny text-white/60 uppercase font-bold shadow-text">{gender}</p>
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
