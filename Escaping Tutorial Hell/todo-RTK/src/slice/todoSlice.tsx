import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
        incrementByN: (state, action) => {
            state.count = state.count + action.payload;
        },
    },
});

export const { increment, incrementByN, decrement } = todoSlice.actions;
export default todoSlice.reducer;
