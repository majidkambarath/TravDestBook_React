import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface authChatIDState {
    id:string
}
const initialState :authChatIDState={
    id : ''
}

const authchatIdSlice =createSlice({
    name:'authChatID',
    initialState,
    reducers:{
        setAuthChatID :(state,action:PayloadAction<string>)=>{
               state.id = action.payload
        }
    }
})

export const { setAuthChatID } = authchatIdSlice.actions;
export default authchatIdSlice.reducer;
