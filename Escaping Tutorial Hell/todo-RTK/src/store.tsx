import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";

// creating store
const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
