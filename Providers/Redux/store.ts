'use client'

import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slices/Cart"

// const rootReducer = combineReducers({})

const store = configureStore({
    reducer: {
        cartItems: CartReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store