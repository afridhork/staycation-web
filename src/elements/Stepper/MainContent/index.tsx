import React from 'react'

import { step } from 'models/elements/stepper'

export default function index({data,current}: {data:step, current:string}) {
   const step: any = {...data}
  return (
    <div>{step[current] && step[current].content}</div>
  )
}
