import React from 'react'

import './index.scss'

export default function index({name,value,placeholder}: {name:string, value: number, placeholder:string}) {
  return (
    <div className="input-text">
      <div className="input-group">
         <input 
            className="form-control"
            placeholder={placeholder}
            name={name}
            value={value}
            type="number" 
         />
      </div>
    </div>
  )
}
