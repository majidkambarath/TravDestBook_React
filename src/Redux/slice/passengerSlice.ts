import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PassengerState {
  adultCount: number;
  childCount: number;
  infantCount: number;
}

const initialState: PassengerState = {
  adultCount: 0,
  childCount: 0,
  infantCount: 0,
};

const passengerSlice = createSlice({
  name: "passenger",
  initialState,
  reducers: {
    updateAdultCount(state, action: PayloadAction<number>) {
      state.adultCount = action.payload;
    },
    updateChildCount(state, action: PayloadAction<number>) {
      state.childCount = action.payload;
    },
    updateInfantCount(state, action: PayloadAction<number>) {
      state.infantCount = action.payload;
    },
    resetPassengerCount(state) {
      state.adultCount = 0;
      state.childCount = 0;
      state.infantCount = 0;
    },
  },
});

export const {
  updateAdultCount,
  updateChildCount,
  updateInfantCount,
  resetPassengerCount,
} = passengerSlice.actions;
export default passengerSlice.reducer;
