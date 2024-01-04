export interface featureCheckout {
   type: string,
   payload: checkoutPayload
}

export interface checkoutPayload {
   _id: string,
   duration: number,
   date: checkoutDate
}

export interface checkoutDate {
   startDate: Date,
   endDate: Date
}