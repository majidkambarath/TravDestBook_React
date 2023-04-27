import {createSlice,PayloadAction} from '@reduxjs/toolkit'
 
export interface fillterState {
    fillterData:object[]
}
const initialState : fillterState={
    fillterData:[],
}

const fillterSlice = createSlice({
    name:'fillterSliceStore',
    initialState,
    reducers:{
        fillterStoreData:(state,action:PayloadAction<object[]>)=>{
             state.fillterData=action.payload
        }
    }
})

export const {fillterStoreData} = fillterSlice.actions
export default fillterSlice.reducer