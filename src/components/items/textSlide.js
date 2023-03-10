import React from 'react'
import { HiVolumeUp } from 'react-icons/hi'

const TextSlide = () => {
  return (
    <div className={` absolute top-[75px] w-full  my_bg_blue overflow-hidden py-1`}>
      <div className='flex items-center relative md:ml-[200px]  overflow-hidden'>
        <div className={` z-10 my_bg_blue absolute h-full  flex items-center p-1  -left-0`}>
          <HiVolumeUp size={20} />
        </div>
        <div className='animate-marquee2 whitespace-nowrap w-full font-bold'>
          NameWeb คาสิโนออนไลน์ สล็อตออนไลน์ ที่ให้คุณสนุกได้ทุกรูปแบบ
        </div>
      </div>
    </div>
  )
}

export default TextSlide