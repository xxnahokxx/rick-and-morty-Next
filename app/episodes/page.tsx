"use client"
import Seasons from '@/components/seasons/Seasons';
import { Episode, useGetEpisodesQuery } from '@/redux/services/episodesApi';
import React, { useState } from 'react'

const Episodes = () => {
  const seasons = [
    {
      id: "S01",
      name: "Season 1",
    },
    {
      id: "S02",
      name: "Season 2",
    },
    {
      id: "S03",
      name: "Season 3",
    },
    {
      id: "S04",
      name: "Season 4",
    },
    {
      id: "S05",
      name: "Season 5",
    },
  ]

  return (
    <div className='container mx-auto py-20'>

      <h2 className='text-[30px] font-semibold my-5'>Episodes</h2>

      {
        seasons.map((el,index) =><div key={index} className=''>
          <h3 className='text-[25px] my-8'>{el.name}</h3>
            <Seasons season={el.id}></Seasons>
          </div>)
      }
    </div>
  )
}

export default Episodes
