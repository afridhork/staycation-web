import React from 'react'
import Fade from 'react-reveal/Fade'

import BookingForm from './BookingForm'

import { detailPage } from 'models/detailPage'
import formatNumber from 'utils/formatNumber'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

import Skeleton from 'react-loading-skeleton';

export default function FeatureDetailBooking({items, isLoading}: {items?: detailPage, isLoading?:boolean}) {
  const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)

  return (
    <section className="container" data-name="FeatureDetailBooking">
      <div className="row">
        {
          items && !isLoading ? (
            <>
              <div className="col-lg-7 col-12">
                <h4 className={`${checkTheme ? 'text-light':'text-secondary'}`}>About the place</h4>
                <p className="text-description">{items.description}</p>
                <div className="row mt-5">
                  {
                    items.featureId.map((item,index)=>{
                      return(
                        <div className={`col-3 ${index > 3 && 'mt-4 mb-3'}`} key={index}>
                          <img
                            src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                            width='36'
                            height='36'
                          />
                          <h6 className='text-feature-detail mt-2'>
                              {formatNumber(item.qty)}{" "}
                              <span className='font-weight-light'>
                                {item.name}
                              </span>
                          </h6>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
      
              <div className="col-lg-5 col-12">
                <BookingForm items={items}></BookingForm>
              </div>
            </>
          ) : isLoading && (
            <>
              <div className="col-lg-7 col-12">
                <Skeleton style={{height:'300px'}}/>
              </div>
      
              <div className="col-lg-5 col-12">
                <Skeleton style={{height:'300px'}}/>
              </div>
            </>
          )
        }
      </div>
    </section>
  )
}
