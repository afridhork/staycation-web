import React,{ChangeEvent, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkoutBooking } from 'store/features/checkout'

import InputDateNumber from "elements/Form/InputDateNumber"
import InputDate from "elements/Form/InputDate"
import Button from "elements/Button"

import { InputDurationDate } from 'models/detailPage/InputDurationDate'
import { InputDateCalendar } from 'models/detailPage/InputDateCalendar'

import { detailPage } from 'models/detailPage'
import { RootState } from 'store'

export default function BookingForm({items}: {items?: detailPage}) {
  const dispatch = useDispatch()
  const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)

  const [data, setdata] = useState<InputDateCalendar>({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  })

  function updateData(e: ChangeEvent<HTMLInputElement>){
		setdata(prev => ({
      ...prev,
			// [(e.target as HTMLInputElement).name] : (e.target as HTMLInputElement).value
			[e.target.name] : e.target.value
		}))
	}

  function startBooking(){
    const startDate = data.date.startDate
    const serializedStartDate = startDate.toISOString();
    const endDate = data.date.endDate
    const serializedEndDate = endDate.toISOString();

    dispatch(
      checkoutBooking({
        _id: items?._id,
        duration: data.duration,
        date: {
          startDate: serializedStartDate,
          endDate: serializedEndDate,
        },
      })
    )
  }
  
  useEffect(() => {
    const startDate: any = new Date(data.date.startDate);
		const endDate: any = new Date(data.date.endDate);
		const duration = new Date(endDate - startDate).getDate();
		setdata(prev =>({
      ...prev,
			duration
		}))
	}, [data.date])

  useEffect(() => {
    const startDate = new Date(data.date.startDate)
    const endDate = new Date(
      startDate.setDate(startDate.getDate() + +data.duration - 1)
    )
    
    setdata(prev=>({
      ...prev,
      date:{
        ...prev.date,
        endDate
      }
    }))
  }, [data.duration, data.date.startDate])

  return (
    <div data-name="bookingForm">
      {
        items && (
          <div className={`card card-booking${checkTheme ? '-light' : ''} bordered`}>
            <h4 className={`${checkTheme ? 'text-light':'text-secondary'}`}>Start Booking</h4>
            <h1 className="text-success mb-3">${items.price} <span style={{color: 'gray'}} className='font-weight-light'>per night</span> </h1>
            <label className={`${checkTheme ? 'text-light':'text-secondary'}`}>How long you will stay?</label>
            <InputDateNumber
              max={30}
              min={1}
              suffix=" night"
              prefix=""
              isSuffixPlural
              onChange={updateData}
              name='duration'
              value={data.duration}
            />
            <label className={`${checkTheme ? 'text-light':'text-secondary'} mt-3`}>Pick a Date</label>
            <InputDate
              onChange={updateData}
              name='date'
              value={data.date}
            />
            <h6
              className='text-booking'
              style={{marginTop:'20px'}}>
              You will pay
              <span className={`text-booking-price${checkTheme ? '-light':''}`}>
                {" "}${items.price * data.duration} USD
              </span>{" "}
              <span className={`text-booking-duration${checkTheme ? '-light':''}`}>
                {data.duration} {items.unit}
              </span>
            </h6>
            <Button
              type='link'
              className='btn mt-5'
              isPrimary
              onClick={startBooking}
              href='/checkout'
            >
              Continue to Book
            </Button>
          </div>
        )
      }
    </div>
  )
}
