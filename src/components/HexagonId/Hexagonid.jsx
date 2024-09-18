import React from 'react'
import './hexagonid.css'

import figure from '../../data/figure'
// import Slider from "react-slick";
import Marquee from 'react-fast-marquee';
import figurees from '../../data/figurees';
import figuress from '../../data/figuress';
import logo from '../../assets/svg/logo.svg'
// import experiment from '../../assets/image/experiment.png'
// import one from '../../assets/svg/one.svg'
import hex2 from '../../assets/image/hex2.png'
import profile from '../../assets/svg/profile.svg'
import dot from '../../assets/svg/dot.svg'
import { useParams } from 'react-router-dom';
import imagehex from '../../assets/image/imageehex.png'
import prof2 from '../../assets/svg/prof2.svg'
import star from '../../assets/svg/star.svg'
import retns from '../../assets/svg/return.svg'


function Hexagonid() {


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
            <div className='opac2'>

                <div className='opacity'>
                    <div className='header container'>
                        <div className='header-left'>
                            <a href="/"><img src={logo} alt="" /></a>
                            <a href="/"><h1>Yarkima</h1></a>

                        </div>


                        <div className='header-center'>
                            <input type="text" placeholder='Поиск' />
                        </div>

                        <div className='header-right'>
                            <button className='one'>Войти</button>
                            <button className='two'>Зарегистрироваться</button>

                        </div>
                    </div>

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
                                figurees.map((x) => (
                                    <img className='figure-img' src={x.image}
                                        alt="" />
                                ))
                            }
                        </Marquee>

                    </div>
                    <div className='figuresss'>
                        <Marquee direction="right">

                            {
                                figuress.map((x) => (

                                    <img className='figure-img' src={x.image}
                                        alt="" />
                                ))
                            }
                        </Marquee>

                    </div>
                </div>

                <div className='main-figure'>
                    <img id='main-figure-img' src={hex2} alt="Main Figure" />
                    <div className='in-hexagon'>
                        <img className='in-hexagon-img' src={imagehex} alt="" />
                        <div className='top-in-hex'>
                            <img src={prof2} alt="" />
                            <p>gingerbread</p>
                        </div>
                        <h1 className='in-hex-h1'>Саморазвитие и самопознание</h1>
                        <div className='center-in'>
                            <div className='card-center'>32 карточки</div>
                            <div className='left-top-in'>
                                <img src={star} alt="" />
                                <p>4.9</p>
                                <h4>(24)</h4>
                            </div>
                        </div>
                        <button className='bottom-button'>Перейти к курсу</button>
                       <a href="/"><img className='end-img' src={retns} alt="" /></a> 
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hexagonid






