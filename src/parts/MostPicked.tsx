import React,{forwardRef} from 'react'
import Fade from 'react-reveal/Fade'

import Button from 'elements/Button'
import { mostPicked } from 'models/landingPage/mostPicked'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

const MostPicked = forwardRef(({items, isLoading}: {items?: mostPicked[], isLoading?:boolean}, ref: any) => {
   const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)
      return (
         <section className="container" data-name='most-picked' ref={ref}>
            {
               items && (
                  <>
                     <p className={`mp-title${checkTheme ? '-light':''}`}>Most Picked</p>
                     <div className="row">
                        <div className="col-lg-4 col-12 mb-4" style={{height:'405px'}}>
                           <div className="card card-feature">
                              <div className="tag">
                                 ${items[1].price}
                                 <span className='font-weight-300'>per {items[1].unit}</span>
                              </div>
                              <div className="img-wrapper">
                                 <img src={items[1].imageId[0].imageUrl} className='img-cover' />
                              </div>
                              <div className="meta-wrapper">
                                 <Button
                                    type='link'
                                    className='stretched-link d-blocked text-white'
                                    href={`properties/${items[1]._id}`}
                                 >
                                    <h5>{items[1].title}</h5>
                                    <span>
                                       {items[1].city}, {items[1].country}
                                    </span>
                                 </Button>
                              </div>
                           </div>
                        </div>
                        
                        
                        <div className="col-lg-8 col-12">
                           <div className="row">
                              {items.map((item,index)=>{
                                 return(
                                    index != 1 ? (
                                       <div className={`col-lg-6 col-12 mb-4`} style={{height:'190px'}} key={index}>
                                          <div className="card card-feature">
                                             <div className="tag">
                                                ${item.price}
                                                <span className='font-weight-light'>per {item.unit}</span>
                                             </div>
                                             <div className="img-wrapper" data-key={`item-mp-${index}`}>
                                                <img src={item.imageId[0].imageUrl} alt="" className="img-cover"/>
                                             </div>
                                             <div className="meta-wrapper">
                                                <Button
                                                   type='link'
                                                   className='stretched-link d-blocked text-white'
                                                   href={`properties/${item._id}`}
                                                >
                                                   <h5>{item.title}</h5>
                                                   <span>
                                                      {item.city}, {item.country}
                                                   </span>
                                                </Button>
                                             </div>
                                          </div>
                                       </div>
                                    ):""
                                 )
                              })}
                           </div>
                        </div>
                        
                     </div>
                  </>
                  
               )
            }
         </section>
      )
   }
)

export default MostPicked
