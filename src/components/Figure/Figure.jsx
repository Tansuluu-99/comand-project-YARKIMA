import React from 'react'
import './Figure.css'
import figure from '../../data/figure'


function Figure({image}) {

    const figures = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    
  return (
    <>
      <div className='figures'>
        {
          figure.map((x) => (
            <img className='figure-img' src={x.image} 
            alt="" />
          ))
        }
      </div>
      {/* <div className='figuress'>
        {
          figure.map((x) => (
            <img className='figure-img' src={x.image} 
            alt="" />
          ))
        }
      </div>
      <div className='figuresss'>
        {
          figure.map((x) => (

            <img className='figure-img' src={x.image} 
            alt="" />
          ))
        }
      </div>  */}

      
    </>
  )
}

export default Figure


// function Reviews({ description, age, name, image }) {

//   return (
//     <div className='reviews'>
//       <h1>Отзывы учеников</h1>
//       <div className='rew'>
//       {
//         review.map((el) => (
//           <div className='review container'>
//             <img className='image' src={frame} alt="" />
//             <div className='review-content'>
//               <img className='man' src={el.image} alt="" />
//               <h4>{el.description}</h4>
//               <h3>{el.name}</h3>
//               <p>{el.age}</p>
//             </div>
//           </div>
//         ))
//       }
//       </div>
     
//     </div>