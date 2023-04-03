import {createSlice,PayloadAction} from '@reduxjs/toolkit';

export interface packageState{
    packageCategory :object[]
    status:boolean
}
const initialState : packageState={
    packageCategory:[],
    status:true
}

 const packageSlice = createSlice({
  name:" package",
  initialState,
  reducers: {
    packageCategoryData: (state,action:PayloadAction<object[]>)=>{
           state.packageCategory=action.payload
    }
  }
})

export const {packageCategoryData} = packageSlice.actions 
export default packageSlice.reducer;
