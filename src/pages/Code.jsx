import React from 'react'
import './Code.css'

function Code() {
  return (
    <>
      <section className='registration'>
        <div className='registration-anymation'></div>
        <div className='registration-code'>
            <div className='come-in'>
                <div className="in-icon">
                <img src="" alt="" />
                <h1>Yarkima</h1>
                </div>
                <button>ВОЙТИ</button>
            </div>
            <div className='modal-register'>
              <h1>РЕГИСТРАЦИЯ</h1>
              <p>Мы отправили письмо с 6-ти значным кодом на вашу почту</p>
              <div className='modal-inputs'>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
              <button>ПОДТРЕВДИТЬ</button>
              <div className='tg-come-in'>
                <img src="" alt="" />
                <h3>ВОЙТИ ЧЕРЕЗ ТЕЛЕГРАМ</h3>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Code
