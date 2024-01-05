import React, { Component, useRef } from 'react'

import Layout from 'layout'

import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'

import { useLandingPageQuery } from 'store/services/pageFetch'

export default function LandingPage() {
    const {data,isSuccess, isLoading} = useLandingPageQuery()
    const refMostPicked = useRef(null)
    return (
      <>
        {/* {isLoading && <h2 className="d-flex justify-content-center">...Loading</h2>}
        {isFetching && <h2 className="d-flex justify-content-center">...Fetching</h2>}
      {error && <h2 className="d-flex justfy-content-center">...Something went wrong</h2>} */}
        {
          isLoading && (
            <Layout>
              <Hero isLoading={isLoading}/>
              <MostPicked isLoading={isLoading}/>
              <Categories isLoading={isLoading}/>
              <Testimony isLoading={isLoading}/>
            </Layout>
          )
        }
        {isSuccess&&(
          <Layout>
            {/* <Hero hero={data.hero} test='test'></Hero> */}
            <Hero ref={refMostPicked} hero={data.hero}></Hero>
            <MostPicked ref={refMostPicked} items={data.mostPicked}></MostPicked>
            <Categories items={data.category}></Categories>
            <Testimony items={data.testimonial}></Testimony>
          </Layout>
        )}
      </>
    )
}
