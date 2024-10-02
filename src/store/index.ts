import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from './auth/auth.slice'

export const store = configureStore({
    reducer: {
        auth : authReducer
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch 

export const useAppDispatch: () => AppDispatch = useDispatch;
