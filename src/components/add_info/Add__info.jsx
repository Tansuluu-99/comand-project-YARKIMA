import React from 'react'
import "./add_info.css"
import arrow from "../../assets/svg/arrow.svg"


function Add__info() {
    return (
        <section className='add__flex container'>
            <div className='add__info '>
                <h5>ПУБЛИЧНЫЙ ПРОВИЛЬ / ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</h5>
                <div className='profile__first'>
                    <img src={arrow} alt="" />
                    <h2>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</h2>
                </div>
                <div className='add__input'>
                    <div>
                        <p>Место рождения</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Место проживания</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Дата рождения</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Пол   </p>
                        <input type="text" />
                    </div>
                </div>
                <div className='add__second'>
                    <div className='add__button'>
                    <p>Семейное положение</p>
                    <button>Женат</button>
                    <button>Замужем</button>
                    </div>
                    <div className='second__input'>
                        <p>Количество детей</p>
                        <input type="text" />
                    </div>
                    <div className='add__button'>
                    <p>Преобладающая рука</p>
                    <button>Правша</button>
                    <button>Левша</button>
                    </div>
                    <div className='second__input'>
                        <p>Профессия</p>
                        <input type="text" />
                    </div>
                    <div className='second__input'>
                        <p>Группа крови</p>
                        <input type="text" />
                    </div>
                </div>
                <button className='join'>СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
            </div>
            <div className='info__ul'>
                <button>Основная информация</button>
                <button>Дополнительная информация</button>
                <button>Социальные сети</button>
                <button>Идентификатор пользователя</button>
                <button>Лицевой счет</button>
                <button>История заказов</button>
                <button>Пароль</button>
                <button className='info__red'>Выйти</button>
            </div>
        </section>  
    )
}

export default Add__info
