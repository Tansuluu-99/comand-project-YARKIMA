import React from 'react'
import france from '../../assets/svg/france.svg'
import prof4 from '../../assets/svg/prof4.svg'
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


function Franch() {
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
            <img src={france} alt="" />
            <div className='left-top-course'>
                <div className='top-profile'>
                    <img src={prof4} alt="" />
                    <h3>gingerbread</h3>
                </div>
                <div className='center-course'>
                    <h1>Французский язык</h1>
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
            <h3>Францу́зский язы́к (la langue française) — язык галло-романской подгруппы романской группы индоевропейской семьи языков, национальный язык французов. Говорящие на французском языке называются франкофо́нами. В 2023 году на французском языке говорят на всех материках планеты.</h3>
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
                <img src="https://s9.travelask.ru/system/images/files/001/517/917/wysiwyg_jpg/ECovNDtnIeq8tN6LrLbnOshyIQxngt--0SyOw0fActE6tTxiTYrpBCiNVkETLWCRsPzFhzOIeCAFbrkWWlhjb4LoqLLtY_Q6KeWa1_q2Y2jbpjeZMIWaKYT8iFdSkDSXevZyNp2O-hA92IwBEexnWnp0Ahr9wzU_2LKzxBqO4i9S7zhitO1xpD28VhSiPKXiQnasi-4Aj3cYJJyCT4ksm7u.jpg?1644690170" alt="" />
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20240625/pngtree-french-traditions-and-culture-background-image_15923958.jpg" alt="" />
                <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/01/30/thumbs_b_c_217bc4cd988bd6b84924ae85e512d242.jpg?v=005641" alt="" />
                <img src="https://st5.depositphotos.com/75614324/66188/i/450/depositphotos_661886818-stock-photo-french-flag-black-background-golden.jpg" alt="" />
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

            Ausgezeichneter Kurs, je suis en Argentine à la Mosquée, un dort zu studieren, et j'ai été appris, Yarkima auszuprobieren, grâce aux auteurs des Kurses et à la plateforme pour cette méthode d'apprentissage !</p>
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
Früher habe ich die Vorbereitung auf Prüfungen souvent auf später verschoben, manchmal habe ich mich gar nicht darauf vorbereitet. Aber das Lernen bei YaKima est pour mich keine Belastung, denn es ist a sehr efficace Möglichkeit, mich auf Unterricht und Prüfungen vorzubereiten!</p>
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

            J'ai déjà 53 ans et je dois m'inscrire dans un Masterstudium. YaKiMa macht die Unterrichtsvorbereitung einfacher, interessanter et gibt mir Selbstvertrauen. Je suis bekomme bei allen Tests Bestnoten ! Merci, YaKiMa !</p>
        </div>
      </section>
    </section>
      
    </>
  )
}

export default Franch
