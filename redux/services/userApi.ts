import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type User = {
    id: number
    name: string
    email: string
    username: string
}

export const userApi = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], null>({
            query: () => "users"
        }),
        getUsersById: builder.query<User, {id: number}>({
            query: ({id}) => `users/${id}`
        }),
    })

})


export const {useGetUsersByIdQuery, useGetUsersQuery } = userApi



// para solicitar la info desde el front, se utiliza el siguiente codigo:  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);
