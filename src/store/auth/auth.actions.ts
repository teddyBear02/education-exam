import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/api";
import { PayloadLogin, PayloadSignUp } from "@/models";

const base_url = process.env.NEXT_PUBLIC_BASE_URL

export const signUp = createAsyncThunk('auth/signUp', async (user : PayloadSignUp, thunkAPI) =>{
    try {
        const res = await api.post(`${base_url}/auth/register`,user) 
        if(res.status !== 200){
            return thunkAPI.rejectWithValue(res.data)
        }
        return thunkAPI.fulfillWithValue(res.data)
    } catch (error:any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
}) 

export const login = createAsyncThunk('auth/login', async (user : PayloadLogin, thunkAPI) =>{
    try {
        const res = await api.post(`${base_url}/auth/login`,user) 
        if(res.status !== 200){
            return thunkAPI.rejectWithValue(res.data)
        }
        return thunkAPI.fulfillWithValue(res.data)

    } catch (error:any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const logout = createAsyncThunk('auth/logout', async (arg, thunkAPI) =>{
    try {
        const res = await api.get(`${base_url}/auth/logout`)
        if(res.status !== 200){
            return thunkAPI.rejectWithValue(res.data)
        }
        return thunkAPI.fulfillWithValue(res.data)
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
}) 