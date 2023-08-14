"use client"
import Card from '@/components/card/Card';
// import { decrement, increment } from '@/redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useGetCharactersQuery } from '@/redux/services/charactersApi';
import { Input, Pagination } from '@nextui-org/react';
import React, { useState } from 'react'

const Characters = () => {
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const { data, error, isLoading, isFetching } = useGetCharactersQuery({ page, name });


  // const info = useAppSelector(state => state.counterReducer.counter);
  const dispatch = useAppDispatch();

  if (isLoading) return <p className='pt-30'>loading...</p>

  // const handleIncrement = () => {
  //   dispatch(increment());
  // }


  return (
    <div className='pt-20 mx-auto container flex flex-col items-center'>
      {/* <div>
        <div>
          {info}
        </div>
        <button onClick={() => { dispatch(increment()) }}>plus</button>
        <button onClick={() => { dispatch(decrement()) }}>minus</button>
      </div> */}
      <h2 className="w-full text-4xl mb-10 font-bold">Characters in the series</h2>
      <Input type="text" label="Search..." className='w-full md:w-[40%]' onChange={(event)=> setName(event.target.value)}/>
      <Pagination className='my-11' color={"success"} total={data?.info.pages ?? 1} initialPage={1} onChange={(page: number) => setPage(page)} page={page} />


      <div className='container grid grid-cols-5 mx-auto gap-6'>
        {
          data?.results.map((el, index) => <Card id={el.id} name={el.name} status={el.status} species={el.species} gender={el.gender} origin={el.origin} image={el.image} key={index} />
          )
        }
      </div>

      <Pagination className='my-11' color={"success"} total={data?.info.pages ?? 1} initialPage={1} onChange={(page: number) => setPage(page)} page={page} />
    </div>
  )
}

export default Characters
