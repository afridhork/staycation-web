import React from 'react'
import Fade from 'react-reveal/Fade'

import { checkout } from 'models/checkoutPage'
import { featureCheckout } from 'models/features/featureCheckout'
import { detailPage } from 'models/detailPage'

import InputText from 'elements/Form/InputData'
// import InputNumber from 'elements/Form/InputNumber'

import { formatDateYear } from 'utils/formatDate'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

export default function BookingInformation(
  {
    data, 
    checkout,
    itemDetails,
    error,
    onChange
  }: 
  {
    data: checkout, 
    checkout: featureCheckout,
    itemDetails: detailPage,
    error: {name: string,message: string},
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }) {
    const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)
    const window_width = window.innerWidth
  return (
    <section className="container px-5" data-name="bookingInformation">
      <div className="row">
         
          <div className="col-lg-6 col-12 h-100 border-right px-5">
            <figure className="img-wrapper mb-3" style={{maxHeight: '270px'}} >
              <img
                className='img-cover' 
                style={{borderRadius: '15px'}}
                src={`${itemDetails.imageId[0].imageUrl}`} 
                alt="" />
            </figure>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className={`${checkTheme ? 'text-primary':'text-secondary'} mb-0`}>{itemDetails.title}</h6>
                <p className='text-description'>{itemDetails.city}, {itemDetails.country}</p>
              </div>
              <div className='text-right'>
                <h6 className={`${checkTheme ? 'text-primary':'text-secondary'} mb-0`}>${itemDetails.price * checkout.payload.duration }USD <span className='text-description'>per </span>{checkout.payload.duration} night</h6>
                <p className='text-description'>{formatDateYear(checkout.payload.date.startDate)} - {formatDateYear(checkout.payload.date.endDate)}</p>
              </div>
            </div>
          </div>
         
         
          <div className="col-lg-6 col-12 pl-5">
            <label htmlFor={`firstName${checkTheme ? '-light':''}`}>First Name</label>
            <InputText
              placeholder="Please type here..."
              name='firstName'
              type='text'
              value={data.firstName}
              onChange={onChange}
              error={error}
            />
            <label className='mt-3' htmlFor={`lastName${checkTheme ? '-light':''}`}>Last Name</label>
            <InputText
              placeholder="Please type here..."
              name='lastName'
              type='text'
              value={data.lastName}
              onChange={onChange}
              error={error}
            />
            <label className='mt-3' htmlFor={`email${checkTheme ? '-light':''}`}>E-mail</label>
            <InputText
              placeholder="Please type here..."
              name='email'
              type='text'
              value={data.email}
              onChange={onChange}
              error={error}
            />
            <label className='mt-3' htmlFor={`phoneNumber${checkTheme ? '-light':''}`}>Phone Number</label>
            <InputText
              placeholder="Please type here..."
              name='phoneNumber'
              type='number'
              value={data.phoneNumber}
              onChange={onChange}
              error={error}
            />
          </div>
         
      </div>
    </section>
  )
}
