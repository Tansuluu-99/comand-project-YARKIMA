import React, { useState } from 'react';
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
import { useOutSideClick } from '../../hooks/outsideclick.js';
import square from '../../assets/svg/square.svg'
import hicon from "../../assets/svg/hicon.svg"


function Language() {
    const [popup, setPopup] = useState(false);
    const [popupIndex, setPopupIndex] = useState();
    const [index, setIndex] = useState(false);
    const [indexType, setIndexType] = useState();
    const ref = useOutSideClick(() => setPopup(fals))
    const refIndex = useOutSideClick(() => setPopupIndex(false))
    const filter = ["Самые популярные", "Самые дешевые"];

    const type = ["Тип", "Тип-1"];

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
            
        


            <div className='all-lan-hex'>
                <div>
                    <div className='container'>
                        <div className='transition'>
                            <div className='in'>
                                <a href="/popular"><p>Категории</p></a>
                                <p>/</p>
                                <p>Языки</p>
                            </div>
                            <h1>Языки</h1>
                        </div>
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
                                        <a href="/cubelanguage"><img src={square} alt="" /></a>
                                        <img src={hicon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='course'>


                     <div className='course-language'>
                        <div className='all-languages'>
                            <div className='main'>
                                <img src={courseSvg} alt="Course" />
                                <h2>Языки</h2>
                            </div>
                            <ul className='ulTags'>
                                <a href="/aboutcourse"><li>Русский</li></a>
                                <a href="/englandcom"><li>Английский</li></a>
                               <a href="/germancom"><li>Немецкий</li></a> 
                                <a href="/francecom"><li>Французский</li></a>
                                <a href="/chinacom"><li>Китайский</li></a>
                               <a href="/japoncom"><li>Японский</li></a> 
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
                                    <a href="/aboutCourse">
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
                                        </div></a>

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
            </div>

            <div className='bottomLine'></div>
        </>
    );
}

export default Language;
