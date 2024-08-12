import React from 'react'
import Banner from '../components/banner/Banner'
import Recommendation from '../components/Recommendation/Recommendation'
import Author from '../components/Author/Author'
import Review from '../components/Review/Review'


function Home() {
  return (
    <div>
      <Banner/>
      <Recommendation/>
      <Author/>
      <Review/>
    </div>
  )
}

export default Home
