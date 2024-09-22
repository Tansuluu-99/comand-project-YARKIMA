import React from 'react'
import "./personal.css"
import personal__man from "../../assets/image/personal-man.png"
import profile__image from "../../assets/image/figure3.png"
import polygonone from '../../assets/svg/polygon1.svg'
import polygontwo from '../../assets/svg/polygon2.svg'
import polygonthree from '../../assets/svg/polygon3.svg'
import polygonfour from '../../assets/svg/polygon4.svg'
import russian from '../../assets/svg/russian.svg'
import profile from '../../assets/svg/profile.svg'
import star from '../../assets/svg/star.svg'
import purple from '../../assets/svg/purple.svg'
import hexagon1 from '../../assets/svg/hexagon1.svg'
import hexagon2 from '../../assets/svg/hexagon2.svg'
import hexagon3 from '../../assets/svg/hexagon3.svg'



function Personal() {
    return (
        <div>
            <section className='personal__flex '>
                <div className='personal__fixed'>
                    <div className='fixed__button1'>
                        <button>Публичный профиль</button>
                        <button>Кабинет партнера</button>
                        <button>Еще</button>
                    </div>
                    <p>Сообщество</p>
                    <div className='fixed__button2'>

                        <button>Знакомства</button>
                        <button>Чаты</button>
                        <button>Группы</button>
                    </div>
                </div>

                <div>


                    <div className='personal__profile'>
                        <div className='personal__text'>
                            <img src={personal__man} alt="" />
                            <div className='personal__icons'>
                                <h1>MR_YARKIMA</h1>
                                <p>Виктор</p>
                                <div>
                                    <img src={polygonone} alt="" />
                                    <img src={polygontwo} alt="" />
                                    <img src={polygonthree} alt="" />
                                    <img src={polygonfour} alt="" />
                                </div>
                            </div>
                        </div>




                        <div className='personal__btn'>
                            <div className='btn__buttons'>
                                <button>НАПИСАТЬ</button>
                                <button className='btn__gradient'>МОЯ ВИЗИТКА</button>
                            </div>

                        </div>
                    </div>


                    <div className='personal__word'>
                        <button>ИНФОРМАЦИЯ</button>
                        <button>ИЗБРАННЫЕ КУРСЫ</button>
                        <button>МОИ КУРСЫ</button>
                    </div>





                    <div className='personal__profiles'>
                        <div className='personal__first'>
                            <div className='first__button'>
                                <div className='first__text'>
                                    <img className='first__image' src={profile__image} alt="" />
                                    <img src="" alt="" />
                                    <p>4.9 (24)</p>
                                    <button>Квиз</button>
                                    <button>32 карточки</button>
                                    <button>12+</button>
                                </div>
                                <div className='first__name'>
                                    <img src="" alt="" />
                                    <p>gingerbread</p>
                                </div>
                            </div>

                        </div>
                        <div className='personal__second'>
                            <div className='second__text'>
                                <div>
                                    <h1>Конфликтология</h1>
                                    <img src="" alt="" />
                                </div>
                                <p>Язык японцев и фактически государственный язык Японии, со спорны...</p>
                            </div>
                        </div>
                        <div className='personal__third'>
                            <div className='third__button'>
                                <button>Общение</button>
                                <button>Языки</button>
                                <button>Развитие</button>
                            </div>

                            <div className=''>
                                <h3>Достижения:</h3>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>

                    <a href="/aboutCourse">
              <div className='hex-cube'>
                <div className='all-fs'>

                  <div className='firstLeft'>
                    <img src={russian} alt="" />
                    <div className='sec-star'>

                      <div className='second-star'>
                        <img src={star} alt="" />
                        <p className='p-active' >4.9</p>
                        <p className='s-actives'>(24)</p>
                      </div>
                    </div>
                    <div className='aboutt-div-f'>Квиз</div>
                    <div id='aboutt-div-s'>32 карточки</div>
                    <div id='aboutt-div-th'>12+</div>
                  </div>
                  <div className='secondRight'>
                    <img src={profile} alt="" />
                    <h3>gingerbread</h3>
                  </div>
                </div>
                <div className='about-proccent'>
                  <h1> Русский язык</h1>
                  <img src={purple} alt="" />
                </div>
                <p className='hex-p'>Язык восточнославянской группы славянской ветви индоевропейской языковой семьи, национальный язык русского народа.</p>
                <div className='bottom-about'>
                  <div className='left-bottom'>
                    <div className=' first-active'>Общение</div>
                    <div className=' second-active'>Языки</div>
                    <div className=' third-active'>Развитие</div>
                  </div>
                  <div className='right-bottom'>
                    <h2>Достижения:</h2>
                    <img src={hexagon1} alt="" />
                    <img src={hexagon2} alt="" />
                    <img src={hexagon3} alt="" />
                  </div>
                </div>
              </div>
            </a>
                </div>
            </section>
        </div>
    )
}

export default Personal
