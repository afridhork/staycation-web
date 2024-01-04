import React,{useState,useRef, useEffect, MouseEvent} from 'react'
import { DateRange } from "react-date-range";

import iconCalendar from "assets/images/icons/ic_calendar.svg";
import {formatDate} from "utils/formatDate";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./index.scss"
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function Index(
   {
      onChange,
      name,
      value
   }:{
      onChange: (e:any)=>void,
      name: string,
      value: {
         startDate: Date,
         endDate: Date,
         key: string,
      }
   }) {
   const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)

	const [isShowed, setIsShowed] = useState(false);
   const datePickerChange = (value: any) => {
		const target = {  
			target: {
				value: value.selection,
				name: name,
			},
		};
		onChange(target);
	};

   useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
	});

   const refDate = useRef<HTMLDivElement>(null)

   const handleClickOutside: Parameters<Document['addEventListener']>[1] = (event) => {
		if (refDate && !refDate.current?.contains(event.target as HTMLDivElement)) {
			setIsShowed(false);
		}
	};

   const check = (focus: any) => {
      
		focus.indexOf(1) < 0 && setIsShowed(false);
	};
   
   const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
		value.endDate ? " - " + formatDate(value.endDate) : ""
	}`;

  return (
    <div ref={refDate} className="input-date">
      <div className="input-group">
         <div className='input-group-prepend bg-gray-900'>
            <span className='input-group-text'>
               <img src={iconCalendar} alt='icon calendar' />
            </span>
         </div>
         <input
            readOnly
            type='text'
            className={`form-control ml-3 ${checkTheme ? 'light' : ''}`}
            value={displayDate}
            onClick={()=> setIsShowed(!isShowed)}
         />
         {isShowed&&(
            <div className='date-range-wrapper'>
               <DateRange
                  editableDateInputs={true}
                  onChange={datePickerChange}
                  moveRangeOnFirstSelection={false}
                  onRangeFocusChange={check}
                  ranges={[value]}
               />
            </div>
         )}
      </div>
    </div>
  )
}
