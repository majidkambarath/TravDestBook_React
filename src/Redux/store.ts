import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import packageSlice from './slice/packageSlice';
import actvitiesSlice from './slice/actvitiesSlice';
import destinationID from './slice/destinIdSlice';
import destinationSlice from './slice/destinationSlice';
import authSlice from './slice/authSlice';
import fillterSlice from './slice/fillterSlice';
import currentSlice from './slice/dateSlice';
import passengerDetailsReducer from './slice/passengerSlice';
import extraService from './slice/extraService';
import bookingSlice from './slice/bookingDetailsSlice'
import bookingInvoice from './slice/bookingIvoice'
import authChatID from './slice/chatUserId'
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  package: packageSlice,
  acitvtiy: actvitiesSlice,
  destinationID: destinationID,
  destination: destinationSlice,
  authData: authSlice,
  fillter: fillterSlice,
  Cdate: currentSlice,
  passenger: passengerDetailsReducer,
  extraServiceSlice: extraService,
  bookingdetails:bookingSlice,
  bookingShow:bookingInvoice,
  authChatId :authChatID
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
