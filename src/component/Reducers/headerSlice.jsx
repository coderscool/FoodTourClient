import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name:'headers',
    initialState: {
        list: {
            cart: 1,
            notification: 0
        }
    },

    reducers: {
        headerFetch: (state, action) => {
            state.list = action.payload.list
        },

        notifyCart: (state) => {
            state.list.cart += 1
        }
    }
})

export const selectCart = state => state.headers.list.cart

export const {headerFetch, notifyCart} = headerSlice.actions 

export default headerSlice.reducer