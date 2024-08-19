import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'users',
    initialState: {
        user: {
            id: "",
            name: "",
            address: "",
            phone: "",
            role: ""
        },
    },

    reducers: {
        userFetch: (state, action) => {
            state.user.id = action.payload.id;
            state.user.name = action.payload.name;
            state.user.address = action.payload.address;
            state.user.phone = action.payload.phone;
            state.user.role = action.payload.role;
        },
    }
})

export const selectUser = state => state.users.user

export const {userFetch} = userSlice.actions 

export default userSlice.reducer