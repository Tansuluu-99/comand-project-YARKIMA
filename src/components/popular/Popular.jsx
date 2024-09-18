import React from 'react'

// import sword from "../../assets/svg/sword.svg"
// import vector from "../../assets/svg/vector.svg"
// import "./popular.css"
// import { katalog } from '../../data/katalog'
// import kub from "../../assets/svg/kub.svg"
// import six from "../../assets/svg/six.svg"
import back from "../../assets/image/back.png"

import sword from "../../assets/svg/sword.svg"
import vector from "../../assets/svg/vector.svg"
import "./popular.css"
import { katalog } from '../../data/katalog'
import kub from "../../assets/svg/kub.svg"
import six from "../../assets/svg/six.svg"
import popular from "../../assets/image/color.png"
import './popular.css'


function Popular() {
  return (
    <div className='category '>
      <h1>КАТЕГОРИИ</h1>
      <div className='populars'>

        <img className='gradient' src={back} alt="" />


        <h2>ПОПУПЛЯРНЫЕ КАТЕГОРИИ</h2>
        <div className='popular-flex'>
          <div className='popularies'>
            <div className='popular-first'>
              <img src={sword} alt="" />
              <div className='small'>

                <img className='vector' src={vector} alt="" />

               

                <p>21 курс</p>
              </div>
            </div>

            <div className='popular-second'>
              <button>Душа</button>
              <button>Личность</button>
              <button>Вселенная</button>
            </div>

            <div className='popular-three'>
              <h3>Воин</h3>
              <p>Борьба за смысл, снижение того, во что есть вера, устойчивость позиций своих и необходимость переход...</p>
            </div>
          </div>
          <a href="/language"><div className='popularies'>
            <div className='popular-first'>
              <img  src={sword} alt="" />
              <div className='small'>
                <img className='vector' src={vector} alt="" />
                <p>21 курс</p>
              </div>
            </div>

            <div className='popular-second'>
              <button>Душа</button>
              <button>Личность</button>
              <button>Вселенная</button>
            </div>

            <div className='popular-three'>
              <h3>Воин</h3>
              <p>Борьба за смысл, снижение того, во что есть вера, устойчивость позиций своих и необходимость переход...</p>
            </div>
          </div></a>
          <div className='popularies'>
            <div className='popular-first'>
              <img src={sword} alt="" />
              <div className='small'>
                <img className='vector' src={vector} alt="" />
                <p>21 курс</p>
              </div>
            </div>

            <div className='popular-second'>
              <button>Душа</button>
              <button>Личность</button>
              <button>Вселенная</button>
            </div>

            <div className='popular-three'>
              <h3>Воин</h3>
              <p>Борьба за смысл, снижение того, во что есть вера, устойчивость позиций своих и необходимость переход...</p>
            </div>
          </div>
        </div>

      </div>


      <div className='flex'>
        <div>
          <div className='so'>
            <select>
              <option>САМЫЕ ПОПУЛЯРНЫЕ</option>
              <option>en</option>
              <option>ru</option>
            </select>
          </div>

          <div className='tip'>
            <select>
              <option>ТИП</option>
              <option>en</option>
              <option>ru</option>
            </select>
          </div>
        </div>



        <div className='popular-btn'>
          <img src={kub} alt="" />
          <a href="/service"><img src={six} alt="" /></a>
        </div>
      </div>

      <div className='grid container'>
        {katalog.map((item) => (
          <div className='popular '>
            <div className='popular-first'>
              <img src={sword} alt="" />
              <div className='small'>
                <img className='vector' src={vector} alt="" />
                <p>{item.kurs}</p>
              </div>
            </div>

            <div className='popular-second'>
              <button>Душа</button>
              <button>Личность</button>
              <button>Вселенная</button>
            </div>

            <div className='popular-three'>
              <h3>{item.ASD}</h3>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='bottomLine'></div>

    </div>


  )
}

export default Popular
