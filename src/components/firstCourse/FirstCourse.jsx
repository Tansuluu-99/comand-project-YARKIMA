import React from 'react'
import russian from '../../assets/svg/russian.svg'
import prof7 from '../../assets/svg/profile.svg'
import vectoricon from '../../assets/svg/vectoricon.svg'
import star from '../../assets/svg/star.svg'
import button from '../../assets/svg/button.svg'
import './firstCourse.css'

function FirstCourse() {
  return (
    <>
    <div className='top-course'>
      <div id='choising'>
        <p>Категории</p>
        <p>/</p>
        <p >Языки</p>
      </div>

      <div className='bottom-course'>
        <div className='left-course'>
            <img src={russian} alt="" />
            <div className='left-top-course'>
                <div className='top-profile'>
                    <img src={prof7} alt="" />
                    <h3>gingerbread</h3>
                </div>
                <div className='center-course'>
                    <h1>Русский язык</h1>
                    <img src={vectoricon} alt="" />
                </div>
                <div className='bottom-choise'>
                    <div className='about-left'>

                    <div className='left-star'>
                        <img src={star} alt="" />
                        <p>4.9</p>
                        <h3>(24)</h3>
                    </div>
                    
                    <div className='divs'>
                        <div className='left-div'>Квиз</div>
                        <div className='center-div'>32 карточки</div>
                        <div className='right-div'>12+</div>
                    </div>

                    </div>
                    <div className='about-right'>
                        <div className='leif'>

                        <div className='pass-course'>пройти курс</div>
                        </div>
                        <div className='hover-img'>

                        <img id='right-img' src={button} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
          </div>

    </div>


    </>
  )
}

export default FirstCourse
