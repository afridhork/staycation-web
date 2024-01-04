import React,{ChangeEvent, useState} from 'react'
import Layout from 'layout'

import Stepper,{Numbering,TitleCheckout,MainContent,Controller} from 'elements/Stepper'
import Button from 'elements/Button'
import BookingInformation from 'parts/Checkout/BookingInformation'
import Payment from 'parts/Checkout/Payment'
import Completed from 'parts/Checkout/Completed'

import { checkoutDate, checkoutPayload } from 'models/features/featureCheckout'
import { checkout as checkoutModel } from 'models/checkoutPage'
import { detailPage } from 'models/detailPage'
import { useSelector } from 'react-redux'

import { RootState } from 'store'
import { useSubmitBookingMutation } from 'store/services/pageFetch'


export default function Checkout() {
  const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)

   const checkoutState = useSelector((state: any) => state.checkout)
   const item_id = checkoutState.payload._id
   const checkoutPage = useSelector((state: RootState) => state.pageFetch.queries?.[`detailPage("${item_id}")`]?.data)
   
   const [submitBooking, {data}] = useSubmitBookingMutation()

   const [dataInput, setData] = useState<checkoutModel>({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
   })

   const [hasError, setHasError] = useState<{name: string,message: string}>({
      name:"",
      message:""
   });
   
   function onChange (event: ChangeEvent<HTMLInputElement>) {
      let pattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (event.target.name === "email"){
         if (!pattern.test(event.target.value) && event.target.value.length != 0 ){
            setHasError(
               {
                  name:event.target.name,
                  message:"Please match the requested format."
               }
            );
         } else if( pattern.test(event.target.value) || event.target.value.length == 0 ){
            setHasError(
               {
                  name:"",
                  message:""
               }
            );
         } 
      }
      
      setData(prevData => ({
         ...prevData,
         [event.target.name]: event.target.value,
       }));

   }

   function handleSubmit(nextStep: ()=>void) {      
      const payload = new FormData();
      const checkout = {...checkoutState.payload}
      for(let i in dataInput){
         if(i == 'proofPayment'){
            if(dataInput[i as keyof checkoutModel]){
               payload.append('image', dataInput[i as keyof checkoutModel])
            }
         }else if(i == 'bankHolder'){
            if(dataInput[i as keyof checkoutModel]){
               payload.append('accountHolder', dataInput[i as keyof checkoutModel])
            }
         } else if(i == 'bankName'){
            if(dataInput[i as keyof checkoutModel]){
               payload.append('bankForm', dataInput[i as keyof checkoutModel])
            }
         } else{
            if(dataInput[i as keyof checkoutModel]){
               payload.append(i, dataInput[i as keyof checkoutModel])
            }
         }
      }
      for(let j in checkout.date){
         checkout[j as keyof checkoutPayload] = checkout.date[j]
      }
      for(let k in checkout){
         if(k == 'date'){
            delete checkout[k as keyof checkoutPayload]
         }else if(k == '_id'){
            payload.append('idItem', checkout[k as keyof checkoutPayload])
         }else if(k == 'startDate'){
            payload.append('bookingStartDate', checkout[k as keyof checkoutPayload])
         }else if(k == 'endDate'){
            payload.append('bookingEndDate', checkout[k as keyof checkoutPayload])
         }else{
            payload.append(k, checkout[k as keyof checkoutPayload])
         }
      }
      submitBooking(payload).then(() => {
         nextStep()
      })
   }

   const step = {
      bookingInformation: {
         title: "Booking Information",
         description: "Please fill up the blank fields below",
         content:(
            <BookingInformation
               data={dataInput}
               checkout={checkoutState}
               itemDetails={checkoutPage as detailPage}
               onChange={onChange}
               error={hasError}
            />
         )
      },
      payment:{
         title: "Payment",
         description: "Kindly follow the instructions below",
         content:(
            <Payment
               data={dataInput}
               itemDetails={checkoutPage as detailPage}
               checkout={checkoutState}
               onChange={onChange}
            />
         )
      },
      completed:{
         title: "Yay! Completed",
         description: null,
         content: (<Completed />)
      }

   }
   return (
      <Layout isCheckout>
         <Stepper steps={step} initialStep="bookingInformation">
            {
               (prevStep, nextStep, currentStep, steps)=>(
                  <>
                     <Numbering
                        data={steps}
                        current={currentStep}
                     />

                     <TitleCheckout
                        data={steps}
                        current={currentStep}
                     />

                     <MainContent
                        data={steps}
                        current={currentStep}
                     />

                     {
                        currentStep === 'bookingInformation' && (
                           <Controller>
                              {
                                 dataInput.firstName !== "" &&
                                 dataInput.lastName !== "" &&
                                 dataInput.email !== "" &&
                                 dataInput.phoneNumber !== "" && (
                                    <Button
                                       className="btn mb-3"
                                       type="button"
                                       isBlock
                                       isPrimary
                                       hasShadow
                                       onClick={nextStep}
                                    >
                                       Continue to Book
                                    </Button>
                                 )
                              }
                              <Button
                                 className={`btn ${checkTheme ? 'light':''} mb-3`}
                                 type="link"
                                 isExternal
                                 isBlock
                                 href={`/properties/${checkoutState.payload._id}`}
                              >
                                 Cancel
                              </Button>
                           </Controller>
                        )
                     }
                     {
                        currentStep === 'payment' &&(
                           <Controller>
                              {
                                 dataInput.proofPayment !== "" &&
                                 dataInput.bankName !== "" &&
                                 dataInput.bankHolder !== "" && (
                                       <Button
                                          className="btn mb-3"
                                          type="button"
                                          isBlock
                                          isPrimary
                                          hasShadow
                                          onClick={()=>{handleSubmit(nextStep)}}
                                       >
                                          Continue to Book
                                       </Button>
                                 )
                              }
                              <Button
                                 className={`btn ${checkTheme ? 'light':''}`}
                                 type="link"
                                 // isExternal
                                 isBlock
                                 onClick={prevStep}
                              >
                                 Cancel
                              </Button>
                           </Controller>
                        )
                     }
                     {
                        currentStep === 'completed' &&(
                           <div className='text-center mx-5'>
                              <Button
                                 className="btn"
                                 type="link"
                                 isPrimary
                                 href="/"
                              >
                                 Back to Start
                              </Button>
                           </div>
                        )
                     }
                  </>
               )
            }
         </Stepper>
      </Layout>
   )
}
