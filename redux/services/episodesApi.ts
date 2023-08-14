import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type Episode = {
    id: number
    name: string
    air_date: string
    episode: string
    characters: string[]
}

export type Episodes = {
    info: {
        count: number
        pages: number
        next: string
        prev: string
    }
    results: Episode
}


export const episodesApi = createApi({
    reducerPath: "episodesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://rickandmortyapi.com/api/",
    }),
    endpoints: (builder) => ({
        getEpisodes: builder.query<Episodes,{page: number, episodeCode: string}>({
            query: ({page, episodeCode}) => ({
                url: `episode?page=${page}&episode=${episodeCode}`,
                method: "GET",
            })
        }),
        getEpisodesById: builder.query<Episode,{id: number}>({
            query: ({id}) => ({
                url: `episode/${id}`,
                method: "GET",
            })
        }),
    })
})


export const { useGetEpisodesQuery, useGetEpisodesByIdQuery } = episodesApi
