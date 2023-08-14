import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"
import { charactersApi } from "./services/charactersApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { episodesApi } from "./services/episodesApi";


export const store = configureStore({
    reducer: {
        counterReducer,
        [charactersApi.reducerPath]: charactersApi.reducer,
        [episodesApi.reducerPath]: episodesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([charactersApi.middleware, episodesApi.middleware]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
