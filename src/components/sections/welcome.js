import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'
import { VIDEO_STORE } from '../../constants/videoStores'

const Welcome = () => {
  return (
    <div className={`border-2 border-blue-dark rounded-3xl bg-[url('https://ideabet.org/theme/mcblue/wp-content/uploads/2022/08/3661943.jpg')] p-2 bg-no-repeat bg-center object-cover w-full h-full`}>
      <div className='relative overflow-hidden'>
        <img src={IMAGE_STORE.bg_welcome} alt="" style={{ objectFit: "cover", }} className="object-contain w-full h-[240px] rounded-3xl" />
        <div className='absolute top-0 flex flex-col gap-3 justify-center items-center text-center px-[200px] backdrop-opacity-10 backdrop-invert bg-black/50 h-full'>
          <div>
            <img alt='' src={IMAGE_STORE.logo} width={"188px"} />
          </div>
          <div>
            <div className='font-bold text-lg'>
              ยินดีต้อนรับเข้าสู่ MCBLUE
            </div>
            <div>
              NameWeb สนุกกับสล็อตเกมแตกง่ยบนค่ายเกมคาสิโนออนไลน์ชั้นนำระดับประเทศในปี 2022
              บนค่ายดังยอดฮิตตลอดการอย่าง Evoplay, Joker, PG Slot และอื่นๆ อีกมากมาย
            </div>
          </div>
        </div>
      </div>
      <div className={`grid grid-cols-3 mt-3 p-6 gap-6 items-center`}>
        <div>
          <img src={IMAGE_STORE.women} alt="" />
        </div>
        <div className='col-span-2 border-4 border-blue rounded-3xl overflow-hidden'>
          <video loop autoplay="" muted>
            <source src={VIDEO_STORE.welcome} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Welcome