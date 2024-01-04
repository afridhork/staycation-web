import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {isDark} from 'store/features/toggleTheme'
import './index.scss'
import { RootState } from 'store'

export default function Index() {
   const dispatch = useDispatch()
   const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)

   const [isChecked, setIsChecked] = useState(true)
   useEffect(() => {
      checkTheme ? setIsChecked(false) : setIsChecked(true)
   }, [checkTheme])
   
   function toggleTheme(){
      setIsChecked(prev => !prev)
      dispatch(isDark(isChecked))
      const app= document.querySelector('.App')
      if(isChecked){
         if( app instanceof HTMLElement){
            app.style.backgroundColor = '#2c2c2c'
            app.style.transition = 'background-color 500ms linear'
         }
      }else {
         if( app instanceof HTMLElement){
            app.style.backgroundColor = '#ffff'
         }
      }
      
   }
  return (
   <div>
      <div className="switch">
         <input type="checkbox" className="switch__input" onClick={toggleTheme} checked={isChecked} id="Switch"/>
         <label className="switch__label mb-0" htmlFor="Switch">
            <span className="switch__indicator"></span>
            <span className="switch__decoration"></span>
         </label>
      </div>
   </div>

  )
}
