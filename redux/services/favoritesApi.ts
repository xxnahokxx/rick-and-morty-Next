import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const { URL } = process.env

export type Favorite = {
    _id: string
    id: string
    userId: string
}


export const favoritesApi = createApi({
    reducerPath: "favoritesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: (builder) => ({
        getFavorites: builder.query<Favorite[], {}>({
            query: ({ }) => ({
                url: "api/favorite",
                method: "GET",
            })
        }),
        deleteFavorites: builder.mutation<void, { id: string }>({
            query: ({ id }) => ({
                url: `api/favorite/${id}`,
                method: "DELETE"
            })
        }),
    })
})


export const { useGetFavoritesQuery, useDeleteFavoritesMutation } = favoritesApi
