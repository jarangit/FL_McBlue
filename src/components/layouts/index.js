import React from 'react'
import Menu from './menu'
import SideMenu from './sideMenu'
import TextSlide from '../items/textSlide'
import Footer from './footer'
const Layout = ({ children }) => {
  return (
    <div className='my_bg_image'>
      <Menu />
      <SideMenu />
      <TextSlide />
      {children}
      <Footer />
    </div>
  )
}

export default Layout