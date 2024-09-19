import React from 'react'
import china from '../../assets/svg/china.svg'
import prof5 from '../../assets/svg/prof5.svg'
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

function Chinese() {
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
            <img src={china} alt="" />
            <div className='left-top-course'>
                <div className='top-profile'>
                    <img src={prof5} alt="" />
                    <h3>gingerbread</h3>
                </div>
                <div className='center-course'>
                    <h1>Китайский язык</h1>
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
            <h3>Китайский язык относится к китайско-тибетской семье языков, распадается на 7 основных диалектных групп: северную (свыше 70% говорящих), У, Сян, Гань, Хакка, Юэ, Минь. Диалекты различаются фонетически, лексикой, отчасти грамматикой, однако основы их грамматического строя и словарного состава едины.</h3>
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
                <img src="https://www.iile.ru/upload/iblock/8b8/anae4kz2ml6hoe0mfp9pbnd2bep3ygee.jpg" alt="" />
                <img src="https://lh5.googleusercontent.com/proxy/u39phxRMAwBFJwDKuy35K_sU9uabgFYOdcZhgdJZz1jA6CfsZr1UYdAYg4Qah0JlUnGC3iiPozhXyIhmawR_0Dd09UcnMGYDE4fr" alt="" />
                <img src="https://sitistravel.com/upload/images/chinese-lantern.jpg" alt="" />
                <img src="https://dveimperii.ru/wp-content/uploads/2020/01/Chinese-New-Year.jpg" alt="" />
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
                        <h2>499 ₽</h2>
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

           
Ausgezeichneter Kurs，我是阿根廷人的清真寺，我的学生，我的应用程序，Yarkima auszuprobieren，grace aux auteurs des Kurses et a laplateforme pour cette method d'apprentissage！</p>
        </div>
        <div className='someOne'>
            <div className='topSomeOne'>
                <img src={victor} alt="" />
                <div className='rightSomeOne'>
                    <h3>Виктор</h3>
                    <img src={allStar} alt="" />
                </div>
            </div>
            <p>
            
Früher habe ich die Vorbereitung auf Prüfungen souvent auf später verschoben, manchmal habe ich mich gar nicht darauf vorbereitet。 YaKima 的學習方式是最有效的，它是一種有效的 Moglichkeit，mich auf Unterricht und Prüfungen vorzubereiten！</p>
        </div>
        <div className='someOne'>
            <div className='topSomeOne'>
                <img src={ekaterina} alt="" />
                <div className='rightSomeOne'>
                    <h3>Екатерина</h3>
                    <img src={allStar} alt="" />
                </div>
            </div>
            <p>

           
J'ai déjà 53 ans et je dois m'inscrire dans un Masterstudium。 YaKiMa macht die Unterrichtsvorbereitung einfacher, interessanter et gibt mir Selfvertrauen。 Je suis bekomme bei allen Tests Bestnoten！謝謝，YaKiMa！</p>
        </div>
      </section>
    </section>
      
    </>
  )
}

export default Chinese
