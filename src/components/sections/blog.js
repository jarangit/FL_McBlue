import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'
import { BsArrowRightCircle } from 'react-icons/bs'
const BlogSection = () => {
  return (
    <div className={`relative`}>
      <div className='my_gold_line' />
      <div className='myContainer'>
        <div className='flex justify-between'>
          <div className='text-2xl'>บทความเกี่ยวกับคาสิโนออนไลน์</div>
          <div className='flex items-center gap-3 text-yellow-dark cursor-pointer'>
            <div>ดูทั้งหมด</div>
            <div>
              <BsArrowRightCircle size={20} />
            </div>
          </div>
        </div>

        {/* card */}
        <div className='grid grid-cols-1 lg:grid-cols-3  mt-6 gap-6'>
          <div className='backdrop-saturate-200 bg-black/70 w-full  rounded-xl overflow-hidden'>
            <div>
              <img src={IMAGE_STORE.blog_item} alt="" />
            </div>
            <div className='p-3 text-center flex flex-col gap-4'>
              <div className='text-yellow-dark'>บาคาร่าGclub ค่ายดัง ทางเข้า เล่นเกมไพ่ยอดฮิตบนมือถือ พร้อมให้สมัคร</div>
              <button className='bg_but_blog max-w-[200px] mx-auto'>
                <div>อ่านบทความ</div>
              </button>
            </div>
          </div>
          <div className='backdrop-saturate-200 bg-black/70 w-full  rounded-xl overflow-hidden'>
            <div>
              <img src={IMAGE_STORE.blog_item} alt="" />
            </div>
            <div className='p-3 text-center flex flex-col gap-4'>
              <div className='text-yellow-dark'>บาคาร่าGclub ค่ายดัง ทางเข้า เล่นเกมไพ่ยอดฮิตบนมือถือ พร้อมให้สมัคร</div>
              <button className='bg_but_blog max-w-[200px] mx-auto'>
                <div>อ่านบทความ</div>
              </button>
            </div>
          </div>
          <div className='backdrop-saturate-200 bg-black/70 w-full  rounded-xl overflow-hidden'>
            <div>
              <img src={IMAGE_STORE.blog_item} alt="" />
            </div>
            <div className='p-3 text-center flex flex-col gap-4'>
              <div className='text-yellow-dark'>บาคาร่าGclub ค่ายดัง ทางเข้า เล่นเกมไพ่ยอดฮิตบนมือถือ พร้อมให้สมัคร</div>
              <button className='bg_but_blog max-w-[200px] mx-auto'>
                <div>อ่านบทความ</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSection