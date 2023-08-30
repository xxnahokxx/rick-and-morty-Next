import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"
import { charactersApi } from "./services/charactersApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { episodesApi } from "./services/episodesApi";
import { favoritesApi } from "./services/favoritesApi";


export const store = configureStore({
    reducer: {
        counterReducer,
        [charactersApi.reducerPath]: charactersApi.reducer,
        [episodesApi.reducerPath]: episodesApi.reducer,
        [favoritesApi.reducerPath]: favoritesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([charactersApi.middleware, episodesApi.middleware, favoritesApi.middleware]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
