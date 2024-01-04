import React, { ChangeEvent } from 'react'

import { InputDurationDate } from 'models/detailPage/InputDurationDate';

import "./index.scss"
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function Index(
   {
      max,
      min,
      suffix,
      prefix,
      isSuffixPlural,
      onChange,
      name,
      value
   }: 
   {
      max: number,
      min: number,
      suffix: string,
      prefix: string,
      isSuffixPlural: boolean,
      onChange: (e: any)=>void,
      name: string,
      value: number
   }) {
      const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)
      
      const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
         const target = e.target as HTMLInputElement
         let value = String(target?.value);
         
         if (+value <= max && +value >= min) {
            onChange({
               target: {
                  name: name,
                  value: value,
               },
            });
         }
      };

      const decrease = () =>{
         if(value > min){
            onChange({
               target: {
                  name:  name,
                  value: value - 1
               },
            })
         }
      }

      const increase = () =>{
         if(value < max){
            onChange({
               target: {
                  name:  name,
                  value: value + 1
               },
            })
         }
      }
   return (
      <div className="input-group">
         <div className='input-group-prepend'>
            <span className='input-group-text decrease' onClick={decrease}>
               -
            </span>
         </div>
         <input 
            min={min}
            max={max}
            readOnly
            name={name}
            className={`form-control text-center ${checkTheme ? 'light' : ''}`}
            value={`${prefix}${value}${suffix}${
               isSuffixPlural && value > 1 ? "s" : ""
            }`}
            onChange={updateValue}
         />
         <div className='input-group-append'>
            <span className='input-group-text increase' onClick={increase}>
               +
            </span>
         </div>
      </div>
   )
}
