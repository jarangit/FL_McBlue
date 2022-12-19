import React from 'react'
import Menu from './menu'
import SideMenu from './sideMenu'

const Layout = ({ children }) => {
  return (
    <div className='my_bg_image'>
      <Menu />
      <SideMenu />
      <div>{children}</div>
    </div>
  )
}

export default Layout