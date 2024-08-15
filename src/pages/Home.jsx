import React from 'react'
import Banner from '../components/Banner/Banner'
import Recommendation from '../components/Recommendation/Recommendation'
import Author from '../components/Author/Author'
import Trust from '../components/trust/Trust'
import Reviews from "../components/reviews/Reviews"
import Figure from '../components/Figure/Figure'

function Home() {
  return (
    <div>
      <Banner/>
      <Figure/>
      <Recommendation/>
      <Author/>
      <Reviews/>
      <Trust/>
    </div>
  )
}

export default Home
