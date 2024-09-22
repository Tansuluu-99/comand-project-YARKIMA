import React from 'react'
import { Outlet } from 'react-router-dom'

import HeaderTwo from '../HeaderTwo/HeaderTwo'
import Footer from '../Footer/Footer'

function Layoutwo() {
  return (
    <div>
      <HeaderTwo/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layoutwo