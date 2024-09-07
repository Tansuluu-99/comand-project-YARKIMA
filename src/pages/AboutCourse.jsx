import React from 'react'
import FirstCourse from '../components/firstCourse/FirstCourse'
import Description from '../components/description/Description'
import Price from '../components/Price/Price'
import AboutRewievs from '../components/AboutReviews/AboutRewievs'

function AboutCourse() {
  return (
    <div>
      <FirstCourse/>
      <Description/>
      <Price/>
      <AboutRewievs/>
    </div>
  )
}

export default AboutCourse
