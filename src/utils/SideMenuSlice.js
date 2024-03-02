import { createSlice } from "@reduxjs/toolkit";

 
 const SideMenuSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        }
    },
 });
 export const {toggleMenu,closeMenu}=SideMenuSlice.actions;
export default SideMenuSlice.reducer;