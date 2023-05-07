import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface destinationState {
  
    destinationsFetch: {
        _id:string,
        Title:string,
        priceCate : string,
        BookingData?:any,
        ArrivedDate?:any,
        SubTotal:number
    };
  }
  const initialState: destinationState = {
      
    destinationsFetch: {
        _id:'',
        Title:'',
        priceCate : '',
        BookingData:'',
        ArrivedDate:'',
        SubTotal:0
    },
  };
  const destinationShowSlice = createSlice({
    name: "destinationShow",
    initialState,
    reducers: {
      setDestinationShowData: (state, action: PayloadAction<any>) => {
        state.destinationsFetch = action.payload;
      },
      resetDestinationShowData: (state) => {
        state.destinationsFetch = {
            _id:'',
            Title:'',
            priceCate : '',
            BookingData:'',
            ArrivedDate:'',
            SubTotal:0
        };
      },
    },
    
  });
  
  export const { setDestinationShowData,resetDestinationShowData } = destinationShowSlice.actions;
  export default destinationShowSlice.reducer;
  