import React from 'react'
import './aboutRewievs.css'
import victor from '../../assets/svg/victor.svg'
import allStar from '../../assets/svg/allStar.svg'
import ekaterina from '../../assets/svg/ekaterina.svg'
import jules from '../../assets/svg/jules.svg'

function AboutRewievs() {
  return (
    <>
    <section className='topRev'>
        <h1>Отзывы</h1>
      <section className='allReviews'>
      <div className='someOne'>
            <div className='topSomeOne'>
                <img src={jules} alt="" />
                <div className='rightSomeOne'>
                    <h3>Jules</h3>
                    <img src={allStar} alt="" />
                </div>
            </div>
            <p>Отличный курс, приехала учиться в Москву из Аргентины, решила попробовать Yarkima, спасибо автору курса и площадке за такой способ обучения!</p>
        </div>
        <div className='someOne'>
            <div className='topSomeOne'>
                <img src={victor} alt="" />
                <div className='rightSomeOne'>
                    <h3>Виктор</h3>
                    <img src={allStar} alt="" />
                </div>
            </div>
            <p>Раньше я часто откладывал подготовку к тестам на потом, а иногда и совсем не готовился к ним. Но учеба с YaKimA мне не в тягость, потому что это очень эффективный способ подготовки
к урокам и экзаменам!</p>
        </div>
        <div className='someOne'>
            <div className='topSomeOne'>
                <img src={ekaterina} alt="" />
                <div className='rightSomeOne'>
                    <h3>Екатерина</h3>
                    <img src={allStar} alt="" />
                </div>
            </div>
            <p>Мне 53 года, и я решила пойти учиться в магистратуру. YaKiMa облегчает подготовку к урокам, делает ее более интересной, и помогает мне чувствовать себя уверенно. Я получаю высшие баллы по всем тестам! Спасибо, YaKiMa!</p>
        </div>
      </section>
    </section>
    </>
  )
}

export default AboutRewievs
