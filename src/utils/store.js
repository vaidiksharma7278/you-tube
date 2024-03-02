import { configureStore } from "@reduxjs/toolkit";
import SideMenuSlice from "./SideMenuSlice";
import searchSlice from "./searchSlice";

const store=configureStore({
    reducer:{
        menu:SideMenuSlice,
        search:searchSlice,
    }
})
export default store;