import {configureStore} from '@reduxjs/toolkit';
import packageSlice from './slice/packageSlice';
import actvitiesSlice from './slice/actvitiesSlice';
import destinationID from './slice/destinIdSlice';
import destinationSlice from './slice/destinationSlice';
export const store = configureStore({
    reducer:{
        package:packageSlice,
        acitvtiy:actvitiesSlice,
        destinationID:destinationID,
        destination:destinationSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch