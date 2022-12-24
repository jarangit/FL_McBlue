import React from 'react'
import Menu from './menu'
import SideMenu from './sideMenu'
import TextSlide from '../items/textSlide'
const Layout = ({ children }) => {
  return (
    <div className='my_bg_image'>
      <Menu />
      <SideMenu />
      <TextSlide />
        {children}
    </div>
  )
}

export default Layout