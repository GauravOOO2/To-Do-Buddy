import { createSlice } from "@reduxjs/toolkit";

 const whetherSlice = createSlice({
    name: 'whether',
    initialState: {
        whetherData: '',
    },
    reducers: {
        updateWhetherData: (state, action)=>{
            state.whetherData = action.payload
        },
    }
})

export default whetherSlice.reducer;
export const {updateWhetherData} = whetherSlice.actions;
