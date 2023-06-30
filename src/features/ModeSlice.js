import { createSlice } from "@reduxjs/toolkit";

const initialState={
    darkMode: false,
}

export const modeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        toggleTheme: (state)=>{
            state.darkMode=!state.darkMode
        }
            
    }

})
export default modeSlice.reducer
export const {toggleTheme}=modeSlice.actions
export const selectAllTheme=(state)=>state.theme.darkMode