import React, { useMemo } from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'

const BottomMenu = () => {
  const styled = {
    root: `fixed  w-full  -bottom-4 z-[100] md:hidden !text-xs`,
    box: `flex  justify-between relative`,
    boxMenu: `flex  gap-3 border-t-2 p-3 my_bg_blue_card_mb rounded-2xl pb-6 z-20 w-full`,
    menuItem: `w-full flex flex-col items-center`,
    bg_menu: `flex justify-center overflow-hidden w-full items-end h-24 relative bottom-0`,
    icon_center: ` -top-4  relative z-30 text-center justify-center flex animate_jello`
  }
  return (
    <div className={`${styled.root}`} id="account-actions-mobile">
      <div className={`${styled.box}`}>
        <div className={`${styled.boxMenu} pr-1 `}>
          <div className={`${styled.menuItem}`}>
            <div>
              <img src={IMAGE_STORE.menuLoginIcon} alt="" width={40} />
            </div>
            <div className='item_wrapper transition-all'>เข้าสู่ระบบ</div>
          </div>
          <div className={`${styled.menuItem}`}>
            <div>
              <img src={IMAGE_STORE.menuUserIcon} alt="" width={40} />
            </div>
            <div className='item_wrapper transition-all'>สมัคร</div>
          </div>
        </div>
        <div className=' absolute bottom-3  w-full h-16'>
          <div className={`${styled.bg_menu}`}>
            <div className=" mx-auto ">
              <div className="fixed-holder"><div className="fixed-div "></div></div>
            </div>
          </div>
        </div>
        <div className={`${styled.icon_center}`}>
          <div className='bottom_menu_center'>
            <div>
              <img src={IMAGE_STORE.midIconMenuMB} alt="" width={120} />
            </div>
            <div className='text-xs relative -top-1'>สิทธิพิเศษ</div>
          </div>
        </div>
        <div className={`${styled.boxMenu} pl-1 `}>
          <div className={`${styled.menuItem}`}>
            <div>
              <img src={IMAGE_STORE.menuGiftIcon} alt="" width={40} />
            </div>
            <div className='item_wrapper transition-all'>โปรโมชั่น</div>
          </div>
          <div className={`${styled.menuItem}`}>
            <div>
              <img src={IMAGE_STORE.menuLineIcon} alt="" width={40} />
            </div>
            <div className='item_wrapper transition-all'>ติดต่อเรา</div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default BottomMenu