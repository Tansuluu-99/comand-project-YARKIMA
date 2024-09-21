import React from 'react'
import "./registration.css"
import logo from "../../assets/svg/logo.svg"
import tele from "../../assets/svg/telegram.svg"
import box from "../../assets/svg/box.svg"
import { Link } from 'react-router-dom'


function Registration() {
    return (
        <div>
            <section className='LogIn container'>
                <div className='Log__animation'>
                    <div >
                        <img className='anim' src={box} alt="" />
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </div>
                <div className='Log__input'>
                    <div className='Log__header'>
                        <a href='/'><div className='Log__image'>
                            <img src={logo} alt="" />
                            <h1>Yarkima</h1>
                        </div> </a>

                        <button>РЕГИСТРАЦИЯ</button>

                    </div>

                    <div className='Log__text'>
                    <h1>Войти</h1>
                        <input type="text" placeholder='Телефон или email' />
                        <input type="password" placeholder='Пароль' />
                        <a href='/LogIn2'><button className='two'>Войти</button></a>
                        <button className='logBtn'> <img src={tele} alt="" />Войти через телеграм</button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Registration
