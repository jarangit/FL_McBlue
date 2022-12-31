import React, { useState, useEffect } from 'react'
import Menu from './menu'
import SideMenu from './sideMenu'
import TextSlide from '../items/textSlide'
import Footer from './footer'
import MenuModal from '../modal/menuModal'
const Layout = ({ children }) => {
  const [showMenuMB, setShowMenuMB] = useState(false)
  useEffect(() => {

  }, [showMenuMB])

  return (
    <div className='my_bg_image'>
      <MenuModal show={showMenuMB} onClose={setShowMenuMB} />
      <Menu setShowMenuMB={setShowMenuMB} />
      <SideMenu />
      <TextSlide />
      {children}
      <Footer />
    </div>
  )
}

export default Layout