import React from 'react'
import Fade from 'react-reveal/Fade'

import { step } from 'models/elements/stepper'

import './index.scss'

export default function index({data, current}: {data:step, current: string }) {
   const keysOfData = Object.keys(data)
  return (
      <ol className="stepper" style={{marginBottom: '50px'}}>
         {
            keysOfData.map((list,index) =>{
               let isActive = list == current ? "active" : ""
               if(index + 1 === keysOfData.length){
                  isActive = ""
                  return null
               }
               return (
                  <li className={isActive} key={index}>
                     {index + 1}
                  </li>
               )
            })
         }
      </ol>
  )
}
