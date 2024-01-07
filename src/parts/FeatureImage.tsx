import React from 'react'
import Fade from 'react-reveal/Fade'

import { imageId } from 'models/detailPage/imageDetail'

import Skeleton from 'react-loading-skeleton';

export default function FeatureImage({items, isLoading}: {items?: imageId[], isLoading?:boolean}) {
  return (
    <section className="container" data-name="FeatureImage">
      {
        items && !isLoading ? (
          <div className="row">
              <div className="col-lg-7 col-12 mb-3">
                <figure className="img-wrapper">
                  <img className="img-cover h-100" src={`${process.env.REACT_APP_HOST}/${items[0].imageUrl}`} alt="" />
                </figure>
              </div>
            <div className="col-lg-5 col-12 mb-3">
              <div className="row h-100">
                {
                  items.map((item,index) =>{
                    return(
                      index!==0&&(
                          <div className={`col-12 ${index%2!=0?'pb-2':'pt-2'}`} key={index}>
                            <figure className="img-wrapper">
                              <img className="img-cover" src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`} alt="" />
                            </figure>
                          </div>
                      )
                    )
                  })
                  // <div className="col-12">
                  //   <figure className="img-wrapper pt-3">
                  //     <img className="img-cover" src={`${process.env.REACT_APP_HOST}/${items[2].imageUrl}`} alt="" />
                  //   </figure>
                  // </div>

                }
              </div>
            </div>
          </div>
        ) : isLoading && (
          <>
            <div className="row">
              <div className="col-lg-7 col-12 mb-3">
                <Skeleton style={{height:'300px'}}/>
              </div>
              <div className="col-lg-5 col-12 mb-3">
                <Skeleton style={{height:'300px'}}/>
              </div>
            </div>
          </>
        )
      }
    </section>
  )
}
