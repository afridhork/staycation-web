import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { landingPage } from 'models/landingPage'
import { detailPage } from 'models/detailPage'

const configValue: string = `${process.env.REACT_APP_HOST}/api/v1`
export const pageFetch = createApi({
   reducerPath:'pageFetch',
   baseQuery : fetchBaseQuery({baseUrl: configValue}),
   endpoints:(builder) => ({
      landingPage: builder.query<landingPage, void>({
         query:()=>'/landing-page'
      }),
      detailPage: builder.query<detailPage, string>({
         query:(id)=>`/detail-page/${id}`,
         keepUnusedDataFor: 365 * 24 * 60 * 60 * 1000
      })
   })
})

export const submitBooking = createApi({
   reducerPath: 'submitBooking',
   baseQuery : fetchBaseQuery({baseUrl: configValue}),
   endpoints:(builder) =>({
      submitBooking: builder.mutation<any,any>({
         query: payload =>({
            url:'booking-page',
            method: 'POST',
            body: payload,
            // headers:{
            //    'Content-Type': 'multipart/form-data',
            //  },
         })
      })
   })
})

export const { useLandingPageQuery, useDetailPageQuery } = pageFetch
export const { useSubmitBookingMutation } = submitBooking