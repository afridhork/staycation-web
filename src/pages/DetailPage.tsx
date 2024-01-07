import React, { useState } from 'react'
import Layout from 'layout'

import { useParams } from 'react-router-dom'

import PageDetailsTitle from 'parts/PageDetailsTitle'
import FeatureImage from 'parts/FeatureImage'
import FeatureDetailBooking from 'parts/FeatureDetailBooking'
import Activities from 'parts/Activities'
import Testimony from 'parts/Testimony'


import { useDetailPageQuery } from 'store/services/pageFetch'

export default function DetailPage() {
  // const [id, setId] = useState<string|undefined>('')

  const params = useParams()
  
  const {data,isSuccess, isLoading} = useDetailPageQuery(params.id as string)
  
  return (
    <>
    {
      isLoading && (
        <Layout>
          <PageDetailsTitle isLoading={isLoading} />
          <FeatureImage isLoading={isLoading} />
          <FeatureDetailBooking isLoading={isLoading} />
          <Activities isLoading={isLoading} />
          <Testimony isLoading={isLoading}/>
        </Layout>
      )
    }
    {
      isSuccess&&(
        <Layout>
          <PageDetailsTitle items={data}></PageDetailsTitle>
          <FeatureImage items={data.imageId}></FeatureImage>
          <FeatureDetailBooking items={data}></FeatureDetailBooking>
          <Activities items={data.activityId}></Activities>
          <Testimony items={data.testimonial}></Testimony>
        </Layout>
      )
    }
    </>
  )
}
