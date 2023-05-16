import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BookingState {
  bookingData: any[];
}

const initialState: BookingState = {
  bookingData: [],
};

const bookingDetailsSlice = createSlice({
  name: 'bookingCollection',
  initialState,
  reducers: {
    setBookingDetails: (state, action: PayloadAction<any[]>) => {
        state.bookingData = action.payload
    },
  },
});

export const { setBookingDetails } = bookingDetailsSlice.actions;
export default bookingDetailsSlice.reducer;
