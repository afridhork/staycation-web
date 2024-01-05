import React from 'react'
import Fade from 'react-reveal/Fade'

import testimony_frame from "assets/images/testimonial-landingpages-frame.jpg";

import { testimonial } from 'models/landingPage/testimonial'
import Button from 'elements/Button'
import Star from 'elements/Star'
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function Testimony({items, isLoading}: {items?: testimonial, isLoading?:boolean}) {
   const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)

  return (
    <section className="container" data-name="testimony">
      {
         items && (
            <div className="row">
               <div className="col-lg-4 col-12 mb-5">
                  <div className="testimony-image-placeholder">
                     <img 
                        src={testimony_frame} 
                        className={`position-absolute ${checkTheme ? 'd-none':''}`}
                        alt="" 
                     />
                     <img 
                        src={items.imageUrl} 
                        className={`position-absolute ${checkTheme ? 'responsive-grid':''}`}
                        alt="" 
                     />
                  </div>
               </div>
               
               
               <div className="col-lg-8 col-12">
                  <div className="d-flex justify-content-center align-items-center" style={{height:'100%'}}>
                     <div className="pl-lg-5 ml-lg-5">
                        <h4 className={`${checkTheme ?'text-light':'text-secondary'}`}>{items.name}</h4>
                        <Star value={items.rate} height={40} width={40} spacing={4}></Star>
                        <h3 className={`${checkTheme ?'text-light':'text-secondary'}`}>{items.content}</h3>
                        <span className="d-block" style={{color:'gray'}}>{items.familyName},{items.familyOccupation}</span>
                        <Button 
                           type="link" 
                           className='btn mt-4' 
                           isPrimary
                           href={`/testimonial/${items._id}`}
                        >
                           Read Their Story
                        </Button>
                     </div>
                  </div>
               </div>
               
            </div>
         )
      }
    </section>
  )
}
