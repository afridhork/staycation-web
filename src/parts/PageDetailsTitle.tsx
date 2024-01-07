import React from 'react'
import Fade from 'react-reveal/Fade'

import Breadcrumb from 'elements/Breadcrumb'
import { detailPage } from 'models/detailPage'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

import Skeleton from 'react-loading-skeleton';

export default function PageDetailsTitle({items, isLoading}: {items?: detailPage, isLoading?:boolean}) {
  const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)

  // const {title,city,country}: {title: string | undefined,city: string | undefined,country: string | undefined} = items
  const window_width = window.innerWidth
  return (
    <section className="container" data-name="detail-title">
      {
        items && !isLoading ? (
          <div className="row">
            <div className="col-lg-5 col-12">
              <Breadcrumb/>
            </div>
            <div className="col-lg-7 col-12">
              {
                window_width <= 576 ? (
                  <div className='d-flex justify-content-center'>
                    <div className="text-center">
                      <h2 className={`${checkTheme ? 'text-primary':'text-secondary'}`}>{items?.title}</h2>
                      <p style={{color:'gray'}}>{items?.city},{items?.country}</p>
                    </div>
                  </div>
                ) 
                :(
                  <div className='d-flex justify-content-start'>
                    <div className="text-center">
                      <h2 className={`${checkTheme ? 'text-light':'text-secondary'}`}>{items?.title}</h2>
                      <p style={{color:'gray'}}>{items?.city},{items?.country}</p>
                    </div>
                  </div>

                )
              }
            </div>
          </div>
        ) : isLoading && (
          <>
            <div className="row">
              <div className="col-lg-5 col-12">
                <Skeleton style={{height:'100%'}}/>
              </div>
              <div className="col-lg-7 col-12">
                {
                  window_width <= 576 ? (
                    <div className='d-flex justify-content-center'>
                      <Skeleton style={{height:'300px'}}/>
                    </div>
                  ) 
                  :(
                    <div className='d-flex justify-content-start'>
                      <Skeleton style={{height:'300px'}}/>
                    </div>
                  )
                }
              </div>
            </div>
          </>
        )
      }   
    </section>
  )
}
