import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";
// import userSlice from "./userSlice";
import userReducer from '../utils/userSlice'


export default configureStore({
    reducer:{
        user: userReducer,
    },
});