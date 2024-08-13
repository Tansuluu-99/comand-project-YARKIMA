import React from 'react'
import Banner from '../components/Banner/Banner'
import Recommendation from '../components/Recommendation/Recommendation'
import Author from '../components/Author/Author'
import Trust from '../components/trust/Trust'
import Reviews from "../components/reviews/Reviews"

function Home() {
  return (
    <div>
      <Banner/>
      <Recommendation/>
      <Author/>
      <Reviews/>
      <Trust/>
    </div>
  )
}

export default Home
