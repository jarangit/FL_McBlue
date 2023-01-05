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
const Layout = ({ children }) => {
  const [showMenuMB, setShowMenuMB] = useState(false)
  const styled = {
    fullWidth: `
    ml-0 md:pl-[200px] w-full max-w-[1620px]
    `
  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [showMenuMB])
  const [loading, setLoading] = useState(false)


  return (
    <div className='my_bg_image'>
      {loading && <Loading />}
      <MenuModal show={showMenuMB} onClose={setShowMenuMB} />
      <Menu setShowMenuMB={setShowMenuMB} />
      <SideMenu />
      <TextSlide />
      <div>
        <div className={`${styled.fullWidth}  pt-[120px]`}>
          <Banner />
        </div>
        <div className='myContainerTop md:pl-[300px] hidden md:block  lg:pr-24'>
          {children}
        </div>
        <div className='myContainerTop md:pl-[200px] md:hidden '>
          <div className='grid grid-cols-3 '>
            <div className='relative -left-3  '>
              <SideMenuMB />
            </div>
            <div className='col-span-2 '>
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
    </div>
  )
}

export default Layout