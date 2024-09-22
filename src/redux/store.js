import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./login/slice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})