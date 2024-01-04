import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

export default function BrandIcon(): JSX.Element {
  const cekTheme = useSelector((state:RootState) => state.toggleTheme.isDark)
  return (
   <div className="brand-icon">
      Stay<span className={`${cekTheme ? 'text-light':'text-secondary'}`}>cation.</span>
   </div>
  )
}
