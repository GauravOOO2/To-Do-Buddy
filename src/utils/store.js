import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";
// import userSlice from "./userSlice";
import userReducer from '../utils/userSlice'
import whetherSlice from "./whetherSlice";


export default configureStore({
    reducer:{
        user: userReducer,
        whether: whetherSlice,
    },
});