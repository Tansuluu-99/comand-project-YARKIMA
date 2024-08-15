import React from 'react'
import './Figure.css'
import figure from '../../data/figure'
import Slider from "react-slick";
import Marquee from 'react-fast-marquee';



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
        <Marquee direction="right">
        {

          figure.map((x) => (
            <img className='figure-img' src={x.image} 
            alt="" />
          ))
        }
        </Marquee>
      </div>
      <div className='figuress'>
      <Marquee direction="left">

        {
          figure.map((x) => (
            <img className='figure-img' src={x.image} 
            alt="" />
          ))
        }
        </Marquee>

      </div>
      <div className='figuresss'>
      <Marquee direction="right">

        {
          figure.map((x) => (

            <img className='figure-img' src={x.image} 
            alt="" />
          ))
        }
        </Marquee>

      </div> 

      
    </>
  )
}

export default Figure

