import { createSlice } from "@reduxjs/toolkit";

const Theme = createSlice({
   name: "checkout",
   initialState:{
      isDark:false
   },
   reducers:{
      isDark: (state, action) =>{
         // state.type = CHECKOUT_BOOKING
         state.isDark = action.payload
      }
   }
})

export const {isDark} = Theme.actions
export default Theme.reducer