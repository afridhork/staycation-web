import React from 'react'
import Fade from 'react-reveal/Fade'

import Button from "elements/Button"
import { category } from 'models/landingPage/category'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

export default function Categories({items}:{items: category[]}) {
   const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)

  return (
      <section className="container" data-name="category">
         {items.map((category,index)=>{
            return(
                  <div key={index} >
                     <h4 className={`category-title${checkTheme ? '-light' : ''}`}>{category.name}</h4>
                     <div className="row mb-5">
                     {category.itemId.map((item,index)=>{
                        return(
                           <div className={`col-lg-3 col-12`} key={index}>
                              <div className="card">
                                 {item.isPopular&&(
                                    <div className="tag">
                                       <span className='font-weight-bold'>Popular</span>
                                       Choice
                                    </div>
                                 )}
                                 <figure className="img-wrapper" style={{height:180}}>
                                    <img className="img-cover" src={item.imageId[0].imageUrl} alt="" />
                                 </figure>
                              </div>
                              <div className="meta-wrapper mt-3">
                                 <Button 
                                    type="link"
                                    href={`properties/${item._id}`}
                                 >
                                    <h5 className={`${checkTheme ? 'text-primary' : 'text-secondary'}`}>{item.title}</h5>
                                 </Button>
                                 <span className='text-dom-categories'>{item.city},{item.country}</span>
                              </div>
                           </div>
                        )
                     })}
                     </div>
                  </div>
                
            )
         })}
      </section>
  )
}
