import React from 'react';
import './Language.css';
import courseSvg from '../../assets/svg/course.svg';
import school from '../../assets/svg/school.svg';
import hex2 from '../../assets/image/hex2.png';
import dot from '../../assets/svg/dot.svg';
import one from '../../assets/svg/one.svg';
import purple from '../../assets/svg/purple.svg';
import hexagon1 from '../../assets/svg/hexagon1.svg';
import hexagon2 from '../../assets/svg/hexagon2.svg';
import hexagon3 from '../../assets/svg/hexagon3.svg';
import course from '../../data/course.js';
import kub from '../../assets/svg/kub.svg'
import six from '../../assets/svg/six.svg'


function Language() {
    return (

        <>
        <div className='all-lan-hex'>
        <div className='transition'>
        <div className='in'>
          <p>Категории</p>
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
         <a href="/cubelanguage"><img src={six} alt="" /></a> 
        </div>
      </div>
        <section className='course'>

           

            <section className='course'>


                <div className='course-language'>
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

                <div className='main-all'>

                    <div className='main-about'>
                        {course.slice(0, 2).map((x) => (

                            <div className='main-figure'>
                                <img id='main-figure-img' src={hex2} alt="Main Figure" />
                                <div key={x.id} className='poligon'>
                                    <img className='polygon-img' src={x.flag} alt={x.title} />
                                    <div className='polygon-profile'>
                                        <img src={x.profile} alt="Profile" />
                                        <h1>gingerbread</h1>
                                    </div>
                                    <div className='polygon-procent'>
                                        <h1>{x.title}</h1>
                                        <img src={dot} alt="Dot" />
                                        <p>65%</p>
                                        <img id='second-image' src={purple} alt="Purple" />
                                    </div>
                                    <div className='polygon-buttons'>
                                        <button className='p-1'>{x.button1}</button>
                                        <button className='p-2'>{x.button2}</button>
                                        <button className='p-3'>{x.button3}</button>
                                        <img src={one} alt="One" />
                                        <h4>4.9</h4>
                                        <p>(24)</p>
                                    </div>
                                    <p className='poligon-p'>{x.description}</p>
                                    <div className='polygon-button2'>
                                        <button className='b-1'>{x.butt1}</button>
                                        <button className='b-2'>{x.butt2}</button>
                                        <button className='b-3'>{x.butt3}</button>
                                    </div>
                                    <div className='polygon-image'>
                                        <img src={hexagon1} alt="Hexagon 1" />
                                        <img src={hexagon2} alt="Hexagon 2" />
                                        <img src={hexagon3} alt="Hexagon 3" />
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>

                    <div className='main-about about2'>
                        {course.slice(2, 3).map((x) => (

                            <div className='main-figure'>
                                <img id='main-figure-img' src={hex2} alt="Main Figure" />
                                <div key={x.id} className='poligon'>
                                    <img className='polygon-img' src={x.flag} alt={x.title} />
                                    <div className='polygon-profile'>
                                        <img src={x.profile} alt="Profile" />
                                        <h1>gingerbread</h1>
                                    </div>
                                    <div className='polygon-procent'>
                                        <h1>{x.title}</h1>
                                        <img src={dot} alt="Dot" />
                                        <p>65%</p>
                                        <img id='second-image' src={purple} alt="Purple" />
                                    </div>
                                    <div className='polygon-buttons'>
                                        <button className='p-1'>{x.button1}</button>
                                        <button className='p-2'>{x.button2}</button>
                                        <button className='p-3'>{x.button3}</button>
                                        <img src={one} alt="One" />
                                        <h4>4.9</h4>
                                        <p>(24)</p>
                                    </div>
                                    <p className='poligon-p'>{x.description}</p>
                                    <div className='polygon-button2'>
                                        <button className='b-1'>{x.butt1}</button>
                                        <button className='b-2'>{x.butt2}</button>
                                        <button className='b-3'>{x.butt3}</button>
                                    </div>
                                    <div className='polygon-image'>
                                        <img src={hexagon1} alt="Hexagon 1" />
                                        <img src={hexagon2} alt="Hexagon 2" />
                                        <img src={hexagon3} alt="Hexagon 3" />
                                    </div>
                                </div>

                            </div>


                        ))}

                    </div>

                    <div className='main-about about'>
                        {course.slice(3, 5).map((x) => (

                            <div className='main-figure'>
                                <img id='main-figure-img' src={hex2} alt="Main Figure" />
                                <div key={x.id} className='poligon'>
                                    <img className='polygon-img' src={x.flag} alt={x.title} />
                                    <div className='polygon-profile'>
                                        <img src={x.profile} alt="Profile" />
                                        <h1>gingerbread</h1>
                                    </div>
                                    <div className='polygon-procent'>
                                        <h1>{x.title}</h1>
                                        <img src={dot} alt="Dot" />
                                        <p>65%</p>
                                        <img id='second-image' src={purple} alt="Purple" />
                                    </div>
                                    <div className='polygon-buttons'>
                                        <button className='p-1'>{x.button1}</button>
                                        <button className='p-2'>{x.button2}</button>
                                        <button className='p-3'>{x.button3}</button>
                                        <img src={one} alt="One" />
                                        <h4>4.9</h4>
                                        <p>(24)</p>
                                    </div>
                                    <p className='poligon-p'>{x.description}</p>
                                    <div className='polygon-button2'>
                                        <button className='b-1'>{x.butt1}</button>
                                        <button className='b-2'>{x.butt2}</button>
                                        <button className='b-3'>{x.butt3}</button>
                                    </div>
                                    <div className='polygon-image'>
                                        <img src={hexagon1} alt="Hexagon 1" />
                                        <img src={hexagon2} alt="Hexagon 2" />
                                        <img src={hexagon3} alt="Hexagon 3" />
                                    </div>
                                </div>

                            </div>


                        ))}

                    </div>

                    <div className='main-about about2'>
                        {course.slice(5, 6).map((x) => (

                            <div className='main-figure'>
                                <img id='main-figure-img' src={hex2} alt="Main Figure" />
                                <div key={x.id} className='poligon'>
                                    <img className='polygon-img' src={x.flag} alt={x.title} />
                                    <div className='polygon-profile'>
                                        <img src={x.profile} alt="Profile" />
                                        <h1>gingerbread</h1>
                                    </div>
                                    <div className='polygon-procent'>
                                        <h1>{x.title}</h1>
                                        <img src={dot} alt="Dot" />
                                        <p>65%</p>
                                        <img id='second-image' src={purple} alt="Purple" />
                                    </div>
                                    <div className='polygon-buttons'>
                                        <button className='p-1'>{x.button1}</button>
                                        <button className='p-2'>{x.button2}</button>
                                        <button className='p-3'>{x.button3}</button>
                                        <img src={one} alt="One" />
                                        <h4>4.9</h4>
                                        <p>(24)</p>
                                    </div>
                                    <p className='poligon-p'>{x.description}</p>
                                    <div className='polygon-button2'>
                                        <button className='b-1'>{x.butt1}</button>
                                        <button className='b-2'>{x.butt2}</button>
                                        <button className='b-3'>{x.butt3}</button>
                                    </div>
                                    <div className='polygon-image'>
                                        <img src={hexagon1} alt="Hexagon 1" />
                                        <img src={hexagon2} alt="Hexagon 2" />
                                        <img src={hexagon3} alt="Hexagon 3" />
                                    </div>
                                </div>

                            </div>


                        ))}

                    </div>
                </div>



            </section>
        </section>
        </div>
        </>
    );
}

export default Language;
