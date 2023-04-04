import {configureStore} from '@reduxjs/toolkit';
import packageSlice from './slice/packageSlice';
import actvitiesSlice from './slice/actvitiesSlice';
export const store = configureStore({
    reducer:{
        package:packageSlice,
        acitvtiy:actvitiesSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch