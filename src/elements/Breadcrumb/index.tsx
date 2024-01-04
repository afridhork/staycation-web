import React from 'react'

import "./index.scss"
import { useSelector } from 'react-redux'
import { RootState } from 'store'

export default function Index() {
  const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)
   return (
      <>
         <nav aria-label="breadcrumb">
            <ol className={`breadcrumb${checkTheme ? '-light':''}`}>
               <li className="breadcrumb-item"><a href="/">Home</a></li>
               <li className={`breadcrumb-item active${checkTheme ? '-light' : ''} ml-2`} aria-current="page">House Details</li>
            </ol>
         </nav>
      </>
   )
}
