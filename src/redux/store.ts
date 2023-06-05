import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"

const store=configureStore({
    reducer:{
        users:cartSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;
