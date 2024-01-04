export type mostPicked = {
   country: string,
   unit: string,
   imageId: imageId[],
   _id: string,
   title: string,
   price: number,
   city: string,
}

interface imageId {
   _id: string,
   imageUrl: string
}