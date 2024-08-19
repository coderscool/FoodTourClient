import { createSlice } from '@reduxjs/toolkit'

export const dishSlice = createSlice({
    name:'dishs',
    initialState: {
        list: []
    },

    reducers: {
        dishFetch: (state, action) => {
            state.list = action.payload.list
        },
    }
})

export const selectListDish = state => state.dishs.list

export const {dishFetch} = dishSlice.actions 

export default dishSlice.reducer