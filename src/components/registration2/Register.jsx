import React from 'react'
import "./registration2.css"
import box from "../../assets/svg/box.svg"
import logo from "../../assets/svg/logo.svg"
import tele from "../../assets/svg/telegram.svg"

function Register() {
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
                        <div className='Log__image'>
                            <img src={logo} alt="" />
                            <h1>Yarkima</h1>
                        </div>
                        <button>ВОЙТИ</button>
                        
                    </div>

                    <div className='Log__text'>
                        <h1>РЕГИСТРАЦИЯ</h1>
                        <input type="text" placeholder='Имя' />
                        <input type="text" placeholder='Телефон или email' />
                        <a href='LogIn3'><button className='two'>ПРОДОЛЖИТЬ</button></a>
                        
                        
                        <button className='logBtn'> <img src={tele} alt="" />Войти через телеграм</button>
                    </div>
                </div>

            </section>
    </div>
  )
}

export default Register
