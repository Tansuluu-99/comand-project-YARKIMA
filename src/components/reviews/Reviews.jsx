import React from 'react'
import "./Reviews.css"
import frame from "../../assets/svg/frame.svg"
import review from '../../data/review'

function Reviews({ description, age, name, image }) {

  return ( 
    <>
    <div className='setka-rewievs'>
      {/* <img src={setka2} alt="" /> */}
    </div>
      <div className='rewiews'>
      <h1>Отзывы учеников</h1>
      <div className='rew'>
      {
        review.map((el) => (
          <div className='review container'>
            <img className='image' src={frame} alt="" />
            <div className='review-content'>
              <img className='man' src={el.image} alt="" />
              <h4>{el.description}</h4>
              <h3>{el.name}</h3>
              <p>{el.age}</p>
            </div>
          </div>
        ))
      }
      </div>
      </div>
     
    </>
  )
}

export default Reviews
