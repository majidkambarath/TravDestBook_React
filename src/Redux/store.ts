import {configureStore} from '@reduxjs/toolkit';
import packageSlice from './slice/packageSlice';
import actvitiesSlice from './slice/actvitiesSlice';
import destinationID from './slice/destinIdSlice';
import destinationSlice from './slice/destinationSlice';
import authSlice from './slice/authSlice';
import fillterSlice from './slice/fillterSlice';
import currentSlice from './slice/dateSlice'
import passengerDetailsReducer from './slice/passengerSlice'
import extraService from './slice/extraService';
export const store = configureStore({
    reducer:{
        package:packageSlice,
        acitvtiy:actvitiesSlice,
        destinationID:destinationID,
        destination:destinationSlice,
        authData:authSlice,
        fillter:fillterSlice,
        Cdate:currentSlice,
        passenger:passengerDetailsReducer,
        extraServiceSlice:extraService
        
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch