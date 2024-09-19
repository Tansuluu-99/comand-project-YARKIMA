import React from 'react'




import './Cube.css'
import kub from '../../assets/svg/kub.svg'
import six from '../../assets/svg/six.svg'
import school from '../../assets/svg/school.svg'
import courseSvg from '../../assets/svg/course.svg'
// import russian from '../../assets/svg/russian.svg'
import hexagon1 from '../../assets/svg/hexagon1.svg'
import hexagon2 from '../../assets/svg/hexagon2.svg'
import hexagon3 from '../../assets/svg/hexagon3.svg'
import star from '../../assets/svg/star.svg'
// import profile from '../../assets/svg/profile.svg'
import purple from '../../assets/svg/purple.svg'
// import allCourse from '../../data/allCourse'

import russian from '../../assets/svg/russian.svg'
import england from '../../assets/svg/england.svg'
import german from '../../assets/svg/german.svg'
import france from '../../assets/svg/france.svg'
import china from '../../assets/svg/china.svg'
import japon from '../../assets/svg/japon.svg'
import profile from '../../assets/svg/profile.svg'
import prof2 from '../../assets/svg/prof2.svg'
import prof3 from '../../assets/svg/prof3.svg'
import prof4 from '../../assets/svg/prof4.svg'
import prof5 from '../../assets/svg/prof5.svg'
import prof6 from '../../assets/svg/prof6.svg'


function CubeLanguage() {
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
          <div>
            <div className='so1'>
              <select>
                <option>САМЫЕ ПОПУЛЯРНЫЕ</option>
              </select>
            </div>

            <div className='tipp'>
              <select>
                <option>ТИП</option>
              </select>
            </div>
          </div>



          <div className='popularr-btn'>
            <img src={kub} alt="" />
            <a href="/language"><img src={six} alt="" /></a>
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
                <li>Русский</li>
                <li>Английский</li>
                <li>Немецкий</li>
                <li>Французский</li>
                <li>Китайский</li>
                <li>Японский</li>
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
            <a href="/aboutcourse">

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
                  <h1>Русский язык </h1>
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

            {/* -------- */}


            <a href="/english">
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
              <p className='hex-p'>Английский язык это международный язык</p>
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



            {/* -------- */}

<a href="/germany">

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


            {/* -------- */}

<a href="/france">

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




            {/* ----------- */}
<a href="/china">

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
                <h1> Китайский язык</h1>
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




            {/* -------- */}

<a href="/japan">

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

