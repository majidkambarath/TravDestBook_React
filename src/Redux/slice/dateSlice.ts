import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DateState {
   DatePicker: {

        startDate: Date;
        endDate: Date;
    }
  
  }
const initialState: DateState = {
    DatePicker:{
        startDate: new Date(),
        endDate: new Date(),
    }
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<any>) => {
        state.DatePicker = action.payload
     
    },
  },
});

export const { setDate } = dateSlice.actions;

export default dateSlice.reducer;
