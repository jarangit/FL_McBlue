import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'

const BottomMenu = () => {
  return (
    <div className='fixed  w-full  -bottom-2 z-[100] md:hidden !text-xs' id="account-actions-mobile">
      <div className='flex  justify-between relative'>
        <div className='flex  gap-3 border-t p-3 my_bg_blue_card rounded-2xl pb-6 z-20 pr-1'>
          <div className='w-[60px] flex flex-col items-center'>
            <div>
              <img src={IMAGE_STORE.menuLoginIcon} alt="" width={40} />
            </div>
            <p>เข้าสู่ระบบ</p>
          </div>
          <div className='w-[60px] flex flex-col items-center'>
            <div>
              <img src={IMAGE_STORE.menuUserIcon} alt="" width={40} />
            </div>
            <div>สมัคร</div>
          </div>
        </div>
        {/* <span className=' w-full absolute  bottom-5 my_bg_blue_card z-10 h-24 bottom-10'>
          <div className='w-6 h-6 bg-transparent'></div>
        </span> */}
        <div className=' absolute bottom-3  w-full h-16'>
          <div className='flex justify-center overflow-hidden w-full items-end h-24 relative bottom-0'>
            <div className=" mx-auto ">
              <div className="fixed-holder"><div className="fixed-div"></div></div>
            </div>
          </div>
        </div>
        <div className=' -top-4  relative z-30 text-center justify-center flex animate_jello'>
          <div className='bottom_menu_center'>
            <div>
              <img src={IMAGE_STORE.midIconMenuMB} alt="" width={120} />
            </div>
            <div className='text-xs relative -top-1'>สิทธิพิเศษ</div>
          </div>
        </div>
        <div className='flex  gap-3 border-t p-3 my_bg_blue_card rounded-2xl pb-6 z-20 pl-1'>
        <div className='w-[60px] flex flex-col items-center'>
            <div>
              <img src={IMAGE_STORE.menuGiftIcon} alt="" width={40} />
            </div>
            <div>โปรโมชั่น</div>
          </div>
          <div className='w-[60px] flex flex-col items-center'>
            <div>
              <img src={IMAGE_STORE.menuLineIcon} alt="" width={40} />
            </div>
            <div>ติดต่อเรา</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomMenu