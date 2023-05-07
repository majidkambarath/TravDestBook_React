// in your reducers.ts file
import { createSlice } from "@reduxjs/toolkit";

interface ExtraService {
  name: string;
  price: number;
}

interface ExtraServiceState {
  services: ExtraService[];
  selectedServices: ExtraService[];
  totalPrice: number;
}

const initialState: ExtraServiceState = {
  services: [
    {
      name: "Airport pickup",
      price: 50,
    },
    {
      name: "Equipment rental",
      price: 100,
    },
    {
      name: "Travel insurance",
      price: 150,
    },
  ],
  selectedServices: [],
  totalPrice: 0,
};

const extraServiceSlice = createSlice({
  name: "extraService",
  initialState,
  reducers: {
    addService: (state, action) => {
      // const { name, price } = action.payload;
      // console.log(typeof(price));
      state.selectedServices.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeService: (state, action) => {
      console.log(state.selectedServices);

      state.selectedServices = state.selectedServices.filter(
        (service) => service.name !== action.payload.name
      );
      state.totalPrice -= action.payload.price;
    },
    resetSelectedServices: (state) => {
      state.services = initialState.services;
      state.totalPrice = initialState.totalPrice;
    },
  },
});

export const { addService, removeService, resetSelectedServices } =
  extraServiceSlice.actions;

export default extraServiceSlice.reducer;
