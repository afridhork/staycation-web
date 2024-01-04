import React from 'react'
import Fade from 'react-reveal/Fade'

import { step } from 'models/elements/stepper'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

export default function Index({data,current}:{data:step, current:string}) {
   const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)

   const step:any = {...data}
   return (
       
         <div className="text-center" style={{marginBottom:'80px'}}>
            <h1 className={`${checkTheme ? 'text-light' : 'text-secondary'}`}>{step[current] && step[current].title }</h1>
            <p style={{color: 'gray'}}>
               {step[current] && step[current].description}
            </p>
         </div>
       
   )
}
