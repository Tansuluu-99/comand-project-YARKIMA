import React from 'react'
import "./information.css"
import personal__man from "../../assets/image/personal-man.png"
import arrow from "../../assets/svg/arrow.svg"
import { Link } from 'react-router-dom'

function Informatoin() {
    return (
        <section className='info__flex container'>
            <div className='info__profile'>
                <div className='top-profile'>
                    <p>Публичный профиль</p>
                    <p>/</p>
                    <p>История заказов</p>
                </div>
                <div className='profile__first'>
                    <img src={arrow} alt="" />
                    <h2>Основная информация</h2>
                </div>
                <div className='profile__second'>
                    <img src={personal__man} alt="" />
                    <div>
                        <h1>MR_YARKIMA</h1>
                        <p>Виктор</p>
                    </div>
                </div>
                <div className='profile__third'>
                    <div className='third__input'>
                        <p>Имя</p>
                        <input type="text" />
                    </div>
                    <div className='third__input'>
                        <p>Email</p>
                        <input type="email" />
                    </div>
                    <div className='third__input'>
                        <p>Телефон</p>
                        <input type="number" />
                    </div>

                    <button className='join'>Сохранить изменения</button>
                </div>


            </div>
            <div className='info__ul'>
                <button>Основная информация</button>
                <Link to="/add__info" > <button>Дополнительная информация</button></Link>
                <button>Социальные сети</button>
                <button>Идентификатор пользователя</button>
                <button>Лицевой счет</button>
                <Link to="/publi" ><button>История заказов</button></Link>
                <button>Пароль</button>
                <button className='info__red'>Выйти</button>
            </div>
        </section>
    )
}

export default Informatoin
