import React from 'react'

import BrandcIcon from 'parts/BrandIcon'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

export default function Footer({isCheckout}: {isCheckout:boolean|undefined}) {
   const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)
   if(isCheckout) {
      return (
         <footer></footer>
      )
   }
  return (
   <footer>
      <div className="container">
         <div className="row">
            <div className="col-12 col-lg-3" style={{width: 320}}>
                  <BrandcIcon />
                  <p className="brand-tagline">
                     We kaboom your beauty holiday instantly and memorable.
                  </p>
            </div>
            <div className="col-12 col-lg-3">
                  <h6 className={`${checkTheme ? 'light':''} mt-2`}>
                     For Beginners
                  </h6>
                  <ul className="list-group list-group-flush">
                     <li className="list-group-item">
                        <a href="/register">
                              New Account
                        </a>
                     </li>
                     <li className="list-group-item">
                        <a href="/properties">
                              Start Booking a Room
                        </a>
                     </li>
                     <li className="list-group-item">
                        <a href="/use-payments">
                              Use Payments
                        </a>
                     </li>
                  </ul>
            </div>
            <div className="col-12 col-lg-3">
                  <h6 className={`${checkTheme ? 'light':''} mt-2`}>
                     Explore Us
                  </h6>
                  <ul className="list-group list-group-flush">
                     <li className="list-group-item">
                        <a href="/careers">
                              Our Careers
                        </a>
                     </li>
                     <li className="list-group-item">
                        <a href="/privacy">
                              Privacy
                        </a>
                     </li>
                     <li className="list-group-item">
                        <a href="/terms">
                              Terms & Conditions
                        </a>
                     </li>
                  </ul>
            </div>
            <div className="col-12 col-lg-3">
                  <h6 className={`${checkTheme ? 'light':''} mt-2`}>
                     Connect Us
                  </h6>
                  <ul className="list-group list-group-flush">
                     <li className="list-group-item">
                        <a href="/mail:support@staycation.id">
                              support@staycation.id
                        </a>
                     </li>
                     <li className="list-group-item">
                        <a href="/tel: +6222081996">
                              021 - 2208 - 1996
                        </a>
                     </li>
                     <li className="list-group-item">
                        <span>
                              Staycation, Kemang, Jakarta
                        </span>
                     </li>
                  </ul>
            </div>
         </div>
         <div className="row">
            <div className="col text-center copyright">
                  <span>Copyright 2019 • All rights reserved • Staycation</span>

            </div>
         </div>
      </div>
   </footer>
  )
}
