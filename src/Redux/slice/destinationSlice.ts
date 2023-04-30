import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface destinationState {
  
  destinationsFetch: {
    title: string;
    packageCategory: string;
    price:number;
    activity: string;
    descrption:string,
    Highlights:string,
    priceCategory: string;
    duration: {
      day: number;
      night: number;
    };
    file:string;
    packageService: {
      Hotels: string;
      Flight: string;
      Sightseeing: string;
      Meals: string;
      Transfers: string;
    };
    Included: [];
    Excluded: [];
  };
}
const initialState: destinationState = {
    
  destinationsFetch: {
    title: "",
    packageCategory: "",
    activity: "",
    price:0,
    priceCategory: "",
    descrption:"",
    Highlights:"",
    duration: {
      day: 0,
      night: 0,
    },
    file: "",
    packageService: {
      Hotels: "",
      Flight: "",
      Sightseeing: "",
      Meals: "",
      Transfers: "",
    },
    Included: [],
    Excluded: [],
  },
};

const destinationSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {
    setDestinationData: (state, action: PayloadAction<any>) => {
      state.destinationsFetch = action.payload;
    },
  },
});

export const { setDestinationData } = destinationSlice.actions;
export default destinationSlice.reducer;
