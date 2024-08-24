import React from 'react'
import logo from "../../assets/svg/logo.svg"
import "./header.css"

function Header() {
  return (
    <div className='header container'>
     <div className='header-left'>
       <a href="/"><img src={logo} alt="" /></a>
       <a href="/"><h1>Yarkima</h1></a>

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
