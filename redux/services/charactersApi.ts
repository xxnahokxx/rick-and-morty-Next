import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type Character = {
    id: number
    name: string
    status: string
    species: string
    gender: string
    image: string
    origin: {
        name: string
        url: string
    }
    location?: {
        name: string
    }
    episode?: string[]
    userId?: string
}

export type Characters = {
    results: Character[]
    info: {
        count: number
        pages: number
    }
}



export const charactersApi = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://rickandmortyapi.com/api/",
    }),
    endpoints: (builder) => ({
        getCharacters: builder.query<Characters, { page: number, name: string }>({
            query: ({ page, name }) => ({
                url: `character?page=${page}&name=${name}`,
                method: 'GET',
                // body: "",
            })
        }),
        getCharacterById: builder.query<Character | Character[], { id: number | string | undefined }>({
            query: ({ id }) => `character/${id}`
        }),
    })

})


export const { useGetCharactersQuery, useGetCharacterByIdQuery } = charactersApi



// para solicitar la info desde el front, se utiliza el siguiente codigo:  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);
