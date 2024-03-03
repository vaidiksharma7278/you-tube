import { configureStore } from "@reduxjs/toolkit";
import SideMenuSlice from "./SideMenuSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
    reducer:{
        menu:SideMenuSlice,
        search:searchSlice,
        chat:chatSlice,
    }
})
export default store;