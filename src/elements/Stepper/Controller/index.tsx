import React from 'react'

export default function index({children}: {children:React.ReactNode}) {
  return (
   <section className="container">
      <div className="row justify-content-center">
      <div className="col-12 col-lg-3">{children}</div>
      </div>
   </section>
  )
}
