import { createSlice } from "@reduxjs/toolkit";
import { CHECKOUT_BOOKING } from "store/type";

const Checkout = createSlice({
   name: "checkout",
   initialState:{
      payload:""
   },
   reducers:{
      checkoutBooking: (state, action) =>{
         // state.type = CHECKOUT_BOOKING
         state.payload = action.payload
      }
   }
})

export const {checkoutBooking} = Checkout.actions
export default Checkout.reducer