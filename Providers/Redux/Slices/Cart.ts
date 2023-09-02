'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/types/product"


export interface cartItem extends ProductType {
    quantity: number;
    totalAmount: number;
}

// const initialData: cartItem[] = JSON.parse(localStorage.getItem("cartItems") as string) as cartItem[] || [];
const initialData: cartItem[] = []

function changeQuantity(filteringeItem: cartItem, state: cartItem[], operation: string): cartItem[] {
    const filteredCart = state.filter((item: cartItem) => item.id !== filteringeItem.id)
    const indexofItem = state.findIndex((item: cartItem) => filteringeItem.id === item.id)
    if (operation === "dcr") {
        filteredCart.splice(indexofItem, 0, { ...filteringeItem, quantity: filteringeItem.quantity - 1 })
    } else if (operation === "inc") {
        filteredCart.splice(indexofItem, 0, { ...filteringeItem, quantity: filteringeItem.quantity + 1 })
    }
    localStorage.setItem("cartItems", JSON.stringify(filteredCart))
    return [...filteredCart]
}


const CartSlice = createSlice({
    name: "Cart Items",
    initialState: initialData,
    reducers: {
        addToCart: (state: cartItem[], operatingItem: PayloadAction<ProductType>) => {
            const foundItem = state.find((item: cartItem) => operatingItem.payload.id === item.id);
            if (foundItem) {
                const otherItems = state.filter((item: cartItem) => item.id !== foundItem.id)
                const newState = [...otherItems, { ...foundItem, quantity: Number(foundItem.quantity) + 1 }]
                localStorage.setItem("cartItems", JSON.stringify(newState))
                return newState
            } else {
                const newState = [...state, { ...(operatingItem.payload), quantity: 1, totalAmount: operatingItem.payload.price }];
                localStorage.setItem("cartItems", JSON.stringify(newState))
                return newState
            }
        },
        removeItem: (state, operatingItem: PayloadAction<ProductType>) => {
            // Remove the item from the state based on the operatingItem payload
            const filteredCart = state.filter((item: cartItem) => item.id !== operatingItem.payload.id);
            localStorage.setItem("cartItems", JSON.stringify(filteredCart))
            return filteredCart
        },
        incQuantity: (state, operatingItem: PayloadAction<ProductType>) => {
            const foundItem = state.find((item: cartItem) => operatingItem.payload.id === item.id)
            if (foundItem!.quantity < 15) {
                if (foundItem) {
                    return changeQuantity(foundItem, state, "inc")
                }
            }
            return state
        },
        dcrQuantity: (state, operatingItem: PayloadAction<ProductType>) => {
            const foundItem = state.find((item: cartItem) => operatingItem.payload.id === item.id)
            if (foundItem!.quantity > 1) {
                if (foundItem) {
                    return changeQuantity(foundItem, state, "dcr")
                }
            }
            return state
        },
        removeAllItems: () => {
            return [];
        },
    },
});


export const { addToCart, removeAllItems, removeItem, incQuantity, dcrQuantity } = CartSlice.actions
export default CartSlice.reducer;