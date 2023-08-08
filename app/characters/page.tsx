"use client"
import { decrement, increment } from '@/redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useGetUsersQuery } from '@/redux/services/userApi';
import React from 'react'

const Characters = () => {

  const info = useAppSelector(state => state.counterReducer.counter);
  const dispatch = useAppDispatch();
  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);

  if (isLoading) return <p className='pt-30'>loading...</p>

  const handleIncrement = () => {
    dispatch(increment());
  }

  return (
    <div className='pt-20'>
      <div>
        <div>
          {info}
        </div>
        <button onClick={() => { dispatch(increment()) }}>plus</button>
        <button onClick={() => { dispatch(decrement()) }}>minus</button>
      </div>

      <div>
        {
          data?.map((el, index) => <div className=' flex my-5 flex-col justify-start items-start w-[40%] bg-slate-300' key={index}>
            <h2>{el.name}</h2>
            <p>{el.email}</p>
            <p>{el.username}</p>
          </div>)
        }
      </div>

    </div>
  )
}

export default Characters
