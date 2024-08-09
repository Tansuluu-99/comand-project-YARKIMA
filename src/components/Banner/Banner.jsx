import React from 'react'
import './Banner.css'
import people1  from '../../assets/image'

function Banner() {
  return (
    <>
     <section className='banner'>
        <div className='container'>
        <h1>Легко осваивайте сложные предметы с помощью карточек и тестов</h1>
        <p>Присоединяйтесь к ученикам по всему миру, которые используют карточки, основанные на научных принципах, чтобы достигать своих целей в школе, университете и за их пределами.</p>
        <button>Начать бесплатно</button>    
        </div>
    </section> 

    {/* <section className='recomendation'>
        <h1></h1>
        <div className='recomendation-about'>
            <div>
                <img className='img' src={people1} alt="" />
            </div>
        </div>
    </section> */}
    </>
  )
}

export default Banner
