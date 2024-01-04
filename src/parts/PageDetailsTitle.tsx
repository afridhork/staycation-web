import React from 'react'
import Fade from 'react-reveal/Fade'

import Breadcrumb from 'elements/Breadcrumb'
import { detailPage } from 'models/detailPage'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

export default function PageDetailsTitle({items}: {items: detailPage}) {
  const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)

  const {title,city,country}: {title: string,city: string,country: string} = items
  const window_width = window.innerWidth
  return (
    <section className="container" data-name="detail-title">
       
        <div className="row">
          <div className="col-lg-5 col-12">
            <Breadcrumb/>
          </div>
          <div className="col-lg-7 col-12">
            {
              window_width <= 576 ? (
                <div className='d-flex justify-content-center'>
                  <div className="text-center">
                    <h2 className={`${checkTheme ? 'text-primary':'text-secondary'}`}>{title}</h2>
                    <p style={{color:'gray'}}>{city},{country}</p>
                  </div>
                </div>
              ) 
              :(
                <div className='d-flex justify-content-start'>
                  <div className="text-center">
                    <h2 className={`${checkTheme ? 'text-light':'text-secondary'}`}>{title}</h2>
                    <p style={{color:'gray'}}>{city},{country}</p>
                  </div>
                </div>

              )
            }
          </div>
        </div>
       
    </section>
  )
}
