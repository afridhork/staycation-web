import React from 'react'
import { star } from 'models/elements/star'

import "./index.scss";

export default function Star({ value, height, width, spacing }: star) {
   const decimals = value % 1
   const star = []
   let decimal_index = 0
   let leftPost = 0
   for(let index = 0; index < value - decimals; index++) {
      leftPost = leftPost + width
      decimal_index = index + 1
      star.push(
         <div 
            className="star"
            style={{
               left: index*width,
               width: width,
               height: height,
               marginRight: spacing
            }}
            key={index}
         ></div>
      )
   }
   if(decimals > 0 && value < 5){
      star.push(
         <div 
            className="star"
            style={{
               left: leftPost,
               height:height,
               width: decimals * width - spacing
            }}
            key={decimal_index}
         ></div>
      )
   }

   const starPlaceholder = []
   for(let index = 0; index < 5; index++) {
      starPlaceholder.push(
         <div 
            className="star placeholder"
            style={{
               left: index*width,
               height: height,
               width: width
            }}
            key={index}
         ></div>
      )
   }
  return (
    <div className="stars" style={{height: height}}>
      {starPlaceholder}
      {star}
    </div>
  )
}
