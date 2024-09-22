import React from 'react'
import japon from '../../assets/svg/japon.svg'
import prof6 from '../../assets/svg/prof6.svg'
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

function Japon() {
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
            <img src={japon} alt="" />
            <div className='left-top-course'>
                <div className='top-profile'>
                    <img src={prof6} alt="" />
                    <h3>gingerbread</h3>
                </div>
                <div className='center-course'>
                    <h1>Японский язык</h1>
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
            <h3>Японский – это уникальный восточный язык, тесно переплетенный с историей и культурой страны восходящего солнца. На японском языке говорит примерно 140 миллионов человек, причем родным он является для 125 миллионов. Большинство из них проживают в Японии, США и на полинезийских островах.</h3>
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
                <img src="https://mirjapan.ru/wp-content/uploads/2016/09/japan6464.jpg" alt="" />
                <img src="https://s9.travelask.ru/system/images/files/001/458/871/wysiwyg_jpg/574c6130b3df61j.jpg?1614178754" alt="" />
                <img src="https://perspectum.info/wp-content/uploads/2022/10/CHaepitie_unsplash.com_-1024x683.jpeg" alt="" />
                <img src="https://neotourist.ru/upload/medialibrary/19d/Культура%20и%20искусство.jpg" alt="" />
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
                        <h2>2200 ₽</h2>
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
            <p>素晴らしいコースです。アルゼンチンからモスクワに勉強しに来ました。このコースの作者とこの学習方法のサイトのおかげで、ヤルキマを試してみることにしました</p>
        </div>
        <div className='someOne'>
            <div className='topSomeOne'>
                <img src={victor} alt="" />
                <div className='rightSomeOne'>
                    <h3>Виктор</h3>
                    <img src={allStar} alt="" />
                </div>
            </div>
            <p>以前はテスト勉強を後回しにすることが多く、全く勉強しないこともありました。しかし、YaKimA で勉強することは私にとって負担ではありません。それは、非常に効果的な準備方法だからです。
授業や試験に！</p>
        </div>
        <div className='someOne'>
            <div className='topSomeOne'>
                <img src={ekaterina} alt="" />
                <div className='rightSomeOne'>
                    <h3>Екатерина</h3>
                    <img src={allStar} alt="" />
                </div>
            </div>
            <p>私は53歳で大学院に進学することにしました。 YaKiMa のおかげで、レッスンの準備がより簡単に、より面白くなり、自信が持てるようになりました。すべてのテストでトップのスコアを獲得しました！ YaKiMaさん、ありがとうございます！</p>
        </div>
      </section>
    </section>
 
    </>
  )
}

export default Japon
