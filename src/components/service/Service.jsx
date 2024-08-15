import React from 'react'
import './Service.css'
import hex2 from '../../assets/image/hex2.png'
import hexagon from '../../assets/svg/hexagon.svg'
// import print from '../../assets/svg/print.svg'
// import lighting from '../../assets/svg/lighting.svg'
// import language from '../../assets/svg/language.svg'
// import sun from '../../assets/svg/sun.svg'
// import game from '../../assets/svg/game.svg'
// import square from '../../assets/svg/square.svg'
// import blackIcon from '../../assets/svg/blackIcon.svg'
import hexagonCom from '../../data/hexagon'

console.log(hexagonCom);

function Service() {
  return (
    <>
    <div className='all-container'>
        <div className='about-hexagon'>
                {
                    hexagonCom.slice(0, 4).map((x) => (
                    <div key={x.id} className='hex-k-img'>
                <img src={hex2} alt="" />
                <div className='hexagon-about'>
                    <img src={x.image} alt="" />
                    <h1>{x.title}</h1>
                    <p>{x.description}</p>
                    <div className='bottom-hexagon'>
                        <img src={x.images} alt="" />
                        <p>{x.course}</p>
                    </div>
                </div>
            </div>
                    ))
                }
      </div>

      <div className='about-hexagon  actives'>
                {
                    hexagonCom.slice(4, 7).map((x) => (
                    <div key={x.id} className='hex-k-img'>
                <img src={hex2} alt="" />
                <div className='hexagon-about'>
                    <img src={x.image} alt="" />
                    <h1>{x.title}</h1>
                    <p>{x.description}</p>
                    <div className='bottom-hexagon'>
                        <img src={x.images} alt="" />
                        <p>{x.course}</p>
                    </div>
                </div>
            </div>
                    ))
                }
      </div>


      <d2iv className='about-hexagon'>
                {
                    hexagonCom.slice(7, 11).map((x) => (
                    <div key={x.id} className='hex-k-img'>
                <img src={hex2} alt="" />
                <div className='hexagon-about'>
                    <img src={x.image} alt="" />
                    <h1>{x.title}</h1>
                    <p>{x.description}</p>
                    <div className='bottom-hexagon'>
                        <img src={x.images} alt="" />
                        <p>{x.course}</p>
                    </div>
                </div>
            </div>
                    ))
                }
      </d2iv>


      <d3iv className='about-hexagon actives'>
                {
                    hexagonCom.slice(11, 14).map((x) => (
                    <div key={x.id} className='hex-k-img'>
                <img src={hex2} alt="" />
                <div className='hexagon-about'>
                    <img src={x.image} alt="" />
                    <h1>{x.title}</h1>
                    <p>{x.description}</p>
                    <div className='bottom-hexagon'>
                        <img src={x.images} alt="" />
                        <p>{x.course}</p>
                    </div>
                </div>
            </div>
                    ))
                }
      </d3iv>


      <d4iv className='about-hexagon'>
                {
                    hexagonCom.slice(14, 18).map((x) => (
                    <div key={x.id} className='hex-k-img'>
                <img src={hex2} alt="" />
                <div className='hexagon-about'>
                    <img src={x.image} alt="" />
                    <h1>{x.title}</h1>
                    <p>{x.description}</p>
                    <div className='bottom-hexagon'>
                        <img src={x.images} alt="" />
                        <p>{x.course}</p>
                    </div>
                </div>
            </div>
                    ))
                }
      </d4iv>
    </div>
    </>
  )
}

export default Service
