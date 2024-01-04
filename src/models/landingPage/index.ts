import { category } from './category'
import { hero } from './hero'
import { mostPicked } from './mostPicked'
import { testimonial } from './testimonial'

export type landingPage = {
   hero: hero,
   mostPicked: mostPicked[]
   category: category[],
   testimonial: testimonial
}
