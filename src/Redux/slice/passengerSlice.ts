import { createSlice } from '@reduxjs/toolkit';

const passengerSlice = createSlice({
    name: 'passenger',
    initialState: {
      adultCount: 0,
      childCount: 0,
      infantCount: 0,
    },
    reducers: {
      updateAdultCount(state, action) {
        state.adultCount = action.payload;
      },
      updateChildCount(state, action) {
        state.childCount = action.payload;
      },
      updateInfantCount(state, action) {
        state.infantCount = action.payload;
      },
    },
  });
  export const { updateAdultCount, updateChildCount, updateInfantCount } =
  passengerSlice.actions;
  export default passengerSlice.reducer;