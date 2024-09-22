import React from 'react'
import "./register.css"
import box from "../../assets/svg/box.svg"
import logo from "../../assets/svg/logo.svg"
import tele from "../../assets/svg/telegram.svg"


function Registration() {
    return (
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
                    <div className='Log__image'>
                        <img src={logo} alt="" />
                        <h1>Yarkima</h1>
                    </div>
                    <a href="LogIn"><button>ВОЙТИ</button></a>
                </div>
                <div className='Log__text'>
                    <h1>РЕГИСТРАЦИЯ</h1>
                    <p>Мы отправили письмо с 6-ти значным кодом на вашу почту.</p>
                    <div className='kvadrat'>
                        <input className='kvadrat__input' type="number" />
                        <input className='kvadrat__input' type="number" />
                        <input className='kvadrat__input' type="number" />
                        <input className='kvadrat__input' type="number" />
                        <input className='kvadrat__input' type="number" />
                        <input className='kvadrat__input' type="number" />
                    </div>
                    <a href='LogIn4'><button className='two'>ПОДТВЕРДИТЬ</button></a>
                    <button className='logBtn'> <img src={tele} alt="" />Войти через телеграм</button>
                </div>
            </div>
        </section>
    )
}

export default Registration
