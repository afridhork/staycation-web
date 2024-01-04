import React, { useState} from 'react'

import { stepper } from 'models/elements/stepper'

export default function Index(props: stepper) {
   const { steps, initialStep } = props
   const stepKeys = Object.keys(steps)

   const [currentStep, setCurrentStep] = useState(
      stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]
   )

   const totalStep = stepKeys.length
   const indexStep = stepKeys.indexOf(currentStep)

   function prevStep(){
      if(indexStep > 0) {
         setCurrentStep(stepKeys[indexStep - 1])
      }
   }
   
   function nextStep(){
      if(indexStep < totalStep) {
         setCurrentStep(stepKeys[indexStep + 1])
      }
   }

  return (
    <>
      {
         props.children(prevStep, nextStep, currentStep, steps)
      }
    </>
  )
}

export {default as Numbering} from './Numbering'
export {default as TitleCheckout} from './TitleCheckout'
export {default as MainContent} from './MainContent'
export {default as Controller} from './Controller'
