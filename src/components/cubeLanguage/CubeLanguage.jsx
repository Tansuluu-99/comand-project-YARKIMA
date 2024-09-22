import React, { useState } from 'react'
import './Cube.css'
import kub from '../../assets/svg/kub.svg'
import six from '../../assets/svg/six.svg'
import school from '../../assets/svg/school.svg'
import courseSvg from '../../assets/svg/course.svg'
import hexagon1 from '../../assets/svg/hexagon1.svg'
import hexagon2 from '../../assets/svg/hexagon2.svg'
import hexagon3 from '../../assets/svg/hexagon3.svg'
import star from '../../assets/svg/star.svg'
import profile from '../../assets/svg/profile.svg'
import purple from '../../assets/svg/purple.svg'
// import allCourse from '../../data/allCourse'
import { useOutSideClick } from '../../hooks/outsideclick.js';
import square from '../../assets/svg/square.svg'
import hicon from "../../assets/svg/hicon.svg"
import england from '../../assets/svg/england.svg'
import russian from '../../assets/svg/russian.svg'
import france from '../../assets/svg/france.svg'
import china from '../../assets/svg/china.svg'
import japon from '../../assets/svg/japon.svg'
import german from '../../assets/svg/german.svg'
import prof2 from '../../assets/svg/prof2.svg'
import prof3 from '../../assets/svg/prof3.svg'
import prof4 from '../../assets/svg/prof4.svg'
import prof5 from '../../assets/svg/prof5.svg'
import prof6 from '../../assets/svg/prof6.svg'


