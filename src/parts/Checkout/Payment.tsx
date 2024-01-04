import React,{ChangeEvent, useState} from 'react'
import Fade from 'react-reveal/Fade'

import { checkout } from 'models/checkoutPage';
import { featureCheckout } from 'models/features/featureCheckout';
import { detailPage } from 'models/detailPage';

import InputFile from 'elements/Form/InputFile'
import InputText from 'elements/Form/InputData'

import logoBca from "assets/images/logo_bca.png";
import logoMandiri from "assets/images/logo_mandiri.png";
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function Payment(
   {
      data,
      onChange,
      checkout,
      itemDetails,
   }: 
   {
      data:checkout, 
      onChange:(event: ChangeEvent<HTMLInputElement>)=>void,
      checkout: featureCheckout,
      itemDetails: detailPage,

   }) {
      const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)
      const [hasError, setHasError] = useState<{name: string,message: string}>({
         name:"",
         message:""
      });
      const tax: number = 10;
      const subTotal: number = itemDetails.price * checkout.payload.duration
      const grandTotal = (subTotal * tax) / 100 + subTotal;
      const window_width = window.innerWidth

  return (
   <section className="container px-5" data-name="payment">
      <div className="row">
          
            <div className={`col-lg-6 col-12 ${checkTheme ? 'text-primary':'text-secondary'} border-right px-5`}>
               <h6>Transfer Pembayaran:</h6>
               <p>Tax: {tax}%</p>
               <p>Sub total: ${subTotal} USD</p>
               <p>Total: ${grandTotal} USD</p>
               <div className="row">
                  <div className="col-lg-2 col-4">
                     <img src={logoBca} alt="bank central asia" width="60" />
                  </div>
                  <div className="col-lg-10 col-8">
                     <dl>
                     <dd>Bank Central Asia</dd>
                     <dd>2208 1996</dd>
                     <dd>BuildWith Angga</dd>
                     </dl>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-2 col-4">
                     <img src={logoMandiri} alt="bank central asia" width="60" />
                  </div>
                  <div className="col-lg-10 col-8">
                     <dl>
                        <dd>Bank Mandiri</dd>
                     <dd>2208 1996</dd>
                     <dd>BuildWith Angga</dd>
                     </dl>
                  </div>
               </div>
            </div>
          
          
            <div className="col-lg-6 col-12 pl-5">
               <label htmlFor={`proofPayment${checkTheme ? '-light':''}`}>Upload Bukti Transfer</label>
               <InputFile
                  accept="image/*"
                  id="proofPayment"
                  name="proofPayment"
                  className={`${checkTheme ? 'light':''}`}
                  onChange={onChange}
               />
               <label className='mt-3' htmlFor={`bankName${checkTheme ? '-light':''}`}>Asal Bank</label>
               <InputText
                  placeholder="Please type here..."
                  name='bankName'
                  type='text'
                  value={data.bankName}
                  onChange={onChange}
                  error={hasError}
               />
               <label className='mt-3' htmlFor={`bankHolder${checkTheme ? '-light':''}`}>Nama Pengirim</label>
               <InputText
                  placeholder="Please type here..."
                  name='bankHolder'
                  type='text'
                  value={data.bankHolder}
                  onChange={onChange}
                  error={hasError}
               />
            </div>
          
      </div>
   </section>
  )
}
