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
      <div className='pt-[120px] ml-[200px] w-full max-w-[1300px] p-3 min-h-screen'>
        {children}
      </div>
    </div>
  )
}

export default Layout