function CubeLanguage() {
  const [popup, setPopup] = useState(false);
  const [popupIndex, setPopupIndex] = useState();
  const [index, setIndex] = useState(false);
  const [indexType, setIndexType] = useState();
  const ref = useOutSideClick(() => setPopup(fals))
  const refIndex = useOutSideClick(() => setPopupIndex(false))
  const filter = ["Самые популярные"];

  const type = ["Тип"];

  const handleIndex = (event) => {
    const selectIndex = Number(event.currentTarget.dataset.index);
    setIndex(selectIndex);
    setPopup(false)
  };

  const handleIndexType = (event) => {
    const selectIndex = Number(event.currentTarget.dataset.index);
    setIndexType(selectIndex);
    setPopupIndex(false)
  };


  const handlePopup = () => {
    setPopup(true);
  };

  const handlePopupType = () => {
    setPopupIndex(true);
  };
  return (
    <>
      <div className='alll'>
        <div className='transition'>
          <div className='in'>
            <a href="/popular"><p>Категории</p></a>
            <p>/</p>
            <p>Языки</p>
          </div>
          <h1>Языки</h1>
        </div>

        <div className='flexx'>
          <div className='modals'>
            <div className='container'>
              <div className='modals__first'>
                <div className="dropdown-main">
                  <div className="dropdown">
                    <button className="dropdown-text" onClick={handlePopup}>
                      {filter[index ?? 0]}
                      <svg width="11.507812" height="6.500000" viewBox="0 0 11.5078 6.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                          Created with Pixso.
                        </desc>
                        <defs />
                        <path id="Vector" d="M10.75 0.75L5.75 5.75L0.75 0.75" stroke="#191A26" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                      </svg>

                    </button>
                  </div>
                  {popup && (
                    <div className="dropdown-popup" ref={ref}>
                      {filter.map((el, idx) => (
                        <button key={idx} data-index={idx} onClick={handleIndex}>
                          {el}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="dropdown-type">
                  <div className="type">
                    <button className="dropdown-text" onClick={handlePopupType}>
                      {type[indexType ?? 0]}
                      <svg width="11.507812" height="6.500000" viewBox="0 0 11.5078 6.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                          Created with Pixso.
                        </desc>
                        <defs />
                        <path id="Vector" d="M10.75 0.75L5.75 5.75L0.75 0.75" stroke="#191A26" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                      </svg>

                    </button>
                  </div>
                  {popupIndex && (
                    <div className="dropdown-popup-type" ref={refIndex}>
                      {type.map((el, idx) => (
                        <button key={idx} data-index={idx} onClick={handleIndexType}>
                          {el}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className='content'>
                <div className='hexagon-icon'>
                  <img src={square} alt="" />
                  <a href="/language"><img src={hicon} alt="" /></a>
                </div>
              </div>
            </div>
          </div>



        </div>

        <div className='border'>

          <div className='course-languages'>
            <div className='all-languages'>
              <div className='main'>
                <img src={courseSvg} alt="Course" />
                <h2>Языки</h2>
              </div>
              <ul className='ulTags'>
                <a href="/aboutCourse"><li>Русский</li></a>
                <a href="/englandcom"><li>Английский</li></a>
                <a href="/germancom"><li>Немецкий</li></a>
                <a href="/france"> <li>Французский</li></a> <li>Французский</li>
                <a href="chinacom"><li>Китайский</li></a>
                <a href="japoncom"><li>Японский</li></a>
              </ul>
            </div>

            <div className='courses'>
              <div className='main-course'>
                <img src={school} alt="School" />
                <h2>Школа</h2>
              </div>
              <ul className='ulTag'>
                <li>Математика</li>
                <li>Русский язык</li>
                <li>Литература</li>
                <li>История</li>
                <li>Алгебра</li>
                <li>Геометрия</li>
              </ul>
            </div>
          </div>

          {/* -------- */}

          <div className='all-hexagon-course'>


            <a href="/aboutCourse">
              <div className='hex-cube'>
                <div className='all-fs'>

                  <div className='firstLeft'>
                    <img src={russian} alt="" />
                    <div className='sec-star'>

                      <div className='second-star'>
                        <img src={star} alt="" />
                        <p className='p-active' >4.9</p>
                        <p className='s-actives'>(24)</p>
                      </div>
                    </div>
                    <div className='aboutt-div-f'>Квиз</div>
                    <div id='aboutt-div-s'>32 карточки</div>
                    <div id='aboutt-div-th'>12+</div>
                  </div>
                  <div className='secondRight'>
                    <img src={profile} alt="" />
                    <h3>gingerbread</h3>
                  </div>
                </div>
                <div className='about-proccent'>
                  <h1> Русский язык</h1>
                  <img src={purple} alt="" />
                </div>
                <p className='hex-p'>Язык восточнославянской группы славянской ветви индоевропейской языковой семьи, национальный язык русского народа.</p>
                <div className='bottom-about'>
                  <div className='left-bottom'>
                    <div className=' first-active'>Общение</div>
                    <div className=' second-active'>Языки</div>
                    <div className=' third-active'>Развитие</div>
                  </div>
                  <div className='right-bottom'>
                    <h2>Достижения:</h2>
                    <img src={hexagon1} alt="" />
                    <img src={hexagon2} alt="" />
                    <img src={hexagon3} alt="" />
                  </div>
                </div>
              </div>
            </a>


            {/* 22222222 */}

            <a href="/englandcom">
              <div className='hex-cube'>
                <div className='all-fs'>

                  <div className='firstLeft'>
                    <img src={england} alt="" />
                    <div className='sec-star'>

                      <div className='second-star'>
                        <img src={star} alt="" />
                        <p className='p-active' >4.9</p>
                        <p className='s-actives'>(24)</p>
                      </div>
                    </div>
                    <div className='aboutt-div-f'>Квиз</div>
                    <div id='aboutt-div-s'>32 карточки</div>
                    <div id='aboutt-div-th'>12+</div>
                  </div>
                  <div className='secondRight'>
                    <img src={prof2} alt="" />
                    <h3>gingerbread</h3>
                  </div>
                </div>
                <div className='about-proccent'>
                  <h1> Английский язык</h1>
                  <img src={purple} alt="" />
                </div>
                <p className='hex-p'>:Язык восточнославянской группы славянской ветви индоевропейской языковой семьи, национальный язык русского народа.</p>
                <div className='bottom-about'>
                  <div className='left-bottom'>
                    <div className=' first-active'>Общение</div>
                    <div className=' second-active'>Языки</div>
                    <div className=' third-active'>Развитие</div>
                  </div>
                  <div className='right-bottom'>
                    <h2>Достижения:</h2>
                    <img src={hexagon1} alt="" />
                    <img src={hexagon2} alt="" />
                    <img src={hexagon3} alt="" />
                  </div>
                </div>
              </div>
            </a>



            {/* 3333333 */}

            <a href="/germancom">

              <div className='hex-cube'>
                <div className='all-fs'>

                  <div className='firstLeft'>
                    <img src={german} alt="" />
                    <div className='sec-star'>

                      <div className='second-star'>
                        <img src={star} alt="" />
                        <p className='p-active' >4.9</p>
                        <p className='s-actives'>(24)</p>
                      </div>
                    </div>
                    <div className='aboutt-div-f'>Квиз</div>
                    <div id='aboutt-div-s'>32 карточки</div>
                    <div id='aboutt-div-th'>12+</div>
                  </div>
                  <div className='secondRight'>
                    <img src={prof3} alt="" />
                    <h3>gingerbread</h3>
                  </div>
                </div>
                <div className='about-proccent'>
                  <h1>Немецкий язык</h1>
                  <img src={purple} alt="" />
                </div>
                <p className='hex-p'>Немецкий язык является самым распространённым языком в Западной Европе</p>
                <div className='bottom-about'>
                  <div className='left-bottom'>
                    <div className=' first-active'>Общение</div>
                    <div className=' second-active'>Языки</div>
                    <div className=' third-active'>Развитие</div>
                  </div>
                  <div className='right-bottom'>
                    <h2>Достижения:</h2>
                    <img src={hexagon1} alt="" />
                    <img src={hexagon2} alt="" />
                    <img src={hexagon3} alt="" />
                  </div>
                </div>
              </div>
            </a>

            {/* 4444444 */}


            <a href="francecom">

              <div className='hex-cube'>
                <div className='all-fs'>

                  <div className='firstLeft'>
                    <img src={france} alt="" />
                    <div className='sec-star'>

                      <div className='second-star'>
                        <img src={star} alt="" />
                        <p className='p-active' >4.9</p>
                        <p className='s-actives'>(24)</p>
                      </div>
                    </div>
                    <div className='aboutt-div-f'>Квиз</div>
                    <div id='aboutt-div-s'>32 карточки</div>
                    <div id='aboutt-div-th'>12+</div>
                  </div>
                  <div className='secondRight'>
                    <img src={prof4} alt="" />
                    <h3>gingerbread</h3>
                  </div>
                </div>
                <div className='about-proccent'>
                  <h1> Французский язык</h1>
                  <img src={purple} alt="" />
                </div>
                <p className='hex-p'>Французский язык считается романским языком</p>
                <div className='bottom-about'>
                  <div className='left-bottom'>
                    <div className=' first-active'>Общение</div>
                    <div className=' second-active'>Языки</div>
                    <div className=' third-active'>Развитие</div>
                  </div>
                  <div className='right-bottom'>
                    <h2>Достижения:</h2>
                    <img src={hexagon1} alt="" />
                    <img src={hexagon2} alt="" />
                    <img src={hexagon3} alt="" />
                  </div>
                </div>
              </div>
            </a>



            {/* 55555555 */}


            <a href="chinacom">

              <div className='hex-cube'>
                <div className='all-fs'>

                  <div className='firstLeft'>
                    <img src={china} alt="" />
                    <div className='sec-star'>

                      <div className='second-star'>
                        <img src={star} alt="" />
                        <p className='p-active' >4.9</p>
                        <p className='s-actives'>(24)</p>
                      </div>
                    </div>
                    <div className='aboutt-div-f'>Квиз</div>
                    <div id='aboutt-div-s'>32 карточки</div>
                    <div id='aboutt-div-th'>12+</div>
                  </div>
                  <div className='secondRight'>
                    <img src={prof5} alt="" />
                    <h3>gingerbread</h3>
                  </div>
                </div>
                <div className='about-proccent'>
                  <h1>Китайский язык</h1>
                  <img src={purple} alt="" />
                </div>
                <p className='hex-p'>Китайский язык один сложнейших,  распространённых языков</p>
                <div className='bottom-about'>
                  <div className='left-bottom'>
                    <div className=' first-active'>Общение</div>
                    <div className=' second-active'>Языки</div>
                    <div className=' third-active'>Развитие</div>
                  </div>
                  <div className='right-bottom'>
                    <h2>Достижения:</h2>
                    <img src={hexagon1} alt="" />
                    <img src={hexagon2} alt="" />
                    <img src={hexagon3} alt="" />
                  </div>
                </div>
              </div>
            </a>


            {/* 66666666 */}
            <a href="japoncom">

              <div className='hex-cube'>
                <div className='all-fs'>

                  <div className='firstLeft'>
                    <img src={japon} alt="" />
                    <div className='sec-star'>

                      <div className='second-star'>
                        <img src={star} alt="" />
                        <p className='p-active' >4.9</p>
                        <p className='s-actives'>(24)</p>
                      </div>
                    </div>
                    <div className='aboutt-div-f'>Квиз</div>
                    <div id='aboutt-div-s'>32 карточки</div>
                    <div id='aboutt-div-th'>12+</div>
                  </div>
                  <div className='secondRight'>
                    <img src={prof6} alt="" />
                    <h3>gingerbread</h3>
                  </div>
                </div>
                <div className='about-proccent'>
                  <h1> Японский язык</h1>
                  <img src={purple} alt="" />
                </div>
                <p className='hex-p'>Язык японцев и фактически государственный язык Японии, со спорны...</p>
                <div className='bottom-about'>
                  <div className='left-bottom'>
                    <div className=' first-active'>Общение</div>
                    <div className=' second-active'>Языки</div>
                    <div className=' third-active'>Развитие</div>
                  </div>
                  <div className='right-bottom'>
                    <h2>Достижения:</h2>
                    <img src={hexagon1} alt="" />
                    <img src={hexagon2} alt="" />
                    <img src={hexagon3} alt="" />
                  </div>
                </div>
              </div>




            </a>
          </div>

        </div>

      </div>
      <div className='linee'></div>
    </>
  )
}

export default CubeLanguage

