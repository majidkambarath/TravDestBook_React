import {createSlice,PayloadAction} from '@reduxjs/toolkit'

export interface destinationStateID{
    destinationsID:string|undefined|null
}
const initialState : destinationStateID={
    destinationsID:"",
}

const destinationSlice = createSlice({
    name:"destinationID",
    initialState,
    reducers:{
        destinationIDData:(state,action:PayloadAction<string|undefined|null>)=>{
             state.destinationsID=action.payload
        }
    }
})

export const {destinationIDData} = destinationSlice.actions
export default destinationSlice.reducer