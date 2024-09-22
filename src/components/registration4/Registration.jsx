import React from 'react'
import box from "../../assets/svg/box.svg"
import logo from "../../assets/svg/logo.svg"

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
                    <div className='Log__image'>
                        <img src={logo} alt="" />
                        <h1>Yarkima</h1>
                    </div>
                    <a href="LogIn"><button>ВОЙТИ</button></a>

                </div>

                <div className='Log__text'>
                    <img src="" alt="" />
                    <h1>ПОЗДРАВЛЯЕМ</h1>
                    <p>Регистрация успешно пройдена, приятного пребывания в Yarkima!</p>
                    <a href='/catalog'><button className='two'>ПРОДОЛЖИТЬ</button></a>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Registration
