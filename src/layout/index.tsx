import React from 'react'

import Header from 'parts/Header'
import Footer from 'parts/Footer'
import {layout} from 'models/Layout'


export default function index(props: layout) {
  const isCentered = false
  return (
   <>
      <Header isCentered={props.isCheckout}></Header>
        <main>{props.children}</main>
      <Footer isCheckout={props.isCheckout}></Footer>
   </>
  )
}
