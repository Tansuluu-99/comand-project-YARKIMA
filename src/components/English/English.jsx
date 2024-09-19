import React from 'react'
import england from '../../assets/svg/england.svg'
import prof2 from '../../assets/svg/prof2.svg'
import vectoricon from '../../assets/svg/vectoricon.svg'
import star from '../../assets/svg/star.svg'
import button from '../../assets/svg/button.svg'
import hex1 from '../../assets/svg/hexagon1.svg'
import hex2 from '../../assets/svg/hexagon2.svg'
import hex3 from '../../assets/svg/hexagon3.svg'
import victor from '../../assets/svg/victor.svg'
import allStar from '../../assets/svg/allStar.svg'
import ekaterina from '../../assets/svg/ekaterina.svg'
import jules from '../../assets/svg/jules.svg'
import setka from '../../assets/image/setka.png'

function English() {
  return (
    <>
       <div className='top-course'>
      <div id='choising'>
        <a href="/popular"><p>Категории</p></a>
        <p>/</p>
        <a href="/cubelanguage"><p >Языки</p></a>
      </div>

      <div className='bottom-course'>
        <div className='left-course'>
            <img src={england} alt="" />
            <div className='left-top-course'>
                <div className='top-profile'>
                    <img src={prof2} alt="" />
                    <h3>gingerbread</h3>
                </div>
                <div className='center-course'>
                    <h1>Английский язык</h1>
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
            <h3>Англи́йский язы́к (English; произносится /ˈɪŋ. ɡlɪʃ/) — индоевропейский язык германской группы, сложившийся в Англии в результате взаимодействия нескольких германоязычных племён (англы, саксы, юты) с местными автохтонами, говорившими на кельтских диалектах.</h3>
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
                <img src="xhttps://s9.travelask.ru/system/images/files/001/200/549/wysiwyg_jpg/38c544d3b82e023d036c336c65674ab2_O.jpg?1538488628" alt="" />
                <img src="https://img.freepik.com/free-photo/union-jack-flag-background_1048-6002.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726272000&semt=ais_hybrid" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Local_pronunciations_of_bath_in_England.jpg" alt="" />
                <img src="https://tv-english.club/wp-content/uploads/2016/02/architecture.jpg" alt="" />
            </div>
        </div>
    </section>

    <section className='wayToStudy'>
                <div className='wayLeft'>
                    <img src={setka} alt="" />
                    <h1>Самый быстрый <br /> путь к Знаниям</h1>
                </div>
                <div className='wayRight'>
                    <h1>Месячный план</h1>
                    <div className='centerWay'>
                        <h2>399 ₽</h2>
                        <p>/ месяц</p>
                    </div>
                    <p id='wayP'>Автоматическое выставление счетов. Подписку можно отменить в любое время.</p>
                    <button>Подписаться</button>
                </div>
            </section>


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
            <p>Excellent course, I came to study in Moscow from Argentina, decided to try Yarkima, thanks to the author of the course and the platform for this method of learning!</p>
        </div>
        <div className='someOne'>
            <div className='topSomeOne'>
                <img src={victor} alt="" />
                <div className='rightSomeOne'>
                    <h3>Виктор</h3>
                    <img src={allStar} alt="" />
                </div>
            </div>
            <p>In the past, I often put off preparing for tests until later, and sometimes I didn't prepare for them at all. But studying with YaKimA is not a burden for me, because it is a very effective way to prepare for lessons and exams!</p>
        </div>
        <div className='someOne'>
            <div className='topSomeOne'>
                <img src={ekaterina} alt="" />
                <div className='rightSomeOne'>
                    <h3>Екатерина</h3>
                    <img src={allStar} alt="" />
                </div>
            </div>
            <p>I am 53 years old and I decided to go to study for a master's degree. YaKiMa makes preparing for lessons easier, more interesting, and helps me feel confident. I get top marks on all tests! Thank you, YaKiMa!</p>
        </div>
      </section>
    </section>
     
    </>
  )
}

export default English
