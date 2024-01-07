import { imageId } from "./imageDetail"
import { featureId } from "./featureDetail"
import { activityId } from "./activities"
import { bank } from "./bank"
import {testimonial} from "../landingPage/testimonial"

export type detailPage = {
   country?: string | undefined,
   isPopular: boolean,
   unit: string,
   sumBooling: number,
   imageId: imageId[],
   featureId: featureId[],
   activityId: activityId[],
   _id: string,
   title?: string | undefined,
   price: number,
   city?: string | undefined,
   description: string,
   categoryId: string,
   __v: number,
   bank: bank,
   testimonial: testimonial
}