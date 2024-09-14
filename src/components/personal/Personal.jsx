import React from 'react'
import "./personal.css"
import personal__man from "../../assets/image/personal-man.png"
import profile__image from "../../assets/image/figure3.png"

function Personal() {
    return (
        <div>
            <section className='personal__flex container'>
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
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </div>
                            </div>
                        </div>
                            



                            <div className='personal__btn'>
                                <div className='btn__buttons'>
                                <button>НАПИСАТЬ</button>
                                <button className='btn__gradient'>МОЯ ВИЗИТКА</button>
                                </div>
                                <div className='personal__icon'>
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                    <img src="" alt="" />
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
                </div>
            </section>
        </div>
    )
}

export default Personal
