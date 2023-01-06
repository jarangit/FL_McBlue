import React, { useState, useEffect } from 'react'
import Menu from './menu'
import SideMenu from './sideMenu'
import TextSlide from '../items/textSlide'
import Footer from './footer'
import MenuModal from '../modal/menuModal'
import BottomMenu from './bottomMenu'
import Banner from './banner'
import StepSection from '../sections/step'
import PromotionsSection from '../sections/promotions'
import Step2Section from '../sections/step2'
import WhySection from '../sections/why'
import BlogSection from '../sections/blog'
import Question from '../sections/question'
import Sponsor from '../sections/sponsor'
import SideMenuMB from './sideMenuMB'
import Loading from '../items/loading'
import LoginModal from '../modal/loginModal'
const Layout = ({ children }) => {
  const [showMenuMB, setShowMenuMB] = useState(false)
  const [showModalLogin, setShowModalLogin] = useState(false)
  const styled = {
    fullWidth: `
    ml-0 md:pl-[200px] w-full max-w-[1620px]
    `,
    container_desk:`myContainerTop  md:pl-[28%] lg:pl-[20%] hidden md:block  lg:pr-24`,
    container_mb:`myContainerTop md:pl-[200px] md:hidden`,
    side_menu:`relative -left-4 col-span-2  md:col-span-1 min-w-[110px]`
  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  const [loading, setLoading] = useState(false)


  return (
    <div className='my_bg_image'>
      {loading && <Loading />}
      <MenuModal show={showMenuMB} onClose={setShowMenuMB} />
      <Menu setShowMenuMB={setShowMenuMB} setShowModalLogin ={setShowModalLogin}/>
      <SideMenu />
      <TextSlide />
      <div>
        <div className={`${styled.fullWidth}  pt-[120px]`}>
          <Banner />
        </div>
        <div className={`${styled.container_desk}`}>
          {children}
        </div>
        <div className={`${styled.container_mb}`}>
          <div className='flex'>
            <div className={`${styled.side_menu}`}>
              <SideMenuMB />
            </div>
            <div className=''>
              <div className='myContainerTop md:pl-[200px] !px-0'>
                {children}
              </div>
            </div>
          </div>
        </div>
        <div className={`${styled.fullWidth}`}>
          <StepSection />
          <PromotionsSection />
          <Step2Section />
          <WhySection />
          <BlogSection />
          <Question />
          <Sponsor />
        </div>
      </div>
      <Footer />
      <BottomMenu />

      {/* modal zone */}
      <LoginModal open={showModalLogin} handleClose={setShowModalLogin} />
    </div>
  )
}

export default Layout