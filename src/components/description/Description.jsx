import React from 'react'
import './description.css'
import hex1 from '../../assets/svg/hexagon1.svg'
import hex2 from '../../assets/svg/hexagon2.svg'
import hex3 from '../../assets/svg/hexagon3.svg'
import fminute from '../../assets/svg/1minute.svg'
import sminute from '../../assets/svg/2minutee.svg'
import tminute from '../../assets/svg/3minute.svg'
import fominute from '../../assets/svg/4minute.svg'

function Description() {
  return (
    <>
     <section className='all-description'>
        <div className='first-description'>
            <div className='top-firs†-description'>
                <h1>Достижения в этом курсе</h1>
                <p>Все</p>
            </div>
            <div className='bottom-description'>
                <div className='polyglott'>
                    <img src={hex1} alt="" />
                    <p>Полиглот</p>
                </div>
                <div className='polyglott'>
                    <img src={hex2} alt="" />
                    <p>Мудрец</p>
                </div>
                <div className='polyglott'>
                    <img src={hex3} alt="" />
                    <p>Энтузиаст</p>
                </div>
            </div>
        </div>
        <div className='second-description'>
            <div className='top-second-description'>
                <h1>Описание</h1>
                <p>Развернуть</p>
            </div>
            <h3>Язык восточнославянской группы славянской ветви индоевропейской языковой семьи, национальный язык русского народа. Является одним из наиболее распространённых языков мира — восьмым среди всех языков мира по общей численности говорящих и седьмым по численности владеющих им как родным. Русский является также самым распространённым славянским я...</h3>
            </div>    
    </section> 

    <section className='about-bottom-course'>
        <h1>О курсе</h1>
        <div className='minutes'>
            <div className='first-minute'>
                <p>Тип курса</p>
                <h3>Квиз</h3>
            </div>
            <div className='second-minute'>
                <p>Время на прохождение</p>
                <h3>≈ 30 мин.</h3>
            </div>
            <div className='third-minute'>
                <p>Возрастной ценз</p>
                <h3>12+</h3>
            </div>
            <div className='fourth-minute'>
                <p>Теги</p>
                <div className='bottom-div'>
                <div className='again-divf'>Общение</div>
                <div className='again-divs'>Языки</div>
                <div className='again-divt'>Развитие</div>
                </div>
            </div>
            <div className='fifth-minute'>
                <img src={fminute} alt="" />
                <img src={sminute} alt="" />
                <img src={tminute} alt="" />
                <img src={fominute} alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Description
