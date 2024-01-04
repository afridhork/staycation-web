export type category = {
   itemId: itemId[],
   _id: string,
   name: string
}

type itemId = {
   country: string,
   isPopular: boolean ,
   imageId: imageId[],
   _id: string,
   title: string,
   city: string,
}

type imageId = {
   _id: string,
   imageUrl: string
}