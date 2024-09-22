import React, { useEffect, useState } from 'react'
import "./registration.css"
import logo from "../../assets/svg/logo.svg"
import tele from "../../assets/svg/telegram.svg"
import box from "../../assets/svg/box.svg"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/login/action'


function Registration() {
    const [form, setForm] = useState({ email: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Создаём функцию для навигации
    const { loading, error, user, token } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(form));
    };

    // Используем useEffect для перенаправления при успешном логине
    useEffect(() => {
        if (user && token) {
            navigate('/'); // Перенаправляем на главную страницу
        }
    }, [user, token, navigate]);


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

                    <form onSubmit={handleSubmit} className='Log__text'>
                        <h1>Войти</h1>
                        <input onChange={handleChange} value={form.email} type="email" name='email' placeholder='Телефон или email' />
                        <input onChange={handleChange} value={form.password} type="password" name='password' placeholder='Пароль' />
                        <a href='/LogIn2'><button disabled={loading} onClick={() => SignUp()} className='two'> {loading ? 'Загрузка...' : 'Войти'}
                        </button></a>
                        <button className='logBtn'> <img src={tele} alt="" />Войти через телеграм</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                    {user && <p>Добро пожаловать, {user}!</p>}
                </div>
            </section>
        </div>
    )
}

export default Registration
