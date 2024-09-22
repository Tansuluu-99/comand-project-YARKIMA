import React from 'react'
import './Newheader.css'
import logo from '../../assets/svg/logo.svg'
import x from '../../assets/svg/x.svg'

function Newheader() {
  return (
    <>
    <section className='newheader-all'>

     <div className='newheader'>
        <a href="/"><div className='left-new'>
            <img src={logo} alt="" />
            <h2>Yarkima</h2>
        </div></a>
        <img className='logo-img' src={x} alt="" />
        </div> 
        <div className='bottom-words'>
            <a href="/"><h1>ГЛАВНАЯ</h1></a>
            <a href="/popular"><h1>КАТАЛОГ</h1></a>
            <h1>КЕЙСЫ</h1>
            <h1>F.A.Q</h1>
            <a href="/trust"><h1>ПАРТНЕРАМ</h1></a>
        </div>
    </section>
    </>
  )
}

export default Newheader
