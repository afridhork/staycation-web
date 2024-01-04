import React, {ChangeEvent} from 'react'

export type InputDurationDate = {
   max: number,
   min: number,
   suffix: string,
   prefix: string,
   isSuffixPlural: boolean,
   onChange: (e: any)=>void,
   name: string,
   value: number
}