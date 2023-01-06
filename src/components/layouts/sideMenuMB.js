import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'
const dataList = [
  {
    img: IMAGE_STORE.sport,
    text: `กีฬา`
  },
  {
    img: IMAGE_STORE.slot,
    text: `สล็อต`
  },
  {
    img: IMAGE_STORE.casino,
    text: `คาสิโน`
  },
  {
    img: IMAGE_STORE.bonus,
    text: `โปรโมชั่น`
  },
  {
    img: IMAGE_STORE.ipad,
    text: `ติดต่อ`
  },
]
const SideMenuMB = () => {
  return (
    <div className='w-full px-3  z-20  md:hidden  mt-3 py-3 rounded-2xl drop-shadow-xl backdrop-sepia-0 bg-black/30 border-blue-dark border h-full pt-3 shadow-[0_-9px_10px_-3px_rgba(181,220,242,0.5)]'>
      <div className={`flex flex-col gap-3 sticky top-20`}>
        {dataList.map((item, key) => (
          <div className='flex flex-col text-xs items-center  my_bg_blue_card rounded-[20px] py-1 px-3 border-[1px]  border-blue-light my_shadow cursor-pointer relative'>
            <div className='w-[2px] h-8 bg-blue-light left-0 absolute top-4' />
            <div>
              <img src={item.img} alt="" width={40} />
            </div>
            <div>
              {item.text}
            </div>
          </div>
        ))}
      </div>

      {/* <div className='absolute bottom-6 mx-auto '>
        <img src={IMAGE_STORE.lineContact} alt="" width={150} />
      </div> */}
    </div>
  )
}

export default SideMenuMB