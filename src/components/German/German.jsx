import React from 'react'
import german from '../../assets/svg/german.svg'
import prof3 from '../../assets/svg/prof3.svg'
import vectoricon from '../../assets/svg/vectoricon.svg'
import star from '../../assets/svg/star.svg'
import button from '../../assets/svg/button.svg'
import hex1 from '../../assets/svg/hexagon1.svg'
import hex2 from '../../assets/svg/hexagon2.svg'
import hex3 from '../../assets/svg/hexagon3.svg'
import fminute from '../../assets/svg/1minute.svg'
import sminute from '../../assets/svg/2minutee.svg'
import tminute from '../../assets/svg/3minute.svg'
import fominute from '../../assets/svg/4minute.svg'
import setka from '../../assets/image/setka.png'
import victor from '../../assets/svg/victor.svg'
import allStar from '../../assets/svg/allStar.svg'
import ekaterina from '../../assets/svg/ekaterina.svg'
import jules from '../../assets/svg/jules.svg'

function German() {
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
            <img src={german} alt="" />
            <div className='left-top-course'>
                <div className='top-profile'>
                    <img src={prof3} alt="" />
                    <h3>gingerbread</h3>
                </div>
                <div className='center-course'>
                    <h1>Немецкий язык</h1>
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
            <h3>
Немецкоязычные страны являются прародителями многих влиятельных писателей со времен эпохи Просвещения. Умение читать и понимать немецкий язык является плюсом для литераторов, философов и ученых, которые хотят читать и понимать важные тексты 18, 19 и 20 веков на уровне носителей языка.</h3>
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
                <img src="https://media.istockphoto.com/id/619762776/ru/фото/немецкие-флаги-на-рейхстаге-берлин-германия.jpg?s=612x612&w=0&k=20&c=BULtheqewzAHZ2CNLiEwhS3zJWXSEG90PkvMXnqAkqY=" alt="" />
                <img src="https://s9.travelask.ru/system/images/files/001/518/013/wysiwyg_jpg/485B2670-738A-4AE3-9D6E-F8B457940AD9.jpg?1644779271" alt="" />
                <img src="https://s9.travelask.ru/system/images/files/001/518/043/wysiwyg_jpg/oktoberfest4.jpg?1644784233" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjlpecTDP03u6W3zAbg5hGWRVkNemNDXc7g&s" alt="" />
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
                        <h2>1700 ₽</h2>
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
            <p>
Früher habe ich das Lernen für Prüfungen oft auf später verschoben, manchmal habe ich überhaupt nicht dafür gelernt. Aber das Studium bei YaKimA ist für mich keine Belastung, denn es ist eine sehr effektive Art der Vorbereitung
für Unterricht und Prüfungen!</p>
        </div>
        <div className='someOne'>
            <div className='topSomeOne'>
                <img src={victor} alt="" />
                <div className='rightSomeOne'>
                    <h3>Виктор</h3>
                    <img src={allStar} alt="" />
                </div>
            </div>
            <p>Früher habe ich das Lernen für Prüfungen oft auf später verschoben, manchmal habe ich überhaupt nicht dafür gelernt. Aber das Studium bei YaKimA ist für mich keine Belastung, denn es ist eine sehr effektive Art der Vorbereitung
für Unterricht und Prüfungen!</p>
        </div>
        <div className='someOne'>
            <div className='topSomeOne'>
                <img src={ekaterina} alt="" />
                <div className='rightSomeOne'>
                    <h3>Екатерина</h3>
                    <img src={allStar} alt="" />
                </div>
            </div>
            <p>Ich bin 53 Jahre alt und habe mich für ein Graduiertenstudium entschieden. YaKiMa macht die Unterrichtsvorbereitung einfacher, interessanter und gibt mir Selbstvertrauen. Ich bekomme in allen Tests Bestnoten! Danke YaKiMa!
</p>
        </div>
      </section>
    </section>
 
    </>
  )
}

export default German
