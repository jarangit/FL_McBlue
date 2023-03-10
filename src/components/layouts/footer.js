import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'
import { FaDotCircle } from 'react-icons/fa'
const Footer = () => {
  const styled = {
    item:`flex gap-2 items-center`,
    root:`ml-0 md:pl-[200px] w-full  backdrop-sepia-0 bg-blue/90 pb-24 lg:pb-0`
  }
  return (
    <div className={`${styled.root}`}>
      <div className='myContainer'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-6'>
          <div className='flex flex-col text-center gap-3 lg:col-span-2 justify-center items-center'>
            <div>
              <img src={IMAGE_STORE.logo} alt="" width={200} />
            </div>
            <div className='font-thin'>
              NameWeb เว็บคาสิโนออนไลน์ ครองอันดับในใจคนไทย 10 ปีซ้อนNameWeb บาคาร่า คาสิโนออนไลน์ ที่ดีที่สุด เพื่อประสบการณ์ที่ดีของผู้เล่นอย่างแท้จริง แบบ NameWeb
            </div>
          </div>
          <div className='mx-auto'>
            <div className='text-lg'>คาสิโนที่ดีที่สุด</div>
            <ul className='mt-3'>
              <li className={`${styled.item}`}>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
              <li className={`${styled.item}`}>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
              <li className={`${styled.item}`}>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
            </ul>
          </div>
          <div className='mx-auto'>
            <div className='text-lg'>คาสิโนที่ดีที่สุด</div>
            <ul className='mt-3'>
              <li className={`${styled.item}`}>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
              <li className={`${styled.item}`}>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
              <li className={`${styled.item}`}>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
            </ul>
          </div>
          <div className='mx-auto'>
            <div className='text-lg'>คาสิโนที่ดีที่สุด</div>
            <ul className='mt-3'>
              <li className={`${styled.item}`}>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
              <li className={`${styled.item}`}>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
              <li className={`${styled.item}`}>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer