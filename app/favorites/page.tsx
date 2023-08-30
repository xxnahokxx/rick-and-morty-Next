"use client"
import { useGetFavoritesQuery } from '@/redux/services/favoritesApi'
import { useAuth, useUser } from '@clerk/nextjs';
import React from 'react'
import Card from "@/components/card/Card"
import { Character, Characters, charactersApi, useGetCharacterByIdQuery } from '@/redux/services/charactersApi';

const Favorites = () => {

    const { isLoading, data } = useGetFavoritesQuery("");
    const { user } = useUser();
    const { isLoaded, userId } = useAuth();

    const filter = data?.filter(el => el.userId === userId && el).map(el => Number(el.id))
    const search = filter?.join(",")

    const { data: characters } = useGetCharacterByIdQuery({ id: search })
    const info = characters as Character[]
    return (
        <>
            <div className='flex'>
                {info && isLoaded && info.map(el => <Card key={el.id} id={el.id} name={el.name} status={el.status} species={el.species} origin={el.origin} gender={el.gender} image={el.image} userId={userId ?? undefined} ></Card>)
                }
            </div>
        </>
    )
}

export default Favorites
