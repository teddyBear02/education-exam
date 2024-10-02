import { InitialAuthState } from "@/models"
import { createSlice } from "@reduxjs/toolkit"
import { login, signUp } from "./auth.actions"
import { saveAuthData } from "@/helper/authHelper"

export const initialState : InitialAuthState = {
    loading : false,
    error: null,
    user: null
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.loading = false
            state.user = null
        },
    },

    extraReducers: ( builder ) => {
        builder
            .addCase(signUp.pending, (state) =>{
                state.loading = true
            })
    
            .addCase(signUp.fulfilled, (state, action) =>{
                state.loading = false
            })
    
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;  
                state.error = action.payload;
            })

        builder
            .addCase(login.pending, (state) =>{
                state.loading = true
            })

            .addCase(login.fulfilled, (state, {payload})=>{
                state.loading = false
                saveAuthData(payload)
            })

            .addCase(login.rejected , (state, action)=>{
                state.loading = false
                state.error = action.payload;
            })
    }
})

export const authAction = authSlice.actions 

export default authSlice.reducer 