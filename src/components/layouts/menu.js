import React, { useState, useEffect } from 'react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { IMAGE_STORE } from '../../constants/imageStores'
const Menu = ({ setShowMenuMB, setShowModalLogin }) => {
  const [showCardMenu, setShowCardMenu] = useState(false)
  const styled = {
    root: `h-[75px] my_bg_blue drop-shadow-xl flex items-center justify-between px-3 md:px-6 fixed w-full z-50`,
    but: `!py-0 !rounded-lg !text-xs md:text-md h-8 lg:!h-10 !px-2 lg:!px-3
    !py-0 !rounded-lg !text-xs md:text-md h-8 lg:!h-10 !px-2 lg:!px-3`
  }
  useEffect(() => {
    setTimeout(() => {
      setShowCardMenu(true)
    }, 300);
  }, [])
  return (
    <div className={`${styled.root}`}>
      <div className='flex gap-2 items-center'>
        <div className='md:hidden' onClick={() => setShowMenuMB(true)}>
          <AiOutlineMenu size={30} />
        </div>
        <a href="/" >
          <div className='w-36'>
            <img src={IMAGE_STORE.logo} alt="" width={200} />
          </div>
        </a>
      </div>

      {/* menu right */}
      <div className={`flex items-center gap-2 `}>
        <div className={`hidden lg:flex gap-2  relative overflow-hidden transition-all duration-700  ${showCardMenu ? "top-0" : "-top-24"}`}>
          <div className={`my_card_blue`}>
            <div className=' mx-auto'>
              <img src={IMAGE_STORE.top_menu1} alt="" width={45} />
            </div>
            <div>โปรโมชั่น</div>
          </div>
          <div className={`my_card_blue`}>
            <div className=' mx-auto'>
              <img src={IMAGE_STORE.top_menu2} alt="" width={45} />
            </div>
            <div>บทความ</div>
          </div>
          <div className={`my_card_blue`}>
            <div className=' mx-auto'>
              <img src={IMAGE_STORE.lineIcon} alt="" width={45} />
            </div>
            <div>ติดต่อเรา</div>
          </div>
        </div>
        <div className={`relative hidden md:block`}>
          <input type="text" className={`my_input max-w-[150px]`} placeholder="ชื่อผู้ใช้" />
          <div className={`absolute top-2 left-2`}>
            <FaUserAlt size={20} color="#F5DAAB" />
          </div>
        </div>
        <div className={`relative hidden md:block`}>
          <input type="text" className={`my_input max-w-[150px]`} placeholder="รหัสผู้ใช้งาน" />
          <div className={`absolute top-2 left-2`}>
            <FaLock size={20} color="#F5DAAB" />
          </div>
        </div>
        <div>
          <button className={`my_but_blue_light ${styled.but}`} onClick={() => setShowModalLogin(true)}>เข้าสู่ระบบ</button>
        </div>

        <div>
          <button className={`my_but_orange ${styled.but}`}>สมัครสมาชิก</button>
        </div>
      </div>
    </div>
  )
}

export default Menu