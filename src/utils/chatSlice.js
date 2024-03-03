import { createSlice } from "@reduxjs/toolkit";
import { LIVE_COUNT } from "./config";
const chatSlice=createSlice({
    name:"chat",
    initialState:{
        message:[],
    },
    reducers:{
            addMessage:(state,action)=>{
                state.message.splice(LIVE_COUNT,1);
                state.message.push(action.payload);
            },
    },
})
export const {addMessage} =chatSlice.actions;
export default chatSlice.reducer;