import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'
const dataList = [
  {
    img: IMAGE_STORE.sport,
    text: `กีฬา`,
    link: "/sports"
  },
  {
    img: IMAGE_STORE.slot,
    text: `สล็อต`,
    link: "/slots"
  },
  {
    img: IMAGE_STORE.casino,
    text: `คาสิโน`,
    link: "/casinos"
  },
  {
    img: IMAGE_STORE.bonus,
    text: `โปรโมชั่น`,
    link: "/promotions"
  },
  {
    img: IMAGE_STORE.ipad,
    text: `ติดต่อ`,
    link: "/contacts"
  },
]
const SideMenu = () => {
  return (
    <div className='my_sidebar px-3 relative z-20 hidden md:block'>
      <div className={`flex flex-col gap-3`}>
        {dataList.map((item, key) => (
          <div key={key}>
            <a href={item.link} >
              <div className='flex items-center gap-3 my_bg_blue_card rounded-[20px] py-1 px-3 border-[1px] text-sm border-blue-light my_shadow cursor-pointer relative '>
                <div className='w-[2px] h-8 bg-blue-light left-0 absolute' />
                <div>
                  <img src={item.img} alt="" width={60} />
                </div>
                <div>
                  {item.text}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className='absolute bottom-6 mx-auto  ml-3'>
        <img src={IMAGE_STORE.lineContact} alt="" width={150} />
      </div>
    </div>
  )
}

export default SideMenu