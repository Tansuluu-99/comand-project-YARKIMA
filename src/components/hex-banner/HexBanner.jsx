import React, { useState } from 'react'
import './hexBanner.css'

import hexagon from '../../assets/svg/hexagon.svg'
import print from '../../assets/svg/print.svg'
import backs from '../../assets/image/backs.png'
import hex2 from '../../assets/image/hex2.png'
import hexagons from '../../data/hexagonCom'
import { useOutSideClick } from '../../hooks/outsideclick'
import square from '../../assets/svg/square.svg'
import hicon from "../../assets/svg/hicon.svg"


function HexBanner() {
  const [popup, setPopup] = useState(false);
  const [popupIndex, setPopupIndex] = useState();
  const [index, setIndex] = useState(false);
  const [indexType, setIndexType] = useState();
  const ref = useOutSideClick(() => setPopup(false))
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
      <h1 className='katalog-h1'>Категории</h1>

      <h1 className='popular'>Популярные Категории</h1>
      <img id='back' src={backs} alt="" />

      <div className='katalog-banner'>
        <div className='all-katalog'>
          <div className='about-katalog'>
            {
              hexagons.map((x) => (
                <div key={x.id} className='hex-img'>
                  <img src={hex2} alt="" />
                  <div className='hex-about'>
                    <img src={x.image} alt="" />
                    <h1>{x.title}</h1>
                    <p>{x.description}</p>
                    <div className='bottom-hex'>
                      <img src={x.images} alt="" />
                      <p>{x.course}</p>
                    </div>
                  </div>
                </div>

              ))
            }
          </div>
        </div>
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
              <img src={square} alt="" />
              <img src={hicon} alt="" />
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default HexBanner
