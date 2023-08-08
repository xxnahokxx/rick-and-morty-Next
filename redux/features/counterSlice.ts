import { createSlice } from "@reduxjs/toolkit";
import { count } from "console";

const initialState = {
    counter: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter = state.counter + 1
        },
        decrement: (state) => {
            state.counter = state.counter - 1
        },
    }
})

export const {increment, decrement } =counterSlice.actions

export default counterSlice.reducer
