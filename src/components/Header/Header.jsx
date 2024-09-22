import React from 'react'
import logo from "../../assets/svg/logo.svg"
import "./header.css"
import { Link } from 'react-router-dom'
import lupa from "../../assets/svg/lupa.svg"

function Header() {
  return (
    <div className='header container'>
      <div className='header-left'>
        <a href="/"><img src={logo} alt="" /></a>
        <a href="/"><h1>Yarkima</h1></a>

        <div className='so headso'>
          <select>
            <option>ИЗУЧИТЬ</option>
            <option>en</option>
            <option>ru</option>
          </select>
        </div>

      </div>


      <div className='header-center'>
        <img src={lupa} alt="" />
        <input type="text" placeholder='Поиск' />
      </div>

      <div className='header-right'>
        <Link to="./LogIn"><button className='one'>Войти</button></Link>
        <Link to="./LogIn2"><button className='two'>Зарегистрироваться</button></Link>

        <div className='header__line'>
          <div className='h__line'></div>
          <div className='h__line'></div>
        </div>

      </div>
    </div>

  )
}

export default Header
