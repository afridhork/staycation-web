import React from 'react'

import './index.scss'
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function Index(
  {
    name,
    value,
    placeholder,
    type,
    error,
    onChange
  }: 
  {
    name:string, 
    value?: string, 
    placeholder:string,
    type: string,
    error: {name: string,message: string},
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }) {
    const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)

  return (
    <div className="input-text">
      <div className="input-group">
         <input 
            className={`form-control ${checkTheme ? 'light':''}`} 
            placeholder={placeholder}
            name={name}
            value={value}
            type={type} 
            onChange={onChange}
            autoComplete="off"
         />
         {error.name === name && <span className="error-helper">{error.message}</span>}
      </div>
    </div>
  )
}
