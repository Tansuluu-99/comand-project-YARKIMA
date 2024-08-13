import React from 'react'
import Banner from '../components/Banner/Banner'

import Banner from './components/banner/Banner'
import Recommendation from '../components/Recommendation/Recommendation'
import Author from '../components/Author/Author'
import Trust from '../components/trust/Trust'

function Home() {
  return (
    <div>
      <Banner/>
      <Recommendation/>
      <Author/>
      <Trust/>
    </div>
  )
}

export default Home
