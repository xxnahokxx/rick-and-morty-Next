import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export type Favorite = {
    _id: string
    id: string
    userId: string
}


export const favoritesApi = createApi({
    reducerPath: "favoritesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",
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
