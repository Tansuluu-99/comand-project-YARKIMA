import React from 'react'
import './Banner.css'
import Marquee from "react-fast-marquee"

function Banner() {
  return (
    <>
      <section className='banner'>
        <div className='container'>

          <marquee
            width="450"
            height="720"
            direction="down">
              <div className='hexagones'></div>
          </marquee>
          <marquee
            width="450"
            height="720"
            direction="down">
              <div className='hexagoness'></div>
          </marquee>
          <marquee
            width="450"
            height="720"
            direction="down">
              <div className='hexagonesss'></div>
          </marquee>
          <h1>Легко осваивайте сложные предметы с помощью карточек и тестов</h1>
          <p>Присоединяйтесь к ученикам по всему миру, которые используют карточки, основанные на научных принципах, чтобы достигать своих целей в школе, университете и за их пределами.</p>
          <button>Начать бесплатно</button>
        </div>
      </section>
    </>
  )
}



export default Banner