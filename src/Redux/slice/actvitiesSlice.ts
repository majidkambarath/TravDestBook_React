import {createSlice,PayloadAction} from '@reduxjs/toolkit';

export interface activitiesState{
    Activity:object[]

}

const initialState : activitiesState={
    Activity:[],
}

const activitesSlice = createSlice({
    name:"Actvities",
    initialState,
    reducers:{
        actvitiesStateData :(state,action:PayloadAction<object[]>)=>{
             state.Activity=action.payload
        }
    }
})

export const {actvitiesStateData} = activitesSlice.actions
export default activitesSlice.reducer