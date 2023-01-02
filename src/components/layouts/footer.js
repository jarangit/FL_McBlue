import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'
import { FaDotCircle } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='ml-0 md:pl-[200px] w-full max-w-[1320px]  backdrop-sepia-0 bg-blue/90'>
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
              <li className='flex gap-2 items-center'>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
              <li className='flex gap-2 items-center'>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
              <li className='flex gap-2 items-center'>
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
              <li className='flex gap-2 items-center'>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
              <li className='flex gap-2 items-center'>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
              <li className='flex gap-2 items-center'>
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
              <li className='flex gap-2 items-center'>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
              <li className='flex gap-2 items-center'>
                <div>
                  <FaDotCircle size={15} />
                </div>
                <div>คาสิโนออนไลน์</div>
              </li>
              <li className='flex gap-2 items-center'>
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