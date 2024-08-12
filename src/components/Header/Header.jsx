import React from 'react'
import logo from "../../assets/svg/logo.svg"
import "./header.css"

function Header() {
  return (
    <div className='header container'>
     <div className='header-left'>
       <img src={logo} alt="" />
       <h1>Yarkima</h1>

       </div>


       <div className='header-center'>
       <input type="text" placeholder='Поиск' />
       </div>

       <div className='header-right'>
        <button className='one'>Войти</button>
        <button className='two'>Зарегистрироваться</button>

       </div>
    </div>
   
  )
}

export default Header
