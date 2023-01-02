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
    <div className=' px-3 relative z-20  md:hidden  mt-3 py-3 rounded-2xl drop-shadow-xl backdrop-sepia-0 bg-black/30 border-blue-dark border h-full'>
      <div className={`flex flex-col gap-3`}>
        {dataList.map((item, key) => (
          <div className='flex flex-col text-xs items-center gap-1 my_bg_blue_card rounded-[20px] py-1 px-3 border-[1px]  border-blue-light my_shadow cursor-pointer '>
            <div>
              <img src={item.img} alt="" width={80} />
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