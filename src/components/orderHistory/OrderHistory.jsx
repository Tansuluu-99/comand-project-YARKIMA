import React from 'react'
import "./orderHistory.css"

import arrow from "../../assets/svg/arrow.svg"


function OrderHistory() {
    return (
        <section className='order__flex container'>
            <div className='order__info'>
                <h5>ПУБЛИЧНЫЙ ПРОВИЛЬ / ИСТОРИЯ ЗАКАЗОВ</h5>
                <div className='profile__first'>
                    <img src={arrow} alt="" />
                    <h2>ИСТОРИЯ ЗАКАЗОВ</h2>
                </div>
                <div className='order__text'>
                    <p>Курс</p>
                    <div className='order__texts'>
                        <p>Автор</p>
                        <p>Дата</p>
                        <p>Вид оплаты</p>
                        <p>Стоимость</p>
                    </div>
                </div>
                <div className='order__account'>
                    <div className='order__mini'>
                        <img src={arrow} alt="" />
                        <h5>Русский язык</h5>
                    </div>
                    <div className='order__accounts'>
                        <div>
                            <img src="" alt="" />
                            <p>gingerbread</p>
                        </div>
                        <p>08.03.2024</p>
                        <p>Лицевой счет</p>
                        <div>
                            <h3>299 ₽</h3>
                            <img src="" alt="" />
                        </div>
                    </div>

                </div>

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

export default OrderHistory
