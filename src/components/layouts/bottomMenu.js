import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'

const BottomMenu = () => {
  return (
    <div className='fixed  w-full  -bottom-5 ' id="account-actions-mobile">
      <div className='flex  justify-between relative'>
        <div className='flex  gap-10 border-t p-3 my_bg_blue_card rounded-2xl pb-6 z-20 pr-6'>
          <div>
            <div>
              <img src={IMAGE_STORE.menuLoginIcon} alt="" width={40} />
            </div>
            <div>text</div>
          </div>
          <div>
            <div>
              <img src={IMAGE_STORE.menuLoginIcon} alt="" width={40} />
            </div>
            <div>text</div>
          </div>
        </div>
        <span className=' w-full absolute h-5 bottom-5 my_bg_blue_card z-10'></span>
        <div className=' -top-6  relative z-30 text-center justify-center flex'>
          <div className='bottom_menu_center'>
            <div>
              <img src={IMAGE_STORE.midIconMenuMB} alt="" width={120} />
            </div>
            <div className='text-xs relative -top-1'>สิทธิพิเศษ</div>
          </div>
        </div>
        <div className='flex  gap-10 border-t p-3 my_bg_blue_card rounded-2xl pb-6 z-20 pl-6'>
          <div>
            <div>
              <img src={IMAGE_STORE.menuLoginIcon} alt="" width={40} />
            </div>
            <div>text</div>
          </div>
          <div>
            <div>
              <img src={IMAGE_STORE.menuLoginIcon} alt="" width={40} />
            </div>
            <div>text</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomMenu