import React from 'react'
import Fade from 'react-reveal/Fade'

import {activityId} from 'models/detailPage/activities'
import Button from "elements/Button"
import { useSelector } from 'react-redux'
import { RootState } from 'store'

export default function Activities({items}: {items: activityId[]}) {
  const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)

  return (
    <section className="container" data-name="activities">
      <h3 className={`${checkTheme ? 'text-light':'text-secondary'}`}>Treasure to Choose</h3>
      <div className="row">
        {
          items.map((item,index)=>{
            return (
                <div className="col-lg-3 col-12" key={index}>
                  <div className="card">
                    <div className="img-wrapper">
                      <img
                        src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                        className='img-cover'
                      />
                    </div>
                  </div>
                  <div className="meta-wrapper mb-3">
                    <Button
                      type='link'
                      href={`/properties/${item._id}`}
                    >
                      <h5 className={`${checkTheme ? 'text-primary':'text-secondary'} mb-0`}>{item.name}</h5>
                    </Button>
                    <span className='text-desc-activities'>{item.type}</span>
                  </div>
                </div>
               
            )
          })
        }
      </div>
    </section>
  )
}
