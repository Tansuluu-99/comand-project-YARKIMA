import React from 'react'
import './Figure.css'
import figure from '../../data/figure'
// import Slider from "react-slick";
import Marquee from 'react-fast-marquee';
import figurees from '../../data/figurees';
import figuress from '../../data/figuress';
import { Link } from 'react-router-dom';
import setka2 from '../../assets/image/setka2.png'



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
    <div className='setka2'>
      <img src={setka2} alt="" />
    </div>
    <div className='alll-figures'>

      <div className='figures'>
        <Marquee direction="right">
        {

          figure.map((x) => (
           <Link to="/hexagonId/id"><img className='figure-img' src={x.image} 
           alt="" /> </Link> 
          ))
        }
        </Marquee>
      </div>
      <div className='figuress'>
      <Marquee direction="left">

        {
          figurees.map((x) => (
            <Link to="/hexagonId/id"><img className='figure-img' src={x.image} 
            alt="" /></Link>
          ))
        }
        </Marquee>

      </div>
      <div className='figuresss'>
      <Marquee direction="right">

        {
          figuress.map((x) => (

           <Link to="/hexagonId/id"> <img className='figure-img' src={x.image} 
           alt="" /></Link>
          ))
        }
        </Marquee>

      </div> 
    </div>

      
    </>
  )
}

export default Figure

