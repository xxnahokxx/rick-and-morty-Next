

import { useGetEpisodesByIdQuery } from '@/redux/services/episodesApi'
import React from 'react'

const Episodes = ({ id }: { id: number }) => {
    const { data, isLoading, isError } = useGetEpisodesByIdQuery({ id })
    return (
        <div className='flex gap-6'>
                <span>{data?.id}</span>
                <h2>{data?.name}</h2>
        </div>
    )
}

export default Episodes
