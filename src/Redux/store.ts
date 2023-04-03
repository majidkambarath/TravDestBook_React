import {configureStore} from '@reduxjs/toolkit';
import packageSlice from './slice/packageSlice';

export const store = configureStore({
    reducer:{
        package:packageSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch