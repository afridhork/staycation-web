import { checkout } from "models/checkoutPage"

export interface stepper {
	children(prevStep: ()=>void, nextStep: ()=>void, currentStep: string, steps: step): JSX.Element|JSX.Element[]|React.ReactNode,
	initialStep: string,
	steps: step
}

export interface step {
	bookingInformation: stepBookingInformation,
	payment: stepPayment,
	completed: stepCompleted
}

interface stepBookingInformation{
	title: string,
	description: string,
	content: JSX.Element
}

interface stepPayment{
	title: string,
	description: string,
	content: JSX.Element
}

interface stepCompleted{
	title: string,
	description: string | null
}